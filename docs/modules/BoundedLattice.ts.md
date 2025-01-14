---
title: BoundedLattice.ts
nav_order: 11
parent: Modules
---

# Overview

A `BoundedLattice` must satisfy the following in addition to `BoundedMeetSemilattice` and `BoundedJoinSemilattice` laws:

- Absorbtion law for meet: `a ∧ (a ∨ b) == a`
- Absorbtion law for join: `a ∨ (a ∧ b) == a`

---

<h2 class="text-delta">Table of contents</h2>

- [BoundedLattice (interface)](#boundedlattice-interface)

---

# BoundedLattice (interface)

**Signature**

```ts
export interface BoundedLattice<A> extends BoundedJoinSemilattice<A>, BoundedMeetSemilattice<A> {}
```

Added in v2.0.0
