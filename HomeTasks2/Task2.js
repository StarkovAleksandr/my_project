let arr = [57, 157, 230, 5];
function removeMinimal(arr) {
  var min = Math.min.apply(null, arr);
  return arr.filter((e) => {
    return e != min;
  });
}
console.log(removeMinimal(arr));
