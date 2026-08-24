# Learning Hub — Roadmap

## Phase 0 — Architecture Lock

- [ ] Confirm grade structure
- [ ] Confirm Learning / Quiz / Game separation
- [ ] Confirm content-first approach
- [ ] Store architecture documents in the repository

## Phase 1 — Existing System Audit

- [ ] Review current repository structure
- [ ] Identify current pages/components
- [ ] Identify JSON/content files
- [ ] Review `pronouns.json`
- [ ] Review `tenses.json`
- [ ] Review vocabulary data
- [ ] Identify reusable code
- [ ] Identify code that should remain temporarily for compatibility

## Phase 2 — Content Foundation

- [ ] Define final content schema
- [ ] Define grade metadata
- [ ] Define subject metadata
- [ ] Define lesson structure
- [ ] Define question structure
- [ ] Define media/audio structure
- [ ] Migrate existing content gradually

## Phase 3 — New Navigation

```text
Learning Hub
    ↓
Grade
    ↓
Subject
    ↓
Learning / Quiz / Game
```

- [ ] Grade selection
- [ ] Subject selection
- [ ] Module selection
- [ ] Mobile-first navigation

## Phase 4 — Learning Engine

- [ ] Lesson loader
- [ ] Topic navigation
- [ ] Practice
- [ ] Audio support
- [ ] Progress

## Phase 5 — Quiz Engine

- [ ] Question loader
- [ ] Randomization
- [ ] Answer validation
- [ ] Score
- [ ] Retry
- [ ] Review
- [ ] Difficulty

## Phase 6 — Game Engine

- [ ] Game shell
- [ ] Game state
- [ ] Educational challenge integration
- [ ] Rewards
- [ ] Progression
- [ ] First playable prototype

## Phase 7 — Database

Only after the content and engines are stable:

- [ ] Select database
- [ ] Users
- [ ] Progress
- [ ] Quiz attempts
- [ ] Game data
- [ ] Leaderboards if needed

## Phase 8 — Expansion

- [ ] Add more subjects
- [ ] Add more grades
- [ ] Add more lessons
- [ ] Add more quiz types
- [ ] Add more games

## Development Principle

> **Do not build everything at once. Build the foundation so every next feature becomes easier.**
