const buttons = document.querySelectorAll(".color-btn");

buttons.forEach((b) =>
  b.addEventListener("click", () => {
    document.documentElement.style.setProperty("--hue", b.dataset.color);
  })
);
