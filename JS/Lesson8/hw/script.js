// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

// - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

let byIdContent = document.getElementById('content');
console.log(byIdContent.innerText);

// -- отримує текст з блоку з id "rules"

let byIdRules = document.getElementById('rules');
console.log(byIdRules.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший

let replacementContent = byIdContent.innerText = 'London is the capital of Great Britain!'
console.log(replacementContent);

// -- замініть текст параграфа з id 'rules' на будь-який інший

let replacementRules = byIdRules.innerText = 'Какое «не пью», какие «дела»? С чуваками сбор не откладывай никогда.'
console.log(replacementRules);

// -- змініть кожному елементу колір фону на червоний

let elements = document.body.children;
for (const bgRed of elements) {
    bgRed.style.backgroundColor = 'red';
}

// -- змініть кожному елементу колір тексту на синій

for (const cBlue of elements) {
    cBlue.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(byIdRules);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let fcRules = document.getElementsByClassName('fc_rules');
for (const fcRule of fcRules) {
    fcRule.style.color = 'red';
}