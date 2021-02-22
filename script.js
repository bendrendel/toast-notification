const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

const types = ["info", "success", "error"];

button.addEventListener("click", () =>
  createNotification()
);

function createNotification(message = null, type = null) {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add(type ? type : getRandomType());
  toast.innerText = message ? message : getRandomMessage();

  toasts.append(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function getRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const message = messages[randomIndex];
  return message;
}

function getRandomType() {
  const randomIndex = Math.floor(Math.random() * types.length);
  const type = types[randomIndex];
  return type;
}
