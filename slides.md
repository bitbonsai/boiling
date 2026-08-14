```
01

      [CLAUDE]

      BOILING THE OCEAN
      How to build platforms and do what seems
      impossible with Claude Code


      (o) Mauricio Wolff
```

```
02

      HI, I'M MAURICIO.                    .--------.
                                          /          \
      Staff Designer at Miro             |  PORTRAIT  |
      I build things.      \          /
                                           '--------'
                                              [V]
```

```
03


       [ pen ]              [ map ]              [ >_ ]

       DESIGNER?              PM?              ENGINEER?


                     BUILT WITH AI?
```

```
04



                         BOIL
                      THE OCEAN.


```

```
05

      BOIL THE OCEAN                                      idiom
      ----------------------------------------------------------------

      A project so vast that completing it seems

      IMPRACTICAL,

      regardless of people or resources.
```

```
06
      AT MIRO

                 o       o
            o        o         o
              o         o

                 IDEAS BECAME
                    SOFTWARE.

            o        o          o
```

```
07
        *       .------------------------------------.       *
           *    | localhost:3000                    |   *
        *       |------------------------------------|      *
                |                                    |
                |             IT WORKS!              |
                |                                    |
                '------------------------------------'
          *                *                 *
```

```
08


          .------------------------------------------------.
          | localhost:3000                                 |
          '------------------------------------------------'


                       HOW DO I SHARE IT?
```

```
09

                __________________________________
               /                                  \
              |             GATEKEEPER             |
               \__________________________________/

             ONE DOES NOT SIMPLY SHARE LOCALHOST.
```

```
10

        +------------+  +------------+  +------------+
        |  LOVABLE   |  |   REPLIT   |  |   VERCEL   |
        +------------+  +------------+  +------------+
        +------------+  +------------+  +------------+
        |  NETLIFY   |  |  RAILWAY   |  | CLOUDFLARE |
        +------------+  +------------+  +------------+

               GOOD TOOLS. DIFFERENT CONSTRAINTS.
```

```
11

      +---------------+ +---------------+ +---------------+
      |      GIT      | |      LOCK     | |      DATA     |
      |               | |               | |               |
      |   WORKFLOW    | |   SECURITY    | |  GOVERNANCE   |
      +---------------+ +---------------+ +---------------+
                         +---------------+
                         |    VENDOR     |
                         |   OWNERSHIP   |
                         +---------------+
```

```
12


        +----------+        +-----------+        +-------------+
        |  LOCAL   |------->|  PUBLISH  |------->| SECURE URL  |
        |  FOLDER  |        +-----------+        +-------------+
        +----------+

             CREATE LOCALLY. PUBLISH IN SECONDS.
```

```
13

      +-----------------------------+-----------------------------+
      | TERMINAL                    | BROWSER                     |
      |                             |                             |
      | > create the app            |   [ app appears ]           |
      | > push to github            |                             |
      | > publish platform app       |   app.company.tools    |
      |                             |                             |
      +-----------------------------+-----------------------------+
```

```
14


                       SIMPLE EXPERIENCE.


                    PLATFORM-SIZED PROBLEM.


```

```
15

          [ROUTING]       [GITHUB]        [AUTH]
                 \           |           /
          [SECRETS] ---- [ PLATFORM ] ---- [QUEUE]
                 /           |           \
       [OBSERVABILITY]   [BACKUPS]       [CI/CD]
                         [KUBERNETES]

                         THE OCEAN.
```

```
16


                            5-6

                         ENGINEERS

                        9-12 MONTHS
```

```
17


                         3 WEEKS

                            MVP

                  (o) + [CLAUDE CODE]
                   1 DESIGN ENGINEER
```

```
18

      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   o
  /|\                         THAT WAS THE OCEAN.
  / \
```

```
19
      DISCLAIMER


                         NOT A RECIPE.


                     WHAT WORKED FOR ME.
```

```
20
      SECTION 2



                              HOW


```

```
21

                              *
                           HUMAN IDEA
                          /    |    \
                         /     |     \
                    [path]  [path]  [path]

                   THE IDEA COMES FROM YOU.
```

