// Task 3 desktop_computer
// Дан массив:

// const numbers = [5, 43, 63, 23, 90];
// Удалите все элементы в массиве и выведите в консоль полученный результат.

// Реализуйте решение двумя способами.

const numbers = [5, 43, 63, 23, 90];
numbers.length = 0;
console.log(numbers);

const numbers1 = [5, 43, 63, 23, 90];
numbers1.splice(0, numbers1.length);
console.log(numbers1);