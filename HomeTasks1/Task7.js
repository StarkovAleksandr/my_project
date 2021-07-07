let arr = [1, 2, 3, 4, 5, 6];

function avarageWithReduce(arr) {
  return (
    arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
    arr.length
  );
}

let avarage = avarageWithReduce(arr);

console.log(avarage);
