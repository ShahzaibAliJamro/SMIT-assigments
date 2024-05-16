//              Q1 Start


// for (let i = 1; i <= 5; i++) {
//     document.write('Hello World<br>');
// }


//              Q1 End








//             Q2 Start


// for (let i = 1; i <= 10; i++) {
//     document.write(`${i}<br>`)
// }


//              Q2 End








//              Q3 Start


// const number = +prompt("Enter a number and I'll print it's table!")
// const length = +prompt('Enter the length!')
// for (let i = 1; i <= length; i++) {
//     document.write(`${number} * ${i} = ${number*i}<br>`);
// }


//               Q3 End








//              Q4 Start


// let phoneCompanies = ['Nokia','Samsung','Apple','Sony','Huawei'];

// for (let i = 0; i < phoneCompanies.length; i++) {
//     document.write(`${phoneCompanies[i]}<br>`);
// }


//               Q4 End








//               Q5 Start


// let fruits = ['apple','banana','mango','orange','strawberry'];
// for (let i = 0; i < fruits.length; i++) {
//     document.write(`${fruits[i]}<br>`);
// }
// document.write(`<br><br><br>`)
// for (let j = 0; j < fruits.length; j++) {
//     document.write(`Element at index ${j} is ${fruits[j]}<br><br>`);
// }


//               Q5 End








//               Q6 Start


// let array = [];
// let array_length = +prompt(`Enter length!`)
// document.write('Number of items = ' + array_length + '<br>');
// document.write('items = <br>');
// for (let i = 0; i < array_length; i++) {
//     array[i] = prompt(`Enter the value of index ${i} !`);
//     document.write(`${array[i]}<br>`)
// }


//               Q6 End








//               Q7 Start


// document.write(`<h3>1. Counting</h3>`)
// for (let i = 1; i <= 20; i++) {
//     document.write(`${i}, `)
// }
// document.write(`<h3>2. Reverse Counting</h3>`)
// for (let i = -15; i <= 0; i++) {
//     document.write(`${i}, `)
// }
// document.write(`<h3>3. Even Numbers</h3>`)
// for (let i = 0; i <= 10; i++) {
//     document.write(`${2*i}, `)
// }
// document.write(`<h3>4. Odd Numbers</h3>`)
// for (let i = 0; i < 10; i++) {
//     document.write(`${2*i+1}, `)
// }
// document.write(`<h3>5. Series</h3>`)
// for (let i = 1; i <= 10; i++) {
//     document.write(`${2*i}k, `)
// }


//               Q7 End








//               Q8 Start


// let shop = ['cake','apple pie','cookie','chips','patties',];
// let order = prompt('Assalam-o-Alaikum, Welcome to ABC Bakers. \nWhat do you want to order sir/madam?');
// if (shop.includes(order)) {
//     console.log(`${order} is availabe at index ${shop.indexOf(order)} in our bakery.`);
// }else{
//     console.log(`we are sorry! ${order} is not available at our bakery.`);
// }


//               Q8 End








//               Q9 Start


// let A = [24,53,78,91,12];
// document.write(`Array items =  `);
// for (let index = 0; index < A.length; index++) {
//     document.write(`${A[index]}, `);
// }
// let max = A[0];
// for (let j = 0; j < A.length; j++) {
//     if (A[j]> max) {
//         max = A[j];
//     }
// }
// document.write(`<br><br>The largest number is ${max}.`);


//               Q9 End








//               Q10 Start


// let Arr = [24,53,78,91,12];
// document.write(`Array items =  `);
// for (let index = 0; index < Arr.length; index++) {
//     document.write(`${Arr[index]}, `)
// }
// let min = Arr[0];
// for (let b = 0; b < Arr.length; b++) {
//     if(Arr[b] < min){
//         min = Arr[b];
//     }
// }
// document.write(`<br><br>The smallest number in the array would be ${min}.`)


//               Q10 End








//               Q11 Start


