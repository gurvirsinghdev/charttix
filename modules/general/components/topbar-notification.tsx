"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
  varient?: "default" | "destructive";
  canDismiss?: boolean;
  className?: string;
}

export function TopbarNotification({
  children,
  varient = "default",
  canDismiss = true,
  className,
}: Props) {
  const [isDismissed, setIsDismissed] = useState(false);
  const dismissNotification = () => {
    if (isDismissed) return;
    setIsDismissed(true);
  };

  if (isDismissed && canDismiss) {
    return null;
  }
  return (
    <div
      className={cn(
        "flex items-center text-xs justify-center py-2 px-10 text-white",
        varient === "default" ? "bg-[#00453f]" : "bg-red-900",
        className,
        "relative!"
      )}
    >
      <p className="truncate">{children}</p>

      {canDismiss && (
        <Button
          size={"icon"}
          variant={"ghost"}
          className="absolute size-5 rounded-sm p-0.5 cursor-pointer top-1/2 right-5 -translate-y-1/2 hoverk:bg-stone-100"
          asChild
          onClick={dismissNotification}
        >
          <XIcon />
        </Button>
      )}
    </div>
  );
}
