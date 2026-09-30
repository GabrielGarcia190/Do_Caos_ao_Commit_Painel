import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  Code2,
  GitBranch,
  GitPullRequest,
  Rocket,
  Sparkles,
} from "lucide-react";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";

const repositoryUrl = "https://github.com/GabrielGarcia190/Do_Caos_ao_Commit_Painel";

const benefits = [
  {
    title: "Aprender colaborando",
    description:
      "Mais do que documentação, você vive a experiência real de clonar um projeto, abrir arquivos, explorar código e interagir com outras pessoas.",
    icon: BookOpenCheck,
  },
  {
    title: "Dados e código real",
    description:
      "Você estrutura suas informações de estudante em formato JSON limpo e adiciona sua história à composição e ao ecossistema da nossa comunidade.",
    icon: Code2,
  },
  {
    title: "Revisão & CI/CD",
    description:
      "Descubra como os testes automatizados validam sua submissão e como um code review amigável ajuda a ajustar detalhes antes da aprovação final.",
    icon: GitBranch,
  },
];

const steps = [
  {
    number: "1",
    title: "Fork & Clone",
    description:
      "Faça uma cópia do repositório público do mural. Assim, você tem sua própria versão para editar o código e colaborar com o ambiente online.",
    command: "git clone sua-url",
  },
  {
    number: "2",
    title: "Branch & JSON",
    description:
      "Crie uma nova branch de funcionalidade e adicione seus dados (nome, bio, rede social) no arquivo JSON padronizado do mural.",
    command: "data/alumni/seu-nome.json",
  },
  {
    number: "3",
    title: "Pull Request & Review",
    description:
      "Abra um Pull Request descritivo no GitHub. Outras pessoas revisam as mudanças e ajudam a validar cada passo da colaboração.",
    command: "PR: feat(alumni): seu nome",
  },
  {
    number: "4",
    title: "Merge no Mural!",
    description:
      "Após a aprovação, o PR é mesclado e sua contribuição fica visível para toda a comunidade no mural oficial.",
    command: "Merged com sucesso 🎉",
  },
];

export default function SobreCursoPage() {
  return (
    <div id="topo" className="flex min-h-screen w-full flex-col pt-24">
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-10 dark:border-mural-border-dark dark:bg-mural-bg dark:text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_10%,rgba(44,117,255,.12),transparent_45%)] dark:bg-[radial-gradient(circle_at_82%_10%,rgba(44,117,255,.18),transparent_45%)]" />
          <div className="relative mx-auto max-w-6xl">
            <span className="inline-flex items-center gap-2 rounded-sm border border-blue-200 bg-blue-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-[.16em] text-blue-800 dark:border-mural-border-blue dark:bg-mural-blue-surface dark:text-mural-text-blue-bright">
              <Sparkles aria-hidden="true" size={13} />
              Mini-curso prático & colaborativo
            </span>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl dark:text-white">
              Sobre o Curso: Aprendendo a Contribuir na Prática
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-mural-text-secondary">
              Criamos este projeto open source para ensinar na vida real como dar os primeiros passos e contribuir em projetos reais de software. Sem complicação desnecessária: você aprende o fluxo real de trabalho em equipe usando Git, GitHub e boas práticas de código.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#roteiro"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                Ver passo a passo
                <ArrowRight aria-hidden="true" size={15} />
              </a>
              <a
                href={repositoryUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-blue-400 hover:text-blue-700 dark:border-mural-border dark:bg-mural-panel dark:text-mural-text-primary dark:hover:border-mural-border-control-hover"
              >
                Acessar repositório no GitHub
                <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            </div>
          </div>
        </section>

        <section aria-label="O que você vai aprender" className="bg-blue-50/70 px-4 py-8 sm:px-6 lg:px-10 dark:bg-mural-bg-secondary">
          <ul className="mx-auto grid max-w-6xl gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-3 dark:border-mural-border dark:bg-mural-panel dark:shadow-none">
            {benefits.map(({ title, description, icon: Icon }) => (
              <li key={title} className="p-3">
                <span className="flex size-9 items-center justify-center rounded-md border border-blue-200 bg-blue-50 text-blue-700 dark:border-mural-border-blue dark:bg-mural-blue-surface dark:text-mural-text-blue">
                  <Icon aria-hidden="true" size={17} />
                </span>
                <h2 className="mt-3 text-sm font-semibold text-slate-900 dark:text-mural-text-primary">
                  {title}
                </h2>
                <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-mural-text-secondary">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section id="roteiro" className="scroll-mt-24 bg-slate-50 px-4 py-12 sm:px-6 lg:px-10 dark:bg-mural-bg">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-8 max-w-2xl text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-blue-700 dark:text-mural-text-blue-bright">
                O roteiro da aula
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
                Como Você Participa do Mural
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-mural-text-secondary">
                Durante o mini-curso, cada estudante percorre 4 passos essenciais no GitHub para publicar seu próprio perfil.
              </p>
            </div>

            <ol className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {steps.map((step) => (
                <li key={step.number} className="flex flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-mural-border dark:bg-mural-card dark:shadow-none">
                  <span className="flex size-7 items-center justify-center rounded-sm bg-blue-100 font-mono text-xs font-semibold text-blue-800 dark:bg-mural-blue-surface dark:text-mural-text-blue">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-slate-900 dark:text-mural-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-5 text-slate-600 dark:text-mural-text-secondary">
                    {step.description}
                  </p>
                  <code className="mt-4 block truncate rounded-sm bg-blue-50 px-2 py-1.5 font-mono text-[10px] text-blue-800 dark:bg-mural-bg-code dark:text-mural-text-blue">
                    {step.command}
                  </code>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-blue-50/70 px-4 py-8 sm:px-6 lg:px-10 dark:bg-mural-bg-secondary">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6 dark:border-mural-border dark:bg-mural-panel dark:shadow-none">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-sm bg-blue-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-[.12em] text-blue-800 dark:bg-mural-blue-surface dark:text-mural-text-blue">
                <Rocket aria-hidden="true" size={12} />
                Mão na massa
              </span>
              <h2 className="mt-3 text-base font-semibold text-slate-950 dark:text-mural-text-primary">
                Pronto para fazer sua primeira contribuição?
              </h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-mural-text-secondary">
                Acesse o repositório no GitHub, siga as orientações do README e envie seu Pull Request.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
              <a
                href={repositoryUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                <GitPullRequest aria-hidden="true" size={14} />
                Abrir repositório
              </a>
              <Link
                href="/#alunos"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-800 transition hover:border-blue-400 hover:text-blue-700 dark:border-mural-border dark:bg-mural-card dark:text-mural-text-primary dark:hover:border-mural-border-control-hover"
              >
                Ver galeria de formados
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
