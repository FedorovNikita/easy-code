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

// 4. Создать функцию угадай число. 
// Она принимает число от 1-10 (обязательно проверить чито число не больше 10 и не меньше 0)
// Если число не соответствует условию то верните ошибку return new Error("Please provide number in range 0 - 10")
// Если передано не число то верните ошибку return new Error("Please provide a valid number")
// Далее функция генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали, то возвращает строку "You win!"
// Если нет, то  строку "You are lose, your number is 8, the random number is 5". Числа в строке указаны как пример. Вы подставляете реальные числа
// Если передано число в виде строки оно должно быть преобразовано к числу

function guessTheNumber(num) {

    num = Number(num);
    
    if (typeof num !== "number" || isNaN(num)) {
        return new Error("Please provide a valid number");
    }

    if (num < 0 || num > 10) {
        return new Error("Please provide number in range 0 - 10");
    }

    let randomValue = Math.ceil(Math.random() * 10);
    
    if (randomValue === num) {
        return "You win!";
    } else {
        return `You are lose, your number is ${num}, the random number is ${randomValue}`;
    }

}

console.log(guessTheNumber(4));
