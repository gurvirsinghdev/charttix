import { Button } from "@/components/ui/button";
import { ArrowUpRightFromCircleIcon } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <section
      className="h-auto w-screen bg-green-50/50"
      suppressHydrationWarning
    >
      {/* Hero Section */}
      <section className="w-full bg-slate-950 text-slate-50 py-12">
        <div className="max-w-5xl px-6 flex flex-col">
          {/* Small badge */}
          <div className="inline-flex items-center gap-2 rounded-full w-max bg-[#0f2028] px-2 py-1 text-xs font-medium mb-6">
            <span className="inline-block h-2 w-2 rounded-full bg-green-300" />
            <span>No fees while we{"’"}re in beta</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-5">
            Finally understand where your
            <br />
            <span className="text-green-400"> student money</span> goes.
          </h1>

          {/* Subheading */}
          <p className="text-slate-300 max-w-xl leading-relaxed mb-8">
            Track pocket money, part-time income, and college expenses in one
            place. Set simple budgets, avoid end-of-month panic, and start
            building better money habits before you graduate.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Button className="bg-green-400 cursor-pointer text-slate-900 font-medium! px-5 py-3 rounded-lg hover:bg-green-500">
              <span>Begin Planning</span>
              <ArrowUpRightFromCircleIcon className="size-4" />
            </Button>

            <Link
              className="text-sm text-slate-300 cursor-pointer underline disabled:cursor-not-allowed underline-offset-4 disabled:opacity-90 disabled:text-slate-300 hover:text-slate-100"
              href={"/about-us"}
            >
              Learn More
            </Link>
          </div>

          {/* Trust line */}
          <p className="text-xs text-slate-400">
            Built for college & university students • No credit card needed
          </p>
        </div>
      </section>
    </section>
  );
}
