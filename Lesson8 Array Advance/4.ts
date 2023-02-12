// Task 4 desktop_computer
// Используя метод reduce получите сумму всех чисел массива.

const fibonacci = [
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];
// Реализуйте решение двумя способами, используя function declaration & arrow function.

let sum: number
sum = fibonacci.reduce((accum,item) => accum += item, 0);

console.log(sum);