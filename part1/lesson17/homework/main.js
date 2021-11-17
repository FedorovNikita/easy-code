// 1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение

// Пример вызова:

// multiply(1,2,3); // => результат 6 (1*2*3);

// Если нет ни одного аргумента, вернуть ноль: multiply() // 0

// function multiply() {
//   if (!arguments.length) return 0;

//   let mult = 1;

//   for (let i = 0; i < arguments.length; i++) {
//     mult *= arguments[i];
//   }

//   return mult;
// }

// console.log(multiply());

// 2. Создать функцию, которая принимает строку и возвращает строку-перевертыш:
// Примеры вызовов и результаты
// reverseString('test') // "tset"
// reverseString('') // ''
// reverseString(null) // llun
// reverseString(undefined) // denifednu
// reverseString() // denifednu

// function reverseString(str) {
//   let newStr = '';
//   str = String(str);

//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }

//   return newStr;
// }

// console.log(reverseString());

// 3. Создать функцию, которая в качестве аргумента может принять строку, числа, null или undefined и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:
// getCodeStringFromText('hello') // "104 101 108 108 111"

// function getCodeStringFromText(str) {
//   str = String(str);
//   let codeString = '';

//   for (let i = 0; i < str.length; i++) {
//     codeString += str[i].charCodeAt() + ' ';
//   }

//   return codeString.trim();
// }

// console.log(getCodeStringFromText('hello'));
// console.log(getCodeStringFromText(null));
// console.log(getCodeStringFromText(undefined));

