import { createUserSchema } from "@/schemas/user";
import { createTRPCRouter, dbMiddleware, publicProcedure } from "../init";
import { userModel } from "@/models/user.model";
import mongoose from "mongoose";

export const userRouter = createTRPCRouter({
  create: publicProcedure
    .use(dbMiddleware)
    .input(createUserSchema)
    .mutation(async ({ input }) => {
      try {
        const user = await userModel.create({
          email: input.email,
          password: input.password,
          full_name: input.full_name,
        });
        console.log(user);
        return user._id;
      } catch (e: any) {
        if (e.code && e.code === 11000) {
          throw new Error("Email is already taken!");
        }
        throw new Error("Please try again later!");
      }
    }),
});