// let Arr = [24,53,78,91,12];
// document.write(`Array items =  `);
// for (let index = 0; index < Arr.length; index++) {
//     document.write(`${Arr[index]}, `)
// }
// let max = Arr[0];
// for (let i = 0; i < Arr.length; i++) {
//     if (Arr[i]>max) {
//         max = Arr[i];
//     }
// }
// document.write(`<br><br>The largest value in this array would be ${max}.`)
// let min = Arr[0];
// for (let a = 0; a < Arr.length; a++) {
//     if (Arr[a]<min) {
//         min = Arr[a];
//     }
// }
// document.write(`<br>The smallest value in this array would be ${min}.`)


//               Q11 End








//               Q12 Start


// for (let index = 1; index <= 20; index++) {
//     document.write(`${5*index}, `)
// }


//               Q12 End








//               Q13 Start


// let students = ['Ali','Sami','Taha','Inam','Shahzaib'];
// let scores = [58,73,89,90,57];
// let table = document.querySelector('table');
// table.innerHTML += `<tr>
// <th>Students</th>
// <th>Scores</th>
// </tr>`
// for (let index = 0; index < students.length; index++) {
//     table.innerHTML += `<tr>
//     <td>${students[index]}</td><td>${scores[index]}</td>
//     </tr>`;
// }


//               Q13 End








//               Q14 Start


// let scores = [12,45,3,22,34,50];
// let input = +prompt(`Enter a number!`);
// for (let index = 0; index < scores.length; index++) {
//     if (scores[index] == input) {
//         document.write(`${scores[index]}, `)
//         break;
//     }else{
//         document.write(`${scores[index]}, `)
//     }
// }


//               Q14 End








//               Q15 Start


// let A = [[1,2,3],[4,5,6],[7,8,9]];
// for (let index = 0; index < A.length; index++) {
//     document.write(`${A[index]}<br>`)
// }


//               Q15 End








//               Q16 Start


// let num = +prompt('Enter a number!');
// for (let index = num*2; index >= 0; index--) {
//     document.write(`<b>${index/2}</b>, `)
// }


//               Q16 End








//               Q17 Start


// for (let index = 0; index <= 20; index++) {
//     if (index % 2 == 0) {
//         document.write(`${index} is even. <br>`);
//     }else{
//         document.write(`${index} is odd. <br>`);
//     }
// }


//               Q17 End








//               Q18 Start


// let product = 1;
// for (let index = 0; index <= 7; index++) {
//     if (index % 2 !== 0) {
//         product *= index;
//     }
// }
// document.write(`${product}`);

// let product = 1;
// for (let index = 0; index < 20; index++) {
//     if (index % 2 === 0) {
//         product *= index;
//     }
// }
// document.write(`${product}`);
// console.log(product);


//               Q18 End








//               Q19 Start


// let stars = +prompt("enter a number");
// for (let index = stars; index >= 1; index--) {
//     let stars2 = ``;
//     for (let j = 0; j < index; j++) {
//         stars2 += '*';
//     }
//     console.log(stars2);
// }


//               Q19 End








//               Q20 Start


//     part 1
// let input = +prompt('enter a number');
// for (let index = 0; index < input; index++) {
//     document.write('*****' + '</br>');
// }

//     part 2
// let input = +prompt('enter a number');
// for (let index = 1; index <= input; index++) {
//     // console.log(stars)
//     let stars = '';
//     for (let j = 0; j < index; j++) {
//         stars += '*';
//     }
//     document.write('<br>', stars)
//     console.log(stars);
// }

//     part 3
// let input = +prompt('enter a number');
// for (let index = input; index > 0; index--) {
//     let stars = ''
//     for (let j = 0; j < index; j++) {
//         stars += '*';
//     }
//     document.write('<br>', stars)
//     console.log(stars);
// }











//           Q1

// document.write('<h2 class="h1"></h2>');
// let h1 = document.querySelector(".h1");

// for (let i = 1; i <= 5; i++) {
//     h1.innerHTML += 'Hello World <br> <br>';
// }



//           Q2

// document.write('<h2 class="h1"></h2>');
// let h1 = document.querySelector(".h1");

