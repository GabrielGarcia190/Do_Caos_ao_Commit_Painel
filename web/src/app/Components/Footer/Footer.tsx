import { ArrowUpRight, GitPullRequest, SquareTerminal } from "lucide-react";

const repositoryUrl = "https://github.com/GabrielGarcia190/Do_Caos_ao_Commit_Painel";
const pullRequestsUrl = `${repositoryUrl}/pulls`;

const footerLinks = [
  { label: "Sobre o Curso", href: `${repositoryUrl}#readme` },
  { label: "Quem Somos", href: "#alunos" },
  { label: "Sobre o mini-curso", href: "#alunos" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50 dark:border-mural-border-subtle dark:bg-mural-bg-secondary">
      <section aria-labelledby="contribution-title" className="bg-slate-100/80 px-4 py-8 sm:px-6 lg:px-10 2xl:px-12 dark:bg-mural-bg">
        <div className="flex flex-col gap-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5 dark:border-mural-border dark:bg-mural-panel dark:shadow-none">
          <div className="flex min-w-0 items-start gap-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-blue-200 bg-blue-50 text-blue-700 dark:border-mural-border-blue dark:bg-mural-blue-surface dark:text-mural-text-blue">
              <SquareTerminal aria-hidden="true" size={19} />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[.16em] text-cyan-700 dark:text-mural-text-blue-bright">
                Contribuição de código aberto
              </p>
              <h2 id="contribution-title" className="mt-1 text-base font-semibold text-slate-900 dark:text-slate-100">
                Participou do curso e quer seu nome aqui?
              </h2>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                Abra um Pull Request adicionando seu registro de formando ao arquivo{" "}
                <code className="rounded-sm bg-blue-50 px-1.5 py-0.5 text-xs text-slate-700 dark:bg-mural-bg-code dark:text-slate-300">
                  students.json
                </code>
                .
              </p>
            </div>
          </div>

          <a
            href={pullRequestsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            <GitPullRequest aria-hidden="true" size={16} />
            Abrir PR no repositório
            <ArrowUpRight aria-hidden="true" size={14} />
          </a>
        </div>
      </section>

      <div className="border-t border-slate-200 px-4 py-7 sm:px-6 lg:px-10 lg:py-8 2xl:px-12 dark:border-mural-border-subtle">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <a href="#topo" className="font-plus-jakarta text-sm font-semibold text-slate-900 hover:text-blue-700 dark:text-slate-100 dark:hover:text-blue-300">
              Mural do Caos ao Commit
            </a>
            <span className="mx-2 text-slate-400 dark:text-slate-600">·</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Registro comemorativo</span>
            <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-400">
              Celebrando a excelência profissional, aquelas que participaram do mini-curso e contribuíram para o projeto.
            </p>
          </div>

          <nav aria-label="Links do rodapé" className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={"external" in link && link.external ? "_blank" : undefined}
                rel={"external" in link && link.external ? "noreferrer" : undefined}
                className="text-xs text-slate-600 transition hover:text-blue-700 dark:text-slate-400 dark:hover:text-blue-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="font-mono text-[10px] leading-5 text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} Mural do Caos ao Commit. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
