# Strassen's Matrix Multiplication

## Description

Strassen's algorithm is a divide-and-conquer algorithm used for matrix multiplication. It is asymptotically faster than the standard matrix multiplication algorithm, making it useful for large matrices.

## Mathematics

Standard matrix multiplication of two $n \times n$ matrices requires $O(n^3)$ operations.
Strassen's algorithm reduces the number of recursive matrix multiplications from 8 to 7 for $2 \times 2$ submatrices.

This leads to the recurrence relation:
$$ T(n) = 7T\left(\frac{n}{2}\right) + O(n^2) $$

By the Master Theorem, the time complexity resolves to:
$$ O(n^{\log_2 7}) \approx O(n^{2.807}) $$

## Implementation Steps

1. Define a function that takes two $n \times n$ matrices as input.
2. Base case: If the matrix size is 1x1, multiply the single elements directly and return the resulting 1x1 matrix.
3. Pad the matrices with zeros if their dimension $n$ is not a power of 2.
4. Divide both input matrices into 4 submatrices of size $n/2 \times n/2$.
5. Compute the 7 products (M1 to M7) using combinations of additions and subtractions of the submatrices according to Strassen's formulas.
6. Combine these 7 products using additions and subtractions to compute the 4 quadrants of the resulting matrix.
7. Merge the 4 resulting quadrants into a single final matrix and return it.
