# Maximum Subarray

## Description

The maximum subarray problem is the task of finding the contiguous subarray within a one-dimensional array of numbers which has the largest sum. It is famously solved in linear time using Kadane's Algorithm.

## Mathematics

Kadane's algorithm works by keeping track of the maximum sum contiguous subarray ending at the current position $i$.
The recurrence relation is:
$$ \text{local_max}[i] = \max(A[i], A[i] + \text{local_max}[i-1]) $$

The overall maximum subarray sum is simply:
$$ \text{global_max} = \max\_{i} (\text{local_max}[i]) $$

## Implementation Steps

1. Define a function that takes an array of numbers as input.
2. Initialize two variables: `local_max` (to track the maximum subarray sum ending at the current index) and `global_max` (to track the overall maximum sum found so far). Set both to the first element of the array.
3. Loop through the array starting from the second element.
4. For each element, update `local_max` to be the maximum of the current element itself, or the current element plus the previous `local_max`.
5. Update `global_max` to be the maximum of `global_max` and the newly calculated `local_max`.
6. Return `global_max` after the loop completes.
