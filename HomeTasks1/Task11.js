let arr = [1, 1, 2, 1];

let numberOfUnserved = 0,
  singleTable = 1,
  doubleTable = 1;

function isOne() {
  if (singleTable > 0) {
    singleTable--;
    return 0;
  } else if (doubleTable > 0) {
    doubleTable--;
    singleTable++;
    return 0;
  } else {
    return 1;
  }
}

function isTwo() {
  if (doubleTable > 0) {
    doubleTable--;
    return 0;
  } else {
    return 1;
  }
}

numberOfUnserved = arr.reduce(function (acc, currentHuman) {
  return (acc += currentHuman == 1 ? isOne() : isTwo());
}, 0);

console.log(numberOfUnserved);
