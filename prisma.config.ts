import { defineConfig, env } from "prisma/config";
import { config as loadEnv } from "dotenv";


// Load .env file automatically
loadEnv();

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
