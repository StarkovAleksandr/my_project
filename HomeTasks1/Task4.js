let arr = [12, 23, 34, 45];
Summary = 0;
Composition = 1;
arr.forEach((currentItem) => {
  Summary += currentItem;
});
arr.forEach((currentItem) => {
  Composition *= currentItem;
});
console.log(Summary);
console.log(Composition);
