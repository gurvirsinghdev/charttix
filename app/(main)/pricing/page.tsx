"use client";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ZoomProvider from "@/providers/ZoomProvider";
import { AccordionContent, AccordionTrigger } from "@radix-ui/react-accordion";
import { CheckIcon, CrossIcon, XIcon } from "lucide-react";

export default function PricingPage() {
  return (
    <section>
      {/* Plans */}
      <section className="w-full border-y bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {/* STARTER PLAN */}
          <div className="border border-border bg-white rounded-2xl p-8 flex flex-col">
            <h2 className="text-xl font-semibold mb-1">Starter</h2>
            <p className="text-slate-500 mb-6">
              Everything you need to manage your student budget.
            </p>

            <p className="text-4xl font-semibold mb-4">Free</p>
            <p className="text-slate-400 text-sm mb-6">
              No credit card required
            </p>

            <div className="flex-1 space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <span className="inline-block relative">
                  <CheckIcon className="text-green-600 size-4" />
                  <Sheet>
                    <SheetTrigger asChild>
                      <sup className="cursor-pointer inline-block absolute text-[9px] -right-0.5 top-0.5 underline">
                        1
                      </sup>
                    </SheetTrigger>

                    <SheetContent
                      side="bottom"
                      className="p-6 pb-10 max-w-full rounded-t-xl"
                    >
                      <SheetHeader>
                        <SheetTitle></SheetTitle>
                        <ZoomProvider>
                          <SheetDescription className="text-accent-foreground">
                            1. These premium features are free during our Beta
                            launch. We want students to try everything without
                            limitations before we introduce pricing.
                          </SheetDescription>
                        </ZoomProvider>
                      </SheetHeader>
                    </SheetContent>
                  </Sheet>
                </span>

                <span className="capitalize">
                  Everything from Sludent Plus.
                </span>
              </div>
              {[
                "Unlimited expense tracking",
                "Monthly budget tracking",
                "Essential insights",
                "Essential charts",
                "One device sync",
              ].map((feature) => (
                <p
                  key={feature}
                  className="flex items-center justify-start gap-2"
                >
                  <CheckIcon className="text-green-600 size-4" />
                  <span className="capitalize">{feature}.</span>
                </p>
              ))}
            </div>

            <Button className="mt-8 cursor-pointer w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800">
              <span>Open your account</span>
            </Button>
          </div>

          {/* STUDENT PLUS */}
          <div className="border border-border bg-white rounded-2xl p-8 flex flex-col relative">
            {/* Most Popular Tag */}
            {/* <span className="absolute -top-3 left-6 bg-slate-900 text-white text-xs px-3 py-1 rounded-full">
              Most Popular
            </span> */}

            <h2 className="text-xl font-semibold mb-1">Student Plus</h2>
            <p className="text-slate-500 mb-6">
              Smarter insights. More automation. Better habits.
            </p>

            <p className="text-4xl font-semibold mb-1" suppressHydrationWarning>
              $3.49
            </p>
            <p className="text-slate-400 text-sm mb-6">per month</p>

            <div className="flex-1 space-y-3 text-sm text-slate-700">
              {[
                "Everything in Starter",
                "Smart suggestions",
                "Automatic Categorization",
                "Trend analysis",
                "Multi-device sync",
                "PDF/CSV export",
              ].map((feature) => (
                <p
                  key={feature}
                  className="flex items-center justify-start gap-2"
                >
                  <CheckIcon className="text-green-600 size-4" />
                  <span className="capitalize">{feature}.</span>
                </p>
              ))}
            </div>

            <div className="flex-1 space-y-3 text-sm text-slate-700"></div>

            <Button
              disabled
              className="mt-8 w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800"
            >
              Coming Soon!
            </Button>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="w-full bg-white py-20 border-border">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-xl font-semibold mb-10 text-center">
            Feature Comparison
          </h3>

          <div className="divide-y divide-slate-200 border border-border rounded-xl bg-white">
            {/* Header Row */}
            <div className="grid grid-cols-3 text-sm py-4 px-6 font-medium text-slate-600">
              <span className=""></span>
              <span className="text-center">Starter</span>
              <span className="text-center">Student Plus</span>
            </div>

            {/* Rows */}
            {[
              ["Expense tracking", "✓", "✓"],
              ["Smart suggestions", "—", "✓"],
              ["Automatic Categorization", "—", "✓"],
              ["Multi-device sync", "1 device", "Unlimited"],
              ["Trend analysis", "—", "✓"],
              ["PDF/CSV Export", "—", "✓"],
            ].map(([label, starter, plus], idx) => (
              <div
                key={idx}
                className="grid grid-cols-3 text-sm py-4 px-6 text-slate-700"
              >
                <span>{label}</span>
                <span className="flex items-center justify-center">
                  {starter === "—" ? (
                    <span className="inline-block relative">
                      <CheckIcon className="text-green-600 size-4" />
                      <Sheet>
                        <SheetTrigger asChild>
                          <sup className="cursor-pointer inline-block absolute text-[9px] -right-0.5 top-0.5 underline">
                            1
                          </sup>
                        </SheetTrigger>

                        <SheetContent
                          side="bottom"
                          className="p-6 pb-10 max-w-full rounded-t-xl"
                        >
                          <SheetHeader>
                            <SheetTitle></SheetTitle>
                            <ZoomProvider>
                              <SheetDescription className="text-accent-foreground">
                                1. These premium features are free during our
                                Beta launch. We want students to try everything
                                without limitations before we introduce pricing.
                              </SheetDescription>
                            </ZoomProvider>
                          </SheetHeader>
                        </SheetContent>
                      </Sheet>
                    </span>
                  ) : (
                    <CheckIcon className="size-4 text-green-600" />
                  )}
                </span>
                <span className="flex items-center justify-center">
                  {plus === "—" ? (
                    <span className="inline-block relative">
                      <CheckIcon className="text-green-600 size-4" />
                      <Sheet>
                        <SheetTrigger asChild>
                          <sup className="cursor-pointer inline-block absolute text-[9px] -right-0.5 top-0.5 underline">
                            1
                          </sup>
                        </SheetTrigger>

                        <SheetContent
                          side="bottom"
                          className="p-6 pb-10 max-w-full rounded-t-xl"
                        >
                          <SheetHeader>
                            <SheetTitle></SheetTitle>
                            <SheetDescription className="text-accent-foreground">
                              1. These premium features are free during our Beta
                              launch. We want students to try everything without
                              limitations before we introduce pricing.
                            </SheetDescription>
                          </SheetHeader>
                        </SheetContent>
                      </Sheet>
                    </span>
                  ) : (
                    <CheckIcon className="size-4 text-green-600" />
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-gray-50 text-slate-800 py-24 border-y border-border">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-10">FAQs</h3>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="border bg-white border-border rounded-xl px-4"
            >
              <AccordionTrigger className="text-left w-full py-4 font-medium text-slate-900 hover:no-underline">
                Will the free plan remain free?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-4 leading-relaxed">
                Yes — the Starter plan stays free for core features, even after
                beta.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border bg-white border-border rounded-xl px-4"
            >
              <AccordionTrigger className="text-left w-full py-4 font-medium text-slate-900 hover:no-underline">
                What’s included in Student Plus?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-4 leading-relaxed">
                Smart insights, automatic categorization, advanced analysis,
                multi-device sync, exports, and more powerful budgeting
                features.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-border bg-white rounded-xl px-4"
            >
              <AccordionTrigger className="text-left py-4 w-full font-medium text-slate-900 hover:no-underline">
                What happens after beta?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-4 leading-relaxed">
                Starter remains free. Student Plus will become a low-cost
                monthly plan designed specifically for students.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-b! border-border rounded-xl px-4 bg-white"
            >
              <AccordionTrigger className="text-left py-4 font-medium w-full text-slate-900 hover:no-underline">
                Is my data safe?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-4 leading-relaxed">
                Absolutely. Your data belongs to you — we do not sell, share, or
                use it for any advertising purposes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </section>
  );
}
