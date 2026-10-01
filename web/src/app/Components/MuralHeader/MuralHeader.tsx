import { GraduationCap } from "lucide-react";
import { MuralHeaderInfo } from "../MuralHeaderInfo/MuralHeaderInfo";
import { YearFilter } from "../YearFilter/YearFilter";
import type { HeroStatItem, HeroYear } from "./types";

type MuralHeaderProps = {
    title: string;
    description: string;
    stats: HeroStatItem[];
    years: HeroYear[];
    selectedYear: string;
    onYearChange(value: string): void;
    totalStudents: number;
}

export function MuralHeader({
    title,
    description,
    stats,
    years,
    selectedYear,
    onYearChange,
    totalStudents,
}: MuralHeaderProps) {
    return (
        <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50 text-slate-900 dark:border-mural-border-dark dark:bg-mural-bg dark:text-white">

            {/* Gradiente */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_10%,rgba(44,117,255,.09),transparent_40%)] dark:bg-[radial-gradient(circle_at_82%_10%,rgba(44,117,255,.16),transparent_40%)]" />

            <div
                className="absolute inset-0 opacity-[0.035] dark:hidden"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(15,23,42,.55) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(15,23,42,.55) 1px, transparent 1px)
                    `,
                    backgroundSize: "48px 48px",
                }}
            />

            <div
                className="absolute inset-0 hidden opacity-[0.035] dark:block"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)
                    `,
                    backgroundSize: "48px 48px",
                }}
            />

            <div className="relative flex w-full flex-col justify-between gap-8 px-4 py-8 sm:px-6 sm:py-10 xl:flex-row xl:items-start lg:px-10 2xl:px-16">

                <div className="w-full min-w-0 max-w-170">

                    <div className="inline-flex items-center rounded-md border border-blue-200 bg-white px-3 py-1 shadow-sm dark:border-mural-border-panel dark:bg-mural-panel">

                        <GraduationCap
                            size={11}
                            className="mr-2 text-blue-600 dark:text-mural-text-blue-bright"
                        />

                        <span className="text-[10px] uppercase tracking-[.18em] text-blue-800 dark:text-mural-text-blue-muted">
                            Galeria Histórica da Comunidade
                        </span>

                    </div>

                    <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 sm:text-[46px] dark:text-white">
                        {title}
                    </h1>

                    <p className="mt-4 max-w-155 text-[15px] leading-7 text-slate-600 dark:text-mural-text-secondary">
                        {description}
                    </p>

                    <div className="mt-10">

                        <p className="mb-3 text-[10px] uppercase tracking-[.18em] text-slate-500 dark:text-mural-text-subtle">
                            Filtrar por Ano de Conclusão
                        </p>

                        <YearFilter
                            years={years}
                            selected={selectedYear}
                            onSelect={onYearChange}
                        />

                    </div>

                </div>

                <div className="flex w-full min-w-0 flex-col items-start xl:w-auto xl:items-end">

                    <div id="metricas" className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap xl:w-auto xl:gap-4">

                        {stats.map((stat) => (
                            <MuralHeaderInfo
                                key={stat.subtitle}
                                {...stat}
                            />
                        ))}

                    </div>

                    <p className="mt-3 text-[11px] text-slate-500 sm:mt-6 dark:text-mural-text-caption">
                        Exibindo todos os anos ({totalStudents} registros em destaque)
                    </p>

                </div>

            </div>

        </section>
    );
}