```
22

          .------------------------------------------------.
          | terminal                                       |
          |------------------------------------------------|
          | > Challenge my assumptions.                    |
          | > Do not code yet.                             |
          |                                                |
          '------------------------------------------------'
```

```
23

      70% PLAN
      [==========================================]

      20% TINKER
      [============]

      10% FIX
      [======]
```

```
24

       .----------------. .----------------. .----------------.
       |                | |                | |                |
       |    PITCH.md    | | EXPERIENCE.md  | |ARCHITECTURE.md |
       |                | |                | |                |
       '----------------' '----------------' '----------------'

                    WHY + FEEL + FEASIBILITY
```

```
25



                     1 CHANGE = 1 PLAN

                         [ plan.md ]


```

```
26

       +---------------------+           +-----------------------+
       | CURRENT PLAN        |           | .plans/INDEX.md       |
       |                     |   IDEA -> |                       |
       | stay focused        |           | [ ] save for later    |
       +---------------------+           +-----------------------+

                       NEW IDEA? INDEX IT.
```

```
27

      +--------------------------------------------------------+
      | TRUTH       AGENTS.md                                  |
      +--------------------------------------------------------+
      | INTENT      .plans                                     |
      +--------------------------------------------------------+
      | LEARNING    memory                                     |
      +--------------------------------------------------------+
      | HISTORY     .archives                                  |
      +--------------------------------------------------------+
```

```
28

                              45%
                         .-----------.
                       .'  =====      '.
                      /   SIGNAL  ....  \
                     |           NOISE  |
                      \                 /
                       '---------------'

                       KEEP CONTEXT FRESH.
```

```
29

                         +----------------+
                         |  LEAD MODEL    |
                         | task graph     |
                         +----------------+
                          /   /    \   \
                         v   v      v   v
                      [A]   [B]    [C]   [D]
                    model effort deps proof

                  PLAN THE AGENT TEAM FIRST.
```

```
30

      +----------------------------------------------------------+
      | 14 AGENTS                                      [ 14 ]    |
      |----------------------------------------------------------|
      | agent-01  working...   agent-08  reviewing...            |
      | agent-02  testing...   agent-09  planning...             |
      | agent-03  coding...    agent-10  waiting...              |
      | agent-04  reading...   agent-11  coding...               |
      | agent-05  coding...    agent-12  testing...              |
      | agent-06  done         agent-13  working...              |
      | agent-07  coding...    agent-14  reviewing...            |
      +----------------------------------------------------------+
```

```
31

      +------------------+ +------------------+ +------------------+
      | DUPLICATE WORK   | | CONFLICTING      | | REVIEW           |
      |                  | | CHANGES          | | OVERLOAD         |
      | same task twice  | | edits collide    | | too much output  |
      +------------------+ +------------------+ +------------------+

                       MORE != BETTER
```

```
32

      +----------------------------------------------------------+
      | workflow.ts                                              |
      |----------------------------------------------------------|
      | task({                                                   |
      |   model:     "opus",                                    |
      |   effort:    "high",                                    |
      |   dependsOn: ["architecture"],                           |
      |   verify:    "bun test"                                 |
      | })                                                       |
      +----------------------------------------------------------+

                    INSPECT BEFORE RUNNING.
```

```
33

                       +-------- RUN A --------+
                       |                       |
      PLAN -> INSPECT -+-------- RUN B --------+-> SYNTHESIZE -> VERIFY
                       |                       |
                       +-------- RUN C --------+

                       BOUNDED PARALLELISM
```

```
34

                            30

                    COMMITS REVERTED

      - commit 30  <---------------------------------------
      - commit 29  <---------------------------------------
      - commit 28  <---------------------------------------
      - ...
```

```
35

      BEFORE                              AFTER

       [API]----[DB]                       [API]--\ /--[DB]
         |       |                            \  X  /
       [WEB]---[QUEUE]                    [WEB]-/ \\-[QUEUE]
         |       |                           X /\ X
       [AUTH]--[RUNNER]                  [AUTH]--[RUNNER]

                     UNDERSTANDING
                    HAS TO KEEP UP.
```

