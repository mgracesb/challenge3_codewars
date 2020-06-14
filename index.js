const x = document.getElementById("number").value;
const y = parseInt(x.value);
const enter = document.getElementById("enter");
const display = document.getElementById("display");

function getNumber() {
  console.log(x);
}

function towerBuilder(nFloors) {
  const mid = Math.floor((nFloors * 2 - 1) / 2);
  const arr = [];
  for (let i = 0; i < nFloors; i++) {
    let chars = "";

    for (let j = 0; j < nFloors * 2 - 1; j++) {
      if (mid - i <= j && mid + i >= j) {
        chars += "*";
      } else {
        chars += " ";
      }
    }
    arr.push(chars);
  }
  console.log(arr);
}

towerBuilder(7);
enter.addEventListener("click", getNumber);
enter.addEventListener("keypress", getNumber);
