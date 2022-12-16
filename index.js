const pianoKeys = document.querySelectorAll(".key");

function playSound(newUrl) {
  new Audio(newUrl).play();
}

const keyboard = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
];

pianoKeys.forEach((pianoKey, i) => {
  const number = i < 9 ? "0" + (i + 1) : i + 1;
  const url = "./audio/key" + number + ".mp3";

  pianoKey.addEventListener("click", () => playSound(url));
  window.addEventListener("keypress", (e) => {
    e.key === keyboard[i] ? playSound(url) : null;
  });

  window.addEventListener("keydown", (e) => {
    e.key === keyboard[i] ? pianoKey.classList.add("active") : null;
  });
  window.addEventListener("keyup", (e) => {
    e.key === keyboard[i] ? pianoKey.classList.remove("active") : null;
  });
});

// ternary operator
// condition ? action : another action
