function updateInventory (arr1, arr2) {
  const result = arr2;
  
  for( let i=0; i<arr1.length; i++){
    let flag=false;
    let x= arr1[i][1];
    let y= arr1[i][0];
    for( let j=0; j<arr2.length; j++ ){
      if(arr1[i][1] === arr2[j][1]){
        y = arr2[j][0] + arr1[i][0];
        result[j][0]= y;
        flag=true;
        break;
      } 
    }
    if(!flag){
      result.push([y,x]);
    }
  }
  result.sort((a, b) => a[1].localeCompare(b[1]))
  return result;
}

// example inventory lists
const curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone']
]

const newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste']
]

module.exports = updateInventory