// for (let i = 1; i <= 10; i++) {
//     h1.innerHTML += i + '<br>';
// }



//           Q3

// document.write('<h2 class="h1"></h2>');
// let h1 = document.querySelector(".h1");

// let tableNum = +prompt('Enter the table Number');
// let tableLength = +prompt('Enter the table Length');

// for (let index = 1; index <= tableLength; index++) {
//     h1.innerHTML += `${tableNum} * ${index} = ${tableNum*index} <br> <br>`;
// }


//           Q4

// document.write('<h2 class="h1"></h2>');
// let h1 = document.querySelector(".h1");

// const A = ['Nokia', 'Samsung', 'Apple', 'Sony', 'Huawei']

// for (let i = 0; i < A.length; i++) {
//     h1.innerHTML += `${A[i]} <br>`
// }


//           Q5

// document.write('<h2 class="h1"></h2>');
// let h1 = document.querySelector(".h1");

// fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']

// for (let i = 0; i < fruits.length; i++) {
//     h1.innerHTML += `${fruits[i]} <br>`
// }
// h1.innerHTML += `<br><br>`
// for (let i = 0; i < fruits.length; i++) {
//     h1.innerHTML += `Element at index ${i} is ${fruits[i]} <br>`
// }


//           Q6

// document.write('<h2 class="h1"></h2>');
// let h1 = document.querySelector(".h1");

// let arr = [];

// let arrLength = +prompt('Enter array length');
// arr.length = arrLength;
// h1.innerHTML = `Number of Items: ${arr.length} <br> Items: <br><br>`
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = prompt(`Enter the value of index ${i}`)
//     h1.innerHTML += `${arr[i]} <br>`
// }



//           Q7

// document.write('<h3 class="h1"></h3>');
// let h1 = document.querySelector(".h1");
// h1.innerHTML = `Counting: `
// for (let i = 0; i <= 15; i++) {
//     h1.innerHTML += ` ${i}, `
// }
// let str = h1.innerHTML;
// str = str.slice(0,-2);
// h1.innerHTML = str;



// document.write('<h3 class="h1"></h3>');
// let h1 = document.querySelector(".h1");

// h1.innerHTML = `Reverse Counting: `
// for (let i = 10; i >= 1; i--) {
//     h1.innerHTML += `${i}, `
// }
// let str = h1.innerHTML;
// str = str.slice(0,-2);
// h1.innerHTML = str;



// document.write('<h3 class="h1"></h3>');
// let h1 = document.querySelector(".h1");

// h1.innerHTML = `Even Counting: `
// for (let i = 0; i <= 10; i++) {
//     h1.innerHTML += `${i*2}, `
// }
// let str = h1.innerHTML;
// str = str.slice(0,-2);
// h1.innerHTML = str;



// document.write('<h3 class="h1"></h3>');
// let h1 = document.querySelector(".h1");

// h1.innerHTML = `Odd Counting: `
// for (let i = 1; i <= 10; i++) {
//     h1.innerHTML += `${i*2-1}, `
// }
// let str = h1.innerHTML;
// str = str.slice(0,-2);
// h1.innerHTML = str;



// document.write('<h3 class="h1"></h3>');
// let h1 = document.querySelector(".h1");

// h1.innerHTML = `Series: `
// for (let i = 1; i <= 10; i++) {
//     h1.innerHTML += `${i*2}k, `
// }
// let str = h1.innerHTML;
// str = str.slice(0,-2);
// h1.innerHTML = str;



//             Q8


// document.write('<h3 class="h1"></h3>');
// let h1 = document.querySelector(".h1");

// let shop = ['cake','apple pie','cookie','chips','patties',];

// let order = prompt(`Welcome to Bakery! \nWhat would you like to order?`).toLowerCase();

// for (let i = 0; i < shop.length; i++) {
//     if (order === shop[i]) {
//         alert(`${order} is available at index ${i} in our bakery`)
//         break
//     }else{
//         alert(`Sorry, ${order} is not available at our bakery`)
//         break
//     }
// }



//             Q9


// document.write('<h3 class="h1"></h3>');
// let h1 = document.querySelector(".h1");

