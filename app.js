// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let count = 0;
const display = document.querySelector("#count-el");

function increment() {
  count = count + 1;
  display.innerText = count;
}
