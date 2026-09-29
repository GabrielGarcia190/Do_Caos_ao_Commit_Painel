import type { LucideIcon } from "lucide-react";

export interface HeroStatItem {
    icon: LucideIcon;
    title: string;
    subtitle: string;
}

export interface HeroYear {
    label: string;
    value: string;
    count: number;
}