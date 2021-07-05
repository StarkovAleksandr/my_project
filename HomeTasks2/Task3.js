let arr = [1, 2, 3, 4, 5];
function arrSum(arr) {
  if (2 <= arr.length && arr.length <= 100) {
    let sum = arr.filter((i) => i % 2 === 0).reduce((a, v) => (a += v));
    return sum;
  } else {
    return "invalid string";
  }
}
console.log(arrSum(arr));
