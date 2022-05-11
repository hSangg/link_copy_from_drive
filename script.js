const form = document.querySelector(".form");
const result = document.querySelector(".value");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = form[0].value.split(",").map((x) => x + "<br></br>");

  result.innerHTML = data.join("");
  form.remove();
});
