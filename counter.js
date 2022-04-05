let value = document.getElementById("value");
let buttons = document.querySelectorAll(".btn");
let count = 0;

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    style = e.currentTarget.classList;
    if (style.contains("increase")) {
      value.textContent = count++;
    } else if (style.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }
    if (count < 0) {
      value.style.color = "red";
    } else if (count > 0) {
      value.style.color = "green";
    } else {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
