# Your harness

A narrow course earns its narrowness by committing to one recurring analytical
question, asked every week, rather than a themed unit that could be renamed
and reused for any topic. SLOP4605's question is "who benefits when the
design is bad?" — not "is this bad design?" That distinction is what keeps
this from being a find-and-replace of a generic UX course: it studies specific
real machines (a named parking meter, not "kiosks in general") and asks who
profits from each one's worst behaviour, every week, all semester.

## Rules for content in this repo

1. Every session or lecture names one specific real machine, not a category
   of machine. Judgement call — not tested.
2. At least one session or lecture per fortnight carries `tags: [incentive]`.
   Checked by `spec/incentive-check.test.ts`.
3. At least 10 nodes carry that tag across the semester. Same file.
4. Sessions and lectures both use `week-01.md`…`week-12.md` filenames, so the
   two collections stay easy to walk in parallel.
5. Assessment weights sum to exactly 100. Checked by `spec/course-spec.test.ts`.
6. Every dated node stays inside `startDate`–`endDate`. Checked by
   `spec/data-integrity.test.ts`.

## Left out on purpose

Some judgements don't reduce to a rule, and forcing them into one would just
mean testing the wrong thing. Left to crit instead, and echoed in
`PROCESS.md`:

- whether a week's machine has quietly drifted back into generic UX
  complaint, rather than a specific incentive claim
- whether an incentive argument is actually good, versus merely attempted
- visual and aesthetic treatment of the site (restyling is optional for this
  assignment)
- tone and register consistency across twelve weeks of copy
