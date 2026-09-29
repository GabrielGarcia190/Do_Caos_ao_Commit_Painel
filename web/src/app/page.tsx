"use client";

import { useEffect, useMemo, useState } from "react";
import { GitPullRequest, Users } from "lucide-react";
import type { Student } from "@/modules/students/domain/Student";
import { Header } from "./Components/Header/Header";
import { MuralHero } from "./Components/MuralHeader/Mural";
import { StudentCard } from "./Components/StudentCard/StudentCard";
import { Footer } from "./Components/Footer/Footer";

interface StudentsResponse {
    data: Student[];
    total: number;
}

export default function Home() {
    const [students, setStudents] = useState<Student[]>([]);
    const [selectedYear, setSelectedYear] = useState("all");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        async function loadStudents() {
            try {
                const response = await fetch("/api/students", {
                    signal: controller.signal,
                    cache: "no-store",
                });

                if (!response.ok) {
                    throw new Error("Não foi possível carregar os estudantes.");
                }

                const result = (await response.json()) as StudentsResponse;
                setStudents(result.data);
            } catch (fetchError) {
                if (!controller.signal.aborted) {
                    setError(
                        fetchError instanceof Error
                            ? fetchError.message
                            : "Ocorreu um erro ao carregar os estudantes.",
                    );
                }
            } finally {
                if (!controller.signal.aborted) {
                    setIsLoading(false);
                }
            }
        }

        void loadStudents();
        return () => controller.abort();
    }, []);

    const years = useMemo(() => {
        const counts = students.reduce<Record<number, number>>((result, student) => {
            result[student.completionYear] = (result[student.completionYear] ?? 0) + 1;
            return result;
        }, {});

        return [
            { label: "Todos os Anos", value: "all", count: students.length },
            ...Object.entries(counts)
                .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
                .map(([year, count]) => ({ label: year, value: year, count })),
        ];
    }, [students]);

    const visibleStudents = useMemo(
        () =>
            selectedYear === "all"
                ? students
                : students.filter((student) => String(student.completionYear) === selectedYear),
        [selectedYear, students],
    );

    return (
        <div id="topo" className="flex min-h-screen w-full flex-col pt-24">
            <Header />
            <MuralHero
                title="Mural de Alunos"
                description="Celebrando todos os estudantes que concluíram a jornada e fazem parte da nossa história viva."
                totalStudents={students.length}
                selectedYear={selectedYear}
                onYearChange={setSelectedYear}
                stats={[
                    {
                        icon: Users,
                        title: "REGISTROS ATIVOS",
                        subtitle: `${students.length} alunos formados`,
                    },
                    {
                        icon: GitPullRequest,
                        title: "",
                        subtitle: "Inclusão estritamente via Pull Request",
                    },
                ]}
                years={years}
            />

            <main id="alunos" className="w-full flex-1 px-4 py-10 sm:px-6 lg:px-10 2xl:px-12">
                <div className="mb-6 flex items-end justify-between gap-4">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[.18em] text-blue-600 dark:text-mural-text-blue-bright">
                            Nossa comunidade
                        </p>
                        <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
                            Estudantes formados
                        </h2>
                    </div>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                        {visibleStudents.length} {visibleStudents.length === 1 ? "pessoa" : "pessoas"}
                    </span>
                </div>

                {isLoading ? (
                    <p className="rounded-xl border border-slate-200 bg-white p-6 text-slate-600 dark:border-mural-border-panel dark:bg-mural-panel dark:text-slate-300">
                        Carregando estudantes…
                    </p>
                ) : error ? (
                    <p role="alert" className="rounded-xl border border-red-200 bg-red-50 p-6 text-red-700 dark:border-red-900 dark:bg-red-950/30 dark:text-red-300">
                        {error}
                    </p>
                ) : visibleStudents.length === 0 ? (
                    <p className="rounded-xl border border-slate-200 bg-white p-6 text-slate-600 dark:border-mural-border-panel dark:bg-mural-panel dark:text-slate-300">
                        Nenhum estudante encontrado para esse ano.
                    </p>
                ) : (
                    <ul className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,300px),1fr))] gap-4">
                        {visibleStudents.map((student) => (
                            <li key={student.id}>
                                <StudentCard student={student} />
                            </li>
                        ))}
                    </ul>
                )}
            </main>
            <Footer />
        </div>
    );
}