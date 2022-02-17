// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }


// class Person {
//     constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, name1, catchPhrase, bs) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = {
//             street,
//             suite,
//             city,
//             zipcode,
//             geo: {
//                 lat,
//                 lng
//             }
//         }
//         this.phone = phone;
//         this.website = website;
//         this.company = {
//             name: name1,
//             catchPhrase,
//             bs
//         }
//     }
// }
//
// let newPerson = new Person(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light',
//     'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442',
//     'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');
//
// console.log(newPerson);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }

// class Tag {
//     constructor(titleOfTag, action, attrs) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = attrs;
//     }
// }
//
// let tagA = new Tag('area', 'Каждый элемент <area> определяет активные области изображения, которые являются ссылками...',
//     [{titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {titleOfAttr: 'alt', actionOfAttr: 'Альтернативный текст для области изображения.'},
//         {titleOfAttr: 'coords', actionOfAttr: 'Координаты активной области.'}]);
// console.log(tagA);
//
// let tagDiv = new Tag('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
//     [{titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
//         {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}]);
// console.log(tagDiv);
//
// let tagH1 = new Tag('h1', 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.',
//     [{titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'}]);
// console.log(tagH1);
//
// let tagSpan = new Tag('span', 'Тег <span> предназначен для определения строчных элементов документа',
//     [{titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {titleOfAttr: 'title', actionOfAttr: 'Описывает содержимое элемента в виде всплывающей подсказки.'}]);
// console.log(tagSpan);
//
// let tagInput = new Tag('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
//     [{titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание изображения.'},
//         {titleOfAttr: 'size', actionOfAttr: 'Ширина текстового поля.'}]);
// console.log(tagInput);
//
// let tagForm = new Tag('form', 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.',
//     [{titleOfAttr: 'name', actionOfAttr: 'Имя формы.'},
//         {titleOfAttr: 'target', actionOfAttr: 'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.'}]);
// console.log(tagForm);
//
// let tagOption = new Tag('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. ',
//     [{titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//         {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'}]);
// console.log(tagOption);
//
// let tagSelect = new Tag('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.',
//     [{titleOfAttr: 'name', actionOfAttr: 'Имя элемента для отправки на сервер или обращения через скрипты.'},
//         {titleOfAttr: 'required', actionOfAttr: 'Список обязателен для выбора перед отправкой формы..'}]);
// console.log(tagSelect);