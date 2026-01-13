import { createUserSchema, loginUserSchema } from "@/schemas/user";
import bcrypt from "bcrypt";
import { createTRPCRouter, dbMiddleware, publicProcedure } from "../init";
import { userModel } from "@/models/user.model";

export const userRouter = createTRPCRouter({
  login: publicProcedure
    .use(dbMiddleware)
    .input(loginUserSchema)
    .mutation(async ({ input }) => {
      try {
        const potentialUser = await userModel.findOne({
          email: input.email,
        });

        if (!potentialUser) throw new Error();
        if (!(await bcrypt.compare(input.password, potentialUser.password)))
          throw new Error();

        return true;
      } catch {
        throw new Error("Incorrect email or password!");
      }
    }),

  create: publicProcedure
    .use(dbMiddleware)
    .input(createUserSchema)
    .mutation(async ({ input }) => {
      try {
        const hashedPassword = await bcrypt.hash(input.password, 10);
        await userModel.create({
          email: input.email,
          password: hashedPassword,
          full_name: input.full_name,
        });

        return true;
      } catch (e: any) {
        if (e.code && e.code === 11000)
          throw new Error("Email is already taken!");
        else throw new Error("Please try again later!");
      }
    }),
});
