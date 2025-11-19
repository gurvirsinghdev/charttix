"use client";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const signInSchema = z.object({
  email: z.email(),
  password: z.string(),
});
type SignInSchema = z.infer<typeof signInSchema>;

export default function SignInPage() {
  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const userLogin: SubmitHandler<SignInSchema> = (data) => {
    console.log(data);
  };

  return (
    <main className="h-full w-full max-w-(--breakpoint-xl) mx-auto grid grid-cols-1 lg:grid-cols-2">
      <div className="w-full h-full bg-white overflow-hidden border border-border ">
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-2">Sign in</h1>
          <p className="text-slate-500 text-sm mb-6">
            Welcome back — enter your email and password to continue.
          </p>

          <Form {...form}>
            <form className="space-y-6">
              <FormField
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        placeholder="Enter your email"
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300"
                      />
                    </FormControl>
                    <FormMessage />

                    <div id="email-note" className="sr-only">
                      Enter the email address for your Charttix account.
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        type="password"
                        placeholder="Enter your password"
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-end">
                <div className="text-sm">
                  <Link
                    href="/forgot-password"
                    className="text-slate-600 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              <button
                type="submit"
                onClick={form.handleSubmit(userLogin)}
                className="w-full bg-slate-900 text-white py-3 rounded-lg text-sm font-medium hover:bg-black transition"
              >
                Sign in
              </button>
            </form>
          </Form>

          <div className="mt-6 text-sm text-slate-600">
            Don't have an account?{" "}
            <Link
              href="/sign-up"
              className="text-slate-900 font-medium hover:underline"
            >
              Open your account here
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full hidden bg-slate-900 text-slate-100 p-10 md:p-12 lg:flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 place-items-center gap-4 w-full h-full">
            {[...Array(40)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-slate-700 rounded-sm" />
            ))}
          </div>
        </div>

        <div className="relative mb-10 p-5 bg-slate-800/60 rounded-xl border border-slate-700 max-w-sm">
          <h4 className="text-sm font-medium mb-3 text-slate-300">
            Spending Analytics
          </h4>
          <div
            role="img"
            aria-label="Weekly spending overview"
            className="w-full grayscale h-24 flex items-end gap-2"
          >
            <div
              data-day="Mon"
              aria-label="Monday: 28%"
              className="flex-1 h-[28%] bg-rose-300 rounded-md"
            />

            <div
              data-day="Tue"
              aria-label="Tuesday: 44%"
              className="flex-1 h-[44%] bg-rose-400 rounded-md"
            />

            <div
              data-day="Wed"
              aria-label="Wednesday: 36%"
              className="flex-1 h-[36%] bg-rose-300 rounded-md"
            />

            <div
              data-day="Thu"
              aria-label="Thursday: 52%"
              className="flex-1 h-[52%] bg-emerald-300 rounded-md"
            />

            <div
              data-day="Fri"
              aria-label="Friday: 64%"
              className="flex-1 h-[64%] bg-emerald-400 rounded-md"
            />

            <div
              data-day="Sat"
              aria-label="Saturday: 50%"
              className="flex-1 h-[50%] bg-emerald-300 rounded-md"
            />

            <div
              data-day="Sun"
              aria-label="Sunday: 82%"
              className="flex-1 h-[82%] bg-emerald-500 rounded-md"
            />
          </div>
        </div>

        <div className="relative">
          <h3 className="text-lg font-semibold mb-3">Quick tips</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Sign in to review your budgets, add expenses quickly, and get
            personalized insights. If you’re new, create an account and start
            with your recurring monthly items.
          </p>

          <p className="text-slate-400 text-sm mt-4 font-medium">— Charttix</p>
        </div>
      </div>
    </main>
  );
}
