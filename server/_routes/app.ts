import { createTRPCRouter, publicProcedure } from "../init";

export const appRouter = createTRPCRouter({
  hello: publicProcedure.query(() => "Hello, World!"),
});
export type AppRouter = typeof appRouter;
