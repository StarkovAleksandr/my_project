let arr = [1, 2, 3, 4, 5, 6];

let avarage =
  arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0) / arr.length;

console.log(avarage);
