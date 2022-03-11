let arrFavorites = JSON.parse(localStorage.getItem('favorites'));

let divWrap = document.createElement('div');
document.body.append(divWrap);

for (let i = 0; i < arrFavorites.length; i++) {
    let arrFavorite = arrFavorites[i];

    let divElement = document.createElement('div');
    divElement.className = 'element'
    divElement.innerHTML = `Name: ${arrFavorite.name}, </br> Status: ${arrFavorite.status}, </br> Age: ${arrFavorite.age} </br>`;

    divWrap.append(divElement);
}