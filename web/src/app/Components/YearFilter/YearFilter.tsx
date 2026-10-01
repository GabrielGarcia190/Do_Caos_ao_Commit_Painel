import clsx from "clsx";
import { HeroYear } from "../MuralHeader/types";

type YearFilterProps = {
    years: HeroYear[];
    selected: string;
    onSelect(value: string): void;
}

export function YearFilter({ years, selected, onSelect, }: YearFilterProps) {
    return (
        <div className="flex flex-wrap gap-2">

            {years.map((year) => {

                const active = selected === year.value;

                return (

                    <button
                        key={year.value}
                        onClick={() => onSelect(year.value)}
                        className={clsx(
                            "flex h-8 items-center rounded-md border px-3 text-[11px] transition-all duration-200",
                            active
                                ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                                : "border-slate-300 bg-white text-slate-700 hover:border-blue-400 hover:bg-blue-50 dark:border-mural-border-control dark:bg-mural-control-bg/80 dark:text-mural-text-control dark:hover:border-mural-border-control-hover"
                        )}
                    >
                        <span>{year.label}</span>

                        <span
                            className={clsx(
                                "ml-2 rounded px-1.5 py-0.5 text-[10px]",
                                active
                                    ? "bg-blue-500"
                                    : "bg-slate-100 text-slate-500 dark:bg-mural-badge-alt-bg dark:text-mural-text-badge-muted"
                            )}
                        >
                            {year.count}
                        </span>

                    </button>

                );
            })}

        </div>
    );
}