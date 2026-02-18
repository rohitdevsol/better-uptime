import { cn } from "@/lib/utils";
import React from "react";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-4xl mx-auto px-4 md:px-8", className)}>
      {children}
    </div>
  );
}
