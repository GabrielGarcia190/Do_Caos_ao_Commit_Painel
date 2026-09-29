"use client";
import Image from "next/image";
import { Header } from "./Components/Header/Header";
import { GitPullRequest, Users } from "lucide-react";
import { MuralHero } from "./Components/MuralHeader/Mural";
import { useState } from "react";

export default function Home() {

  const [selected, setSelected] = useState<string>("2026");

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24" >
      <Header />
      <MuralHero
    title="Mural de Alunos"
    description="Celebrando todos os estudantes que concluíram a jornada e fazem parte da nossa história viva."
    totalStudents={128}
    selectedYear={selected}
    onYearChange={setSelected}
    stats={[
        {
            icon: Users,
            title: "REGISTROS ATIVOS",
            subtitle: "128 Alunos Formados",
        },
        {
            icon: GitPullRequest,
            title: "",
            subtitle: "Inclusão estritamente via Pull Request",
        },
    ]}
    years={[
        {
            label: "Todos os Anos",
            value: "all",
            count: 128,
        },
        {
            label: "2024",
            value: "2024",
            count: 42,
        },
        {
            label: "2023",
            value: "2023",
            count: 33,
        },
        {
            label: "2022",
            value: "2022",
            count: 26,
        },
        {
            label: "2021",
            value: "2021",
            count: 14,
        },
        {
            label: "2020",
            value: "2020",
            count: 8,
        },
    ]}/>
    </div>
  )
}