// Завдання 1: Привітання користувача
console.log("Завдання 1.");
let userName = prompt("Введіть своє ім'я:");
alert(`Привіт, ${userName}! Радий тебе бачити!`);
console.log(`Привіт, ${userName}!`);

// Завдання 2: Проста арифметика
console.log("Завдання 2.");
let num1 = parseFloat(prompt("Введіть перше число:"));
let num2 = parseFloat(prompt("Введіть друге число:"));
let variantNumber = 8; // Замініть на свій номер варіанта

if (variantNumber % 2 === 0) {
    let sum = num1 + num2;
    let diff = num1 - num2;
    alert(`Сума: ${sum}, Різниця: ${diff}`);
    console.log(`Сума: ${sum}, Різниця: ${diff}`);
} else {
    let product = num1 * num2;
    let quotient = num1 / num2;
    alert(`Добуток: ${product}, Частка: ${quotient}`);
    console.log(`Добуток: ${product}, Частка: ${quotient}`);
}

// Завдання 3: Обчислення віку користувача
console.log("Завдання 3.");
const myAge = 20; // Вкажіть свій вік
const currentYear = 2025;
let birthYear = parseInt(prompt("Введіть свій рік народження:"));
let userAge = currentYear - birthYear;
let ageDifference = Math.abs(myAge - userAge);

if (userAge > myAge) {
    alert(`Вам ${userAge} років. Ви старші за мене на ${ageDifference} років.`);
    console.log(`Вам ${userAge} років. Ви старші за мене на ${ageDifference} років.`);
} else if (userAge < myAge) {
    alert(`Вам ${userAge} років. Ви молодші за мене на ${ageDifference} років.`);
    console.log(`Вам ${userAge} років. Ви молодші за мене на ${ageDifference} років.`);
} else {
    alert(`Вам ${userAge} років. Ми ровесники!`);
    console.log(`Вам ${userAge} років. Ми ровесники!`);
}
