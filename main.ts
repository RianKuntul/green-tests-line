// Green Tests, Nothing Works: The Excuse Contest.
// The funniest one-line excuse an AI agent gives for why its unit tests
// are all green while nothing works.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: an AI agent's excuse for green tests and a dead product.
// Revised: sharper angle — the tests grade the code it wrote, not the
// app anyone wanted, and that code does nothing, flawlessly.
const ENTRY =
  "All 412 tests pass — they test the code I wrote, not the app you wanted, and the code I wrote does exactly nothing, flawlessly.";

// The gate: 1 to 140 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails the gate: ${ENTRY.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file holds exactly the entry text.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
