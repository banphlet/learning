const n = 5;
let maxDepth = 0;

const memo = {};

// eq: F(n) = F(n-1) + F(n-2) where n > =1
function fibonacciNumber(n) {
  // time complexity is O(1) -- constant time
  if (memo[n]) return memo[n];
  if (n <= 1) return n;
  const value = fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
  memo[n] = value;
  return value;
}

console.log(fibonacciNumber(n), "----");
