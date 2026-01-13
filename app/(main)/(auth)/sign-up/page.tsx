"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { createUserSchema } from "@/schemas/user";
import { useTRPC } from "@/server/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2Icon } from "lucide-react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const signUpSchema = z.intersection(
  createUserSchema,
  z.object({
    terms_agreed: z.boolean().refine((value) => value === true, {
      error: "Please agree to the terms and conditions to proceed.",
    }),
  })
);

type SignUpSchema = z.infer<typeof signUpSchema>;

export default function SignUpPage() {
  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      full_name: "",
      terms_agreed: false,
    },
  });

  const trpc = useTRPC();
  const toastOptions = {
    id: "create-user",
    richColors: true,
  };

  const createUserMutation = useMutation(
    trpc.user.create.mutationOptions({
      onMutate() {
        toast.info("Creating your account...", toastOptions);
      },
      onSuccess() {
        toast.success("Account Created!", toastOptions);
      },
      onError(err) {
        toast.error(err.message, toastOptions);
      },
    })
  );

  const createUser: SubmitHandler<SignUpSchema> = (data) => {
    createUserMutation.mutate(data);
  };

  return (
    <main className="h-full w-full max-w-(--breakpoint-xl) mx-auto grid grid-cols-1 lg:grid-cols-2">
      <div className="w-full h-full bg-white overflow-hidden border border-border ">
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-2">Create Account</h1>
          <p className="text-slate-500 text-sm mb-6">
            Sign up to start managing your student budget with clarity.
          </p>

          <Form {...form}>
            <form className="space-y-6">
              <FormField
                name="full_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300"
                      />
                    </FormControl>
                    <FormMessage />
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

              <FormField
                name="terms_agreed"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-start gap-2 text-sm">
                      <FormControl>
                        <input {...field} type="checkbox" className="mt-1" />
                      </FormControl>
                      <label className="text-slate-600">
                        I agree to the{" "}
                        <Link
                          href="/terms-and-conditions"
                          className="underline hover:text-slate-800"
                        >
                          Terms & Conditions
                        </Link>
                      </label>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <button
                type="submit"
                onClick={form.handleSubmit(createUser)}
                className="w-full cursor-pointer bg-slate-900 text-white py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition"
              >
                {createUserMutation.isPending ? (
                  <div className="w-full h-full grid place-items-center">
                    <Loader2Icon className="size-4 animate-spin" />
                  </div>
                ) : (
                  <span>Sign up</span>
                )}
              </button>
            </form>
          </Form>
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
            className="w-full h-24 grayscale flex items-end gap-2"
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
          <h3 className="text-lg font-semibold mb-3">
            A simple way to manage your student money
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Track expenses. Understand spending. Build better habits. Charttix
            makes budgeting effortless.
          </p>

          <p className="text-slate-400 text-sm mt-4 font-medium">— Charttix</p>
        </div>
      </div>
    </main>
  );
}
