// Task 6 desktop_computer
// Создать валидатор, 2 метода: валидатор и логин. 
// Первый метод принимают у пользователя логин и пароль для регистрации.
// Затем данные записать в обьект. Второй метод принимает данные пользователя и объект зарегестрированного пользователя. 
// Если передан верный логин и пароль, вывести сообщение Добро пожалоВать.

function validator(username, password) {
    let userObj = {
        username: username,
        password: password
    }
    return userObj;
}

// Login Function
function login(username, password, userObj) {
    if (username === userObj.username && password === userObj.password) {
        console.log("Welcome!");
    }
    else {
        console.log("Incorrect credentials, please try again.");
    }
}

const userObj1 = validator(123, 123,);
login(123, 123, userObj1);
login(123, 124, userObj1);