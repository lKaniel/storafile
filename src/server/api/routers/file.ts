import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@storafile/server/api/trpc";
import { posts } from "@storafile/server/db/schema";

const MAX_FILE_SIZE = 5000000;
export const fileRouter = createTRPCRouter({
  put: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        file: z
          .any()
          .refine(
            (file) => file?.size <= MAX_FILE_SIZE,
            `Max image size is 5MB.`,
          ),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(posts).values({
        name: input.name,
        createdById: ctx.session.user.id,
      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.posts.findFirst({
      orderBy: (posts, { desc }) => [desc(posts.createdAt)],
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
