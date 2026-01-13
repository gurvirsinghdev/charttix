import { createDBConnection } from "@/lib/mongodb";
import { initTRPC } from "@trpc/server";
import SuperJSON from "superjson";

export const createTRPCContext = async function () {
  return {};
};
export type CreateTRPCContext = Awaited<typeof createTRPCContext>;

const t = initTRPC.context<CreateTRPCContext>().create({
  transformer: SuperJSON,
});

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;

export const dbMiddleware = t.middleware(async ({ ctx, next }) => {
  return next({
    ctx: {
      ...ctx,
      db: await createDBConnection(),
    },
  });
});
