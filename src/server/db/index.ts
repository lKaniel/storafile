import { Client } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

import { env } from "@storafile/env";
import * as schema from "./schema";

export const db = drizzle(
  new Client({
    url: env.PSTGRESS_URL,
  }).connection(),
  { schema },
);
