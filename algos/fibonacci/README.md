# Fibonacci Sequence

## Description

The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones. It is often used to demonstrate recursion and dynamic programming.

## Mathematics

The sequence is defined by the linear recurrence relation:
$$ F*n = F*{n-1} + F\_{n-2} $$
with seed values:
$$ F_0 = 0, \quad F_1 = 1 $$

The closed-form solution (Binet's Formula) is:
$$ F_n = \frac{\phi^n - \psi^n}{\sqrt{5}} $$
where $\phi = \frac{1 + \sqrt{5}}{2}$ (the golden ratio) and $\psi = \frac{1 - \sqrt{5}}{2}$.

## Implementation Steps

1. Define a function that takes an integer `n` as input.
2. Handle the base cases: if `n` is 0, return 0; if `n` is 1, return 1.
3. For an iterative approach, initialize two variables to hold the previous two numbers (0 and 1). Loop from 2 to `n`, updating the two variables to calculate the next sequence number.
4. For a recursive approach, return the sum of the function called with `n-1` and `n-2`. Use memoization to optimize if necessary.
