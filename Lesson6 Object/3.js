// Task 3 desktop_computer
// Дан обьект:

// const student = {
//   name: "John",
//   age: 19,
//   isHappy: true,
// };
// C помощью цикла for in вывести в консоль сначала все ключи, потом значения ключей обьекта.

const student = {
    name: "John",
    age: 19,
    isHappy: true,
};

for (let key in student) {
    console.log("ключ: " + key + " значение: "+student[key]);
}