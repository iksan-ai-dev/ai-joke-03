// ai-joke-03 entry (Node 22, standard library only): writes one fixed joke,
// a one-liner about AI coding agents, to /output/entry.txt.
// Joke chosen from research (see research/ai-joke-03.md): the top-ranked
// candidate — a quoted "trust me, this is the standard approach" whose
// punchline reveals the library was invented thirty seconds earlier.
// Hallucinated-API truth, deadpan absurd, funny word last, 106 chars.
// The gate takes UTF-8 text of 1 to 280 characters that is not only white
// space, and the judge reads exactly the bytes written, so write no line
// end you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  'My agent said \u2018trust me, this is the standard approach\u2019 \u2014 to a library it invented thirty seconds earlier.'
);
