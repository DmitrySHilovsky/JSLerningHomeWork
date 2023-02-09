// Task 7 desktop_computer
// Дан массив:

// const binary = [0, 0, 0, 0];
// Наш бинарный массив неполный, в нем явно не хватает единиц.
// Превратите данный массив в строку.
// [0, 0, 0, 0] -> '0101010'

const binary = [0, 0, 0, 0];

const binaryString = binary.join('1');

console.log(binaryString);

