// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

let mainH = document.getElementById('main_header');
let group =prompt('Введіть групу');
mainH.classList.add(group);

// b) робить шириниу елементу ul 400px

document.getElementsByTagName('ul')[0].style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let linkList = document.getElementsByClassName('linkList');
for (const linkListElement of linkList) {
    linkListElement.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2

let listElement2 = document.getElementsByClassName('listElement2')[0].textContent;
console.log(listElement2);

// e) отримує всі елементи li та змінює ім колір фону на сірий

let li = document.getElementsByTagName('li');
for (const liElement of li) {
    liElement.style.background = 'silver';
}

// f) отримує всі елементи 'a' та додає їм клас anchor

let a = document.getElementsByTagName('a');
for (const aElement of a) {
    aElement.classList.add('anchar');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

for (const aElement of a) {
    if (aElement.textContent === 'link3') {
        aElement.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

for (const aElement of a) {
    let XXX = aElement.textContent;
    aElement.classList.add(`element_${XXX}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let subHeader = document.getElementsByClassName('sub-header');
let color = prompt('Введіть колір');
for (const subHeaderElement of subHeader) {
    subHeaderElement.style.background = `${color}`;
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

for (const subHeaderElement of subHeader) {
    if (subHeaderElement.textContent === 'content 2 segment') {
        let color = prompt('Введіть колір');
        subHeaderElement.style.color = `${color}`;
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let content = document.getElementsByClassName('content_1');
let text = prompt('Введіть текст');
for (const contentElement of content) {
    contentElement.textContent = `${text}`;
}

// l) отримати елементи p та змінити їм padding на 20px

let paragraph = document.getElementsByTagName('p');
for (const paragraphElement of paragraph) {
    paragraphElement.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let text2 = document.getElementsByClassName('text2');
text2[0].textContent = `${group}`;
