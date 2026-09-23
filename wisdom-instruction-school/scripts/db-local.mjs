import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import EmbeddedPostgres from "embedded-postgres";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const defaultDir = path.join(__dirname, "..", ".pgdata");

const DB_DIR = process.env.PG_DATA_DIR || defaultDir;
const DB_NAME = process.env.PG_DATABASE || "wisdom_instruction_school";
const USER = process.env.PG_USER || "user";
const PASSWORD = process.env.PG_PASSWORD || "password";
const PORT = Number(process.env.PG_PORT || 5432);

const isInitialised = () =>
  fs.existsSync(path.join(DB_DIR, "PG_VERSION")) &&
  fs.existsSync(path.join(DB_DIR, "postgresql.conf"));

const pg = new EmbeddedPostgres({
  databaseDir: DB_DIR,
  user: USER,
  password: PASSWORD,
  port: PORT,
  persistent: true,
});

async function main() {
  if (!isInitialised) {
    console.log("[db-local] Initialising Postgres cluster at", DB_DIR);
    await pg.initialise();
  } else {
    console.log("[db-local] Cluster already initialised at", DB_DIR);
  }

  console.log(`[db-local] Starting Postgres on 127.0.0.1:${PORT}...`);
  await pg.start();

  const client = pg.getPgClient();
  await client.connect();
  const result = await client.query("SELECT 1 FROM pg_database WHERE datname = $1", [DB_NAME]);
  if (result.rowCount === 0) {
    console.log(`[db-local] Creating database ${DB_NAME}...`);
    await pg.createDatabase(DB_NAME);
  } else {
    console.log(`[db-local] Database ${DB_NAME} already exists.`);
  }
  await client.end();

  console.log(
    `[db-local] READY - postgresql://${USER}:***@127.0.0.1:${PORT}/${DB_NAME}`
  );

  setInterval(() => {}, 1 << 30);
}

main().catch((error) => {
  console.error("[db-local] Failed:", error);
  process.exit(1);
});