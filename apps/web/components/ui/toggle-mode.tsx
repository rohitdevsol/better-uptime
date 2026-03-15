"use client"

import { useTheme } from "next-themes";
import { Button } from "./button";
import { useEffect, useState } from "react";
import { MoonStar, Sun } from "lucide-react";

export default function ModeToggle() {
    const { setTheme, theme } = useTheme();
    const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefer-color-scheme: dark)");

        const handleChange = (e: MediaQueryListEvent) => {
            setSystemTheme(e.matches ? "dark" : "light");
        };

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, [])

    const SWITCH = () => {
        switch (theme) {
            case "light": {
                setTheme("dark");
                return;
            }
            case "dark": {
                setTheme("light");
                return;
            }
            case "system": {
                setTheme(systemTheme);
                return;
            }
            default: {
                return;
            }
        }
    }
    return <Button onClick={SWITCH} variant={"ghost"} size="icon" aria-label="Toggle theme">
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonStar className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

    </Button>
}