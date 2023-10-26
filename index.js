const button = document.getElementById("button");
const contador = document.getElementById("contador");

let itemCounter = 0;

button.addEventListener("click", () => {
  itemCounter++;
  contador.innerHTML = itemCounter;
});
