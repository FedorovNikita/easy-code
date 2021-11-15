// Однострочный комментарий

/* 
    Многострочный комментарий
*/

/**
 * JSDoc комментарии
 */

/**
 * 1. Примитивные
 * - Number: 2019, 1.5, NaN, Infinity
 * - String: 'Hello', "Hello", `Hello`
 * - Boolean: true, false
 * - Null: null
 * - Undefined: undefined
 * - Symbol()
 * - BigInt
 */

console.log(2021, 1.5); // 2021, 1.5 
console.log(20 * 'sdfdf'); // NaN
console.log(1 / 0); // Infinity

console.log('Hello', "Hello", `Hello`); // 'Hello', "Hello", `Hello`

console.log(true, false);

console.log(null); // значение не известно: null

console.log(undefined); // переменная ничему не равна или еще не задана: undefined

console.log(Symbol()); // Symbol()

/**
 * 2. Обекты. (Reference type) Передаются по ссылке
 * - Object: {name: 'Nik', age: 25}
 * * Array: [1, 2, 3]
 * * Function: function foo() {}
 * * Date: new Date()
 * ....
 */

console.log({
    name: 'Nik',
    age: 25,
});
console.log([1, 2, 3]);

/**
 * Особенности:
 * 1. JS динамически типизированный язык
 * 2. Одна и таже переменная может хранить в себе любой тип данных
 * 3. Нам не нужно определять тип данных при создании переменных
 * 4. Если мы хотим использовать статическую типиздацию мы можем использовать TypeScript или Flow
 */