```
36


              NEVER MERGE FASTER

                 THAN YOU UNDERSTAND.


```

```
37

                  |                               |
                  |     SAFE PATH                 |
                  |  ---------------------->      |
                  |                               |
                  +-------------------------------+

                  WRITE DOWN WHAT MUST STAY TRUE.
```

```
38

       TRAFFIC
          |
          v
      +----------+             +----------+
      | OLD      |             | NEW      |
      | SERVING  |   build...  | [....]   |
      +----------+             +----------+
          |                         |
          +---- keep routing -------+--- [HEALTHY] ---> FLIP

          KEEP THE OLD VERSION LIVE UNTIL THE NEW ONE WORKS.
```

```
39

                           [PLAN]
                         /        \
                    [LEARN]      [BUILD]
                       |            |
                    [REVIEW] <-- [VERIFY]
                                    OK

                  PLAN -> BUILD -> VERIFY -> REVIEW -> LEARN
```

```
40

       +---------+      +---------+      +---------+      +---------+
       |   BUG   |----->|   FIX   |----->|  TEST   |----->|  RULE   |
       |   /!\   |      |   +     |      |   OK    |      | AGENTS  |
       +---------+      +---------+      +---------+      +---------+

                   INCIDENTS BECOME MEMORY.
```

```
41

      +-------------+  +-------------+  +-------------+
      | prompt      |  | prompt      |  | prompt      |
      | steps...    |  | steps...    |  | steps...    |
      +-------------+  +-------------+  +-------------+
              \             |             /
               '------------+------------'
                            v
                       +----------+
                       | SKILL.md |
                       +----------+

                EXPLAINED TWICE? MAKE A SKILL.
```

```
42

      +-----------------------------+-----------------------------+
      | BETTER PRODUCT              | BETTER INSTRUCTIONS         |
      |                             |                             |
      |      [ live app ]           |   + docs                    |
      |                             |   + tests                   |
      |                             |   + memory                  |
      +-----------------------------+-----------------------------+

                         EVERY SESSION
```

```
43

                     o           o
               o           o

                            PLAN.
                         PRESERVE.
                            PROVE.

               o           o           o
```

```
44

                 [ VERIFICATION ]
                        OK
                         |
                         v
                .-----------------.
                |   FIRST USER    |
                |      opens      |
                '-----------------'

                  THE NEXT PROOF IS ADOPTION.
```

```
45

      +------------------+       +------------------+
      | "I got stuck"    |       | "Can this...?"   |
      +------------------+       +------------------+
                 +-----------------------------+
                 | "This saved me two hours"  |
                 +-----------------------------+
      +------------------+       +------------------+
      | "What if...?"    |       | "I love this"   |
      +------------------+       +------------------+

                       USER FEEDBACK = GOLD.
```

```
46


                   EASY.

                         CONVENIENT.

                                      FUN.

```

```
47

       1   Keep Markdown beside code
       -----------------------------------------------------------
       2   Work in indexed plans
       -----------------------------------------------------------
       3   Wrap before context gets noisy
       -----------------------------------------------------------
       4   Verify meaningful changes
       -----------------------------------------------------------
       5   Release and listen
```

```
48

      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

                 [PLAN]========[PRESERVE]
                       \      /
                        [PROVE]                  ~
                     ___/____\___              ~~~
                    /____________\

                    THE OCEAN DIDN'T GET SMALLER.
```

```
49

                    PLAN WHAT YOU WILL CROSS.

                    PRESERVE WHAT YOU LEARN.

                    PROVE EVERY STEP.

                         __/____\__
                    ~~~ /__________\ ~~~
```

```
50

      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ☀
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

                 __/____\__              -------->
            ~~~ /__________\ ~~~

                         BUILD YOUR RAFT.
                        CROSS YOUR OCEAN.
```

```
51

      [CLAUDE]


                          THANK YOU.

                       (o) Mauricio Wolff

                           [ QR ]
```
