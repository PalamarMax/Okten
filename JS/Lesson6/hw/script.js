// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';

// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
//
// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());
// console.log(str3.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1 = 'HELLO WORLD';
// let str2 = 'LOREM IPSUM';
// let str3 = 'JAVASCRIPT IS COOL';
//
// console.log(str1.toLowerCase());
// console.log(str2.toLowerCase());
// console.log(str3.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// let trim = str.trim();
// console.log(trim);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str = 'Каждый охотник желает знать';
//
// let stringToarray = (str) => {
//     let arr = str.split (' ');
//     console.log(arr);
//     return arr;
// }
//
// document.write(stringToarray(str));


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
//
// let delete_characters = (str, length) => {
//     let subStr = str.substr(0, length);
//     return subStr;
// }
// document.writeln(delete_characters(str, 7));

//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
//
// let insert_dash = (str) => {
//     let foo1 = str.replaceAll(' ', '-').toUpperCase();
//     return foo1;
// }
//
// document.write(insert_dash(str));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let str = 'каждый охотник желает знать';
//
// let xxx = (str) => {
//     let newStr = str[0].toUpperCase()+str.slice(1);
//     return newStr;
// }
//
// document.write(xxx(str));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let str = 'каждый охотник желает знать';
//
// let capitalize = (str) => {
//     let strNew = '';
//     let arr = str.split(' ');
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
//         strNew = strNew + arr[i] + ' ';
//     }
//     strNew = strNew.slice(0, -1);
//     return strNew;
// }
//
// document.write(capitalize(str));