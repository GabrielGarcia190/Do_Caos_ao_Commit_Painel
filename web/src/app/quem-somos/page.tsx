import Link from "next/link";
import { ArrowUpRight, Heart, UsersRound } from "lucide-react";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";

const repositoryUrl = "https://github.com/GabrielGarcia190/Do_Caos_ao_Commit_Painel";

const instructors = [
  {
    name: "Gabriel Garcia",
    role: "Desenvolvedor Full Stack",
    description:
      "Focado em boas práticas, arquitetura de software e na construção de produtos que geram impacto real.",
    imageUrl: "/Gabriel-Garcia.png",
    profileUrl: "https://github.com/GabrielGarcia190",
  },
  {
    name: "Pedro Masson",
    role: "Desenvolvedor Full Stack",
    description:
      "Focado em boas práticas, arquitetura de software e na construção de produtos que geram impacto real.",
    imageUrl: "/Pedro-Masson.jpg",
    profileUrl: "https://github.com/",
  },
];

export default function QuemSomosPage() {
  return (
    <div id="topo" className="flex min-h-screen w-full flex-col pt-24">
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50 px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-10 dark:border-mural-border-dark dark:bg-mural-bg dark:text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(44,117,255,.12),transparent_55%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(44,117,255,.18),transparent_55%)]" />
          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[.16em] text-blue-700 shadow-sm dark:border-mural-border-panel dark:bg-mural-panel dark:text-mural-text-blue-bright">
              <UsersRound aria-hidden="true" size={13} />
              Educadores e instigadores
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl dark:text-white">
              Quem Somos: Os Devs por Trás do Mini-Curso
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base dark:text-mural-text-secondary">
              Somos desenvolvedores apaixonados por tecnologia e código aberto que criaram este mini-curso prático para ajudar novas pessoas a aprenderem fazendo e contribuírem com projetos reais.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href="#instrutores"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                Conheça os instrutores
                <ArrowUpRight aria-hidden="true" size={15} />
              </a>
              <a
                href={repositoryUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-blue-400 hover:text-blue-700 dark:border-mural-border dark:bg-mural-panel dark:text-mural-text-primary dark:hover:border-mural-border-control-hover"
              >
                Ver no GitHub
                <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            </div>
          </div>
        </section>

        <section id="instrutores" className="scroll-mt-24 bg-blue-50/70 px-4 py-12 sm:px-6 lg:px-10 dark:bg-mural-bg-secondary">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-8 max-w-2xl text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-blue-700 dark:text-mural-text-blue-bright">
                Time de instrução
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
                Quem Conduz o Mini-Curso
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-mural-text-secondary">
                Desenvolvedores que atuam no mercado e dedicam tempo para mentorar a comunidade e compartilhar conhecimento.
              </p>
            </div>

            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
              {instructors.map((instructor) => (
                <li key={instructor.name}>
                  <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-mural-border dark:bg-mural-card dark:shadow-none">
                    <div className="relative aspect-4/3 overflow-hidden bg-slate-100 dark:bg-mural-image-bg">
                      <img
                        src={instructor.imageUrl}
                        alt={`Foto de ${instructor.name}`}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute right-3 top-3 rounded-sm border border-white/70 bg-white/95 px-2 py-1 text-[10px] font-medium text-slate-700 shadow-sm dark:border-mural-border-badge dark:bg-mural-badge-bg/95 dark:text-mural-text-badge">
                        Palestrante
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-semibold text-slate-950 dark:text-mural-text-primary">
                        {instructor.name}
                      </h3>
                      <p className="mt-1 text-xs font-medium text-blue-700 dark:text-mural-text-blue-bright">
                        {instructor.role}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-mural-text-secondary">
                        {instructor.description}
                      </p>
                      <a
                        href={instructor.profileUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-blue-700 hover:text-blue-900 dark:text-mural-text-blue-bright dark:hover:text-white"
                      >
                        GitHub <ArrowUpRight aria-hidden="true" size={13} />
                      </a>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="motivacao" className="scroll-mt-24 bg-slate-50 px-4 py-12 sm:px-6 lg:px-10 dark:bg-mural-bg">
          <div className="mx-auto max-w-4xl rounded-xl border border-slate-200 bg-white px-6 py-8 text-center shadow-sm sm:px-10 dark:border-mural-border dark:bg-mural-panel dark:shadow-none">
            <span className="mx-auto flex size-11 items-center justify-center rounded-lg border border-blue-200 bg-blue-50 text-blue-700 dark:border-mural-border-blue dark:bg-mural-blue-surface dark:text-mural-text-blue">
              <Heart aria-hidden="true" size={19} />
            </span>
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[.18em] text-blue-700 dark:text-mural-text-blue-bright">
              Nossa motivação
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
              Por que fazemos isso?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-mural-text-secondary">
              Acreditamos que a melhor forma de aprender a programar é colaborar em equipe e colocando a mão na massa em um repositório de verdade. Criamos este mini-curso para ser gratuito, acolhedor e direto ao ponto.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 rounded-md bg-blue-50 px-3 py-2 text-xs font-medium text-blue-800 dark:bg-mural-bg-code dark:text-mural-text-blue">
              <Heart aria-hidden="true" size={13} />
              Feito por devs e para devs · 100% Código Aberto
            </span>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
