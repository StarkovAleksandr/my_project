let arr = [5, 8, [1, 1, 2, 1, 1, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2, 1, 1]];
let numberOfUnserved = 0;

function isOne(arr) {
  if (arr[0] > 0) {
    arr[0]--;
    return arr;
  } else if (arr[1] > 0) {
    arr[1]--;
    arr[0]++;
    return arr;
  } else {
    numberOfUnserved++;
    return numberOfUnserved;
  }
}

function isTwo(arr) {
  if (arr[1] > 0) {
    arr[1]--;
    return arr;
  } else {
    numberOfUnserved++;
    return numberOfUnserved;
  }
}

arr.forEach;

for (let index = 0; index < arr[2].length; index++) {
  if (arr[2][index] == 1) {
    isOne(arr);
  } else isTwo(arr);
}

console.log(numberOfUnserved);
