const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  console.log("Hello");

  // 1. ADIM: Diğer tüm panelleri kontrol et
  panels.forEach((panel) => {
    // Eğer bu panel, şu an tıkladığım panel DEĞİLSE...
    if (panel !== this) {
      // ...onun 'open' sınıfını kaldır (kapat).
      panel.classList.remove("open");
    }
  });

  // 2. ADIM: Tıkladığım paneli aç/kapat
  this.classList.toggle("open");
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
