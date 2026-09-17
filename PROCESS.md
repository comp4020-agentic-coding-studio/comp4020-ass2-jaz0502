# Process overview

## What I built

I built the course site for SLOP4605, “One Shot, No Refunds: The Design of Captive Public Machines” — a fictional twelve-week course studying public machines that give a stranger one attempt at a transaction they can't opt out of: parking meters, vending machines, ATMs, kiosks. It draws on UX and human-centred design, but is more specific than a general “bad design” class — its recurring question is who benefits when the design is bad, applied to a specific machine each week.


## How I got here

I started by brainstorming serious and satirical course ideas. An early
direction — teaching how to design bad UX — felt too close to a field UX and
human-centred design already cover. I narrowed the subject to one-shot,
captive-user machines: interfaces a stranger meets once, with little chance
to practise, recover, or walk away. That narrowing, and the question it
produced, became what every week had to answer about a different machine,
rather than a theme repeated twelve times.
[`59b1398`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-jaz0502/commit/59b1398)

The initial risk was sounding like just Don Norman's principles —
affordances, feedback, mapping — pointed at different objects. Week 1's
first deck gestured at that difference but wasn't specific, arguing against
usability heuristics in the abstract. The breakthrough was presenting the
idea from a different angle: engage with his toolkit before dismissing it.
I added a slide grounding Norman's real vocabulary — affordances,
signifiers, feedback, mapping — against a bad parking meter, showing what it
does and doesn't diagnose. His principles explain why a design fails to
communicate, but none of them ask who wrote the spec, and what that person
needed the machine to do that had nothing to do with you. Earning that pivot
by engaging with the real framework first is what turned "not another UX
course" from an instinct into the question the whole semester asks instead
of his: not "is this discoverable," but "who profits when it isn't." [`65ad479`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-jaz0502/commit/65ad479)

I then planned the course before asking the agent to generate the site
content. It fixed each week's machine, the lecture/session relationship, the
recurring question, and the assessment progression.
[`7bdce60`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-jaz0502/commit/7bdce60)
This changed what I accepted from the agent: content naming a machine but
drifting into generic UX commentary wasn't sufficient, since specificity was
a core attribute. The agent generated and extended material, but against a
structure I'd already decided on.

I encoded some of these decisions into the harness and left others
deliberately as judgement. Naming one real machine each week became a rule in
CLAUDE.md, but not an automated test, since a test cannot meaningfully
distinguish a specific, well-chosen example from a lazy one. The recurring
incentive thread could be checked structurally, though:
`spec/incentive-check.test.ts` requires at least ten incentive-tagged
teaching nodes across the semester, with coverage at least once a fortnight.
[`b91355b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-jaz0502/commit/b91355b)
Whether a given week's argument was actually insightful, or whether the tone
held across twelve weeks, stayed outside the check and was left for critique.

The visual design followed the same split: restyling was optional, so I
treated it as something to test and critique, not a requirement to satisfy.
An "exhibit" label marking the physical object each week's argument turns on
seemed promising, but didn't fit the wider tone and was removed.
[`02af5fb`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-jaz0502/commit/02af5fb)/[`86e2fdf`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-jaz0502/commit/86e2fdf)
What remained was the receipt-and-ledger system, since it became connected to
the course itself rather than functioning as decoration — receipt-like
blocks and transaction-oriented typography reinforcing the course's interest
in evidence and trust.
[`eebe163`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-jaz0502/commit/eebe163),
[`43e3860`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-jaz0502/commit/43e3860)
