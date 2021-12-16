console.log("hello david");

const name = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('#msg');

const saveData = addEventListener('click', displayStoredData);

function displayStoredData() {
    console.log(name);
}