import { AppSidebar } from "@/components/app-sidebar";
import { ClientsTable } from "@/components/clients-table";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

// import { Geist, Geist_Mono } from "next/font/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider className="flex">
      <AppSidebar />
      <SidebarTrigger className="mt-6 ml-1 text-3xl" size={"lg"} />
      <div className="fle min-h-screen w-[75vw]">
        <main className=" w-full p-6">{children}</main>
      </div>
    </SidebarProvider>
  );
}
