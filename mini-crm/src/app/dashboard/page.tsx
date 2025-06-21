"use client";;
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashBoard() {
  const router = useRouter();
  useEffect(() => {
    router.push("/dashboard/clients");
  }, []);
}
