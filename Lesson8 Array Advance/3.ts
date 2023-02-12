// Task 3 desktop_computer
// С помощью метода filter создайте новый массив в котором не будет отрицательных чисел.

const numbers = [7, -4, 32, -90, 54, 32, -21];
// Реализуйте решение двумя способами, используя function declaration & arrow function.

let naturalNumbers = numbers.filter((item) => item > 0);
console.log(naturalNumbers);