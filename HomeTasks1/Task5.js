for (let index = 1; index <= 100; index++) {
  if (index < 18) {
    console.log(index + " - " + "Ребенок");
  } else if (index >= 18 && index <= 30) {
    console.log(index + " - " + "Молодой");
  } else if (index > 30 && index <= 55) {
    console.log(index + " - " + "Зрелый");
  } else {
    console.log(index + " - " + "Старый");
  }
}
