"use client"
import * as Icons from "lucide-react";
import type {LucideIcon as LucideComponentType} from "lucide-react"
interface props {
  className?: string;
  icon: string;
  size?:number;
}
type LucideIconName = keyof typeof Icons;

export function DynamicIcon(props: props) {
  const IconName = props.icon;

  const LucideIcon = Icons[IconName as LucideIconName] as LucideComponentType;

  return <LucideIcon />;
}
