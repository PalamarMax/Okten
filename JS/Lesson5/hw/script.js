// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let areaRectangle = (a, b) => a * b;
// console.log('Площа прямокутника -', areaRectangle(5, 3));


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let areaCircle = (r) => {
//     const PI = 3.14;
//     return PI * r * r;
// }
// console.log('Площа кола -',areaCircle(8));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let areaCylinder = (h, r) => {
//     const PI = 3.14;
//     let res;
//     res = (2 * PI) * r * h;
//     return res;
// }
// console.log('Площа циліндра -', areaCylinder(3,5));


// - створити функцію яка приймає масив та виводить кожен його елемент

// let displayArr= (arr) => {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// displayArr([1, 2, 55, true, 'web', 900, 'js']);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let paragraph = (p) => document.write(`<p>${p}</p>`);
// paragraph('Okten WEB - the best school');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let ul = (a) => {
//     document.write(`<ul>`);
//     document.write(`<li>${a}</li>`);
//     document.write(`<li>${a}</li>`);
//     document.write(`<li>${a}</li>`);
//     document.write(`</ul>`);
// }
// ul('Item');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let ul = (text, kilk) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < kilk; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// ul('Item', 10);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let ul = (arr) => {
//     document.write(`<ul>`);
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`);
//     }
//     document.write(`</ul>`);
// }
// ul([1, 2, 55, true, 'web', 900, 'js']);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let person = [
//     {id: 1, name: 'Maks', age: 20},
//     {id: 2, name: 'Artem', age: 20},
//     {id: 3, name: 'Artem', age: 28}
// ]
//
// let div = (arrs) => {
//     for (const arr of arrs) {
//         document.write(`<div>${arr.id} ${arr.name} ${arr.age}</div>`);
//     }
// }
// div(person);