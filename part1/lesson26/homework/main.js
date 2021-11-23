// 1. Создайте функцию которая бы умела делать:

// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0

// Подсказка, функция minus должна возвращать другую функцию.

// function minus(firstNumber = 0) {
//     return function(secondNumber = 0) {
//         return firstNumber - secondNumber;
//     };
// }

// console.log(minus(10)(6));
// console.log(minus(5)(6));
// console.log(minus(10)());
// console.log(minus()(6));
// console.log(minus()());

// 2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:

// function multiplyMaker ...
// const multiply = multiplyMaker(2);

// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)

// function multiplyMaker(firstNumber) {
//     let num = firstNumber;
//     return function(secondNumber) {
//         return num *= secondNumber;
//     };
// }

// const multiply = multiplyMaker(2);

// console.log(multiply(2)); // 4 (2 * 2)
// console.log(multiply(1)); // 4 (4 * 1)
// console.log(multiply(3)); // 12 (4 * 3)
// console.log(multiply(10)); // 120 (12 * 10)

// 3. Реализовать модуль, который работает со строкой и имеет методы:

// a. установить строку:
//     i. если передано пустое значение, то установить пустую строку
//     ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш

// Пример:
// модуль.установитьСтроку('abcde');
// модуль.получитьСтроку(); // 'abcde'
// модуль.получитьДлину(); // 5

// const module = (function() {
//     let value = null;

//     function setValue(str = '') {
//         value = String(str);
//     }

//     function getValue() {
//         return value;
//     }

//     function getLengthValue() {
//         return value.length;
//     }

//     function getStrReverse() {
//         return value.split('').reverse().join('');
//     }

//     return {
//         setValue, getValue, getLengthValue, getStrReverse,
//     };
// }());

// module.setValue('abcde');
// console.log(module.getValue());
// console.log(module.getLengthValue());

// 4. Создайте модуль "калькулятор", который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100 

const calculator = (function() {
    let value = 0; 

    function setValue(num) {
        value = num;
        return this;
    }

    function getValue() {
        return Math.round(value);
    }

    function plusValue(num) {
        value += num;
        return this;
    }

    function minusValue(num) {
        value -= num;
        return this;
    }

    function multValue(num) {
        value *= num;
        return this;
    }

    function divide(num) {
        value *= num;
        return this;
    }

    function degreeValue(num) {
        value **= num;
        return this;
    }

    return {
        setValue, getValue, plusValue, minusValue, multValue, divide, degreeValue,
    };
}());

console.log(calculator.setValue(10).plusValue(5).multValue(2).getValue());
console.log(calculator.setValue(10).degreeValue(3).getValue());

