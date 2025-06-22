'use client'

import { useClientStore } from "@/store/ClientStore";
import {  Mail, Phone } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";

export function ClientDetailsCard({id}: {id : string}){

    const {clients} = useClientStore();
    const client = clients.find((client)=>client.id == id);
    if(client == undefined){return(
        <div className="">
            client non trouvé
        </div>
    )}

    return(
        <Card>
        <CardHeader>
          <CardTitle>Infos du client</CardTitle>
          <CardDescription>identifiant : {id}</CardDescription>
          <div className="">
            {client.tags?.map((tag) => (
              <Badge variant={"secondary"} key={tag}>
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex gap-20 items-center w-full max-sm:grid max-sm:gap-3 ">
            <div className="flex gap-4 items-center">
              <CardTitle>Nom : </CardTitle>
              <CardDescription>{client.firstName}</CardDescription>
            </div>
            <div className="flex gap-4 items-center">
              <CardTitle>Prénom : </CardTitle>
              <CardDescription>{client.lastName}</CardDescription>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <CardTitle>
              <Mail size={20}></Mail>
            </CardTitle>
            <CardDescription>{client.email}</CardDescription>
          </div>
          <div className="flex gap-2 items-center">
            <CardTitle>
              <Phone size={20} />
            </CardTitle>
            <CardDescription>{client.phone}</CardDescription>
          </div>
        </CardContent>
        <CardFooter className="grid w-full">
          <CardDescription className="place-self-end">
            créé le : {client.createdAt}
          </CardDescription>
        </CardFooter>
      </Card>
    )


}