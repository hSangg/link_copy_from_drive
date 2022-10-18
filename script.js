const form = document.querySelector(".form");
const result = document.querySelector(".value");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const regex = /,/;
  const data = form[0].value
    .split(regex)
    .map((item, index) => `${index + 1}. ${item}`)
    .join("\n\n");

  console.log(data);

  navigator.clipboard.writeText(data);

  form.remove();
  result.innerHTML = "Thank you for using my services =)";
  window.open("https://chat.zalo.me/", "_blank").focus();
});
