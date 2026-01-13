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
