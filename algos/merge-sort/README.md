# Merge Sort

## Description

Merge Sort is a highly efficient, general-purpose sorting algorithm based on the divide-and-conquer paradigm. It works by recursively dividing the array into two halves until each subarray contains a single element, and then merging the sorted halves back together.

## Mathematics

The time complexity can be expressed using a recurrence relation:
$$ T(n) = 2T\left(\frac{n}{2}\right) + O(n) $$

- $2T(n/2)$ represents the time to sort the two halves.
- $O(n)$ is the time to merge the two halves.

According to the Master Theorem, this recurrence resolves to a time complexity of:
$$ O(n \log n) $$

## Implementation Steps

1. Define a recursive `mergeSort` function that takes an array.
2. Base case: If the array length is 1 or less, return the array as it is already sorted.
3. Find the middle index of the array and split it into two halves: `left` and `right`.
4. Recursively call `mergeSort` on both halves.
5. Define a helper function `merge(left, right)` that takes two sorted arrays and merges them into a single sorted array by sequentially comparing their front elements.
6. Return the result of merging the sorted `left` and `right` arrays.
