// This is a function called updateInventory that takes two arrays as input: arr1 and arr2.
  // Create a new array result and initialize it with the contents of arr2.
  // Iterate through the first array, arr1.
    // Initialize a flag to false.
    // Extract the quantity (x) and name (y) of the item from arr1.
    // Iterate through the second array, arr2.
      // Check if the name (arr1[i][1]) of the current item in arr1
      // matches the name (arr2[j][1]) of the current item in arr2.
        // If there is a match, update the quantity (y) by adding the quantity
        // of the same item from arr2 to that of arr1, and update the result array accordingly.
        // Set the flag to true to indicate that a match was found.
        // Exit the inner loop since the item has been processed.
    // If no match was found in arr2 for the item in arr1, add it to the result array.
  // Sort the result array based on the item names (second element in each subarray).
  // Return the updated inventory in the result array.


function updateInventory(arr1, arr2) {
  const result = arr2;
  for (let i = 0; i < arr1.length; i++) {
    let flag = false;
    let x = arr1[i][1];
    let y = arr1[i][0];

    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i][1] === arr2[j][1]) {
        y = arr2[j][0] + arr1[i][0];
        result[j][0] = y;
        flag = true;
        break;
      }
    }

    if (!flag) {
      result.push([y, x]);
    }
  }

  result.sort((a, b) => a[1].localeCompare(b[1]));
  return result;
}

// Example inventory lists
const curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone']
];

const newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste']
];

// Export the updateInventory function to be used elsewhere.
module.exports = updateInventory;

