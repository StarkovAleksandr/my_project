let questions = [
    "Вы мужчина или женщина?",
    "Как Вас зовут?",
    "Сколько Вам лет?",
    "Где Вы учитесь/работаете?",
  ],
  answer = [];

answer = questions.reduce(
  (newAnswer, currentQuestion) => [
    ...newAnswer,
    prompt(currentQuestion, "Undefined"),
  ],
  []
);

alert(
  `Вы ${answer[0]}\nВас зовут ${answer[1]}\nВам ${answer[2]}\nВы учитесь/работаете в ${answer[3]}`
);
