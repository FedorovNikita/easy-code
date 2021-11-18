// 1. Создать функции:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)
// Первая функция возвращает строку "New value: " и результат обработки
// firstFunc(['my', 'name', 'is', 'Trinity'], handler1) => "New value: MyNameIsTrinity"
// firstFunc([10, 20, 30], handler2) => "New value: 100, 200, 300,"
// firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3) => "New value: Jhon is 45, Aaron is 20,"
// firstFunc(['abc', '123'], handler4) => "New value: cba, 321,"

// Имена функций должны быть как в примере!

// Подсказка: secondFunc должна быть представлена функцией, которая принимает один аргумент (каждый элемент массива) и возвращает результат его обработки

// function firstFunc(arr, fn) {
//     let newStr = 'New value: ';

//     for (let i = 0; i < arr.length; i++) {
//         newStr += fn(arr[i]);
//     }

//     return newStr.trim();
// }

// function handler1(el) {
//     return el[0].toUpperCase() + el.slice(1);
// }

// function handler2(el) {
//     return el * 10 + ', ';
// }

// function handler3(el) {
//     return `${el.name} is ${el.age}, `;
// }

// function handler4(el) {
//     return el.split('').reverse().join('') + ', ';
// }

// console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));
// console.log(firstFunc([10, 20, 30], handler2));
// console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));
// console.log(firstFunc(['abs', '123'], handler4));

// 2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив). Вторым аргументом callback (обязательно проверьте что передана функция). Если передан один из аргументов не удовлетворяет условию, то функция должна вернуть new Error("с произвольным сообщением.") Функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). CallBack должен принимать один элемент массива, его индекс в массиве и весь массив

function every(arr, fn) {
    if (!Array.isArray(arr)) return new Error('it is not array');
    if (typeof fn !== 'function') return new Error('it is not function');

    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i], i, arr)) {
            return false;
        }
    }

    return true;
}

console.log(every([1, 2, 3, 'sdf'], (el) => {
    return typeof el === 'number';
}))
