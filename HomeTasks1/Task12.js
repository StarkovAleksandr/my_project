let taskArr = ["a", 1, 2, false, "b"];

function objectType(arr) {
  return arr.reduce((acc, elem) => {
    let typeOf = typeof elem;
    if (typeOf in acc) {
      acc[typeOf].push(elem);
    } else {
      acc[typeOf] = [elem];
    }

    return acc;
  }, {});
}

console.log(objectType(taskArr));
