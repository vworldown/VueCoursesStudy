let parentUl = document.querySelector("ul")!;
let inputEl = <HTMLInputElement>document.querySelector("#goal");

function add() {
  if (inputEl.value) {
    generateItem(inputEl.value);
    inputEl.value = "";
  } else {
    alert("请输入...");
  }
}

function generateItem(inner: string) {
  let item = document.createElement("li");
  item.innerText = inner;
  parentUl.appendChild(item);
}
