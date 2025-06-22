import { EllipsisVertical } from "lucide-react";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";

export function NavUser() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{"user.name"}</span>
            <span className="text-muted-foreground truncate text-xs">
              {"user.email"}
            </span>
          </div>

            <EllipsisVertical></EllipsisVertical>
         
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
