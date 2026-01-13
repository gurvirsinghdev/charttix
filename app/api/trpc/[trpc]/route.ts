import { appRouter } from "@/server/_routes/app";
import { createTRPCContext } from "@/server/init";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { NextRequest } from "next/server";

const trpcHandler = function (req: NextRequest) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: createTRPCContext,
  });
};

export { trpcHandler as GET, trpcHandler as POST };
