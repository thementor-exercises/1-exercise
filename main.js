let json = [];
const div = document.querySelector("div");

const suma = document.createElement("p");
let wartosc = 0;

function start(json) {
  if (json.length) {
    for (let i = 0; i < json.length; i++) {
      let cena = 20;
      const element_p = document.createElement("p");
      const element_p1 = document.createElement("p");
      const element_p2 = document.createElement("p");
      const element_i = document.createElement("input");
      if (
        json[i].slice(0, 1) === "E" ||
        json[i].slice(0, 1) === "R" ||
        json[i].slice(0, 1) === "G"
      )
        cena = 10;
      if ((i + 1) % 3 == 0) cena = 15;
      element_p.textContent = `${i + 1}.`;
      element_p.className = "pierwsza";
      element_p1.textContent = `${json[i]}`;
      element_p1.className = "druga";
      element_p2.textContent = `${cena} zł `;
      element_p2.className = "trzecia";
      element_i.type = "checkbox";
      element_i.className = "input";
      element_i.id = i;
      div.appendChild(element_p);
      div.appendChild(element_p1);
      div.appendChild(element_p2);
      div.appendChild(element_i);
    }
    suma.textContent = `Kwota do zapłaty: ${wartosc} zł`;
    suma.className = "suma";
    div.appendChild(suma);
    document
      .querySelectorAll("input")
      .forEach((e) => e.addEventListener("change", checkbox));
  }
}

function checkbox(e) {
  console.log("uruchomione");
  console.log(e);
  element_p = [...document.querySelectorAll(".pierwsza")];
  element_p[e.target.id].classList.toggle("zamowione");
  element_p1 = [...document.querySelectorAll(".druga")];
  element_p1[e.target.id].classList.toggle("zamowione");
  element_p2 = [...document.querySelectorAll(".trzecia")];
  element_p2[e.target.id].classList.toggle("zamowione");
  let cena = element_p2[e.target.id].textContent.split(" ");
  if (e.target.checked) wartosc += cena[0] * 1;
  else wartosc -= cena[0] * 1;
  suma.textContent = `Kwota do zapłaty: ${wartosc} zł`;
}

fetch("salads.json")
  .then((response) => response.json())
  .then((json) => start(json));
