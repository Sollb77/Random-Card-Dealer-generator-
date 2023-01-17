window.onload = function() {
  const cardList = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const Simbolo = ["♥", "♣", "♠", "♦"];
  let EligeNumero = Math.floor(Math.random() * cardList.length);
  let EligeSimbolo = Math.floor(Math.random() * Simbolo.length);

  let Heart1 = document.getElementById("heart1");
  let Heart2 = document.getElementById("heart2");
  let Numero = document.getElementById("numero");

  Heart1.innerHTML = Simbolo[EligeSimbolo];

  Heart2.innerHTML = Simbolo[EligeSimbolo];
  Numero.innerHTML = cardList[EligeNumero];

  if (Heart1.innerText === "♥" || Heart1.innerText === "♦") {
    Heart1.style.color = "red";
    Numero.style.color = "red";
    Heart2.style.color = "red";
  }
};
