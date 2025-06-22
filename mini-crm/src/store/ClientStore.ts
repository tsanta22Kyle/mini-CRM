import { clients } from "@/data/clients";
import { Client } from "@/types/client";
import { create } from "zustand";

interface ClientState{
    clients : Client[];
    addClients : (clientToAdd :Client)=> void;
    setClients : (clientsToSet : Client[])=>void;
}

export const useClientStore = create<ClientState>((set)=>({
    clients : clients,
    addClients : (clientToAdd)=>set((state)=>({clients : [...state.clients , clientToAdd ]})),
    setClients : (clientsToSet)=>set(()=>({
        clients : clientsToSet
    }))
}))

