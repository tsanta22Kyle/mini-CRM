"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useClientStore } from "@/store/ClientStore";
import { Label } from "@radix-ui/react-label";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

interface addClientField {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export default function AddClient() {
  //gérer l'ajout des clients avec react hook form
  const { handleSubmit, register } = useForm<addClientField>();
  // état global qui gère les clients
  const {clients,addClients} = useClientStore();
  const router = useRouter();
  const onSubmit: SubmitHandler<addClientField> = (data) => {
    const creationDate = new Date().toLocaleDateString().split('/');
    const formatedCreationDate = creationDate[2]+"-"+creationDate[1]+"-"+creationDate[0];

    console.log(data);
    addClients({
        ...data, createdAt: formatedCreationDate ,
        id: crypto.randomUUID()
    });
    console.log(clients);
    

    router.push("/dashboard/clients");
  };

  return (
    <div className="min-h-screen">
      <Card className=" m-auto w-2/3">
        <CardHeader>
          <CardTitle>Ajouter un client</CardTitle>
          <CardDescription>
            veuillez entrer les informations du client
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="flex gap-2 w-2/3">
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
                  {...register("phone",{
                    pattern : {
                        value : /^\d+$/,
                        message: "doit être un nombre"
                    }
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
    </div>
  );
}
