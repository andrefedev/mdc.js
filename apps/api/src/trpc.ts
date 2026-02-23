import { initTRPC } from "@trpc/server";

// You can use any variable name you like.
// We use t to keep things simple.
const t = initTRPC.create();

// const t2 = initTRPC.context<{ signGuestBook: () => Promise<void> }>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
