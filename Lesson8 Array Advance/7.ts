// Task 7 desktop_computer
// Используя метод every проверьте то, в массиве сумма цифр квадратов значений четная.

// Реализуйте решение двумя способами, используя function declaration & arrow function. Реализуйте оба варианта, 
// когда результирущее значение true или false

const numbers = [2, 11];

const isSumEven = numbers.every((item) => {
    let quad = item * item;
    let quadInString = quad.toString().split('');

    let sumCifr = quadInString.reduce((accum, item) => accum += Number(item), 0);
    console.log("сумма цифр");
    console.log(sumCifr);
    return sumCifr % 2 === 0;
})

console.log(isSumEven);





