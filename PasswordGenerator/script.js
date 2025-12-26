const availableCharacters = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "1",
  "2",
  "3",
  "4",
  "5",
];

let randomPasswordOne = document.getElementById("random-password-one");
let randomPasswordTwo = document.getElementById("random-password-two");

function generatePassword() {
  console.log("button pressed");
  randomPasswordOne.textContent = "";
  randomPasswordTwo.textContent = "";
  for (let i = 0; i < 15; i++) {
    randomPasswordOne.textContent +=
      availableCharacters[
        Math.floor(Math.random() * availableCharacters.length)
      ];
    randomPasswordTwo.textContent +=
      availableCharacters[
        Math.floor(Math.random() * availableCharacters.length)
      ];
  }
}
