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

// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// console.log("message => " , message);
// let replace2 = message.replace(/and/g,'&');
// console.log("message after replacement => " , replace2);



//       Q9

// let string = '472';
// console.log('Value =>', string);
// console.log("Type =>", typeof(string));
// let number = parseFloat(string);
// console.log('Value =>', number);
// console.log("Type =>", typeof(number));



//       Q10

// document.write(`<h1 class="h1"></h1><h1 class="h2"></h1>`);
// let h1 = document.querySelector(".h1");
// let h2 = document.querySelector(".h2");
// let url = prompt("Enter a URL in the following format \nwww.google.com", "www.");
// h1.innerHTML = "URL : " + url;
// h2.innerHTML = "Domain : " + url.replace('www.','');



//       Q11

// document.write(`<h1 class="h1"></h1><h1 class="h2"></h1>`);
// let h1 = document.querySelector(".h1");
// let h2 = document.querySelector(".h2");
// let input = prompt("Enter a lowercase word and I'll make it uppercase");
// let input1 = input.toUpperCase();
// h1.innerHTML = "User Input : " + input;
// h2.innerHTML = "Upper Case : " + input1;



//       Q12

// document.write(`<h1 class="h1"></h1><h1 class="h2"></h1>`);
// let h1 = document.querySelector(".h1");
// let h2 = document.querySelector(".h2");
// let input = prompt("Enter a uppercase word and I'll make it lowercase");
// let input1 = input.toLowerCase();
// h1.innerHTML = "User Input : " + input;
// h2.innerHTML = "Upper Case : " + input1;






//       Q13

// document.write(`<h1 class="h1"></h1><h1 class="h2"></h1>`);
// let h1 = document.querySelector(".h1");
// let h2 = document.querySelector(".h2");
// let input = prompt("Enter an word and I'll make it titlecase");
// function titleCase(str) {
//     return str.toLowerCase().replace(/(?:^|\s|-)\w/g, function(match) {
//         return match.toUpperCase();
//     });
// }
// let input1 = titleCase(input);
// h1.innerHTML = "User Input: " + input;
// h2.innerHTML = "Title Case: " + input1;





//       Q14

// let num = 35.56;
// let newNum = num + "";
// console.log(newNum.replace('.',''));



//       Q15

// document.write(`<h1 class="h1"></h1><h1 class="h2"></h1><h1 class="h3"></h1>`);
// let h1 = document.querySelector(".h1");
// let h2 = document.querySelector(".h2");
// let h3 = document.querySelector(".h3");
// let a = "3";
// h1.innerHTML = "a is " + a;
// let b = "3";
// h2.innerHTML = "b is " + b;
// let x = a+b;
// h3.innerHTML = "a + b is " + x;



//       Q16

// document.write(`<h1 class="h1"></h1><h1 class="h2"></h1><h1 class="h3"></h1>`);
// let h1 = document.querySelector(".h1");
// let h2 = document.querySelector(".h2");
// let h3 = document.querySelector(".h3");
// let a = '3';
// let b = '3';
// let y = a-b;
// h1.innerHTML = `a is ${a}`;
// h2.innerHTML = `b is ${b}`;
// h3.innerHTML = `a - b is ${y}`;



//       Q17

// document.write(
//     `<input type="text" class="input">
//     <button onclick="clickMe()">click</button>`
// );
// let input = document.querySelector(".input");
// let value;
// function clickMe(){
//     value = input.value;
//     console.log(value);
//     for (let index = 0; index < value.length; index++) {
//         if (value[index] == String.fromCharCode(33) || value[index] == String.fromCharCode(44) || value[index] == String.fromCharCode(46) || value[index] == String.fromCharCode(64)) {
//             alert('Please enter a valid username');
//         }else{
//             console.log(value);
//         }
//     }
// }



//       Q18

// let array = [
//     "cupcake",
//     "brownie",
//     "cheesecake",
//     "apple pie",
//     "donut",
//     "cookies",
//     "pound cake",
// ];
// document.write(
//     `<h2>Welcome to ABC Bakery!</h2>
//     <h3>What would you like to order from our menu down below?</h3>
//     <ul class='ul'>
//     </ul>
//     <input type="text" class="input">
//     <button onclick="clickMe()">click</button>`
// );
// let ul = document.querySelector('.ul');
// for (let index = 0; index < array.length; index++) {
//     ul.innerHTML += `<li>${array[index]}</li>`
// }
// let input = document.querySelector(".input");
// function clickMe(){
//     let user = input.value;
//     for (let index = 0; index < array.length; index++) {
//         if (array[index] == user.toLowerCase()) {
//             alert(`${user} is available at index ${index} in our bakery.`)
//         }
//     }
//     if (array.includes(user.toLowerCase())) {

//     }else{
//         alert(`${user} is not available at our bakery.`)
//     }
// }



//       Q19

let input1 = prompt("Enter a string");
let input2 = prompt("Enter another string");

document.write('<h1 class="h1"></h1>');
let h1 = document.querySelector(".h1");
if (input1.length > input2.length) {
    h1.innerHTML = `${input1} is greater than ${input2}`
}
if (input1.length < input2.length) {
    h1.innerHTML = `${input2} is greater than ${input1}`
}
if (input1.length == input2.length) {
    h1.innerHTML = `${input2} is equal to ${input1}`
}