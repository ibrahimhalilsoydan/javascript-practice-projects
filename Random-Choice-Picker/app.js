/* const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomSelect();
  }
});

function createTags(input) {
 // console.log(input) 

  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  // console.log(tags);

  tagsEl.innerHTML = "";
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerHTML = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
 */



const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => (e.target.value = ""), 10); // Tek satıra düştü
    randomSelect();
  }
});

// 1. KISALTMA: Uzun uzun element yaratmak yerine HTML string'i basıyoruz
function createTags(input) {
  const tags = input.split(",").filter((tag) => tag.trim() !== "").map((tag) => tag.trim());
  
  // map ile HTML oluşturup join ile birleştiriyoruz. Çok daha pratik.
  tagsEl.innerHTML = tags.map(tag => `<span class="tag">${tag}</span>`).join('');
}

function randomSelect() {
  const times = 30;

  // 2. KISALTMA: Helper fonksiyonları sildik, classList.add/remove'u direkt buraya yazdık
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    
    // Parlat
    randomTag.classList.add("highlight");

    // 100ms sonra söndür
    setTimeout(() => randomTag.classList.remove("highlight"), 100);
  }, 100);

  // Bitiriş
  setTimeout(() => {
    clearInterval(interval);
    // Kazananı seç ve parlat (Söndürme yok)
    setTimeout(() => pickRandomTag().classList.add("highlight"), 100);
  }, times * 100);
}

// Bu fonksiyon mecburen kalıyor, çünkü rastgelelik lazım
function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}