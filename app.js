// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let count = 0;
const display = document.querySelector("#count-el");
const saveButoon = document.querySelector("#save-el");

function increment() {
  count += 1;
  display.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveButoon.textContent += countStr;
  display.textContent = 0;
  count = 0;
}
