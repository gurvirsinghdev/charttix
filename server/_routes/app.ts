import { createTRPCRouter, publicProcedure } from "../init";
import { userRouter } from "./user";

export const appRouter = createTRPCRouter({
  user: userRouter,
});
export type AppRouter = typeof appRouter;
