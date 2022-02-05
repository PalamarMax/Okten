// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let num = [1, 2, 3, 4, 5];
// let str = ['a', 'b', 'c', 'd', 'e'];
// let mas = [1, true, 'maks', 55, false];
//
// console.log(num);
// console.log(str);
// console.log(mas);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr[0] = 'maks';
// arr[1] = 55;
// arr[3] = true;
// arr[2] = 'palamar'
// arr[5] = false;
// arr[4] = 250;
// console.log(arr);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Okten Web</div>`)
// }

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Okten Web ${i}</div>`)
// }

// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Hello World!</h1>`);
//     i++;
// }

// let i = 0;
// while (i < 20) {
//     document.write(`<h1>${i} Hello World!</h1>`);
//     i++;
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let num = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// for (let i = 0; i < num.length; i++) {
//     let numElement = num[i];
//     console.log(numElement);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let str = ['maks', 'palamar', 'okten', 'web', 'html', 'js', 'css', 'react', 'monday', 'football'];
// for (let i = 0; i < str.length; i++) {
//     let strElement = str[i];
//     console.log(strElement);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr = [1, 'maks', true, 55, false, 'okten', 'web', 250, 'js', 555];
// for (let i = 0; i < arr.length; i++) {
//     let arrElement = arr[i];
//     console.log(arrElement);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arr = [1, 'maks', true, 55, false, 'okten', 'web', 250, 'js', 555];
// for (let i = 0; i < arr.length; i++) {
//     let arrElement = arr[i];
//     if (typeof arrElement === "boolean") {
//         console.log(arrElement);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arr = [1, 'maks', true, 55, false, 'okten', 'web', 250, 'js', 555];
// for (let i = 0; i < arr.length; i++) {
//     let arrElement = arr[i];
//     if (typeof arrElement === "number") {
//         console.log(arrElement);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arr = [1, 'maks', true, 55, false, 'okten', 'web', 250, 'js', 555];
// for (let i = 0; i < arr.length; i++) {
//     let arrElement = arr[i];
//     if (typeof arrElement === "string") {
//         console.log(arrElement);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arr = [];
//
// arr[0] = 'maks';
// arr[1] = 55;
// arr[3] = true;
// arr[2] = 'palamar'
// arr[5] = false;
// arr[4] = 250;
// arr[6] = 555
// arr[7] = 100
// arr[8] = 'okten';
// arr[9] = 'web';
//
// for (let i = 0; i < arr.length; i++) {
//     let arrElement = arr[i];
//     console.log(arrElement);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log('Номер кроку- ', i);
//     document.write(`<h3>Номер кроку - ${i}</h3>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log('Номер кроку- ', i);
//     document.write(`<h3>Номер кроку - ${i}</h3>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i=i+2) {
//     console.log('Номер кроку- ', i);
//     document.write(`<h3>Номер кроку - ${i}</h3>`)
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log('Номер кроку- ', i);
//         document.write(`<h3>Номер кроку - ${i}</h3>`)
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log('Номер кроку- ', i);
//         document.write(`<h3>Номер кроку - ${i}</h3>`)
//     }
// }




