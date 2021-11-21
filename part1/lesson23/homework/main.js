// 1. Создать объект, которые описывает ширину и высоту прямоугольника, а также может посчитать площадь фигуры

// const rectangle = {
//     width: 100,
//     height: 200,
//     getSquare() {
//         return this.width * this.height;
//     },
// };

// console.log(rectangle.getSquare());

// 2. Создать объект, у которого будет цена товара и его скидка, а также два метода: для получения цены и для расчета с учетом скидки:

// const price = {
//     price: 10,
//     discount: '15%',
//     getPrice() {
//         return this.price;
//     },
//     getPriceWithDiscount() {
//         return (100 - parseInt(this.discount)) / 100 * this.price;
//     },
// };

// console.log(price.getPrice());
// console.log(price.getPriceWithDiscount());

// 3. Создать объект, у которого будет поле высота и метод "увеличить высоту на один". Метод должен возвращать новую стркоу:
// object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;

// const counter = {
//     height: 0,
//     increase() {
//         this.height++;
//         return this;
//     },
// };

// counter.height = 10;
// counter.increase()
// console.log(counter.increase().height);

// 4. Создать объект "вычислитель", у которого есть числовое свойство "значение" и методы "удвоить", "прибавить один", "отнять один". Методы можно вызывать через точку, образуя цепочку методов:

// const numerator = {
//     value: 1,
//     double() {
//         this.value += this.value;
//         return this;
//     },
//     plusOne() {
//         this.value++;
//         return this;
//     },
//     minusOne() {
//         this.value--;
//         return this;
//     },
// };

// numerator.double().plusOne().plusOne().minusOne();
// console.log(numerator.value);

// 5. Создать объект с розничной ценой и количеством продуктов. Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)

// const product = {
//     price: 10,
//     count: 100,
//     getCost() {
//         return this.price * this.count;
//     },
// };

// console.log(product.getCost());

// 6. Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь. Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы.
// Для этого "позаимствуйте" метод из предыдущего объекта

// const product = {
//     count: 100,
//     price: 10,
//     getCost() {
//         return this.price * this.count;
//     },
// };

// const details = {
//     count: 50,
//     price: 10,
// }

// details.getCost = product.getCost;
// console.log(details.getCost());

// 7. Даны объект и функция:
// let sizes = {width: 5, height: 10},
// getSquare = function () {return this.width * this.height};
// Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes

// let sizes = {
//     width: 5, 
//     height: 10,
// };

// getSquare = function () {
//     return this.width * this.height
// };

// console.log(getSquare.call(sizes));

// 8. 
// let element = {
//     height: 25,
//     getHeight: function () {
//         return this.height;
//     },
// };

// let getElementHeight = element.getHeight;
// getElementHeight(); // undefined

// Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.

let element = {
    height: 25,
    getHeight: function () {
        return this.height;
    },
};

let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight());