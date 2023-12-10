import { type Config } from "drizzle-kit";

import { env } from "@storafile/env";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "mysql2",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  tablesFilter: ["storafile2_*"],
} satisfies Config;
