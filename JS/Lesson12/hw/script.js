// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((json) => {
//         let divWrapUser = document.createElement('div');
//         divWrapUser.className = "wrapUser";
//         document.body.append(divWrapUser);
//
//         for (const jsonElement of json) {
//             let divPost = document.createElement('div');
//             divPost.className = "post";
//             let divUserId = document.createElement('div');
//             divUserId.className = "userId";
//             let divId = document.createElement('div');
//             divId.className = "id";
//             let divTitle = document.createElement('div');
//             divTitle.className = "title";
//             let divBody = document.createElement('div');
//             divBody.className = "body";
//
//             divUserId.innerHTML = `<b>UserId:</b> ${jsonElement.userId}`;
//             divId.innerHTML = `<b>Id:</b> ${jsonElement.id}`;
//             divTitle.innerHTML = `<b>Title:</b> ${jsonElement.title}`;
//             divBody.innerHTML = `<b>Body:</b> ${jsonElement.body}`;
//
//             divWrapUser.append(divPost);
//             divPost.append(divUserId, divId, divTitle, divBody);
//         }
//     });


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments


fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((json) => {
        let divWrapComments = document.createElement('div');
        divWrapComments.className = "wrapComments";
        document.body.append(divWrapComments);

        for (const jsonElement of json) {
            let divComments = document.createElement('div');
            divComments.className = "comments";
            let divPostId = document.createElement('div');
            divPostId.className = "postId";
            let divId = document.createElement('div');
            divId.className = "id";
            let divName = document.createElement('div');
            divName.className = "name";
            let divEmail = document.createElement('div');
            divEmail.className = "email";
            let divBody = document.createElement('div');
            divBody.className = "body";

            divPostId.innerHTML = `<b>PostId:</b> ${jsonElement.postId}`;
            divId.innerHTML = `<b>Id:</b> ${jsonElement.id}`;
            divName.innerHTML = `<b>Name:</b> ${jsonElement.name}`;
            divEmail.innerHTML = `<b>Email:</b> ${jsonElement.email}`;
            divBody.innerHTML = `<b>Body:</b> ${jsonElement.body}`;

            divWrapComments.append(divComments);
            divComments.append(divPostId, divId, divName, divEmail,divBody);
        }
    });