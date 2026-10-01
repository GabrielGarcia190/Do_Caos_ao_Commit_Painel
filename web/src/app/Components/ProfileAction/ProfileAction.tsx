import { ReactNode } from "react";

type ProfileActionProps = {
  href?: string;
  label: string;
  disabledLabel: string;
  children: ReactNode;
}

export function ProfileAction({ href, label, disabledLabel, children }: ProfileActionProps) {
  const className = "flex size-8 items-center justify-center rounded-[5px] border border-slate-200 bg-slate-50 text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:border-mural-border dark:bg-mural-control-bg-strong dark:text-mural-text-muted dark:hover:border-mural-border-control-strong-hover dark:hover:bg-mural-control-hover-bg dark:hover:text-mural-text-hover";

  if (!href) {
    return (
      <span aria-label={disabledLabel} title={disabledLabel} className={`${className} cursor-not-allowed opacity-75`}>
        {children}
      </span>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label} className={className}>
      {children}
    </a>
  );
}
