// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function arg() {
//     if (arguments.length === 1) {
//         console.log(arguments[0]);
//     } else if (arguments.length === 2) {
//         rez = arguments[0] + arguments[1];
//         console.log(rez);
//     } else {
//         console.log(arguments);
//     }
// }
//
// arg(55, 255, 555)


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//  EXAMPLE:
// [1,2,3,4]
// [2,3,4,5]
// результат
// [3,5,7,9]

// function sumArray(mas1, mas2) {
//     const newArr = [];
//     for (let i = 0; i < mas1.length, i < mas2.length; i++) {
//         newArr[i] = mas1[i] + mas2 [i];
//     }
//     return newArr;
// }
//
// console.log(sumArray([1, 2, 3, 4], [2, 3, 4, 5]))


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let person = [{name: 'Dima', age: 13}, {model: 'Camry'}];

// function keyArray(mas) {
//     const newArr = [];
//     for (let i = 0; i < mas.length; i++) {
//         if (typeof mas[i] === "object") {
//             keys = Object.keys(mas[i]);
//             for (let j = 0, l = keys.length; j < l; j++) {
//                 newArr.push(keys[j]);
//             }
//         }
//     }
//     return newArr;
// }
// console.log(keyArray(person));


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


// let person = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//
// function keyArray(mas) {
//     const newArr = [];
//     for (let i = 0; i < mas.length; i++) {
//         if (typeof mas[i] === "object") {
//             keys = Object.values(mas[i]);
//             for (let j = 0, l = keys.length; j < l; j++) {
//                 newArr.push(keys[j]);
//             }
//         }
//     }
//     return newArr;
// }
// console.log(keyArray(person));