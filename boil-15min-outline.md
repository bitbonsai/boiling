# Boiling the ocean

## How to build platforms and do what seems impossible with Claude Code

### Audience promise

In 15 minutes, people will learn how to approach work that feels too large, while keeping scope, quality, and their own understanding under control.

### What people should leave with

1. **Plan:** turn ambitious ideas into small, inspectable units of work.
2. **Preserve:** give agents durable context without carrying an entire project history into every session.
3. **Prove:** require evidence from code, tests, reviews, and real users.
4. **Stay in control:** use parallel agents without outsourcing understanding.
5. **Build for adoption:** make powerful products easy, convenient, and fun.

## 15-minute outline

### Beat 1, 0:00–5:15 | Wonder → friction → scale

#### 0:00–1:15 | Hook and introduction

- Introduce Mauricio: Design Engineer at Miro and creator of an internal app-hosting platform.
- Quick show of hands: designer, PM, engineer, AI coding tool user.
- Define “boiling the ocean.”

> **Boil the ocean** *(idiom)*  
> To undertake a project whose scope is so vast that completing it would be impractical, regardless of available people or resources.

**Audience gets:** central question: can agents make an impractically large project tractable?

#### 1:15–3:00 | Creating became easy, sharing did not

- Miro designers began turning ideas into interactive software with AI coding tools.
- `localhost:3000` feels magical.
- A working local prototype is still trapped on one computer.
- Existing platforms are good tools designed around different constraints.
- Miro needed a simple workflow, approved infrastructure, secure credentials, governed data, and clear ownership.

> “One does not simply share localhost.”

**Audience gets:** platform opportunities often appear in the friction after a new capability becomes easy.

#### 3:00–4:00 | Demo the desired experience

- Prerecorded split-screen video.
- Prompt creates app.
- Skill publishes it.
- Browser opens secure live URL.
- End by zooming into URL.

**Audience gets:** concrete outcome before implementation detail.

#### 4:00–5:15 | Reveal the ocean

- Show platform capabilities around the platform: Kubernetes, routing, GitHub, authentication, secrets, deploy queue, framework detection, observability, backups, and CI/CD.
- Conventional estimate: 5–6 experienced engineers for 9–12 months.
- Actual path: MVP in 3 weeks, broader product in about 2 months, one design engineer with support from one SRE.
- Phrase estimate as an informed comparison, not a measured counterfactual.

> That was the ocean.

**Audience gets:** credible scale and reason to care about the method.

---

### Beat 2, 5:15–10:05 | Method → acceleration → calibration

#### 5:15–6:35 | Plan before coding

- Human owns the idea, desired experience, and tradeoffs.
- Ask Claude to challenge assumptions and wait before coding.
- Start with three small documents:
  - `PITCH.md`: why, what, and definition of done.
  - `EXPERIENCE.md`: feel and product principles.
  - `ARCHITECTURE.md`: feasibility, constraints, and unknowns.
- Personal working split: 70% planning, 20% tinkering, 10% fixing.

**Audience gets:** reusable planning structure for ambitious work.

#### 6:35–7:45 | Work in small plans

- Every meaningful change gets its own Markdown plan.
- `.plans/INDEX.md` tracks active and queued work.
- A new idea during execution becomes a separate indexed plan for later.
- Scope stays focused while ideas remain preserved.

> One change = one plan.

**Audience gets:** a practical defense against scope creep and context drift.

#### 7:45–8:15 | Give context layers

- `AGENTS.md`: current truth.
- `.plans`: current intent.
- Memory: focused lessons.
- `.archives`: searchable history.
- Keep active context below roughly 40–50% as a personal heuristic, then wrap and restart from focused documentation.

**Audience gets:** a context architecture they can copy immediately.

#### 8:15–9:25 | Plan agent teams before running them

- Most capable model acts as lead planner.
- It divides work, maps dependencies, chooses model and effort, and defines verification.
- Show 14-agent terminal screenshot.
- More agents create coordination and review cost.
- Current approach: generate an inspectable TypeScript workflow, review it, limit concurrency, then run.

> Plan → inspect → run → synthesize → verify

**Audience gets:** safer multi-agent parallelism than launching an uncontrolled swarm.

#### 9:25–10:05 | Brief caution: understanding must keep up

- Accepted plausible suggestions without fully understanding them.
- Confusion compounded and 30 commits had to be reverted.
- Treat this as a short calibration lesson, then return to method.

> Never merge faster than you understand.

**Audience gets:** sustainable speed requires a current mental model.

---

### Beat 3, 10:05–15:00 | Control → learning → invitation

#### 10:05–11:35 | Preserve understanding and require proof

- Skim every diff. Inspect architecture, security, data, and unfamiliar code more deeply.
- If a change cannot be explained, ask Claude to explain it, simplify it, or stop.
- The 30-commit revert is a brief cautionary sidenote, not the talk's central failure story.
- Write critical invariants in accessible language with their reasons: “Keep the old version live until the new one works.”
- Give every project a short verification loop: test, typecheck, build, screenshot, or runnable scenario.
- For risky work, verify failure and recovery too.

> Plan → build → verify → review → learn

**Audience gets:** concrete guardrails for staying in control.

#### 11:35–12:35 | Make learning compound

- An incident should leave a fix, test, and written rule.
- Turn repeated workflows into skills with context, steps, safety checks, and a definition of done.
- Every session should improve both product and instructions for changing product.

> Bug → fix → test → rule

**Audience gets:** a way to make future sessions safer and more capable.

#### 12:35–13:30 | Adoption is the next proof

- Release early and listen to first users.
- Confusion, requests, and workarounds reveal what product needs next.
- Make product easy to understand, convenient to use, and fun enough that people return.

**Audience gets:** reminder that technical completeness is not product success.

#### 13:30–15:00 | Five actions and closing

1. Keep Markdown beside code.
2. Work through small indexed plans.
3. Wrap before context becomes noisy.
4. Verify every meaningful change.
5. Release early and listen.

[Wrap](https://github.com/bitbonsai/wrap) can optionally preserve documentation, learnings, and a handover at session end.

> The ocean did not get smaller. Planning, durable context, and verification became the raft that helped me cross it.

### Final slides

> **Plan what you will cross. Preserve what you learn. Prove every step.**
>
> **Build your raft. Cross your ocean.**
