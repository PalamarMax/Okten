// є масив -
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites
// улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let divWrap = document.createElement('div');
divWrap.className = 'wrap';
document.body.append(divWrap);

for (let i = 0; i < users.length; i++) {
    let user = users[i];

    let divElement = document.createElement('div');
    divElement.className = 'element';
    divElement.innerHTML = `Name: ${user.name}, </br> Status: ${user.status}, </br> Age: ${user.age} </br>`;

    let btn = document.createElement('button');
    btn.innerText = 'Додати до улюблених';

    btn.onclick = function () {
        let favorites = localStorage.getItem("favorites");
        let obj = [];
        if (favorites) {
            obj = JSON.parse(favorites);
        }
        obj.push(user);
        localStorage.setItem("favorites", JSON.stringify(obj));
    }

    divWrap.append(divElement);
    divElement.append(btn);
}

let aFavorites = document.createElement('a');
aFavorites.innerText = 'Favorites';
aFavorites.target = '_blank';
aFavorites.href = 'favorites.html';
document.body.append(aFavorites);
