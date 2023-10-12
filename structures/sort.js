function insertSort(arr) {
  for(let i = 0; i<arr.length; i++) {
    for(let j = i+1; j<arr.length; j++){
      if(arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
}

function insertSortImproved(arr) {
  for(let i=arr.length-1; i>0; i--) {
    let hasSwapped = false;
    for(let j=0; j<i; j++){
      if(arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
      hasSwapped = true;
    }

    if(hasSwapped === false) break
  }
}

function mergeOrderedVectors(arr1, arr2) {
  let i = 0, j = 0, k = 0;
  let arr3 = []

  for(k; k<arr1.length+arr2.length; k++) {
    if(arr2[j] === undefined || arr1[i] <= arr2[j]){
      arr3[k]=arr1[i]
      i++
    } else {
      arr3[k]=arr2[j]
      j++
    }
  }

  return arr3
}

let a = [1,2,3]
let b = [6]
// insertSort(a)
insertSortImproved(b)
// console.log(a)
console.log(mergeOrderedVectors(a,b))