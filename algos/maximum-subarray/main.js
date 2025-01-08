const input = [
  13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7,
];

function max_sub_array_kadane_approach() {
  let maxSum = input[0];
  let sumArr = input[0];
  let startIndex = 0;
  let stopIndex = 0;

  for (let i = 1; i < input.length; i++) {
    const newSum = sumArr + input[i];
    if (input[i] > newSum) {
      startIndex = i;
    }
    sumArr = Math.max(newSum, input[i]);
    maxSum = Math.max(sumArr, maxSum);

    if (maxSum === sumArr) {
      stopIndex = i;
    }
  }

  const subArray = input.slice(startIndex, stopIndex + 1);

  console.log(maxSum, startIndex, stopIndex, subArray);
}

max_sub_array_kadane_approach();
