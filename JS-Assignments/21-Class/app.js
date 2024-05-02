// const goat = {
//     Name: 'Lionel Messi',
//     age: 36,
//     ballonDors: 8,
// }
// console.log(obj.age);

// const object = {
//     name: 'Shahzaib Ali',
//     email: 'shahzaibalijamro@gmail.com',
//     age: 18,
//     greetUser: function () {
//         return `Hello ${this.name}`
//     }
// }
// console.log(object.greetUser());
// delete object.name;
// object.firstName = 'Shahzaib';
// object.lastName = 'Ali';
// console.log(object);

let username = document.querySelector('.input-name');
let userEmail = document.querySelector('.input-email');
let userAge = document.querySelector('.input-age');
let userCity = document.querySelector('.input-city');
let user;

function getObject() {
    user = {
        name: username.value,
        email: userEmail.value,
        age: userAge.value,
        city: userCity.value,
    }
    console.log(user);
}