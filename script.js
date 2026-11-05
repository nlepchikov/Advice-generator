const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");
const refreshButton = document.querySelector(".button-dice");

async function getAdvice() {
  adviceText.textContent = "Loading...";

  try {
    const response = await fetch(`https://api.adviceslip.com/advice`);
    if (!response.ok) {
      throw new Error(`HTTP Error! Code:${response.status}`);
    }
    const data = await response.json();
    adviceId.textContent += data.slip.id;
    adviceText.textContent = '"' + data.slip.advice + '"';
  } catch (error) {
    adviceText.textContent = `Error! ${error.message}`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  getAdvice();
});


refreshButton.addEventListener("click", () => {
  adviceId.textContent = "Advice #";
  getAdvice();
});
