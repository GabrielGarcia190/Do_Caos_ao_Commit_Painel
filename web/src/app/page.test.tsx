import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import testStudents from "./test/fixtures/students.json";
import Home from "./page";

const mockFetch = vi.fn<typeof fetch>();

function successfulResponse(data = testStudents): Response {
  return {
    ok: true,
    json: async () => ({ data, total: data.length }),
  } as Response;
}

beforeEach(() => {
  mockFetch.mockReset();
  vi.stubGlobal("fetch", mockFetch);
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("tela do mural de estudantes", () => {
  it("carrega e exibe estudantes e estatísticas da resposta da API", async () => {
    mockFetch.mockResolvedValue(successfulResponse());

    render(<Home />);

    expect(screen.getByText("Carregando estudantes…")).toBeInTheDocument();
    expect(await screen.findByRole("heading", { name: "Ana Silva" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Bruno Souza" })).toBeInTheDocument();
    expect(screen.getByLabelText("Foto de Ana Silva indisponível")).toHaveTextContent("AS");
    expect(screen.getByText("2 alunos formados")).toBeInTheDocument();
    expect(mockFetch).toHaveBeenCalledWith("/api/students", {
      signal: expect.any(AbortSignal),
      cache: "no-store",
    });
  });

  it("filtra os cards pelo ano escolhido", async () => {
    mockFetch.mockResolvedValue(successfulResponse());

    render(<Home />);

    expect(await screen.findByRole("heading", { name: "Ana Silva" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /2024/ }));

    expect(screen.getByRole("heading", { name: "Ana Silva" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Bruno Souza" })).not.toBeInTheDocument();
    expect(screen.getByText("1 pessoa")).toBeInTheDocument();
  });

  it("mostra uma mensagem acessível quando a API falha", async () => {
    mockFetch.mockResolvedValue({ ok: false } as Response);

    render(<Home />);

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Não foi possível carregar os estudantes.",
    );
  });
});
