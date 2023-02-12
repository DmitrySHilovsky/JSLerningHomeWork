// Task 5 desktop_computer
// Используя метод find найдите в массиве первое четное число.

const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

let firsPositive = numbers.find((item)=>!(item%2));

console.log(firsPositive);