import "./globals.css";

import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ThemeProvider } from "next-themes";
import ZoomProvider from "@/providers/ZoomProvider";
import { ReactTRPCContext } from "@/server/client";
import { Toaster } from "sonner";

const manrope = Manrope({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Charttix",
    template: "%s | Charttix",
  },
  description: "Charttix — the most student-friendly budgeting experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactTRPCContext>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${manrope.className} antialiased max-w-screen h-auto w-screen overflow-x-hidden`}
        >
          <ZoomProvider>
            <Toaster toastOptions={{ className: manrope.className }} />
            <ThemeProvider
              forcedTheme="light"
              enableSystem={false}
              attribute={"class"}
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </ZoomProvider>
        </body>
      </html>
    </ReactTRPCContext>
  );
}
