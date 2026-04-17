const button = document.getElementById("mainButton");
const finalCard = document.getElementById("finalCard");
const heartRain = document.getElementById("heartRain");

const buttonLines = [
  "чо ты нах, круто?",
  "а ты думала",
  "думаешь тут будет что то милое?",
  "ты ошибаешься",
  "....или нет",
  "жми"
];

let currentStep = 0;
let heartRainStarted = false;

button.addEventListener("click", () => {
  currentStep += 1;

  if (currentStep < buttonLines.length) {
    button.textContent = buttonLines[currentStep];
    button.classList.remove("is-ending");
    void button.offsetWidth;
    button.classList.add("is-ending");
    return;
  }

  button.hidden = true;
  finalCard.hidden = false;
  startHeartRain();
});

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.setProperty("--size", `${18 + Math.random() * 24}px`);
  heart.style.setProperty("--drift", `${-50 + Math.random() * 100}px`);
  heart.style.animationDuration = `${4 + Math.random() * 4}s`;
  heart.style.opacity = `${0.45 + Math.random() * 0.55}`;
  heartRain.appendChild(heart);

  window.setTimeout(() => {
    heart.remove();
  }, 8500);
}

function launchHeartBurst(amount) {
  for (let index = 0; index < amount; index += 1) {
    window.setTimeout(createHeart, index * 120);
  }
}

function startHeartRain() {
  if (heartRainStarted) {
    return;
  }

  heartRainStarted = true;
  launchHeartBurst(28);
  window.setInterval(createHeart, 360);
}
