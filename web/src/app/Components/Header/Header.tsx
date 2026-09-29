"use client";
import { CustomButton } from "../Buttom/CustomButton";
import { InfoTag } from "../InfoTag/InfoTag";
import ThemeTogle from "../ThemeTogle/ThemeTogle";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between bg-background px-4 py-5 shadow">
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <p className="font-plus-jakarta font-semibold text-black dark:text-white text-2xl">
                        Mural do Caos ao Commit
                    </p>
                    <div className="flex flex-row justify-center">
                    <InfoTag title="comunidade" />
                    </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Pessoas que realizaram o mini-curso
                </p>
            </div>
            <div className="flex items-center gap-4">
                <CustomButton title="Alunos" onClick={() => console.log("teste")} selected={true} />
                <CustomButton title="Sobre o curso" onClick={() => console.log("teste")} selected={false} />
                <CustomButton title="Quem Somos" onClick={() => console.log("teste")} selected={false} />
                <CustomButton title="Estatísticas" onClick={() => console.log("teste")} selected={false} />
                <ThemeTogle />
            </div>
        </header>
    );
}