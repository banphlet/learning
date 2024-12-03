list = [31, 41, 59, 26, 41, 58]


def insertion_sort_ascending_order():
    for i in range(len(list)):
        j = i
        current_value = list[i]
        while j > 0 and current_value < list[j - 1]:
            list[j] = list[j - 1]
            list[j - 1] = current_value
            j -= 1
    print(list)


def insertion_sort_descending_order():
    for i in range(len(list)):
        j = i
        current_value = list[i]
        # point of change between descending and ascending order. Here current_value is greater than previous value and is move backwards
        while j > 0 and current_value > list[j - 1]:
            list[j] = list[j - 1]
            list[j - 1] = current_value
            j -= 1
    print(list)


insertion_sort_descending_order()
insertion_sort_ascending_order()
