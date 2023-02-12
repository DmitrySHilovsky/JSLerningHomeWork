// Task 5 desktop_computer
// Дан обьект:

// let salaries = {
//   andrey: 500,
//   sveta: 413,
//   anton: 987,
//   andrey: 664,
//   alexandra: 199,
// };
// Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную


let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199,
};

let sum = 0;
let countWorkers = 0;
for (key in salaries) {
    sum = sum + salaries[key];
    countWorkers++;
}

console.log(sum/countWorkers);