"use client";;
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { useState } from "react";
import Link from "next/link";
import { DynamicIcon } from "../dynamicIcon";
import { useTheme } from "next-themes";

const navClientMenus = [
  {
    label: "Clients",
    icon: "UsersIcon",
    href: "/dashboard/clients",
  },
];

export default function NavClients() {
  const [isActive, setIsActive] = useState(0);
  const {theme} = useTheme()

  return (
    <SidebarGroup>
      <SidebarGroupLabel>gérer</SidebarGroupLabel>
      <SidebarMenu>
        {navClientMenus.map((menu, index) => (
          <SidebarMenuItem
            key={index}
            className={
              theme == "light"?
              isActive == index ? "bg-gray-200" : "":
              isActive == index ? "bg-[#ffffff16]" : ""
            
            }
          >
            <SidebarMenuButton
              onClick={() => {
                setIsActive(index);
              }}
              asChild
            >
              <Link href={menu.href}>
                <DynamicIcon icon={menu.icon}></DynamicIcon>
                <span>{menu.label} </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
