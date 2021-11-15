// Дана строка: let string = "some test string";
// ВРУЧНУЮ НИЧЕГО НЕ СЧИТАТЬ

// Вопросы к этому заданию
// 1. Получить первую и последнюю буквы строки

// let string = "some test string";
// let firstLetter = string[0];
// let lastLetter = string[string.length - 1];

// console.log(firstLetter, lastLetter);

// 2. Сделать первую и последнюю буквы в верхнем регистре

// let string = "some test string";
// let firstLetter = string[0];
// let lastLetter = string[string.length - 1];
// let newString = firstLetter.toUpperCase() + string.slice(1, -1) + lastLetter.toUpperCase();

// console.log(newString);

// 3. Найти положение слова ‘string’ в строке

// let string = "some test string";
// let indexWordInString = string.indexOf('string');
// console.log(indexWordInString); 

// 4. Найти положение второго пробела (“вручную” ничего не считать)

// let string = "some test string";
// let secondSpace = string.indexOf(' ', string.indexOf(' ') + 1);

// console.log(secondSpace);

// 5. Получить строку с 5-го символа длиной 4 буквы

// let string = "some test string";
// let newString = string.slice(4, 8);
// console.log(newString);

// 6. Получить строку с 5-го по 9-й символы

// let string = "some test string";
// let newString = string.slice(4, 10);
// console.log(newString);

// 7. Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)

// let string = "some test string";
// let newString = string.slice(0, -6);
// console.log(newString);

// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”

let a = 20;
let b = 16; 
let newString = '' + a + b;
console.log(newString);

