import type { HeroStatItem } from "./types";

export function HeroStat({
    icon: Icon,
    title,
    subtitle,
}: HeroStatItem) {
    return (
        <div className="flex min-h-18 w-full items-center rounded-md border border-slate-200 bg-white px-4 shadow-sm sm:w-68 dark:border-[#223247] dark:bg-[#0F2033]/95 dark:shadow-[inset_0_1px_0_rgba(255,255,255,.03)]">

            <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-blue-200 bg-blue-50 dark:border-[#2a4565] dark:bg-[#123B63]">
                <Icon
                    size={18}
                    className="text-blue-600 dark:text-[#7EC2FF]"
                />
            </div>

            <div>
                <p className="text-[10px] uppercase tracking-[.18em] text-slate-500 dark:text-[#7188A2]">
                    {title}
                </p>

                <h3 className="mt-1 text-[17px] font-medium leading-tight text-slate-900 dark:text-white">
                    {subtitle}
                </h3>
            </div>

        </div>
    );
}