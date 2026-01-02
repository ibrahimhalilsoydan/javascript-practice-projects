const addBtn = document.getElementById("add");

addBtn.addEventListener("click", () => addNewNote());

function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
     <img src="img/pin.png" alt="" />

      <div class="tools">
        <button class="edit">
          <i class="fa-solid fa-pencil"></i>
        </button>
        <button class="delete">
          <i class="fa-solid fa-eraser"></i>
        </button>
      </div>

      <div class="main ${text ? "" : "hidden"}"></div>
      <textarea class="${text ? "hidden" : ""}"></textarea>
    
    `;

  const deleteBtn = note.querySelector(".delete");
  deleteBtn.addEventListener("click", () => {
    note.remove();
    updateLS();
  });

  const editBtn = note.querySelector(".edit");
  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.value = text;
  main.innerHTML = marked(text);

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = marked(value);

    updateLS();
  });

  document.body.appendChild(note);
}

function updateLS() {
  const notesText = document.querySelectorAll("textarea");

  const notes = [];

  notesText.forEach((note) => notes.push(note.value));
  localStorage.setItem("notes", JSON.stringify(notes));
}

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((note) => addNewNote(note));
}

/* const addBtn = document.getElementById("add");

// Sayfa yüklenince notları getir
const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
savedNotes.forEach(note => addNewNote(note));

addBtn.addEventListener("click", () => addNewNote());

function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
    <img src="img/pin.png" alt="" />

    <div class="tools">
      <button class="edit">
        <i class="fa-solid fa-pencil"></i>
      </button>
      <button class="delete">
        <i class="fa-solid fa-eraser"></i>
      </button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
  `;

  const deleteBtn = note.querySelector(".delete");
  const editBtn = note.querySelector(".edit");
  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  // Başlangıç
  textArea.value = text;
  main.innerHTML = marked(text);

  // Silme
  deleteBtn.addEventListener("click", () => {
    note.remove();
    updateLS();
  });

  // Düzenleme
  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  // Canlı yazı
  textArea.addEventListener("input", (e) => {
    main.innerHTML = marked(e.target.value);
    updateLS();
  });

  document.body.appendChild(note);
}

function updateLS() {
  const notes = [];
  document.querySelectorAll("textarea").forEach(textarea => {
    notes.push(textarea.value);
  });

  localStorage.setItem("notes", JSON.stringify(notes));
}
 */
