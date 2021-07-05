let arr = [57, 157, 230];
function removeMinimal(arr) {
  var min = Math.min.apply(null, arr);
  return min;
}
console.log(removeMinimal(arr));
