"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  if (theme == "dark")
    return (
      <Button onClick={()=>{setTheme("light")}} className="absolute top-5 right-5 text-[#2b2b2e]" >
        <Sun></Sun>
      </Button>
    );
  else if (theme != "dark")
    return (
      <Button onClick={()=>{setTheme("dark")}} className="absolute top-5 right-5 ">
        <Moon></Moon>
      </Button>
    );
}
