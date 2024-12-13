# TypeScript Type Inference Bug

This repository demonstrates a subtle bug in TypeScript related to type inference with optional parameters and union types.  The bug is not immediately obvious and highlights a less-common scenario where TypeScript's type inference might not behave as expected.

## Bug Description

The `greet` function takes a person's name (string) and an optional date. If no date is provided, it defaults to the current date. However, due to how TypeScript infers types with the union, passing only the name string causes type issues.

## Reproduction

1. Clone this repository.
2. Open `bug.ts` and observe the TypeScript compiler error.

## Solution

Refer to `bugSolution.ts` for a corrected version using type assertions to resolve the inference issue. 