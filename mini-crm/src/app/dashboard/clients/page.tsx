"use client";
import { ClientsTable } from "@/components/clients-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DashBoard() {

    const router = useRouter();
  return (
    <div className=" w-full h-[60dvh] flex flex-col gap-2 ">
      <div className=" w-full h-9 flex justify-end pb-1">
        <Button onClick={()=>{router.push('/dashboard/clients/add')}} variant={"secondary"} className="cursor-pointer" >
          <Plus></Plus>
        </Button>
      </div>
      <ClientsTable></ClientsTable>
    </div>
  );
}