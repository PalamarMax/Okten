// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let newUser = [];
// for (const user of users) {
//     newUser.push(user.address)
// }
// console.log(newUser);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     let divUser = document.createElement('div');
//     divUser.innerHTML = `<b>NAME - </b> ${user.name} </br> <b>AGE - </b> ${user.age} </br>
//                         <b>STATUS - </b> ${user.status} </br> <b>ADDRESS: </b> <b>city - </b> ${user.address.city},
//                          <b>country - </b> ${user.address.city}, <b>street - </b> ${user.address.street} ,
//                          <b>house number - </b> ${user.address.houseNumber}.`
//     document.body.append(divUser);
//     divUser.style.cssText = `width: 40%; background: silver; border: 2px solid black; margin-bottom: 10px`
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     let divUser = document.createElement('div');
//     let name = document.createElement('div');
//     let age = document.createElement('div');
//     let status = document.createElement('div');
//     let address = document.createElement('div');
//
//     name.innerHTML = `<b>NAME - </b> ${user.name}`;
//     age.innerHTML = `<b>AGE - </b> ${user.age}`;
//     status.innerHTML = `<b>STATUS - </b> ${user.status}`;
//     address.innerHTML = `<b>ADDRESS: </b> <b>city - </b> ${user.address.city},
//                          <b>country - </b> ${user.address.city}, <b>street - </b> ${user.address.street} ,
//                          <b>house number - </b> ${user.address.houseNumber}.`;
//
//     document.body.append(divUser);
//     divUser.append(name,age,status,address);
//     divUser.style.cssText = `width: 40%; background: silver; border: 2px solid black; margin-bottom: 10px`
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     let divUser = document.createElement('div');
//     let name = document.createElement('div');
//     let age = document.createElement('div');
//     let status = document.createElement('div');
//     let address = document.createElement('div');
//     let city = document.createElement('div');
//     let country = document.createElement('div');
//     let street = document.createElement('div');
//     let houseNumber = document.createElement('div');
//
//     name.innerHTML = `<b>NAME - </b> ${user.name}`;
//     age.innerHTML = `<b>AGE - </b> ${user.age}`;
//     status.innerHTML = `<b>STATUS - </b> ${user.status}`;
//     city.innerHTML = `<b>city - </b> ${user.address.city}`;
//     country.innerHTML = `<b>country - </b> ${user.address.city}`;
//     street.innerHTML = `<b>street - </b> ${user.address.street}`;
//     houseNumber.innerHTML = `<b>house number - </b> ${user.address.houseNumber}.`;
//
//     document.body.append(divUser);
//     divUser.append(name,age,status,address);
//     address.append(city,country,street,houseNumber);
//
//     divUser.style.cssText = `width: 40%; background: silver; border: 2px solid black; margin-bottom: 10px`
// }


// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// let h2 = document.getElementsByTagName('h2');
// let ul = document.createElement('ul');
// document.getElementById('content').append(ul);
//
// for (let i = 0; i < h2.length; i++) {
//     const h2Element = h2[i];
//     let li = document.createElement('li');
//     li.innerHTML = h2Element.innerText;
//     ul.append(li);
// }


// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html


let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },
];

for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];

    let h1 = document.createElement('h1');
    let wrap = document.createElement('div');
    let title = document.createElement('h2');
    let body = document.createElement('p');

    h1.innerText = 'Правила бойцовского клуба';
    title.innerText = rule.title;
    body.innerText = rule.body;

    document.body.append(h1,wrap);
    wrap.append(title, body);
}