// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((user) => {
        let divUsers = document.createElement('div');
        divUsers.className = "users";
        document.body.append(divUsers);

        for (const userElement of user) {
            let divUser = document.createElement('div');
            divUser.className = "user";
            let divId = document.createElement('div');
            divId.className = "id";
            let divName = document.createElement('div');
            divName.className = "name";
            let divUserName = document.createElement('div');
            divUserName.className = "user_name";
            let divEmail = document.createElement('div');
            divEmail.className = "email";
            let divAddress = document.createElement('div');
            divAddress.className = "address";
            let divStreet = document.createElement('div');
            divStreet.className = "street";
            let divSuites = document.createElement('div');
            divSuites.className = "suites";
            let divCity = document.createElement('div');
            divCity.className = "city";
            let divZipCode = document.createElement('div');
            divZipCode.className = "zip_code";
            let divGeo = document.createElement('div');
            divGeo.className = "geo";
            let divLat = document.createElement('div');
            divLat.className = "lat";
            let divLng = document.createElement('div');
            divLng.className = "lng";
            let divPhone = document.createElement('div');
            divPhone.className = "phone";
            let divWebsite = document.createElement('div');
            divWebsite.className = "website";
            let divCompany = document.createElement('div');
            divCompany.className = "company";
            let divCompanyName = document.createElement('div');
            divCompanyName.className = "company_name";
            let divCatchPhrase = document.createElement('div');
            divCatchPhrase.className = "catch_phrase";
            let divBs = document.createElement('div');
            divBs.className = "bs";

            let bntPost = document.createElement('button');
            bntPost.innerText = "Posts";
            bntPost.onclick = function (event) {
                event.preventDefault();
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then((response) => response.json())
                    .then((posts) => {
                        let divWrapUser = document.createElement('div');
                        divWrapUser.className = "wrapUser";
                        divWrapUser.innerHTML = `<b>Posts:</b>`;
                        divUser.append(divWrapUser);

                        for (const post of posts) {
                            if (post.userId === userElement.id) {
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
                                let btnComments = document.createElement('button');
                                btnComments.innerText = 'Comments';
                                btnComments.onclick = function (event) {
                                    event.preventDefault();
                                    fetch('https://jsonplaceholder.typicode.com/comments')
                                        .then((response) => response.json())
                                        .then((comments) => {
                                            let divComments = document.createElement('div');
                                            divComments.className = "comments";
                                            divComments.innerHTML = `<b>Comments:</b>`
                                            divPost.append(divComments);

                                            for (const comment of comments) {
                                                if (comment.postId === post.id) {
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

                                                    divPostId.innerHTML = `<b>PostId:</b> ${comment.postId}`;
                                                    divId.innerHTML = `<b>Id:</b> ${comment.id}`;
                                                    divName.innerHTML = `<b>Name:</b> ${comment.name}`;
                                                    divEmail.innerHTML = `<b>Email:</b> ${comment.email}`;
                                                    divBody.innerHTML = `<b>Body:</b> ${comment.body}`;

                                                    divComments.append(divComment);
                                                    divComment.append(divPostId, divId, divName, divEmail, divBody);

                                                    btnComments.remove();
                                                }
                                            }
                                        });
                                }

                                divUserId.innerHTML = `<b>UserId:</b> ${post.userId}`;
                                divId.innerHTML = `<b>Id:</b> ${post.id}`;
                                divTitle.innerHTML = `<b>Title:</b> ${post.title}`;
                                divBody.innerHTML = `<b>Body:</b> ${post.body}`;

                                bntPost.remove();

                                divWrapUser.append(divPost);
                                divPost.append(divUserId, divId, divTitle, divBody, btnComments);
                            }
                        }
                    });
            }

            divId.innerHTML = `<b>Id:</b> ${userElement.id}`;
            divName.innerHTML = `<b>Name:</b> ${userElement.name}`;
            divUserName.innerHTML = `<b>User Name:</b> ${userElement.username}`;
            divEmail.innerHTML = `<b>Email:</b> ${userElement.email}`;
            divAddress.innerHTML = `<b>Address:</b>`
            divStreet.innerHTML = `<b>Street:</b> ${userElement.address.street}`;
            divSuites.innerHTML = `<b>Suite:</b> ${userElement.address.suite}`;
            divCity.innerHTML = `<b>City:</b> ${userElement.address.city}`;
            divZipCode.innerHTML = `<b>Zip Code:</b> ${userElement.address.zipcode}`;
            divGeo.innerHTML = `<b>Geo:</b>`;
            divLat.innerHTML = `<b>Lat:</b> ${userElement.address.geo.lat}`;
            divLng.innerHTML = `<b>Lng:</b> ${userElement.address.geo.lng}`;
            divPhone.innerHTML = `<b>Phone:</b> ${userElement.phone}`;
            divWebsite.innerHTML = `<b>Website:</b> ${userElement.website}`;
            divCompany.innerHTML = `<b>Company:</b>`;
            divCompanyName.innerHTML = `<b>Name:</b> ${userElement.company.name}`;
            divCatchPhrase.innerHTML = `<b>Catch Phrase:</b> ${userElement.company.catchPhrase}`;
            divBs.innerHTML = `<b>Bs:</b> ${userElement.company.bs}`;

            divUsers.append(divUser);
            divUser.append(divId, divName, divUserName, divEmail, divAddress, divPhone, divWebsite, divCompany, bntPost);
            divAddress.append(divStreet, divSuites, divCity, divZipCode, divGeo);
            divGeo.append(divLat, divLng);
            divCompany.append(divCompanyName, divCatchPhrase, divBs);
        }
    });