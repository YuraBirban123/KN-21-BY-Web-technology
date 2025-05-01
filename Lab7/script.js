function animateCircle() {
  const circle = document.getElementById("circle");
  circle.classList.remove("animate");
  void circle.offsetWidth; // Перезапуск анімації
  circle.classList.add("animate");

  const N = 1; // Номер варіанту
  setInterval(() => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    circle.style.backgroundColor = randomColor;
  }, N * 1000);
}
