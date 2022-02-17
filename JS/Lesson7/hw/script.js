// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this['id'] = id;
    this['name'] = name;
    this['surname'] = surname;
    this['email'] = email;
    this['phone'] = phone;
}

let ArrUser = [
    new User(1, 'Maks', 'Palamar', 'maks@i.ua', '0988469545'),
    new User(3, 'Artem', 'Maidanyk', 'art@i.ua', '0988419491'),
    new User(2, 'Artem', 'Kindyak', 'art_kin@gmail.com', '0988416461'),
    new User(10, 'Alina', 'Kindyak', 'alina_kin@gmail.com', '0964841611'),
    new User(5, 'Misha', 'Gnitsa', 'mihasik@gmail.com', '0946461616'),
    new User(7, 'Taras', 'Rep', 'repka@gmail.com', '49461664611'),
    new User(6, 'Vova', 'Kobisya', 'vova@gmail.com', '609490949'),
    new User(8, 'Dima', 'Tsarenko', 'tsar@gmail.com', '4946166661'),
    new User(9, 'Sasha', 'Tsarenko', 'tsarevna@gmail.com', '6116161611'),
    new User(4, 'Igor', 'Shevchuk', 'igogo@gmail.com', '49456661'),
]
console.log(ArrUser);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterArr = ArrUser.filter(function filarr(a) {
    return a.id % 2 === 0;
})

console.log(filterArr);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortArr = ArrUser.sort(function arrSort(a, b) {
    return a.id - b.id;
})

console.log(sortArr);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname , email, phone, order) {
        this['id'] = id;
        this['name'] = name;
        this['surname'] = surname;
        this['email'] = email;
        this['phone'] = phone;
        this['order'] = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

let arrClient = [
    new Client(1, 'Maks', 'Palamar', 'maks@i.ua', '0988469545', ['beer', 'mivina', 'water']),
    new Client(3, 'Artem', 'Maidanyk', 'art@i.ua', '0988419491', ['milk', 'water']),
    new Client(2, 'Artem', 'Kindyak', 'art_kin@gmail.com', '0988416461', ['baton', 'tomato']),
    new Client(10, 'Alina', 'Kindyak', 'alina_kin@gmail.com', '0964841611', ['chocolate']),
    new Client(5, 'Misha', 'Gnitsa', 'mihasik@gmail.com', '0946461616', ['beer', 'mivina']),
    new Client(7, 'Taras', 'Rep', 'repka@gmail.com', '49461664611', ['vodka']),
    new Client(6, 'Vova', 'Kobisya', 'vova@gmail.com', '609490949', ['vodka', 'beer', 'water', 'tomato', 'pasta', 'chocolate']),
    new Client(8, 'Dima', 'Tsarenko', 'tsar@gmail.com', '4946166661', ['milk', 'pasta']),
    new Client(9, 'Sasha', 'Tsarenko', 'tsarevna@gmail.com', '6116161611',['chocolate']),
    new Client(4, 'Igor', 'Shevchuk', 'igogo@gmail.com', '49456661', ['tomato', 'water']),
]

console.log(arrClient);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortMas = arrClient.sort(function sortMas(a, b) {
    return a.order.length - b.order.length;
})

console.log(sortMas);
