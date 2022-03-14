// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
        let divWrapUser = document.createElement('div');
        divWrapUser.className = "wrapUser";
        document.body.append(divWrapUser);

        for (const jsonElement of json) {
            let divPost = document.createElement('div');
            divPost.className = "post";
            let divUserId = document.createElement('div');
            divUserId.className = "userId";
            let divId = document.createElement('div');
            divId.className = "id";
            let divTitle = document.createElement('div');
            divTitle.className = "title";
            let divBody = document.createElement('div');
            divBody.className = "body";

            let btn = document.createElement('button');
            btn.innerText = 'Comments';
            btn.onclick = function (event) {
                event.preventDefault();
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then((response) => response.json())
                    .then((json1) => {
                        let divComments = document.createElement('div');
                        divComments.className = "comments";
                        divComments.innerHTML = `<b>Comments:</b>`
                        divPost.append(divComments);

                        for (const jsonElement1 of json1) {
                            if (jsonElement1.postId === jsonElement.id) {
                                let divComment = document.createElement('div');
                                divComment.className = "comment";

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

                                divPostId.innerHTML = `<b>PostId:</b> ${jsonElement1.postId}`;
                                divId.innerHTML = `<b>Id:</b> ${jsonElement1.id}`;
                                divName.innerHTML = `<b>Name:</b> ${jsonElement1.name}`;
                                divEmail.innerHTML = `<b>Email:</b> ${jsonElement1.email}`;
                                divBody.innerHTML = `<b>Body:</b> ${jsonElement1.body}`;

                                divComments.append(divComment);
                                divComment.append(divPostId, divId, divName, divEmail, divBody);

                                btn.remove();
                            }
                        }
                    });
            }

            divUserId.innerHTML = `<b>UserId:</b> ${jsonElement.userId}`;
            divId.innerHTML = `<b>Id:</b> ${jsonElement.id}`;
            divTitle.innerHTML = `<b>Title:</b> ${jsonElement.title}`;
            divBody.innerHTML = `<b>Body:</b> ${jsonElement.body}`;

            divWrapUser.append(divPost);
            divPost.append(divUserId, divId, divTitle, divBody, btn);
        }
    });









