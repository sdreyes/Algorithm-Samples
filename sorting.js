// ---------------------------------------------------------------------------------------
// Bubble Sort
// ---------------------------------------------------------------------------------------

let bubbleSort = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    let done = true;
    for (let  j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1]
        arr[j+1] = temp;
        done = false;
      }
    }
    if (done) return arr;
  }
  return arr;
}

console.log(bubbleSort([1,4,7,2,5,54,223,76,2,5,900,43]));

