import { ClientDetailsCard } from "@/components/client/client-details-card";
import { ClientHistory } from "@/components/client/client-history";

export default async function clientDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // prendre le paramètre id
  const { id } = await params;
  
  return (
    <div className="grid gap-10">
      <ClientDetailsCard id={id}></ClientDetailsCard>
      <ClientHistory id={id}></ClientHistory>
    </div>
  );
}
