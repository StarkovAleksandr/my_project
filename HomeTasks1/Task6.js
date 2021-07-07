const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function humanInfo(name, age) {
  let ageCharacteristic;

  if (age < 18) {
    ageCharacteristic = "ребенок";
  } else if (age >= 18 && age <= 30) {
    ageCharacteristic = "молодой";
  } else if (age > 30 && age <= 55) {
    ageCharacteristic = "зрелый";
  } else {
    ageCharacteristic = "старый";
  }

  return console.log(
    name + " имеет возраст " + age + " и он " + ageCharacteristic
  );
}

rl.question("Please enter name: ", (answer) => {
  let name = answer;

  rl.question("Please enter name's age: ", (answer) => {
    let age = answer;

    humanInfo(name, age);

    rl.close();
  });
});
