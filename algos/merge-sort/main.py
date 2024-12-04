import math, random, time


n = 100_000


# Algorithm
# Split array into recursive chunks until each chunk has length of 1
#  Merge left and right array chunks in recursive order to order


def sort_primitive_list():
    list = []
    for i in range(0, n):
        list.append(random.randint(0, 10000))

    def merge(l1, l2):
        i = 0
        j = 0
        result = []
        while i < len(l1) and j < len(l2):
            if l1[i] < l2[j]:
                result.append(l1[i])
                i += 1
            else:
                result.append(l2[j])
                j += 1

        return result + l1[i:] + l2[j:]

    def merge_sort(item):
        r = len(item)
        if len(item) > 1:
            q = math.floor(len(item) / 2)
            return merge(merge_sort(item[0:q]), merge_sort(item[q:r]))

        return item

    start_time = time.time()
    result = merge_sort(list)
    end_time = time.time()
    how_much_time = end_time - start_time
    print(result, how_much_time)


sort_primitive_list()
