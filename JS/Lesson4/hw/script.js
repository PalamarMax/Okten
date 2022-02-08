// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function area (a, b) {
//     res = a * b;
//     return res;
// }
//
// console.log('Площа прямокутника -', area (5, 6));


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function area_circle(r) {
//     const PI = 3.14;
//     res = PI * r * r;
//     return res;
// }
//
// console.log('Площа кола -', area_circle(8));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function area_cylinder(h, r) {
//     const PI = 3.14;
//     res = (2 * PI) * r * h;
//     return res;
// }
//
// let result = area_cylinder(2, 2);
// console.log('Площа циліндра -', result);

// - створити функцію яка приймає масив та виводить кожен його елемент

// let mas = [1, 2, 55, true, 'web', 900, 'js'];
// function displayArr(arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
//
// displayArr(mas);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph(p) {
//     document.write(`<p>${p}</p>`);
// }
//
// paragraph('Okten WEB - the best school')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


// function ul(a) {
//     document.write(`<ul>`);
//     document.write(`<li>${a}</li>`);
//     document.write(`<li>${a}</li>`);
//     document.write(`<li>${a}</li>`);
//     document.write(`</ul>`);
// }
//
// ul('Item');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function ul(a, b) {
//     document.write(`<ul>`);
//     for (let i = 0; i < b; i++) {
//         document.write(`<li>${a}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// ul('Item', 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function ul(arr) {
//     document.write(`<ul>`);
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// ul([1, 2, 55, true, 'web', 900, 'js']);


// function ul(arr) {
//     document.write(`<ul>`);
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// let mas = [1, 2, 55, true, 'web', 900, 'js'];
// ul(mas);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let person = [
//     {id: 1, name: 'Maks', age: 20},
//     {id: 2, name: 'Artem', age: 20},
//     {id: 3, name: 'Artem', age: 28}
// ]
//
// function div(arrs) {
//     for (const arr of arrs) {
//         document.write(`<div>${arr.id} ${arr.name} ${arr.age}</div>`);
//     }
// }
//
// div(person);