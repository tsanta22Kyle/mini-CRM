"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  // ne pas rendre tant que c pas monté
  if (!mounted) return null;

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="absolute top-5 right-5"
    >
      {theme === "dark" ? (
        <Sun className="text-[#2b2b2e]" />
      ) : (
        <Moon />
      )}
    </Button>
  );
}
