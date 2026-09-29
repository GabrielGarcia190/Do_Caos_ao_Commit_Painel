import clsx from "clsx";
import type { HeroYear } from "./types";

interface Props {
    years: HeroYear[];
    selected: string;
    onSelect(value: string): void;
}

export function YearFilter({
    years,
    selected,
    onSelect,
}: Props) {
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
                                : "border-slate-300 bg-white text-slate-700 hover:border-blue-400 hover:bg-blue-50 dark:border-[#27384C] dark:bg-[#122234]/80 dark:text-[#C5D0DC] dark:hover:border-[#3A5574]"
                        )}
                    >
                        <span>{year.label}</span>

                        <span
                            className={clsx(
                                "ml-2 rounded px-1.5 py-[2px] text-[10px]",
                                active
                                    ? "bg-blue-500"
                                    : "bg-slate-100 text-slate-500 dark:bg-[#1A2D43] dark:text-[#9CB0C4]"
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