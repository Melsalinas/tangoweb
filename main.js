document.addEventListener("DOMContentLoaded", function () {
  const classButtons = document.querySelectorAll(".class-button");

  classButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove 'selected' class from all buttons
      classButtons.forEach((btn) => btn.classList.remove("selected"));

      // Add 'selected' class to the clicked button
      this.classList.add("selected");
    });
  });
});
