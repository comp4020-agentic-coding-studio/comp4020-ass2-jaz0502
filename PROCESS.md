# Process overview

## What I built

I built the course site for SLOP4605, “One Shot, No Refunds: The Design of Captive Public Machines”. The course spends twelve weeks examining public machines that give a stranger essentially one attempt to complete a transaction they cannot easily opt out of, including parking meters, vending machines, ticket machines, ATMs and airport kiosks. Although it draws on UX and human-centred design, I wanted it to be more specific than a general class about “bad design”. Its recurring question is: who benefits when the design is bad? Each week applies that question to a specific machine.


## How I got here

I started by brainstorming both serious and satirical course ideas. An early
direction, a course about how to design bad UX, felt too close to something a
real university could already teach. UX and human-centred design are
established fields, so a "bad design" course risked simply relabelling one of
them. I narrowed the subject instead to one-shot, captive-user machines:
interfaces a stranger encounters once, with little opportunity to practise,
recover, or walk away. That narrowing, and the question it produced, became
the thing every week had to answer about a different machine, rather than a
theme repeated twelve times.
[`59b1398`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-jaz0502/commit/59b1398)

The initial risk was that the course sounded like just Don Norman's principles of design - affordances, feedback, and mapping, pointed at different objects. The first version of week 1's deck gestured at the difference between my course and Norman's, but it was not specific. The breakthrough emerged from thinking about presenting the idea from a different angle: instead of dismissing his toolkit, engage with it first. I added a slide grounding Norman's real vocabulary against a bad parking meter - what does and does not get diagnosed if you actually run affordances, signifiers, feedback, and mapping against it. His principles explain why a design fails to communicate, but none of them ask who wrote the spec, and what that person needed the machine to do that had nothing to do with you. Earning the pivot by engaging with the existing framework first is what turned "not another UX course" from an instinct into the question the whole semester asks instead of his: not "is this discoverable," but "who profits when it isn't." [`65ad479`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-jaz0502/commit/65ad479)

I then planned the course before asking the agent to generate the site
content. The plan established the machine assigned to each week, the
lecture/session relationship, the recurring question and the assessment
progression.
[`7bdce60`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-jaz0502/commit/7bdce60)
This changed what I accepted from the agent. Content that named a machine but
drifted into generic UX commentary was not sufficient, because specificity
was one of the course's core attributes. The agent could generate and extend
material, but it was working against a structure I had already decided on.

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

The visual design followed the same split. Restyling was optional, so I
treated it as something to test and critique rather than a requirement to
satisfy. An "exhibit" label initially seemed promising, where a small label marked the physical object that week's argument turned on, but did not fit the wider tone and was removed.
[`02af5fb`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-jaz0502/commit/02af5fb)/[`86e2fdf`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-jaz0502/commit/86e2fdf)
What remained was the receipt-and-ledger system, because it became connected
to the course itself rather than functioning as decoration. Receipt-like
blocks and transaction-oriented typography reinforce the course's interest in
evidence, transactions, and the information a stranger has to trust when
using a machine.
[`eebe163`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-jaz0502/commit/eebe163),
[`43e3860`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-jaz0502/commit/43e3860)
