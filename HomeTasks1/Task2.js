let arr = [1, 2, 3, "star", "4"];
let n = 3;
function getFirst(arr, n) {
  return arr.splice(0, n);
}
console.log(getFirst(arr, n));
