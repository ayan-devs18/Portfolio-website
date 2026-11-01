// Copies the static build (out/) into the folder Netlify serves, so the
// live site only changes when this is run and committed.
import { cpSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";

const target = fileURLToPath(new URL("../../Aayan Qamar-Portfolio/", import.meta.url));
const source = fileURLToPath(new URL("../out/", import.meta.url));

rmSync(target, { recursive: true, force: true });
cpSync(source, target, { recursive: true });
console.log(`Published ${source} -> ${target}`);
