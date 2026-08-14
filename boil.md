# Boiling the ocean

## how to build platforms and do what seems impossible with Claude Code

### Outline

#### Hands

- Who here is a designer? Product manager? Engineer?
- Who has built something with an AI coding tool?
- Who knows what “boiling the ocean” means?

#### Definition

> **Boil the ocean** *(idiom)*  
> To undertake a project whose scope is so vast that completing it would be impractical, regardless of available people or resources.

### Beat 1: Context

Here at Miro, designers gained access to AI coding tools, and ideas started becoming real, interactive prototypes at remarkable speed.

We started with tools like Lovable and Replit. Then we got access to Claude Code, and things took off. Being able to use powerful models and prototype locally was a game changer.

If you have started this journey, you probably remember the magical moment when you ran a web server on your computer and saw your idea working.

> Screen showing `localhost:3000` with confetti

Then came the next question:

> How do I share this?

> Boromir meme: “One does not simply share localhost.”

There are plenty of answers: Lovable, Replit, Vercel, Netlify, Railway, Fly.io, Cloudflare, or even a temporary tunnel.

> Logos: Lovable, Replit, Vercel, Netlify, Railway, Fly.io, Cloudflare

These are good tools. They were optimized for different constraints.

Some introduced Git workflows: repositories, pull requests, merge conflicts, CI, and preview deployments. Powerful concepts, but substantial overhead for someone trying to share an idea. I once watched a designer explain this workflow to other designers. Their faces said everything.

Others introduced external infrastructure, credentials, billing, data storage, or vendors outside our approved environment. That raised questions about security, data governance, procurement, and infrastructure ownership.

> Security and governance stamp over logos

Container platforms such as Fly.io could work, but provisioning and operating infrastructure per prototype was heavier than our use case required.

We wanted something different:

> Create something locally, publish it in seconds, and receive a secure URL that anyone at Miro can open.

> Video with a vibelab app being created and deployed, generation accelerated, half the screen with terminal, half with browser. at the end, zoom in the url
> Flow: User prompts, Ai generates and pushes to GitHub. In the other half user clicks new, paste the repo url, deploys, opens site. Or just skill on terminal, site published on the side (at the end of the prompt, ask the skill to deploy and open browser)

No deployment expertise required. No new vendor account. Infrastructure already approved by Miro.

That simple sentence concealed a **platform-sized** problem.

> Slide with honeycomb tiles fitting together, vibelab logo in the middle: Kubernetes, dynamic routing, GitHub integration, auth, secrets, deploy queues, framework         detection, dashboards, observability, zero-downtime handovers, SQLite recovery, CI/CD (or maybe a simplified view of the system: web frameworks, github integration, auth, vpn, branch previews, db backup/restore, ai keys management...)

A conservative estimate for a focused, experienced team would be 5–6 engineers for 9–12 months. For the MVP alone: 3–4 engineers for 4–6 months.

Using Claude Code and experimental agent teams, I released the MVP in three weeks as one design engineer. The full product followed in two months, with support from one SRE.

> That was the ocean

### Beat 2: How

Disclaimer: this is not a recipe. I want to show what worked for me, what I learned, and which practices you might reuse.

> Disclaimer message

#### The idea needs to come from you

Claude can be awesome to refine ideas, but the kickoff needs to be human. I had a novel idea on how to deploy apps without containers, immediately started to brainstorm with Claude how that would be viable.

#### Tell Claude to challenge you and wait before coding

Claude Code tends to be proactive. During planning, explicitly ask it to challenge your assumptions and wait before implementing.

#### Save your plans as small .md files

##### The Pitch

I did go back and forth on these plans for a few days. I started with a PITCH, which is a document with a one-liner about the project (From idea to shared link, in seconds. Secure, no dev-ops, no configs). Then Why, What and DoD. Some people would call it PRD, but I didn't put requirements here. I want to be able to bring it to context whenever I needed.

##### Experience

I'm a designer, and I believe the most important part of any product is the user experience. How should the product feel? Which ethos and principles should guide design decisions? Writing this down makes later decisions easier.

##### The architecture

Here's where Claude helped me most. I had a clear idea, but little knowledge of Kubernetes or how to implement it in Miro's infrastructure. I spent a few days learning, researching, and building it.

> Takeaway: learning what you don't know is the key. Don't just accept Claude's answers without understanding it deeply.

##### Key prep: CLAUDE.md

My `CLAUDE.md` is very simple: it points to `AGENTS.md`. That file works with other coding agents too. A shared standard also makes adversarial reviews with other models easy, effective, and fun.

##### AGENTS.md 

agents.md is living system memory: architecture, constraints, commands, and failures. Every session left the system easier and safer for the next session to change.

##### .plans, memory, and archives

I work in plans. Every change or feature gets a small Markdown file in `.plans`, checked into the repo and easy to bring into context. An index says what is active and what comes next.

This also protects focus. If a new idea appears during execution, I do not add it to the current task. I ask Claude to create another plan and put it in the index for later. The idea is preserved without expanding scope or interrupting the work in progress.

When work is complete, the plan moves to `.archives`. The history stays searchable without filling the agent's active context.

Claude Code also keeps project memory. This is where small lessons accumulate: preferences, corrections, failed approaches, and details worth remembering next time.

I think of these as layers:

- `agents.md` is current truth: how the system works today.
- `.plans` is current intent: what we are changing and why.
- `Memory` is learned experience: what Claude should remember from previous sessions.
- `.archives` is history: completed plans and old decisions we may need to investigate later.