// let A = [24,53,78,91,12,45,69,92];
// h1.innerHTML = `Array Items are: `
// let largestNum = 0;
// for (let i = 0; i < A.length; i++) {
//     h1.innerHTML += `${A[i]}, `
//     if (largestNum < A[i]) {
//         largestNum = A[i];
//     }
// }
// let str = h1.innerHTML;
// str = str.slice(0,-2);
// h1.innerHTML = str;
// h1.innerHTML += `<br><br>The largest Number is ${largestNum}`



//             Q10


// document.write('<h3 class="h1"></h3>');
// let h1 = document.querySelector(".h1");
// let A = [6,24,53,78,91,1,12,45,69,92,100,545];
// let smallestNum = 0;
// h1.innerHTML = `Array Items are: `
// for (let i = 0; i < A.length; i++) {
//     h1.innerHTML += `${A[i]}, `
//     if (smallestNum < A[i]) {
//         smallestNum = A[i];
//     }
// }
// for (let i = 0; i < A.length; i++) {
//     if (smallestNum > A[i]) {
//         smallestNum = A[i];
//     }
// }
// let str = h1.innerHTML;
// str = str.slice(0,-2);
// h1.innerHTML = str;
// h1.innerHTML += `<br><br>The smallest Number in the array is ${smallestNum}.`;



//             Q11


// document.write('<h3 class="h1"></h3>');
// let h1 = document.querySelector(".h1");
// let A = [6,24,53,78,91,1,12,45,69,92,100,545];
// let smallestNum = 0;
// h1.innerHTML = `Array Items are: `
// for (let i = 0; i < A.length; i++) {
//     h1.innerHTML += `${A[i]}, `
//     if (smallestNum < A[i]) {
//         smallestNum = A[i];
//     }
// }
// let str = h1.innerHTML;
// str = str.slice(0,-2);
// h1.innerHTML = str;
// h1.innerHTML += `<br><br>The largest Number is ${smallestNum}.`
// for (let i = 0; i < A.length; i++) {
//     if (smallestNum > A[i]) {
//         smallestNum = A[i];
//     }
// }
// h1.innerHTML += `<br><br>The smallest Number is ${smallestNum}.`;



//             Q12


// document.write('<h3 class="h1"></h3>');
// let h1 = document.querySelector(".h1");

// for (let i = 1; i <= 20; i++) {
//     h1.innerHTML += `${i*5}, `
// }



//             Q13


// document.write("<table class='table' style='border: 1px solid;'><tr><th>Students</th><th>Scores</th></tr></table>");
// let h1 = document.querySelector(".table");

// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];

// for (let i = 0; i < students.length; i++) {
//     h1.innerHTML += `<tr>
//     <td>${students[i]}</td>
//     <td>${scores[i]}</td>
//     </tr>`
// }



//             Q14


// document.write('<h3 class="h1"></h3>');
// let h1 = document.querySelector(".h1");
// var scores = [12, 45, 3, 22, 34, 50];
// let input = +prompt('Where do you want to stop the rendering of array?');
// for (let i = 0; i < scores.length; i++) {
//     if (input === scores[i]) {
//         h1.innerHTML += `${scores[i]}`
//         break
//     }else{
//         h1.innerHTML += `${scores[i]}, `;
//     }
// }



//             Q15


// document.write('<h3 class="h1"></h3>');
// let h1 = document.querySelector(".h1");

// A = [ [1,2,3] , [4,5,6] , [7,8,9] ];

// for (let i = 0; i < A.length; i++) {
//     for (let j = 0; j < 3; j++) {
//         h1.innerHTML += `${A[i][j]} `;
//     }
//     h1.innerHTML += ` <br>`
// }



//             Q16


document.write('<h3 class="h1"></h3>');
let h1 = document.querySelector(".h1");
let input = +prompt('Enter a number');
for (let i = input; i >= 0; i--) {
    console.log(i);
    for (let j = 0; j < 1; j++) {
        if (i < 1) {
            break
        }else{
            console.log(i-0.5);
        }
    }
}