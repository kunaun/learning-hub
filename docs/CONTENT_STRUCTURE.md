# Learning Hub — Content Structure

## Purpose

Define how educational content is organized so that the same content can be reused by Learning, Quiz, and Game.

## Recommended Folder Structure

```text
content/
├── kindergarten/
│   ├── k1/
│   ├── k2/
│   └── k3/
├── primary/
│   ├── p1/
│   ├── p2/
│   ├── p3/
│   ├── p4/
│   ├── p5/
│   └── p6/
└── secondary/
    ├── m1/
    ├── m2/
    ├── m3/
    ├── m4/
    ├── m5/
    └── m6/
```

Each grade contains subjects:

```text
p4/
├── thai/
├── math/
├── science/
└── english/
```

A subject can contain:

```text
english/
├── lessons/
├── quizzes/
└── games/
```

## Content Principle

The educational fact/question should live in the content layer. Presentation belongs to the module using it.

Example:

```json
{
  "id": "p4-eng-001",
  "topic": "Pronouns",
  "question": "Which word is a pronoun?",
  "answer": "he"
}
```

The same record may be used by a lesson, quiz, or game.

## Existing Content

Current files such as `pronouns.json`, `tenses.json`, and vocabulary data should be treated as legacy content until their structure is reviewed.

Do not rewrite them blindly.

## Content Metadata

Future content should be able to identify:

- grade
- subject
- topic
- lesson
- difficulty
- content type
- question type
- source
- language
- media/audio where applicable

## Rule

> **Content should describe what is taught; the engine decides how it is presented.**
