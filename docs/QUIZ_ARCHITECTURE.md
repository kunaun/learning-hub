# Learning Hub — Quiz Architecture

## Purpose

Define the Quiz module independently from Learning and Game.

## Flow

```text
Grade
  ↓
Subject
  ↓
Topic / Practice
  ↓
Question Pool
  ↓
Randomize
  ↓
Quiz
  ↓
Score
  ↓
Review / Retry
```

## Core Responsibilities

The Quiz Engine handles:

- Question selection
- Randomization
- Answer validation
- Score calculation
- Feedback
- Retry
- Difficulty
- Progress tracking

## Randomization

Randomization should happen whenever a learner:

- enters a quiz
- starts a new attempt
- presses "Do Again"

The system should avoid returning the exact same sequence unnecessarily.

## Question Model

A question should contain enough information for the engine to work without hard-coded UI logic.

Suggested fields:

```text
id
grade
subject
topic
question
options
answer
explanation
difficulty
media
```

## Quiz Modes

Future modes may include:

- Practice
- Timed Quiz
- Exam
- Daily Challenge
- Topic Challenge

## Important Rule

Quiz logic must not depend on a specific subject.

The same engine should work for:

```text
P4 English
P4 Math
P4 Science
M2 Science
M5 English
```

without rewriting the engine.

## Future Database

Quiz attempts may later be stored with:

- user
- grade
- subject
- quiz
- score
- time
- answers
- timestamp

## Rule

> **The Quiz Engine controls the experience; the content supplies the questions.**
