const counter = document.getElementById("counter");

document.getElementById("incrementer").addEventListener("click", () => {
  counter.textContent = +counter.textContent + 1;
});
