const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const randomHex = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomHex;
  const randomHex2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  btn.style.backgroundColor = randomHex2;
  const randomHex3 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  btn.style.color = randomHex3;
});
