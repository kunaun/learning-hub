# Learning Hub — Architecture Decisions

## Decision 001 — Navigation Structure
Status: Accepted
Date: 2026-08-24

Decision:
ใช้ Grade Level เป็น Navigation หลัก

Structure:
Grade → Subject → Learning / Quiz / Game

Reason:
ทำให้รองรับ อนุบาล / ประถม / มัธยม ได้โดยไม่ต้องสร้างโครงใหม่ซ้ำกัน

---

## Decision 002 — Three Core Modules
Status: Accepted

Decision:
แยกระบบเป็น 3 Module

1. Learning
2. Quiz
3. Game

Reason:
แต่ละระบบมีหน้าที่ต่างกัน และสามารถพัฒนาแยกกันได้

---

## Decision 003 — Content First
Status: Accepted

Decision:
แยก Educational Content ออกจาก UI และ Engine

Reason:
โจทย์เดียวสามารถนำไปใช้ใน Learning, Quiz และ Game ได้

---

## Decision 004 — Database
Status: Deferred

Decision:
ยังไม่ใช้ Database ในช่วงแรก

Reason:
เริ่มจาก Local JSON / Static Content ก่อน
เมื่อระบบ Content และ Engine นิ่งแล้วค่อยพิจารณา Database

---

## Decision 005 — Mobile First
Status: Accepted

Decision:
ออกแบบ Mobile-first

Reason:
Learning Hub ต้องใช้งานบนมือถือได้ดีตั้งแต่ต้น