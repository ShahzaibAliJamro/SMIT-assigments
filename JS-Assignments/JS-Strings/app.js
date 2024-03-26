//       Q1

// let firstName = prompt('Enter your first name');
// let lastName = prompt('Enter your last name');
// alert(`Assalam-o-Alaikum ${firstName} ${lastName}`);



//       Q1

// document.write(`
// <input type="text" class="input" placeholder="enter your favorite smartphone name">
// <button onclick="click()">Add</button>
//     <h1 class="h1"></h1>
//     <h1 class="h2"></h1>
// `)
let input = document.querySelector('.input');
let h1 = document.querySelector('.h1');
let h2 = document.querySelector('.h2');

function click() {
    console.log(input.value);
}