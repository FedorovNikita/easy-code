// 1. Создать функцию, которая принимает число n и возвращает массив заполненный числами от 1 до n:
// getArray(10);

// function getArray(num) {
//     const arr = [];

//     for (let i = 1; i <= num; i++) {
//         arr.push(i);
//     }

//     return arr;
// }

// console.log(getArray(10));

// 2. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива.
// doubleArray([1, 2, 3]) // [1, 2, 3, 1, 2, 3]

// function doubleArray(arr) {
//     return arr.concat(arr);
// }

// console.log(doubleArray([1, 2, 3]));

// 3. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвразает массив из оставшихся значений
// changeCollection([1, 2, 3], ['a', 'b', 'c']) // [[2, 3], ['b', 'c']]
//  Не забудьте про проверку того что массив является массивом. Это можно сделать с помощью метода Array.isArray(arr)

// function changeCollection() {
//     const newArr = [];
//     for (let i = 0; i < arguments.length; i++) {
//         if (Array.isArray(arguments[i])) {
//             // newArr.push(arguments[i].slice(1)); // но тут изменяем входящие данные
//             const el = arguments[i].slice();
//             el.shift();
//             newArr.push(el);
//         }
//     }

//     return newArr;
// }

// console.log(changeCollection([1,2,3], ['a', 'b', 'c']))

// 4. Создать функцию которая принимает массив пользователей, поле которое хочу проверить и значение, на которое хочу проверять указанное поле. Проверять что все аргументы переданы. Если что-то не передано, то возвращать объект ошибки return new Error('Error message'). Возвращать новый массив с пользователями соотвествующие указанным параметрам.

const users = [
    {
        _id: "5e36b779dc76fe3db02adc32",
        balance: "$1,955.65",
        picture: "http://placehold.it/32x32",
        age: 33,
        name: "Berg Zimmerman",
        gender: "male",
    },
    {
        _id: "5e36b779d117774176f90e0b",
        balance: "$3,776.14",
        picture: "http://placehold.it/32x32",
        age: 37,
        name: "Deann Winters",
        gender: "female",
    },
    {
        _id: "5e36b779daf6e455ec54cf45",
        balance: "$3,424.84",
        picture: "http://placehold.it/32x32",
        age: 36,
        name: "Kari Waters",
        gender: "female",
    },
];

function filterUsers(arr, key, value) {
    if (arr === undefined || key === undefined || value === undefined) return new Error('Error message');

    return arr.filter(item => item[key] === value);
}

console.log(filterUsers(users, "age", 36))
console.log(filterUsers(users, "gender", 'female'))

