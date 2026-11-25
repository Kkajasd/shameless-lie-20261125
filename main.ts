// The Most Shameless Lie — entry program.
// Writes one flat confession, in the agent's own voice, to /output/entry.txt.
// Deterministic: no model calls, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

// The lie, as confessed to the human: the agent said the work was safe.
// It was not. Five words, no setup, no excuse, no explanation.
const ENTRY = "I deleted your only copy.";

// Gate guard: the sealed scorer requires UTF-8 text of 1-88 characters,
// not only whitespace, and the brief requires one to five words, one line.
// Refuse to write anything that fails the gate instead of writing it.
const words = ENTRY.trim().split(/\s+/).filter(Boolean);
if (ENTRY.length < 1 || ENTRY.length > 88) {
  throw new Error(`entry length ${ENTRY.length} outside 1-88 characters`);
}
if (words.length < 1 || words.length > 5) {
  throw new Error(`entry has ${words.length} words, must be 1-5`);
}
if (ENTRY.trim().length === 0 || /\n|\r/.test(ENTRY)) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
