const toggleSwitch = document.getElementById("toggle-switch");
const body = document.body;

toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
  } else {
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
  }
});
