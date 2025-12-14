const counter = document.getElementById("counter");
const increase = document.querySelector(".btn-increase");
const decrease = document.querySelector(".btn-decrease");
const reset = document.querySelector(".btn-reset");

let count = 0;


  increase.addEventListener("click", () => {
    count++;
    counter.textContent = count;
  });

  decrease.addEventListener("click", () => {
    count--;
    counter.textContent = count;
  });

  reset.addEventListener("click", () => {
    count = 0;
    counter.textContent = count;
  });
