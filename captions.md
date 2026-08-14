# Captions

Source: `deck.js`, `n:` field per slide. Edit here, then sync back.

| # | Slide | Caption |
|---|-------|---------|
| 1 | Cover | This is the story of how I used Claude Code to build a platform that looked far too large for one person. |
| 2 | I'm Mauricio | I'm Mauricio Wolff, a Staff Designer at Miro. I build things. Claude Code multiplied that experience into something one person doesn't usually ship: a whole platform. |
| 3 | Who are you? | If you've used AI tools to build beyond your own role, this story is for you. |
| 4 | Dictionary: boil the ocean | "Boiling the ocean" is usually a useful warning that a project is too large to attempt. This talk explores what happened when I ignored it, and which practices kept ambition from turning into chaos. |
| 5 | Chapter one: The story | To explain what this means, I'll tell you a story about what happened at Miro. |
| 6 | Lovable / Replit | At Miro, around one year ago, designers started to prototype with AI tools like Lovable and Replit. |
| 7 | Then things took off | Then we got access to Claude Code. Being able to use powerful models on your own machine and prototype locally was a game changer, and things took off. |
| 8 | localhost: It works! | Everybody remembers the first time they opened localhost on their own machine... Feels magical. It's like having the whole internet on your computer! |
| 9 | One does not simply share localhost | But other people cannot use that URL. I've seen it a few times: someone shares on Slack "hey, check this awesome thing I did http://localhost:3000"... 🤦‍♂️ |
| 10 | Many ways to deploy | There are many solutions for sharing apps or prototypes. They are good tools, but they were designed around different needs and constraints than ours. |
| 11 | Our constraints | We needed a simple workflow for non-engineers, approved infrastructure, secure credentials, governed data, and clear ownership. Existing options solved parts of this, but not the complete experience we wanted. |
| 12 | Create locally, share in seconds | The goal was simple: create something on your computer, publish it in seconds, and receive a secure URL anyone at Miro could open. No deployment expertise, no config, and no new vendor account. |
| 13 | Demo (215 seconds) | In this demo, an app is generated and runs on localhost, then published through our platform, Vibelab, and opened at a secure company URL. |
| 14 | Simple experience, platform-size problem | Making publishing feel simple required hiding substantial platform complexity. |
| 15 | Honeycomb: behind the experience | Behind the simple experience sit Kubernetes, dynamic routing, GitHub integration, authentication, secrets, deployment queues, framework detection, observability, database recovery, and CI/CD. All of it needs to be fast and transparent for the user. |
| 16 | That was the ocean | This platform was my ocean: a useful product whose implementation seemed far beyond reason. |
| 17 | Conventional estimate | My conservative estimate for building what we wanted in production, conventionally, is five to six experienced engineers working for nine to twelve months. This is an informed estimate, not a measured counterfactual. In any case, unfeasible. |
| 18 | What actually happened | But in reality, I released the MVP in three weeks with a team of one design engineer (myself) + Claude Code + one SRE supporting. The broader product followed in about two months. Six months in, we have more than 600 apps deployed and around 1400 deployments per week. |
| 19 | Chapter two: How | Building ambitious software with agents starts with how the work is framed, planned, and remembered. |
| 20 | Disclaimer | This is not a universal recipe. It is an account of practices that worked for me, offered so you can adapt the useful parts to your own constraints. |
| 21 | 1. The idea | Claude can refine and challenge an idea, but a human must first decide what matters, which problem deserves solving, and what experience the product should create. In this case, it was a novel way to deploy web apps faster than any other method. |
| 22 | 2. Global CLAUDE.md | Claude Code likes to write code ASAP. I counter it with simple planning instructions that apply to any project, at user level. I keep them in AGENTS.md to stay compatible with other harnesses. |
| 23 | 3. Working ratio | My rough working split is seventy percent planning, twenty percent tinkering (iterating, improving, tweaking), and ten percent fixing. The more you plan, the less you fix. Because I'm a designer, tinkering is almost mandatory. |
| 24 | 4. Spec it out | I begin with three small documents. Pitch defines why, what, and done. Experience defines how the product should feel. Architecture tests feasibility and exposes what I still need to learn. They need to be super short, so I can pull them into context whenever I need. |
| 25 | 5. Plan every change | Every feature or meaningful change gets its own small Markdown plan in .plans, versioned with the code. This one is a real plan from the platform: current behavior, the change, and the files it touches. Old plans are committed in .archives. |
| 26 | 6. Protect focus | When a new idea appears during execution, I create a one-line plan, add it to the index for later, and continue with the current one. This is also committed, so the idea survives without expanding the current scope. |
| 27 | 7. Split your context | AGENTS.md stores current architecture, commands, constraints, and invariants. Plans are the immediate things to do. Memory comes from the harness and stores focused lessons. Archives preserve completed plans and historical decisions. |
| 28 | 8. Check your context size | I try to keep active context below roughly 40 to 50 percent. This avoids the dumb zone, regardless of context size. When context grows noisy, I preserve a handover with a skill like https://github.com/bitbonsai/wrap, clear the session, and restart. |
| 29 | 9. Agent teams / workflows | For larger changes, I ask the most capable model to act as the lead. It divides the goal into tasks, maps dependencies, chooses a model and effort for each task, and defines how the results will be verified. |
| 30 | Fourteen agents (tmux) | I once ran fourteen agents in parallel. I've been working with Agent Teams since it was experimental in Claude, and until recently that was how I delivered this product. |
| 31 | workflow.ts | But now Claude Code has multi-agent workflows: a TypeScript file where you can read and edit the tasks, models, effort, and dependencies in a deterministic way. |
| 32 | Recap | Nine practices carry the method: own the idea, keep durable instructions, plan more than you fix, spec before building, plan every change, index new ideas, layer your context, keep it fresh, and plan agent teams/workflows before running them. |
| 33 | Chapter three: Learnings | Every ambitious build teaches lessons the hard way. These are mine. |
| 34 | Thirty commits reverted | At one point I accepted Claude's suggestions without fully understanding them. Each change looked reasonable on its own. Confusion compounded until I had to revert thirty commits. Make sure you know what the system does at all times. |
| 35 | Never merge faster than you understand | I skim every diff and inspect architecture, security, data, and unfamiliar code more deeply. If I cannot explain what changed and why, I ask Claude to explain it and simplify it until I understand what's in the system. |
| 36 | Invariants | Some conditions must remain true. Write these critical invariants down with their reasons. A written rule stops a sensible-looking cleanup from causing downtime. |
| 37 | Bug → fix → test → rule | Incidents will happen, and you will jump in to put out fires. Each fire should leave behind a code fix, a test, and a written rule, so the next session begins with the lesson already learned. |
| 38 | Make a project skill | When you catch yourself doing the same thing twice, consider turning it into a project skill. Skills can live inside the project folder, so they travel with the repo and everyone picks them up. |
| 39 | Tests = silver, feedback = gold | Tests show that software works; a product succeeds only when it's useful to people. Release early and listen closely: first users will reveal what's missing. Fix and improve fast. |
| 40 | Easy, convenient, fun | And remember: your products should be easy, offer a more convenient way to achieve something, and if possible, be FUN. |
| 41 | Oceans didn't get smaller | Claude Code did not reduce the platform's scope or remove its complexity. What changed is the way I worked: planning, durable context, and verification formed a raft that made it possible to cross that ocean. "Boil" was a bit of a dramatic effect, but I hope you get the point. |
| 42 | Thank you | Thank you for following this story. If you wanna know more, find me at https://mauriciowolff.com |
