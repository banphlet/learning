### Insertion Sort

Insert sort is a type of sorting algorithm that rearranges elements in sequential order just like a deck of cards.

For each given list eg, [3, 6, 8, 20].

- Starting at the first index i = 1, sort values before in correct order such that i > i - 1
- Once sorted proceed to next index i+1 until all sorting is completed

#### Mathematics and Time Complexity

The worst-case time complexity of insertion sort is bounded by the number of comparisons and swaps:
$$ \sum\_{i=1}^{n-1} i = \frac{n(n-1)}{2} = O(n^2) $$
where $n$ is the number of items in the list.

The best-case (when the array is already sorted) is $O(n)$ with $n-1$ comparisons and 0 swaps.

#### Implementation Steps

1. Define a function that takes an array as input.
2. Loop over the array starting from the second element (index 1) to the end.
3. For each element, store its value in a variable (e.g., `key`) and initialize a pointer `j` to the index just before it (`i - 1`).
4. While `j` is greater than or equal to 0 and the element at `j` is greater than the `key`, shift the element at `j` to the right (`j + 1`).
5. Decrement `j` to continue comparing backwards.
6. Insert the `key` at the correct position (`j + 1`).
7. Return the sorted array.
