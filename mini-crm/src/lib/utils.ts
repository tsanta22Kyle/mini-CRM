import { Client } from "@/types/client"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function clientMapper(clients:Client[]){

  return clients.map((client) => ({
      nom: client.firstName,
      prénom: client.lastName,
      mail: client.email,
      téléphone: client.phone,
      "date de création": client.createdAt,
      id: client.id,
    }));

}
