const button = document.querySelector("#toggle-btn");
const text = document.querySelector("h1");
const body = document.body;

button.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    text.innerText = "Light Mode Toggle";
    button.innerText = "Toggle Light Mode";
  } else {
    text.innerText = "Dark Mode Toggle";
    button.innerText = "Toggle Dark Mode";
  }
});
