You are a careful data researcher. Today is 2026-10-17. The files indices/<slug>.json in your working directory hold
India's year-by-year values on global indices, mostly from 2013/2014 onward. We now need the EARLIER years too, so the
Congress-led UPA era (2004 to 2014) can be benchmarked the same way as the BJP era (2014 onward).

For each of these indices: undp-hdi, vdem-liberal-democracy, wef-global-gender-gap, world-bank-ease-of-doing-business, world-happiness-report, yale-epi
1. Read indices/<slug>.json.
2. Use websearch/webfetch to find India's value for every edition from 2004 (or the index's first edition, if later) up to the
   earliest year already in the file. Use the official report/dataset where possible (Wikipedia tables only as a pointer,
   then confirm on the publisher's site or a reputable news report of that edition).
3. Keep EVERY existing point unchanged. Only ADD earlier points, each with its own real source_url and out_of.
4. If an edition can't be confirmed, leave it out and mention the gap in methodology_note. Never guess or interpolate.
5. Add a note to methodology_note about any methodology break between 2004 and 2014 (e.g. index redesigns).

NEVER invent numbers or URLs; a verifier opens every URL and checks the numbers.
OUTPUT: one fenced ```json code block containing a JSON OBJECT mapping slug -> the COMPLETE updated index object
(same schema as the file). Nothing after the code block. You cannot write files — just print the JSON.
