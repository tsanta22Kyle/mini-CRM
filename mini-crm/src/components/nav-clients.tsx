"use client";;
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { UsersIcon } from "lucide-react";

export default function NavClients() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>gérer</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <a href="">
              <UsersIcon />
              <span className="">Clients</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
