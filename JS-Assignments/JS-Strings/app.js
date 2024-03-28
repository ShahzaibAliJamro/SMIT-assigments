//       Q1

// let firstName = prompt('Enter your first name');
// let lastName = prompt('Enter your last name');
// alert(`Assalam-o-Alaikum ${firstName} ${lastName}`);



//       Q2

// document.write(`
// <input type="text" placeholder="enter your favorite smartphone name" id="input">
// <button onclick="click1()">Add</button>
//     <h1 class="h1"></h1>
//     <h1 class="h2"></h1>
// `)
// let input = document.querySelector('#input');
// let h1 = document.querySelector('.h1');
// let h2 = document.querySelector('.h2');

// function click1() {
//     h1.innerHTML = `My favorite phone model is ${input.value}`;
//     h2.innerHTML = `Length of string is ${h1.innerHTML.length}`
// }



//       Q3

// let string = 'Pakistani';
// console.log('string =>', string);
// console.log("index of n =>" , string.indexOf('n'));



//       Q4

// let string = 'Hello World';
// console.log('string =>', string);
// console.log("last index of n =>" , string.lastIndexOf('l'));



//       Q5

// let string = 'Pakistani';
// console.log('string =>', string);
// console.log("Character at 3rd index =>" , string.charAt(3));



//       Q6

// let firstName = prompt('Enter your first name');
// let lastName = prompt('Enter your last name');
// alert("Assalam-o-Alaikum " +firstName.concat(" "+lastName));



//       Q7

// let city = "Hyderabad";
// console.log('city =>', city);
// let city2 = city.replace("Hyder","Islam");
// console.log("city after replacement => " , city2);



//       Q8

var message = 'Ali and Sami are best friends. They play cricket and football together.';
console.log("message => " , message);
let replace2 = message.replace(/and/g,'&');
console.log("message after replacement => " , replace2);



//       Q9

let string = '472';
console.log('Value =>', string);
console.log("Type =>", typeof(string));
let number = parseFloat(string);
console.log('Value =>', number);
console.log("Type =>", typeof(number));



//       Q10
document.write(`<h1 class="h1"></h1><h1 class="h2"></h1>`);
let h1 = document.querySelector(".h1");
let h2 = document.querySelector(".h2");
let url = prompt("Enter a URL in the following format \nwww.google.com", "www.");
h1.innerHTML = "URL : " + url;
h2.innerHTML = "Domain : " + url.replace('www.','');