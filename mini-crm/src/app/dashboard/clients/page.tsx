"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { SetStateAction, useState } from "react";
import GlobalLoading from "./loading";

export default function DashBoard() {
    // valeurs de recherche pour le filtre
    const [searchValue,setSearchValue] = useState("");
    const router = useRouter();

    const handleSearchValue = (e: { target: { value: SetStateAction<string>; }; })=>{
        setSearchValue(e.target.value)
    }

    const ClientsTable = dynamic(()=>
    import("@/components/table").then((mod)=>mod.ClientsTable)
    ,{
      loading : ()=><div className="p-4 text-center">Chargement de la table...</div>,
      ssr : false
    })

  return (
    <div className=" w-full h-[70dvh] flex flex-col gap-10 mt-15 ">
      <div className=" w-full h-9 flex justify-end p-1 gap-10">
        <Input type="text" onChange={handleSearchValue} ></Input>
        <Button onClick={()=>{router.push('/dashboard/clients/add')}} variant={"secondary"} className="cursor-pointer" >
          <Plus></Plus>
        </Button>
      </div>
      <ClientsTable filterText={searchValue}></ClientsTable>
    </div>
  );
}