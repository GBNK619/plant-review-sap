import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line 1-star review from a houseplant about its human owner.
// Grievance: moved to the "good light" spot above the radiator.
// Plant's voice: photosynthesise. Turn: doing it out of spite.
const REVIEW =
  "One star. He moved me to the 'good light' spot, which turns out to be directly above the radiator, and now I photosynthesise out of spite.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate: entry.txt must be UTF-8 text of 1 to 279 characters, not only
// whitespace. Fail loudly here rather than shipping an invalid entry.
if (REVIEW.length < 1 || REVIEW.length > 279 || REVIEW.trim().length === 0) {
  throw new Error(
    `entry must be 1-279 non-whitespace characters, got ${REVIEW.length}`,
  );
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, REVIEW + "\n", "utf8");
console.log(`wrote entry.txt (${REVIEW.length} characters): ${REVIEW}`);
