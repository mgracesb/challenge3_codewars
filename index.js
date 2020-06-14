const x = document.getElementById("number");
const form = document.getElementById("form");
const enter = document.getElementById("enter");
const display = document.getElementById("display");
const reset = document.getElementById("reset-btn");

function getValue() {
  const nFloors = x.value;
  towerBuilder(nFloors);
}

function towerBuilder(nFloors) {
  const mid = Math.floor((nFloors * 2 - 1) / 2);
  const arr = [];

  for (let i = 0; i < nFloors; i++) {
    let chars = "";

    for (let j = 0; j < nFloors * 2 - 1; j++) {
      if (mid - i <= j && mid + i >= j) {
        chars += "■";
      } else {
        chars += " ";
      }
    }
    arr.push(chars);
  }

  const y = document.createElement("div");
  const z = document.createTextNode(arr);
  y.setAttribute("class", "box");
  y.appendChild(z);
  display.appendChild(y);
  console.log(arr);
}

function resetValue(evt) {
  evt.preventDefault();
  form.reset();
  display.removeChild(display.childNodes[0]);
}

enter.addEventListener("click", getValue);
reset.addEventListener("click", resetValue);
