let table = document.querySelector("#table");

let k = 1;

let trHead = document.createElement("tr");
let tdHead = document.createElement("td");

tdHead.innerHTML = "Эта красивая таблица специально для тебя!!!";
tdHead.colSpan = 6;

trHead.appendChild(tdHead);
table.appendChild(trHead);

for (let i = 0; i < 6; i++) {
  let tr = document.createElement("tr");

  for (let i = 0; i < 6; i++) {
    let td = document.createElement("td");

    td.innerHTML = k;
    k++;

    tr.appendChild(td);
  }

  table.appendChild(tr);
}
