const email = document.querySelector(".input");
const form = document.querySelector("form");
const last = document.querySelector(".inner");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   document.body.removeChild(form);
  last.innerHTML = "Check your inbox to confirm your subscription";
  last.classList.add("golmal");
});
