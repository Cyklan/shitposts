import "virtual:fonts.css";
import "./style.css";

window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("crack");
  button?.addEventListener("click", () => {
    setTimeout(() => {
      button.click();
    }, 100);
    navigator.vibrate(100);
  });
});
