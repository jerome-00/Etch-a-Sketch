const CANVAS = document.querySelector(".canvas");

function populateCanvas(size) {
  CANVAS.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  CANVAS.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let gridSize = size * size;

  for (let i = 0; i < gridSize; i++) {
    let square = document.createElement("div");
    let color = "green";
    square.style.backgroundColor = "blue";
    square.addEventListener("mouseover", function () {
      square.setAttribute("style", `background-color:${color}`);
    });
    CANVAS.insertAdjacentElement("beforeend", square);
  }
}

function clearCanvas() {
  CANVAS.textContent = "";
}

const SIZE_INPUT_BOX = document.querySelector("#sizeInputBox");

SIZE_INPUT_BOX.addEventListener("input", function () {
  console.log(SIZE_INPUT_BOX.value);
  if (SIZE_INPUT_BOX.value <= 100) {
    clearCanvas();
    populateCanvas(SIZE_INPUT_BOX.value);
  }
});
