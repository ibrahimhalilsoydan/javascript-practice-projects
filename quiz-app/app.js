const quiz = document.getElementById("quiz");
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");

let questions = [];
let currentQuiz = 0;
let score = 0;

fetch("https://opentdb.com/api.php?amount=10&type=multiple")
  .then(res => res.json())
  .then(data => {
    questions = data.results.map(q => {
      const answers = [...q.incorrect_answers];
      answers.splice(
        Math.floor(Math.random() * 4),
        0,
        q.correct_answer
      );

      return {
        question: q.question,
        a: answers[0],
        b: answers[1],
        c: answers[2],
        d: answers[3],
        correct: ["a","b","c","d"][answers.indexOf(q.correct_answer)]
      };
    });

    loadQuiz(); // 🔥 fetch bittikten sonra çağır
  });

  

function loadQuiz() {
  const currentQuizData = questions[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
