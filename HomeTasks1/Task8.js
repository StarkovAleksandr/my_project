let string = "Я-учу-javascript!";

function name(params) {}
let arr = string.split("");

arr.forEach((value, index) => {
  if (value == "-") {
    arr[index] = "!";
  }
});

string = arr.join("");

console.log(string);
