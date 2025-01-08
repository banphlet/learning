A = [[2, 3], [4, 6]]
B = [[9, 0], [4, 5]]

#
C = [[0, 0], [0, 0]]

# because its a two by two matrix
n = 2


def naive_approach():
    for i in range(n):
        for j in range(n):
            for k in range(n):
                print(C[i][j])
                C[i][j] += A[i][k] * B[k][j]

    return C


def normal_2_2_multiplication():
    A = [[2, 3], [4, 6]]
    B = [[9, 0], [4, 5]]

    C1 = A[0][0] * B[0][0] + A[0][1] * B[1][0]
    C2 = A[0][0] * B[0][1] + A[0][1] * B[1][1]
    C3 = A[1][0] * B[0][0] + A[1][1] * B[1][0]
    C4 = A[1][1] * B[0][1] + A[1][1] * B[1][1]

    return [[C1, C2], [C3, C4]]


def divide_and_conqueror():
    pass


result = normal_2_2_multiplication()
print(result)
