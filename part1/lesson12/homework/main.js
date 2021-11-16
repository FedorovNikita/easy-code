// Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.

// Вопросы к этому заданию
// 1. Создать объект с полем product, равным 'iphone'

const newObject = {};
newObject.product = 'iphone';

// console.log(newObject);

// 2. Добавить в объект поле price, равное 1000 и поле currency, равное 'dollar'

newObject.price = 1000;
newObject.currency = 'dollar';

// console.log(newObject);

// 3. Добавить поле details, которое будет содержать объект с полями model и color

newObject.details = {};
newObject.details.model = '13';
newObject.details.color = 'red';

console.log(newObject);