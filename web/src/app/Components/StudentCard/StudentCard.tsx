"use client";

import { useState } from "react";
import {  UserRound } from "lucide-react";
import type { Student } from "@/modules/students/domain/Student";
import { ProfileAction } from "../ProfileAction/ProfileAction";

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
    <article className="group rounded-[10px] border border-slate-200/80 bg-white p-4 shadow-[0_2px_8px_rgba(15,23,42,0.035)] transition duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-mural-border dark:bg-mural-card dark:shadow-none dark:hover:border-mural-border-card-hover">
      <div className="relative aspect-square overflow-hidden rounded-[5px] bg-slate-100 dark:bg-mural-image-bg">
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
            className="flex h-full w-full items-center justify-center bg-linear-to-br from-blue-100 to-slate-200 text-5xl font-semibold text-blue-700 dark:from-mural-initial-from dark:to-mural-initial-to dark:text-mural-text-initial"
          >
            {initials}
          </div>
        )}
        <span className="absolute right-2 top-2 rounded-sm border border-white/70 bg-white/95 px-2 py-1 text-[11px] font-semibold tracking-[0.08em] text-cyan-700 shadow-sm dark:border-mural-border-badge dark:bg-mural-badge-bg/95 dark:text-mural-text-badge">
          TURMA {student.completionYear}
        </span>
      </div>

      <div className="pt-4">
        <h3 className="truncate text-[19px] font-semibold leading-6 tracking-[-0.02em] text-slate-950 dark:text-mural-text-primary">
          {student.fullName}
        </h3>
        <p className="mt-1 truncate text-[14px] leading-5 text-slate-600 dark:text-mural-text-muted">
          {student.occupation}
        </p>

        <div className="mt-2 flex items-center justify-between gap-3">
          <span className="rounded-sm bg-blue-100 px-2 py-1 text-[12px] font-medium leading-4 text-slate-700 dark:border dark:border-mural-border-chip dark:bg-mural-badge-bg dark:font-mono dark:text-mural-text-chip">
            Conclusão em {student.completionYear}
          </span>

          <div className="flex shrink-0 items-center gap-1.5">
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

