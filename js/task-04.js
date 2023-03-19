const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);
const valueEl = document.querySelector("#value");

let counterValue = 0;

decrementBtn.addEventListener("click", () => {
  valueEl.textContent = counterValue -= 1;
  console.log(counterValue);
});
incrementBtn.addEventListener("click", () => {
  valueEl.textContent = counterValue += 1;
  console.log(counterValue);
});
