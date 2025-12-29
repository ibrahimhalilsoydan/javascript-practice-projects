const container = document.querySelector(".container");

const rows = 9;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `https://picsum.photos/${getRandomNumber()}/${getRandomNumber()}`;
  container.appendChild(img);
}

function getRandomNumber() {
  return Math.floor(Math.random() * 300) + 300;
}
