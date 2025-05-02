let colorInterval;

function animateCircle() {
  const circle = document.getElementById("circle");
  circle.classList.remove("animate");
  void circle.offsetWidth;
  circle.classList.add("animate");

  const N = 1;

  clearInterval(colorInterval); // очищення попереднього
  colorInterval = setInterval(() => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    circle.style.backgroundColor = randomColor;
  }, N * 1000);
}
