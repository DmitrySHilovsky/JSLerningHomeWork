// Task 1 computer
// Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта.

let obj = { firstName: "Ivan", secondName: "Fedotov" };
delete obj.firstName;
console.log(obj);
