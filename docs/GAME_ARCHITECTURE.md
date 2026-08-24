# Learning Hub — Game Architecture

## Purpose

Define Game as a separate module that can reuse Learning Hub educational content.

## Core Concept

```text
CONTENT DATA
     │
     ├── Learning Engine
     ├── Quiz Engine
     └── Game Engine
```

Game should not become a second copy of the Learning Hub.

## Game Responsibilities

The Game Engine controls:

- Player state
- Game rules
- Turns
- Battles/challenges
- Rewards
- Progression
- Levels
- Game-specific scoring
- Game UI

Educational content supplies the knowledge challenge.

## Example

```text
Player enters battle
      ↓
Game selects a P4 Math question
      ↓
Player answers
      ↓
Game checks answer
      ↓
Correct → game action/reward
Wrong   → game consequence
```

## Game Content Reuse

A question may be used in:

- Learning
- Quiz
- Game

without creating three separate copies.

## Future Game Concepts

Possible directions:

- Battle game
- Character progression
- Subject-based worlds
- Boss challenges
- Team/multiplayer challenges
- Daily missions
- Rewards and achievements

These are concepts, not requirements for the first implementation.

## Database Direction

Future game data may include:

- player profile
- character
- level
- XP
- inventory
- achievements
- game progress
- match history

## Rule

> **Game mechanics belong to the Game Engine; educational knowledge belongs to Content.**
