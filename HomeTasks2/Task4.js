let arr = [1, 2, "sad", "a", "456", 456];
let newArr = arr.filter((item) => typeof item == "number");
console.log(newArr);
