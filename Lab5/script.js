// Зміна тексту при натисканні кнопки
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("text").textContent = "Текст успішно змінено!";
});

// Зміна стилю при наведенні
document.getElementById("content").addEventListener("mouseover", function() {
    this.classList.add("highlight");
});

document.getElementById("content").addEventListener("mouseout", function() {
    this.classList.remove("highlight");
});

// Додавання нового елемента
document.getElementById("addElementBtn").addEventListener("click", function() {
    let newItem = document.createElement("li");
    newItem.textContent = "Новий елемент списку";
    document.getElementById("list").appendChild(newItem);
});

// Видалення останнього елемента списку
document.getElementById("removeElementBtn").addEventListener("click", function() {
    let list = document.getElementById("list");
    if (list.lastChild) {
        list.removeChild(list.lastChild);
    }
});

// Лічильник натискань
let count = 0;
const maxClicks = 5;
document.getElementById("clickCounterBtn").addEventListener("click", function() {
    count++;
    if (count === maxClicks) {
        alert("Юрій Бірбан варіант номер 1!");
        count = 0; // Скидаємо лічильник
    }
});
