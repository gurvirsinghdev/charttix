"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRightFromCircleIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function NavigationBar() {
  const pathname = usePathname();
  const [visible, setIsVisible] = useState(false);

  const updateVisibility = () => {
    setIsVisible(window.innerWidth >= 820);
  };

  useEffect(function () {
    updateVisibility();
    window.addEventListener("resize", updateVisibility);
  }, []);

  const getHrefLinkLabel = (href: string) => {
    const strippedPath = href.slice(1);
    if (!strippedPath) {
      return "home";
    }
    return strippedPath.split("-").join(" ");
  };

  // TODO: implement a better system to display navigation bar on smaller screens.
  return (
    <nav className="px-6 py-5 borde-b w-full max-w-(--breakpoint-xl) mx-auto">
      {/* Navigation Container */}
      <div className="relative text-sm">
        {/* Logo & Action Buttons */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link href={"/"}>
              <span className="text-lg font-bold">Charttix</span>
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button
              variant={"ghost"}
              className="cursor-pointer text-sm border border-transparent hover:border-border"
              asChild
            >
              <Link href={"/sign-in"}>Sign In</Link>
            </Button>
            <Button
              asChild
              className="bg-green-400 text-sm border-green-500 border cursor-pointer text-black hover:bg-green-500"
            >
              <Link href={"/sign-up"}>
                <span>Open your account</span>
                <ArrowUpRightFromCircleIcon className="size-3" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Navigation Items */}
        {visible && (
          <div className="z-50 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center gap-6 w-max">
            {["/", "/about-us", "/pricing", "/blog"].map((href) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "border-b-2 capitalize border-b-transparent hover:border-b-green-900",
                  pathname === href && "border-b-green-900"
                )}
              >
                {getHrefLinkLabel(href)}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
