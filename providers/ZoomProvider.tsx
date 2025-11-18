"use client";

import { Loader2Icon } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}
export default function ZoomProvider({ children }: Props) {
  const targetResolution = 1024;
  const [appZoom, setAppZoom] = useState<number | null>(null);

  useEffect(function () {
    if (!window) return;
    setAppZoom(
      window.innerWidth > targetResolution
        ? window.innerWidth / targetResolution
        : 1
    );
  }, []);

  if (!appZoom) {
    return (
      <section className="w-screen h-screen overflow-hidden grid place-items-center">
        <Loader2Icon className="animate-spin" />
      </section>
    );
  }

  return <section style={{ zoom: appZoom }}>{children}</section>;
}