> Slide: Current truth / Current intent / Learned experience / Searchable history

This separation matters. Loading all history every time would create noise. Deleting it would make us repeat mistakes. Keep current context small and history available.

My `agents.md` is only about 340 lines. The archive has nearly 5,000 lines, and project memory contains more than 170 focused notes. Claude does not need all of that at once. It needs the right layer at the right moment.

#### Plan the agent team before running it

For larger changes, I ask the most capable model to act as lead. It breaks the goal into tasks, identifies dependencies, assigns the right model and effort to each task, and defines how every result will be verified.

Independent tasks can run in parallel. Dependent tasks stay ordered. Agents can investigate architecture, implementation, tests, security, or user experience, then a lead agent combines and reviews their work.

> Screenshot: terminal with 14 agents working in parallel

This looks impressive, and it was useful while I was learning. It also taught me that more agents do not automatically produce better work. They can duplicate effort, make conflicting changes, and create more output than one person can review.

I now prefer smaller, inspectable workflows. The planning model generates a TypeScript workflow first. I can read the task graph, model choices, effort levels, dependencies, and checks before anything runs. Then I limit concurrency and add review points between stages.

> Slide: Plan → inspect workflow → run bounded parallel tasks → synthesize → verify

My rough split is:

- **70% planning:** understand the problem, divide work, define constraints and proof.
- **20% iterating:** run focused tasks, review results, and adjust.
- **10% fixing:** resolve integration issues and anything verification catches.

Parallelism is the accelerator. Nowadays you can leave a model working for hours while you're busy with the next plan.

#### Never outsource your understanding

At one point, I started accepting Claude's suggestions without fully understanding them. Each change looked reasonable, so I kept going. Confusion compounded until I no longer understood my own system.

I had to revert 30 commits.

> Slide: `git revert` × 30

That was painful, but it gave me a rule: never merge faster than you can understand.

I do not read every generated line with equal attention. I skim every diff, check the shape of the change, and slow down around architecture, security, data, and unfamiliar code. If I cannot explain what changed and why, I ask Claude to explain it, simplify it, or stop.

Your job changes from typing every line to maintaining a reliable mental model of the system. Claude can write the code. You still need to understand what you are building.

#### Write down critical stuff

Some rules are more important than implementation details. I call them critical stuff: conditions that must remain true for the system to be safe.

For example, Vibelab keeps an old runner serving an app until its replacement is healthy. Only one handover function can change which runner owns that app. 

An agent might otherwise make a reasonable-looking cleanup that causes downtime or data loss. The invariant records both the rule and the reason it exists.

> “Draining pods stay routable until replacement is healthy.”
>
> “Only `performHandover` may change the runner assignment.”

##### The hard truth

The best entries in `agents.md` often came from incidents. A bug gets fixed in code, covered by a test, and captured as a rule. The next session starts with the lesson already learned. 

##### User feedback = gold

That's why you should release as soon as possible and iterate quickly. More users reveal more glitches and better opportunities. Trying to make everything perfect before release can delay learning for weeks or months. Better done than perfect.

#### Give Claude a way to prove its work

Claude is fast enough to create bugs faster too. Speed only compounds when feedback is fast and trustworthy.

Give every project a **short verification loop**. That might be a test, a typecheck, a build, a screenshot, or one command that exercises the feature. For user-facing work, open it and use it. For risky work, test failure and recovery, not only the happy path.

> Plan → implement → verify → review → learn

Ask Claude to show evidence: which checks ran, what changed, and what remains uncertain. For important changes, ask another agent to review from a different perspective. The goal is not agreement. The goal is finding what the first pass missed.

Humans still own the goal and final tradeoffs. Agents increase how much we can explore and verify before making that decision.

#### Turn repeated work into skills

When you explain the same workflow twice, consider making it a skill or command.

A good skill contains the context, steps, safety checks, and definition of done for a repeated task. It could publish a release, review accessibility, investigate a bug, prepare a report, or update documentation.

Then you can ask for the outcome instead of rewriting the procedure every time. Results become more consistent, and hard-earned safeguards stop depending on memory.

#### Documentation is part of the product

Every session should leave two things behind: a better product and better instructions for changing that product.

Code shows what the system does. Documentation preserves intent, constraints, failures, and ways to verify future changes. This is how an agent improves across sessions instead of starting over in every new chat.

### Beat 3: What you can do

Start with one problem that feels slightly too large. Define the smallest version worth using, then prepare to learn constantly. You will learn about the problem, the technology, your users, and how to work with Claude.

A few practices made the biggest difference for me:

1. **Keep Markdown files close to the code.** Use `AGENTS.md` for current truth, small files for plans, and an archive for history.
2. **End every session by preserving what changed.** Update documentation, record lessons, and leave a handover for the next session. You can do this manually or use a tool such as [Wrap](https://github.com/bitbonsai/wrap).
3. **Keep context below roughly 40–50%.** As context fills, signal gets buried in history. Wrap the session, clear it, and restart with focused documentation.
4. **Release early and listen to your first users.** Their confusion, requests, and workarounds will teach you what the product needs next.
5. **Make the experience easy, convenient, and fun.** Powerful technology matters only when people want to use it.

You do not need perfect documentation on day one. Start small, then write down what you wish Claude had known before each task.

Claude Code did not make the ocean smaller. It gave me a way to cross it through small, verified learning loops.

> Final slide: Keep learning. Keep context fresh. Build something people enjoy using.