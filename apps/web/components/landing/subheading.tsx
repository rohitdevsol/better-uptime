import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function SubHeading({
  className,
  children,
  as = "p",
  variant = "medium",
}: {
  className?: string;
  children: ReactNode;
  as?: "h2" | "h3" | "p";
  variant?: "big" | "medium" | "small";
}) {
  const Tag = as;
  const variants = {
    big: "text-base md:text-lg",
    medium: "text-sm md:text-base",
    small: "text-xs md:text-sm",
  };
  return (
    <Tag
      className={cn(
        "font-mono text-muted-foreground",
        variants[variant],
        className
      )}
    >
      {children}
    </Tag>
  );
}
