# Boiling the Ocean

**How to build platforms and do what seems impossible with Claude Code**
Mauricio Wolff · Claude Community Amsterdam · 12 August 2026

If you couldn't make it to the talk, this is the whole thing in my own words. Grab a coffee, it's a ten minute read.

---

## Who I am, who this is for

This is the story of how I used Claude Code to build a platform that looked far too large for one person.

I'm Mauricio Wolff, a Staff Designer at Miro. I build things. Here I want to tell you how Claude Code multiplied my experience into something one person doesn't usually ship: a whole platform.

If you've used AI tools to build beyond your own role, this story is for you.

You've probably heard the idiom "boil the ocean": taking on a project whose scope is so vast that finishing it would be impractical, no matter how many people or resources you have. It's usually a useful warning. This is what happened when I ignored it, and which practices kept ambition from turning into chaos.

## Chapter one: The story

Let me tell you what happened at Miro.

Around one year ago, designers here started to prototype with AI tools like Lovable and Replit. Then we got access to Claude Code. Being able to use powerful models on your own machine and prototype locally was a game changer, and things took off.

Everybody remembers the first time they opened localhost on their own machine. Feels magical. It's like having the whole internet on your computer!

But other people cannot use that URL. I've seen it a few times: someone shares on Slack "hey, check this awesome thing I did http://localhost:3000"... 🤦‍♂️

There are many solutions for sharing apps or prototypes: Lovable, Replit, Vercel, Netlify, Railway, Fly.io, Cloudflare. They are good tools, but they were designed around different needs and constraints than ours. We needed a simple workflow for non-engineers, approved infrastructure, secure credentials, governed data, and clear ownership. Existing options solved parts of this, but not the complete experience we wanted.

The goal was simple: create something on your computer, publish it in seconds, and receive a secure URL anyone at Miro could open. No deployment expertise, no config, and no new vendor account.

In the live demo, an app is generated and runs on localhost, then published through our platform, Vibelab, and opened at a secure company URL. The whole thing takes 215 seconds.

Making publishing feel that simple required hiding substantial platform complexity. Behind the simple experience sit Kubernetes, dynamic routing, GitHub integration, authentication, secrets, deployment queues, framework detection, observability, database recovery, and CI/CD. All of it needs to be fast and transparent for the user.

That platform was my ocean: a useful product whose implementation seemed far beyond reason.

My conservative estimate for building what we wanted in production, conventionally, is five to six experienced engineers working for nine to twelve months. To be clear, that's an informed estimate rather than a measured counterfactual. In any case, unfeasible.

But in reality, I released the MVP in three weeks with a team of one design engineer (myself) + Claude Code + one SRE supporting. The broader product followed in about two months. Six months in, we have more than 600 apps deployed and around 1400 deployments per week.

## Chapter two: How

Building ambitious software with agents starts with how the work is framed, planned, and remembered.

One disclaimer before the list. This isn't a universal recipe. It's an account of practices that worked for me, offered so you can adapt the useful parts to your own constraints.

### 1. The idea comes from you

Claude can refine and challenge an idea, but a human must first decide what matters, which problem deserves solving, and what experience the product should create. In this case, it was a novel way to deploy web apps faster than any other method.

### 2. Edit your global CLAUDE.md

Claude Code likes to write code ASAP. I counter it with simple planning instructions that apply to any project, at user level. I keep them in AGENTS.md to stay compatible with other harnesses. Mine looks roughly like this:

```markdown
# Planning rules
- Challenge my assumptions.
- Do not code yet.
- One change at a time.
- Explain the why, not just what, in terse form.
- Never speculate about code you haven't read.
- Prefer editing files over creating new ones.
- Check in before major changes.
```

### 3. Working ratio: plan more, fix less

My rough working split is seventy percent planning, twenty percent tinkering (iterating, improving, tweaking), and ten percent fixing. The more you plan, the less you fix. Because I'm a designer, tinkering is almost mandatory.

### 4. Spec it out

I begin with three small documents:

- **PITCH.md** defines why, what, and done.
- **EXPERIENCE.md** defines how the product should feel.
- **ARCHITECTURE.md** tests feasibility and exposes what I still need to learn.

They need to be super short, so I can pull them into context whenever I need.

### 5. Plan every change

Every feature or meaningful change gets its own small Markdown plan in `.plans`, versioned with the code: current behavior, the change, and the files it touches. One change equals one plan. Old plans are committed in `.archives`.

### 6. Protect focus

When a new idea appears during execution, I create a one-line plan, add it to the index for later, and continue with the current one. This is also committed, so the idea survives without expanding the current scope.

### 7. Split your context

Right context, right moment:

- **Truth** lives in `AGENTS.md`: current architecture, commands, constraints, and invariants.
- **Intent** lives in `.plans/`: the immediate things to do.
- **Learning** lives in memory, which comes from the harness: focused lessons.
- **History** lives in `.archives/`: completed plans and past decisions.

### 8. Check your context size

I try to keep active context below roughly 40 to 50 percent. This avoids the dumb zone, regardless of context size. When context grows noisy, I preserve a handover with a skill like [/wrap](https://github.com/bitbonsai/wrap), clear the session, and restart.

### 9. Agent teams and workflows

For larger changes, I ask the most capable model to act as the lead. It divides the goal into tasks, maps dependencies, chooses a model and effort level for each task, and defines how the results will be verified.

I once ran fourteen agents in parallel. I've been working with Agent Teams since they were experimental in Claude, and until recently that was how I delivered this product.

But now Claude Code has multi-agent workflows: a TypeScript file where you can read and edit the tasks, models, effort, and dependencies in a deterministic way, before any agent touches the code.

### Recap

Nine practices carry the method: own the idea, keep durable instructions, plan more than you fix, spec before building, plan every change, index new ideas, layer your context, keep it fresh, and plan agent teams and workflows before running them.

## Chapter three: Learnings

Every ambitious build teaches lessons the hard way. These are mine.

**Never merge faster than you understand.** At one point I accepted Claude's suggestions without fully understanding them. Each change looked reasonable on its own. Confusion compounded until I had to revert thirty commits. Make sure you know what the system does at all times. Now I skim every diff and inspect architecture, security, data, and unfamiliar code more deeply. If I cannot explain what changed and why, I ask Claude to explain it and simplify it until I understand what's in the system.

**Write down what must stay true.** Some conditions must remain true. Write these critical invariants down with their reasons. A written rule stops a sensible-looking cleanup from causing downtime.

**Incidents become memory.** Incidents will happen, and you will jump in to put out fires. Each fire should leave behind a code fix, a test, and a written rule, so the next session begins with the lesson already learned.

**Doing the same thing twice? Make a project skill.** Skills can live inside the project folder, so they travel with the repo and everyone picks them up.

**Tests are silver, feedback is gold.** Tests show that software works; a product succeeds only when it's useful to people. Release early and listen closely: first users will reveal what's missing. Fix and improve fast.

**Make it easy, convenient, and fun.** Your products should be easy, offer a more convenient way to achieve something, and if possible, be FUN.

## Closing

Claude Code did not reduce the platform's scope or remove its complexity. What changed is the way I worked: planning, durable context, and verification formed a raft that made it possible to cross that ocean. "Boil" was a bit of a dramatic effect, but I hope you get the point.

Thank you for following this story. If you wanna know more, find me at [mauriciowolff.com](https://mauriciowolff.com).

**Mauricio Wolff** · [@bitbonsai](https://github.com/bitbonsai)
