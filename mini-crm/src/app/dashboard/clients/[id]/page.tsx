import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useClientStore } from "@/store/ClientStore";
import { useRouter } from "next/router";

export default function clientDetails() {
  const router = useRouter();
  const id = router.query.id;
  const { clients } = useClientStore();
  const client = clients.find((client) => client.id == id);
  if (client == undefined) {
    return <div>erreur , client {id} non trouvé</div>;
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Infos du client</CardTitle>
        <CardDescription>identifiant : {id}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="">
          <div className="">
            <CardTitle>Nom : </CardTitle>
            <CardDescription>{client.firstName}</CardDescription>
          </div>
          <div className="">
            <CardTitle>Nom : </CardTitle>
            <CardDescription>{client.firstName}</CardDescription>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
