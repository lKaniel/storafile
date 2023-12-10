import {postRouter} from "@storafile/server/api/routers/post";
import {createTRPCRouter} from "@storafile/server/api/trpc";
import {fileRouter} from "@storafile/server/api/routers/file";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  file: fileRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
