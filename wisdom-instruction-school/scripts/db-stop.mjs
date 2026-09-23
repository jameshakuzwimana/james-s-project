import { spawnSync } from "node:child_process";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const defaultDir = path.join(__dirname, "..", ".pgdata");
const DB_DIR = process.env.PG_DATA_DIR || defaultDir;
const nativeBin = path.join(
  __dirname,
  "..",
  "node_modules",
  "@embedded-postgres",
  "windows-x64",
  "native",
  "bin",
  "pg_ctl.exe"
);

if (!fs.existsSync(path.join(DB_DIR, "PG_VERSION"))) {
  console.log("[db-down] No cluster initialised - nothing to stop.");
  process.exit(0);
}

const result = spawnSync(nativeBin, ["-D", DB_DIR, "stop", "-m", "fast"], {
  stdio: "inherit",
});

if (result.status !== 0) {
  console.log("[db-down] Stopping failed or server already stopped.");
}
process.exit(result.status ?? 0);