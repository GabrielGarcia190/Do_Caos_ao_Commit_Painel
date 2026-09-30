import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import { Header } from "./Components/Header/Header";
import QuemSomosPage from "./quem-somos/page";

afterEach(() => {
  cleanup();
  window.history.replaceState({}, "", "/");
});

describe("navegação entre páginas", () => {
  it("aponta o menu principal para o mural e para Quem Somos", () => {
    render(<Header />);

    const navigation = screen.getByRole("navigation", { name: "Navegação principal" });
    expect(within(navigation).getByRole("link", { name: "Alunos" })).toHaveAttribute(
      "href",
      "/#alunos",
    );
    expect(within(navigation).getByRole("link", { name: "Quem Somos" })).toHaveAttribute(
      "href",
      "/quem-somos",
    );
  });

  it("exibe a página Quem Somos e mantém links para voltar ao mural", () => {
    render(<QuemSomosPage />);

    expect(
      screen.getByRole("heading", { name: "Quem Somos: Os Devs por Trás do Mini-Curso" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Quem Conduz o Mini-Curso" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Por que fazemos isso?" })).toBeInTheDocument();
    const homeLinks = screen.getAllByRole("link", { name: "Mural do Caos ao Commit" });
    expect(homeLinks.some((link) => link.getAttribute("href") === "/")).toBe(true);

    const navigation = screen.getByRole("navigation", { name: "Navegação principal" });
    expect(within(navigation).getByRole("link", { name: "Alunos" })).toHaveAttribute(
      "href",
      "/#alunos",
    );
  });
});
