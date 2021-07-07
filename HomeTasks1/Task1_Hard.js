let arr = [1, 2, 3, "star", "4"];
let string = "";
for (let index = 0; index < arr.length; index++) {
  if (index + 1 == arr.length) {
    string += arr[index];
    break;
  }
  string += arr[index] + ", ";
}
console.log(string);
