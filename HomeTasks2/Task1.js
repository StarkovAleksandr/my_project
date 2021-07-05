let arr = [1, 2, 3, 5, 0, 4, 6, 9, 8, 2];
N = 5;
function sqrt(arr, N) {
  if (arr.length >= N + 1) {
    return arr[N] ** N;
  } else {
    return -1;
  }
}
console.log(sqrt(arr, N));
