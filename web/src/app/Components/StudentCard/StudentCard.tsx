"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { Code2, UserRound } from "lucide-react";
import type { Student } from "@/modules/students/domain/Student";

interface Props {
  student: Student;
}

export function StudentCard({ student }: Props) {
  const [imageFailed, setImageFailed] = useState(false);
  const initials = student.fullName
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <article className="group rounded-[10px] border border-slate-200/80 bg-white p-4 shadow-[0_2px_8px_rgba(15,23,42,0.035)] transition duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-[#263a53] dark:bg-[#101d2d] dark:shadow-none dark:hover:border-[#35516f]">
      <div className="relative aspect-square overflow-hidden rounded-[5px] bg-slate-100 dark:bg-[#1a2a3d]">
        {student.imageUrl && !imageFailed ? (
          <img
            src={student.imageUrl}
            alt={`Foto de ${student.fullName}`}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div
            aria-label={`Foto de ${student.fullName} indisponível`}
            className="flex h-full w-full items-center justify-center bg-linear-to-br from-blue-100 to-slate-200 text-5xl font-semibold text-blue-700 dark:from-[#19334d] dark:to-[#24384d] dark:text-[#a9c8e6]"
          >
            {initials}
          </div>
        )}
        <span className="absolute right-2 top-2 rounded-sm border border-white/70 bg-white/95 px-2 py-1 text-[11px] font-semibold tracking-[0.08em] text-cyan-700 shadow-sm dark:border-[#344b65] dark:bg-[#14263a]/95 dark:text-[#a8d6ff]">
          TURMA {student.completionYear}
        </span>
      </div>

      <div className="pt-4">
        <h3 className="truncate text-[19px] font-semibold leading-6 tracking-[-0.02em] text-slate-950 dark:text-[#edf2f8]">
          {student.fullName}
        </h3>
        <p className="mt-1 truncate text-[14px] leading-5 text-slate-600 dark:text-[#9baabd]">
          {student.occupation}
        </p>

        <div className="mt-2 flex items-center justify-between gap-3">
          <span className="rounded-sm bg-blue-100 px-2 py-1 text-[12px] font-medium leading-4 text-slate-700 dark:border dark:border-[#263c55] dark:bg-[#14263a] dark:font-mono dark:text-[#c4d1df]">
            Conclusão em {student.completionYear}
          </span>

          <div className="flex shrink-0 items-center gap-1.5">
            <ProfileAction
              href={student.codeUrl}
              label={`Código de ${student.fullName}`}
              disabledLabel="Link de código ainda não informado"
            >
              <Code2 aria-hidden="true" size={16} strokeWidth={1.8} />
            </ProfileAction>
            <ProfileAction
              href={student.profileUrl}
              label={`Perfil de ${student.fullName}`}
              disabledLabel="Link de perfil ainda não informado"
            >
              <UserRound aria-hidden="true" size={16} strokeWidth={1.8} />
            </ProfileAction>
          </div>
        </div>
      </div>
    </article>
  );
}

interface ProfileActionProps {
  href?: string;
  label: string;
  disabledLabel: string;
  children: ReactNode;
}

function ProfileAction({ href, label, disabledLabel, children }: ProfileActionProps) {
  const className = "flex size-8 items-center justify-center rounded-[5px] border border-slate-200 bg-slate-50 text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:border-[#263a53] dark:bg-[#142337] dark:text-[#9baabd] dark:hover:border-[#456282] dark:hover:bg-[#1b3048] dark:hover:text-[#d5e7fa]";

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
