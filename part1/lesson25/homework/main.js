// 1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив, каждый элемент которого будет хранить информацию о числе и его четности: [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

// let arr = [1, 2, 3, 5, 8, 9, 10];
// let newArr = arr.map(item => ({
//     digit: item,
//     odd: !!(item % 2),
// }));

// console.log(newArr);

// 2. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true.

// let arr = [12, 4, 50, 1, 0, 18, 40];
// let isZeroInArr = arr.some(item => item === 0);

// console.log(isZeroInArr);

// 3. Проверить, все элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. Если да - вернуть true

// let arrStr = ['yes', 'hello', 'no', 'easycode', 'what'];
// let isMoreThreeSymbol = arrStr.every(item => item.length > 3);

// console.log(isMoreThreeSymbol);

// 4. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:
// [
//     { char: "a", index: 12 },
//     { char: "w", index: 8 },
//     { char: "Y", index: 10 },
//     { char: "p", index: 3 },
//     { char: "p", index: 2 },
//     { char: "N", index: 6 },
//     { char: " ", index: 5 },
//     { char: "y", index: 4 },
//     { char: "r", index: 13 },
//     { char: "H", index: 0 },
//     { char: "e", index: 11 },
//     { char: "a", index: 1 },
//     { char: " ", index: 9 },
//     { char: "!", index: 14 },
//     { char: "e", index: 7 },
// ];

// Напишите функцию, которая из элементов массива соберет и вернёт
// строку, основываясь на index каждой буквы. Например:
// [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”


// let listSymbol = [
//     { char: "a", index: 12 },
//     { char: "w", index: 8 },
//     { char: "Y", index: 10 },
//     { char: "p", index: 3 },
//     { char: "p", index: 2 },
//     { char: "N", index: 6 },
//     { char: " ", index: 5 },
//     { char: "y", index: 4 },
//     { char: "r", index: 13 },
//     { char: "H", index: 0 },
//     { char: "e", index: 11 },
//     { char: "a", index: 1 },
//     { char: " ", index: 9 },
//     { char: "!", index: 14 },
//     { char: "e", index: 7 },
// ];

// function madeString(arr) {
//     let newArr = [...arr];
//     let sortArr = newArr.sort((prev, next) => prev.index - next.index);
//     return sortArr.reduce((str, item) => str += item.char, "");
// }

// console.log(madeString(listSymbol));

// 5. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]

// let arr = [[14, 45], [1], ["a", "c", "d"]];
// let sortArrByLength = arr.sort((prev, next) => prev.length - next.length);

// console.log(sortArrByLength);

// 6. Есть массив объектов:

// [
//     { cpu: "intel", info: { cores: 2, сache: 3 } },
//     { cpu: "intel", info: { cores: 4, сache: 4 } },
//     { cpu: "amd", info: { cores: 1, сache: 1 } },
//     { cpu: "intel", info: { cores: 3, сache: 2 } },
//     { cpu: "amd", info: { cores: 4, сache: 2 } },
// ];
// Отсортировать их по возрастающему количеству ядер (cores).

// let arr = [
//     { cpu: "intel", info: { cores: 2, сache: 3 } },
//     { cpu: "intel", info: { cores: 4, сache: 4 } },
//     { cpu: "amd", info: { cores: 1, сache: 1 } },
//     { cpu: "intel", info: { cores: 3, сache: 2 } },
//     { cpu: "amd", info: { cores: 4, сache: 2 } },
// ];

// let sortArrByCores = arr.sort((prev, next) => prev.info.cores - next.info.cores);
// console.log(sortArrByCores);

// 7. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:

// let products = [
//     {title: 'prod1', price: 5.2}, 
//     {title: 'prod2', price: 0.18},
//     {title: 'prod3', price: 15}, 
//     {title: 'prod4', price: 25},
//     {title: 'prod5', price: 18.9}, 
//     {title: 'prod6', price: 8},
//     {title: 'prod7', price: 19}, 
//     {title: 'prod8', price: 63},    
// ];

// filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]

// let products = [
//     {title: 'prod1', price: 5.2}, 
//     {title: 'prod2', price: 0.18},
//     {title: 'prod3', price: 15}, 
//     {title: 'prod4', price: 25},
//     {title: 'prod5', price: 18.9}, 
//     {title: 'prod6', price: 8},
//     {title: 'prod7', price: 19}, 
//     {title: 'prod8', price: 63},    
// ];

// function sortArrByPrice(arr, from, to) {
//     let newArr = [...arr];
//     let sortArr = newArr.sort((prev, next) => prev.price - next.price);
//     return sortArr.filter(item => item.price >= from && item.price <= to);
// }

// console.log(sortArrByPrice(products, 15, 30));
