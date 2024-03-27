//       Q1

// let firstName = prompt('Enter your first name');
// let lastName = prompt('Enter your last name');
// alert(`Assalam-o-Alaikum ${firstName} ${lastName}`);



//       Q2

document.write(`
<input type="text" id="input" placeholder="enter your favorite smartphone name">
<button onclick="clickMe()">Add</button>
    <h1 class="h1"></h1>
    <h1 class="h2"></h1>
`)
let input = document.querySelector('#input');
let h1 = document.querySelector('.h1');
let h2 = document.querySelector('.h2');
function clickMe() {
    let value = input.value;
    h1.innerHTML = `My favorite phone is ${value}`;
    let h1Value = h1.innerHTML;
    h2.innerHTML = `Length of string is ${h1Value.length}`;
}