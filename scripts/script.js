document.addEventListener("DOMContentLoaded", function () {
  fetch("https://agvardia.github.io/data-new.json")
    .then((response) => response.json())
    .then((data) => {
      document.querySelectorAll("a.phone-btn").forEach((element) => {
        element.href = data.phone;
        element.textContent = data.phone.replace("tel:", "");
      });
    });
});
