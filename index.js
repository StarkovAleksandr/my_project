let table = document.querySelector("#table");

let k = 1;
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
