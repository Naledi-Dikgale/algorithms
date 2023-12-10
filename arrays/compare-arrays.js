function compareArray(arr1, arr2) {
  // Check if item name is already on the array

  // lopp through the first array and compare it to the second
  let startLength = arr1.length;
  for (let i = 0; i < arr2.length; i++) {
      for (let j = 0; j < startLength; j++) {
          if (arr1[j][1] ===  arr2[i][1]) {
              arr1[j][0] += arr2[i][0]
              break
          }

          if (j === startLength-1) {
              arr1.push(arr2[i])
          }
      }
  }

  // order array alphabetic way
  
  for (let k = 1; k < arr1.length-1; k++) {
      let store = []; 
      while (arr1[k][1] < arr1[k-1][1]) {
          store = arr1[k - 1]
          arr1[k-1] = arr1[k]
          arr1[k] = store
      }
  }

  //  return the array on alphabetic order
  return arr1;
}

// Input

let arr1 = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone']
]

let arr2 = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste']
]

console.log(compareArray(arr1, arr2))