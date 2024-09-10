let input = " ";
let button = document.body.querySelectorAll(".button");
let screen = document.body.querySelector("input");

for (let item of button) {
  item.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      input = eval(input);
      screen.value = input;
    } else if (e.target.innerHTML == "CA") {
      input = " ";
      screen.value = input;
    } else if (e.target.innerHTML == "DE") {
      input = input.substring(0, input.length - 1);
      screen.value = input;
    } else if (e.target.innerHTML === "%") {
      input = input + "%";
      screen.value = input;
    } else {
      input = input + e.target.innerHTML;
      screen.value = input;
    }
  });
}
