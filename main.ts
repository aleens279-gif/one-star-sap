// One Star, Written in Sap — one line out to /output/entry.txt
// Limit is 279 chars; this line is 171. No trailing newline on the file.
import { mkdirSync, writeFileSync } from "node:fs";

// Chopped into six short chunks; the join puts the spaces back in.
const PARTS = [
  "One star. I tried",
  "to write this review in sap, but",
  "the tree took three hours,",
  "the ants gave it two stars,",
  "and the bark is still buffering.",
  "Would not photosynthesize again.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
