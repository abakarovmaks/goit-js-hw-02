let input;
const numbers = [];
let total = 0;

do {
  input = Number(prompt("Введите число"));
  numbers.push(input);
} while (input);
for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}
console.log(`Общая сумма чисел равна ${total}`);
