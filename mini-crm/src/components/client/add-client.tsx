'use client';
import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { useClientStore } from "@/store/ClientStore";
import { useRouter } from "next/navigation";



interface addClientField {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
export function AddClientForm(){

//gérer l'ajout des clients avec react hook form
  const { handleSubmit, register } = useForm<addClientField>();
  // état global qui gère les clients
  const {  addClients } = useClientStore();
  const router = useRouter();
  const onSubmit: SubmitHandler<addClientField> = (data) => {
    // fomatage de la date en YYYY-MM-DD
    const creationDate = new Date().toLocaleDateString().split("/");
    const formatedCreationDate =
      creationDate[2] + "-" + creationDate[1] + "-" + creationDate[0];

    addClients({
      ...data,
      createdAt: formatedCreationDate,
      id: crypto.randomUUID(),
    });
    router.push("/dashboard/clients");
  };

    return (
      <Card className=" m-auto w-1/3 max-md:w-full">
      <CardHeader>
        <CardTitle>Ajouter un client</CardTitle>
        <CardDescription>
          veuillez entrer les informations du client
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6 w-full">
            <div className="flex gap-2 w-2/3 max-sm:w-full">
              <div className="grid gap-2 w-1/2">
                <Input
                  id="firstname"
                  type="text"
                  placeholder="Votre Nom"
                  required
                  {...register("firstName")}
                ></Input>
              </div>
              <div className="grid gap-2 w-1/2">
                <Input
                  id="lastname"
                  type="text"
                  placeholder="Votre prénom"
                  required
                  {...register("lastName")}
                ></Input>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                {...register("email")}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">numéro de téléphone</Label>
              </div>

              <Input
                id="password"
                type="text"
                placeholder="...."
                {...register("phone", {
                  pattern: {
                    value: /^\d+$/,
                    message: "doit être un nombre",
                  },
                })}
                required
              />
            </div>
            <div className="w-full grid">
              <Button type="submit" className="w-1/2 m-auto cursor-pointer">
                Ajouter
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
    );
}