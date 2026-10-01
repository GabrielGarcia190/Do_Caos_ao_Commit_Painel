"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { InfoTag } from "../InfoTag/InfoTag";
import ThemeTogle from "../ThemeTogle/ThemeTogle";

export function Header() {
    const pathname = usePathname();
    const navigationLinks = [
        { title: "Alunos", href: "/#alunos", selected: pathname === "/" },
        { title: "Sobre o Curso", href: "/sobre-curso", selected: pathname === "/sobre-curso" },
        { title: "Quem Somos", href: "/quem-somos", selected: pathname === "/quem-somos" }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between bg-background px-4 py-5 shadow">
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <Link href="/" className="font-plus-jakarta font-semibold text-black dark:text-white text-2xl">
                        Mural do Caos ao Commit
                    </Link>
                    <div className="flex flex-row justify-center">
                        <InfoTag title="comunidade" />
                    </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Pessoas que realizaram o mini-curso
                </p>
            </div>
            <nav aria-label="Navegação principal" className="flex items-center gap-4">
                {navigationLinks.map((link) => (
                    <Link
                        key={link.title}
                        href={link.href}
                        target={"external" in link && link.external ? "_blank" : undefined}
                        rel={"external" in link && link.external ? "noreferrer" : undefined}
                        aria-current={link.selected ? "page" : undefined}
                        className={`font-plus-jakarta rounded px-4 py-2 font-semibold ${link.selected ? "bg-primary text-white dark:bg-blue-500 dark:text-black" : "text-primary-gray hover:bg-primary hover:text-white dark:text-white dark:hover:bg-blue-500"}`}
                    >
                        {link.title}
                    </Link>
                ))}
                <ThemeTogle />
            </nav>
        </header>
    );
}