//Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.//


let num1 = parseFloat(prompt("Введіть перше число:"));
let num2 = parseFloat(prompt("Введіть друге число:"));

if (num1 > num2) {
    console.log(`Максимальне число: ${num1}`);
} else if (num2 > num1) {
    console.log(`Максимальне число: ${num2}`);
} else {
    console.log("Числа рівні");
}