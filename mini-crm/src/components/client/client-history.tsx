'use client'
import { useClientStore } from "@/store/ClientStore";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";

export function ClientHistory(
    {id}:{id:string}
){

const {clients} = useClientStore();
    const client = clients.find((client)=>client.id == id);
    if(client == undefined){return(
        <div className="">
            client non trouvé
        </div>
    )}

    return(
        <div className=" grid gap-5 p-3">
        <p className="text-2xl">Historique du client :</p>
        <div className="grid gap-3">

        {client.history?.map((history, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{history.type}</CardTitle>
              <CardDescription>{history.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{history.notes}</p>
            </CardContent>
          </Card>
        ))}
        </div>
      </div>
    )
}