

const list = [20, 0, 5, 2, 1, 6, 8]

for (let i = 1; i < list.length; i++) {

    let j = i
    const currentValue = list[i]

    while (j > 0 && currentValue < list[j -1]) {
        list[j] = list[j - 1]
        list[j - 1] = currentValue
        j -= 1
    }

}

console.log(list)