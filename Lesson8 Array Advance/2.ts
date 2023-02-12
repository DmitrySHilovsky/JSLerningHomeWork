// Task 2 desktop_computer
// Используя метод map создайте новый массив, на основе массива users, в котором каждый элемент массива будет содержать строку вида:

// ['member 1: Darya', 'member 2: Masha', ... etc]

const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];
// Реализуйте решение двумя способами, используя function declaration & arrow function.
 let member = users.map((item,index)=>{
    return `member ${index + 1}: ${item}`
 })
 console.log(member);