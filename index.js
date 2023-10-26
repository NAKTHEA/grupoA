const button = document.getElementById("button");
const contador = document.getElementById("contador");
contador.textContent.append("0");
let itemCounter = 0;

const handleClick = (event) => {
  item = item + 1;
  contador.textContent.append(itermCounter.toString());
};

button.addEventListener("click", handleClick);
