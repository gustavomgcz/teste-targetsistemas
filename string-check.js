const btnTecnica2 = document.querySelector(".check-a");
const resTecnica2 = document.querySelector("#result2");

btnTecnica2.addEventListener("click", function () {
  const userText = document.getElementById("user-text").value;
  if (userText.toLowerCase().includes("a")) {
    const regex = /a/gi;
    const match = userText.match(regex);
    const count = match ? match.length : 0;
    resTecnica2.textContent = `O texto contém a letra 'a', que aparece ${count} vez(es).`;
  } else {
    resTecnica2.textContent = "O texto não contém a letra 'a'.";
  }
});
