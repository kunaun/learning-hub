# Learning Hub — System Architecture

> Master document for the overall architecture of Learning Hub.

## 1. Vision

Learning Hub is organized by **grade level**, with three independent but connected experiences:

1. **Learning** — learn lessons and practice concepts.
2. **Quiz** — test knowledge and measure performance.
3. **Game** — turn learning content into interactive gameplay.

The architecture must allow new grades, subjects, lessons, quizzes, and games to be added without rewriting the core application.

## 2. Top-Level Structure

```text
LEARNING HUB
│
├── Kindergarten
│   ├── K1
│   ├── K2
│   └── K3
├── Primary
│   ├── P1 ... P6
└── Secondary
    ├── M1 ... M6
```

After selecting a grade:

```text
GRADE LEVEL
     │
     ├── Learning
     ├── Quiz
     └── Game
```

## 3. Core Architecture

```text
                    LEARNING HUB
                         │
                    GRADE LEVEL
                         │
                 ┌───────┼───────┐
                 ↓       ↓       ↓
              LEARNING  QUIZ    GAME
                 │       │       │
                 └───────┼───────┘
                         ↓
                   CONTENT DATA
```

Learning, Quiz, and Game consume reusable educational content rather than maintaining unnecessary duplicate copies.

## 4. Architecture Rules

1. Grade Level is the primary navigation structure.
2. Learning, Quiz, and Game are separate modules.
3. Content is separated from UI.
4. Content is reusable across modules.
5. New subjects should not require rewriting the core engine.
6. New grade levels should not require rewriting the core engine.
7. Quiz questions should support randomization.
8. Games should be able to consume the same educational content.
9. The UI should be mobile-first.
10. Existing working content should remain compatible whenever practical.
11. Major architecture changes should be documented before implementation.

## 5. Current-System Migration

Existing content such as `pronouns.json`, `tenses.json`, and vocabulary data should be migrated gradually.

Recommended order:

1. Document architecture.
2. Inventory existing content.
3. Define the content schema.
4. Add grade/subject metadata.
5. Adapt existing content.
6. Refactor UI.
7. Add Quiz engine.
8. Add Game engine.

## 6. Master Rule

> **Build the system so that adding content is easy, while changing the engine is rare.**
