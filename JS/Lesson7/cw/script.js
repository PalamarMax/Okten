// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, producer, year, maxSpeed, power) {
//
//     this['model'] = model;
//     this['producer'] = producer;
//     this['year'] = year;
//     this['maxSpeed'] = maxSpeed;
//     this['power'] = power;
//     this.drive = function () {
//         return console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     this.info = function () {
//         console.log(`Модель - ${model}`);
//         console.log(`Виробник - ${producer}`);
//         console.log(`Рік випуску - ${this.year}`);
//         console.log(`Максимальна швидкість - ${this.maxSpeed}`);
//         console.log(`Об'єм двигуна - ${power}`);
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// let car1 = new Car('A6', 'Audi', 2008, 160, 550);
// console.log(car1);
// console.log('--------------------------------');
// car1.drive();
// console.log('--------------------------------');
// car1.info();
// console.log('--------------------------------');
// car1.increaseMaxSpeed(20);
// car1.drive();
// console.log('--------------------------------');
// car1.changeYear(2012);
// console.log(car1.year);
// console.log('--------------------------------');
// car1.addDriver({name: 'Artem', age: 29, pasport: '21284110'});
// console.log(car1);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car1 {
//     constructor(model, producer, year, maxSpeed, power) {
//         this['model'] = model;
//         this['producer'] = producer;
//         this['year'] = year;
//         this['maxSpeed'] = maxSpeed;
//         this['power'] = power;
//         this.drive = function () {
//             return console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//         };
//         this.info = function () {
//             console.log(`Модель - ${model}`);
//             console.log(`Виробник - ${producer}`);
//             console.log(`Рік випуску - ${this.year}`);
//             console.log(`Максимальна швидкість - ${this.maxSpeed}`);
//             console.log(`Об'єм двигуна - ${power}`);
//         };
//         this.increaseMaxSpeed = function (newSpeed) {
//             this.maxSpeed = this.maxSpeed + newSpeed;
//         };
//         this.changeYear = function (newValue) {
//             this.year = newValue;
//         };
//         this.addDriver = function (driver) {
//             this.driver = driver;
//         }
//     }
// }
//
// let car2 = new Car1('A6', 'Audi', 2008, 160, 550);
// console.log(car2);
// console.log('--------------------------------');
// car2.drive();
// console.log('--------------------------------');
// car2.info();
// console.log('--------------------------------');
// car2.increaseMaxSpeed(20);
// car2.drive();
// console.log('--------------------------------');
// car2.changeYear(2012);
// console.log(car2.year);
// console.log('--------------------------------');
// car2.addDriver({name: 'Artem', age: 29, pasport: '21284110'});
// console.log(car2);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// class Cinderella {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
//
// let arrCinderella = [
//     new Cinderella('Valya', 65, 38),
//     new Cinderella('Galya', 55, 32),
//     new Cinderella('Olya', 22, 38),
//     new Cinderella('Milana', 32, 40),
//     new Cinderella('Alina', 30, 39),
//     new Cinderella('Alla', 45, 40),
//     new Cinderella('Larisa', 35, 38),
//     new Cinderella('Maryna', 14, 36),
//     new Cinderella('Sveta', 34, 41),
//     new Cinderella('Stefaniya', 50, 40),
// ]
//
// console.log(arrCinderella);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

// class Prince {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
//
// let princePerson = new Prince('Maks', 20, 39);
// console.log(princePerson);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// let kilk = 0;
// for (let i = 0; i < arrCinderella.length; i++) {
//     if (princePerson.size === arrCinderella[i].size) {
//         console.log(`Попелюшку звати - ${arrCinderella[i].name}, їй ${arrCinderella[i].age}. У неї - ${arrCinderella[i].size} розмір ноги.`);
//         kilk = kilk + 1;
//     }
// }
// if (kilk > 2) {
//     console.log(`На роль попелюшки підходить ${kilk} жінки. Оберіть яка саме!`);
// } else if (kilk===1) {
//     console.log(`Ви знайшли свою принцесу!!!`);
// } else console.log(`Попелюшки нема(`);

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// let sizeBingo = arrCinderella.find(bingo => bingo.size === princePerson.size);
// console.log(sizeBingo);