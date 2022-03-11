// -створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage

const formUser = document.forms.UserInformation;

const handleSubmit = (event) => {
    event.preventDefault();

    const nameInput = formUser.elements.name;
    const ageInput = formUser.elements.age;

    const nameValue = nameInput.value;
    const ageValue = ageInput.value;

    let user = {nameValue, ageValue};
    localStorage.setItem('user', JSON.stringify(user));
}

formUser.addEventListener('submit', handleSubmit);


// -створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

const formCar = document.forms.CarInformation;
let carsArray = JSON.parse(localStorage.getItem('cars')) || [];

const handleSubmitCar = (event) => {
    event.preventDefault();

    const modelInput = formCar.elements.model;
    const typeInput = formCar.elements.type;
    const volumeInput = formCar.elements.volume;

    const modelValue = modelInput.value;
    const typeValue = typeInput.value;
    const volumeValue = volumeInput.value;

    let carInfo = {modelValue, typeValue, volumeValue};
    carsArray.push(carInfo);
    localStorage.setItem('cars', JSON.stringify(carsArray));
}

formCar.addEventListener('submit', handleSubmitCar);