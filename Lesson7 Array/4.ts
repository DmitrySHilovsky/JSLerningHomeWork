// Task 4 desktop_computer
// Дан массив:

// const students = ["Polina", "Dasha", "Masha"];
// Удалите последний элемент массива, затем вместо него добавьте в массив студента Borya.
// Удалите первый элемент массива, затем вместо него добавьте в массив студента Andrey.
// Полученный результат не забудьте вывести в консоль.

const students = ["Polina", "Dasha", "Masha"];
console.log(students);
students.splice(2,1, "Borya");
console.log(students);
students.splice(0,1, "Andrey");
console.log(students);

const students1 = ["Polina", "Dasha", "Masha"];

students1.pop();
students1.push("Borya");
students1.shift();
students1.unshift("Andrey");
console.log(students1); // ["Andrey", "Dasha", "Borya"]