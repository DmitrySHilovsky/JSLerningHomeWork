// ADVANCED level
// Для решения задач используйте циклы for или for of

// Task 1 man_teacher
// Реализуйте функцию которая будет проверять, является ли слово палиндромом.
const texet = ["t", "e", "x", "e", "t"];
const texes = ["t", "e", "x", "e", "s"];



function isPalindrom(array: string[]): boolean {
    const reversArr = array.slice(0).reverse();
    console.log(array);
    console.log(reversArr);
    for (let i=0; i<array.length; i++) {
        console.log("сравнивание ",array[i]," ",reversArr[i]);
        if (array[i] != reversArr[i]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrom(texet));
console.log(isPalindrom(texes));

