// Вопросы к этому заданию
// 1. На основе строки "i am in the easycode" сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.

// let str = "i am in the easycode";
// let newStr = '';

// for (let i = 0; i < str.length; i++) {
//     if (!i) {
//         newStr += str[i].toUpperCase();
//     } else if (str[i] === ' ') {
//         newStr += str[i];
//         newStr += str[++i].toUpperCase();
//     } else {
//         newStr += str[i];
//     }
// }

// console.log(newStr);

// 2. Дана строка "tseb eht ma i". Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

// let str = "tseb eht ma i";
// let newStr = '';
// let i = str.length;

// while (i--) {
//     newStr += str[i];
// }

// console.log(newStr);

// 3. Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.

// let x = 10;
// let result = 1;

// for (let i = x; i > 0; i--) {
//     result *= i;
// }

// console.log(result);

// 4. На основе строки "JavaScript is a pretty good language" сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

// let str = "JavaScript is a pretty good language";
// let newStr = '';

// for (let i = 0; i < str.length; i++) {
//     if (!i) {
//         newStr += str[i].toUpperCase();
//     } else if (str[i] === ' ') {
//         newStr += str[++i].toUpperCase();
//     } else {
//         newStr += str[i];
//     }
// }

// console.log(newStr);

// 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// for (let i of arr) {
//     if (arr[i - 1] % 2 !== 0) {
//         console.log(arr[i - 1]);
//     }
// }

// 6. Дан объект:

// let list = {
//     name: 'denis',
//     work: 'easycode',
//     age: 29,
// }

// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

let list = {
    name: 'denis',
    work: 'easycode',
    age: 29,
}

for (let key in list) {
    if (typeof list[key] === "string") {
        list[key] = list[key].toUpperCase();
    }
}

console.log(list);