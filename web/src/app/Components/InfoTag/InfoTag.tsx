type props = {
    title: string;
}

export function InfoTag({ title }: props) {
    return (
        <span className="uppercase rounded-sm border border-white/70 bg-white/95 px-2 py-1 text-[11px] font-semibold tracking-[0.08em] text-cyan-700 shadow-sm dark:border-mural-border-badge dark:bg-mural-badge-bg/95 dark:text-mural-text-badge">
            {title}
        </span>
    )
}
