let name = localStorage.getItem("username");
if (!name) {
  name = prompt("Введіть своє ім'я:");
  localStorage.setItem("username", name);
}

const toggle = document.getElementById("theme-toggle");
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

let views = localStorage.getItem("views") || 0;
views++;
localStorage.setItem("views", views);
document.getElementById("view-count").textContent = views;

let seconds = 0;
setInterval(() => {
  seconds++;
  document.getElementById("timer").textContent = seconds;
}, 1000);

const form = document.getElementById("contact-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userName = document.getElementById("form-name").value.trim();
  const email = document.getElementById("form-email").value.trim();
  const message = document.getElementById("form-message").value.trim();

  if (userName && email && message) {
    const msgObj = {
      name: userName,
      email: email,
      message: message,
      time: new Date().toLocaleString(),
    };

    const messages = JSON.parse(localStorage.getItem("messages") || "[]");

    messages.push(msgObj);

    localStorage.setItem("messages", JSON.stringify(messages));

    alert(`Дякуємо, ${userName}! Повідомлення збережено.`);

    form.reset();
  } else {
    alert("Будь ласка, заповніть усі поля.");
  }
});

document.querySelectorAll(".bar").forEach(bar => {
  const percent = bar.getAttribute("data-percent");
  setTimeout(() => {
    bar.style.height = percent + "%";
    bar.classList.add("grow");
  }, 100);
});
