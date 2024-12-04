const n = 1000

function sortPrimativeList() {
  const list = Array.from({ length: n}).map(()=>{
    return Number((Math.random() * 10000).toFixed(2))
  })


  function merge(l1, l2) {
    let i = 0;
    let j = 0;
    let newArr = [];

    while(i < l1.length && j < l2.length){
        if(l1[i] < l2[j]){
          newArr.push(l1[i]);
          i++;
        } else {
          newArr.push(l2[j]);
          j++;
        }
    }

    newArr = newArr.concat(l1.slice(i), l2.slice(j))

    return newArr;
  }

  function mergeSort(item) {
    if (item.length > 1) {
      const q = Math.floor(item.length / 2);
      const l1 = item.slice(0, q);
      const l2 = item.slice(q);
      return merge(mergeSort(l1), mergeSort(l2));
    }

    return item;
  }

console.time("mergeSort")
const sorted = mergeSort(list)
console.timeEnd("mergeSort")
  console.log(sorted, "finalsdfsfsds");
}

sortPrimativeList();
