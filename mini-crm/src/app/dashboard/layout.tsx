import { AppSidebar } from "@/components/app-sidebar";
import { ThemeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { logout } from "../login/actions";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider className="flex">
      {/* le side bar du dashboard */}
      <AppSidebar />
      {/* le petit toggle du sidebar */}
      <SidebarTrigger className="mt-6 lg:ml-1 " />
      <ThemeToggle></ThemeToggle>
      <Button
        onClick={logout}
        className="absolute bottom-4 right-4"
        variant={"destructive"}
      >
        Logout
      </Button>

      <div className="min-h-screen max-sm:w-[95vw] w-[70vw] m-auto">
        <main className=" w-full p-2">{children}</main>
      </div>
    </SidebarProvider>
  );
}
