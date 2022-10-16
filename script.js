const form = document.querySelector(".form");
const result = document.querySelector(".value");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = form[0].value
    .split(",")
    .map((item, index) => `${index + 1}. ${item}`)
    .join("\n\n");

  navigator.clipboard.writeText(data);

  form.remove();
  result.innerHTML = "Thanks for your using";
});
