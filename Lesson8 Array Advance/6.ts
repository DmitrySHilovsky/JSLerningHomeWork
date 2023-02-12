// Task 6 desktop_computer
// Используя метод some проверьте то, в массиве есть элемент кратный 3 и 5.
const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5, 15];
// Реализуйте решение двумя способами, используя function declaration & arrow function. Реализуйте оба варианта, когда результирущее значение true или false

let result = numbers.some((num)=>num % 3 === 0 && num % 5 === 0);
console.log(result);


