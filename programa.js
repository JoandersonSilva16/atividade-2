let w = ["abacaxi","computador","javascript","programa","elefante","girassol",
         "montanha","oceano","telefone","janela","cadeira","livro","caneta",
         "futebol","amizade","cachorro","guitarra","pipoca","chuva","praia"];

let s = w[Math.floor(Math.random() * w.length)];
let d = "_".repeat(s.length).split("");
let u = [], r = 0;

document.getElementById("p").innerText = d.join(" ");

function j() {
  let c = document.getElementById("l").value.toLowerCase();
  document.getElementById("l").value = "";
  if (!c || u.includes(c)) return;
  u.push(c);
  s.includes(c) ? [...s].forEach((v, i) => v === c ? d[i] = c : null) : r++;
  document.getElementById("p").innerText = d.join(" ");
  document.getElementById("e").innerText =
    r >= 6 ? "Perdeu! Palavra: " + s :
    d.includes("_") ? "Erros: " + r :
    "Venceu!";
}
