// Task 2 man_teacher
// const matrix = [
//   [12, 98, 78, 65, 23],
//   [54, 76, 98, 43, 65],
//   [13, 324, 65, 312],
//   [9092, 22, 45, 90000],
// ];
// Выведите в консоль среднее значение чисел в многомерном массиве.

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
];
// const sumMatrix = matrix.map((item) => {
//     return item.reduce((accum, item) => {
//         return accum = accum + item;
//     }, 0)
// })

const sumMatrix = matrix.reduce((accum, value) => {
    return value.reduce((accum, value) => {
        return accum = accum + value;
    }, 0)
}, 0)

console.log(sumMatrix / matrix.length);

// const massivv = [22,14,65,767,1];
// const sumMassivv = massivv.reduce((accum,item)=>{
//     return accum = accum + item;
// },0)
// console.log(sumMassivv);


