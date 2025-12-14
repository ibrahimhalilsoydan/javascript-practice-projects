const clock = document.getElementById("clockBox");

setInterval(() => {
  const now = new Date();

  const hour = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
  const minute =
    now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
  const second =
    now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
  const zaman = hour + ":" + minute + ":" + second;

  clock.textContent = zaman;
}, 1000);
