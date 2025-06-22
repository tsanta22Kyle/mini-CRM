"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const cookiesStore = await cookies();

  const isConnected = cookiesStore.get("user-session");
  if (isConnected) {
    redirect("/dashboard/clients");
  }

  redirect("/login");
}
