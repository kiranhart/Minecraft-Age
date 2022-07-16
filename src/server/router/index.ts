// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { versionsRouter } from "./versions";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("minecraft.", versionsRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
