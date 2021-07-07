class Table {
  constructor(colNumber, data) {
    this.colNumber = colNumber;
    this.data = data;
    this.tableNode = document.createElement("table");
  }

  createtHead() {
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");

    for (let name of this.colNumber) {
      let td = document.createElement("td");
      td.innerHTML = name;
      tr.append(td);
    }

    thead.append(tr);
    return thead;
  }

  createtBody() {
    let tbody = document.createElement("tbody");

    for (let item of this.data) {
      console.log(item);
      let tr = document.createElement("tr");
      for (let elem of this.colNumber) {
        let td = document.createElement("td");
        console.log("elem: ", elem);
        td.innerHTML = item[elem];
        tr.append(td);
      }
      tbody.append(tr);
    }

    return tbody;
  }

  render() {
    let tHead = this.createtHead();
    let tBody = this.createtBody();
    this.tableNode.append(tHead, tBody);
    document.body.append(this.tableNode);
  }
}

let colNumber = ["№", "Имя", "Фамилия", "Группа", "Возраст", "Компания"];

let data = [
  {
    "№": 1,
    Имя: "Александр",
    Фамилия: "Старков",
    Группа: "ИВТ-Б18",
    Возраст: "21 год",
    Компания: "AddCode",
  },
  {
    "№": 2,
    Имя: "Николай",
    Фамилия: "Пилипчук",
    Группа: "ИВТ-Б18",
    Возраст: "Неизвестно",
    Компания: "AddCode",
  },
  {
    "№": 3,
    Имя: "Виктор",
    Фамилия: "Громов",
    Группа: "М-Б18",
    Возраст: "21 год",
    Компания: "AddCode",
  },
  {
    "№": 4,
    Имя: "Святослав",
    Фамилия: "Холодов",
    Группа: "ИВТ-Б18",
    Возраст: "Неизвестно",
    Компания: "AddCode",
  },
  {
    "№": 5,
    Имя: "Андрей",
    Фамилия: "Фамилия",
    Группа: "Группа",
    Возраст: "Неизвестно",
    Компания: "AddCode",
  },
  {
    "№": 6,
    Имя: "Роман",
    Фамилия: "Кабак",
    Группа: "ИВТ-Б18",
    Возраст: "Лет",
    Компания: "AddCode",
  },
];

let table = new Table(colNumber, data);
table.render();
