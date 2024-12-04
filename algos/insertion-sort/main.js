const n = 1000

function sortPrimitiveList() {
  const list = Array.from({ length: 100_000_000}).map(()=>{
    return Number((Math.random() * 10000).toFixed(2))
  })
  

 console.time("insertion_sort")
  for (let i = 1; i < list.length; i++) {
    let j = i;
    const currentValue = list[i];

    while (j > 0 && currentValue < list[j - 1]) {
      list[j] = list[j - 1];
      list[j - 1] = currentValue;
      j -= 1;
    }
  }
  console.timeEnd("insertion_sort")
  console.log(list);
}

function sortArrayObjects() {
  const list = [
    { name: "David", age: 27 },
    { name: "John", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Bob", age: 28 },
    { name: "Charlie", age: 22 },
  ];

  for (let i = 0; i < list.length; i++) {
    let j = i
    const current = list[i]
    while (j > 0 &&  current.age < list[j - 1].age) {
        list[j] = list[j - 1]
        list[j - 1] = current
        j -= 1
    }
    
  }
  console.log(list);
}

sortPrimitiveList();
