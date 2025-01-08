input = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7]
n = len(input)


def max_sub_array_kadane_approach():
    """
    Max subarray using kadanes approach.
    time complexity O(n) and space complexity is O(1)
    How it works:
    1. Initial maxSub value to be the first index. Assuming there are only one item in the list
    Initial total sum of values to be the first index
    2. for each i find the max between the current previous total (i + sumV) and the current index (Array[i]). This way we can either start counting from a new position or continue adding to the sum.
    3. Compare total sum to previous maxSub and choose the max value
    4. if the current value is greater than the  new sum (Array[i] + totalSum), set the start index to the current index
    5. if total Sum is equal to the maxSub, set the end index to the current index

    """

    start_index = 0
    end_index = 0
    # The maximum
    maxSub = input[0]
    sumV = input[0]

    for i in range(1, len(input)):
        newSum = input[i] + sumV
        if input[i] > newSum:
            start_index = i
        sumV = max(newSum, input[i])
        maxSub = max(maxSub, sumV)

        if maxSub == sumV:
            end_index = i

    subArray = input[start_index : end_index + 1]
    print(maxSub, "finallyyy", subArray)


max_sub_array_kadane_approach()
