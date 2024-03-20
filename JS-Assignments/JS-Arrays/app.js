//          Q1 AND Q2 START

// let studentNames = [];



//          Q3 START

// let stringArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// console.log(stringArr);



//          Q4 START

// let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// console.log(numArr);



//          Q5 START

// let booleanArr = [true, false];
// console.log(booleanArr);



//          Q6 START

// let mixedArr = ['a', 'b', 'c', 1, 2, 3, true, false, ['a', 1, false]];
// console.log(mixedArr);



//          Q7 START

// let mobileNetworks = ['telenor', 'jazz', 'ufone', 'zong', 'SCO'];
// console.log(mobileNetworks);



//          Q8 START

// let qualifications = ['SSC','HSC','BSC','BS','BCOM','MS','M.Phil','PhD'];
// let ol = document.querySelector('ol');
// for (let index = 0; index <h2 qualifications.length; index++) {
//     ol.innerHTML += `
//     <li>
//     ${qualifications[index]}
//     </li>
//     `
// }



//          Q9 START

// let movies = [];
// let input = document.querySelector('#input');
// let h1 = document.querySelector('h1');
// h1.innerHTML = '<h2>Top movies of 2015</h2>';
// let ol = document.querySelector('ol');
// let h2 = document.querySelector('.h2');
// function xyz() {
//     movies.push(input.value);
//     input.value = ''
//     ol.innerHTML = ''
//     for (let index = 0; index < movies.length; index++) {
//         ol.innerHTML += `
//         <li>
//         ${movies[index]}
//         </li>
//         `
//         h2.innerHTML = `Length of array = ${movies.length}`
//     }
//     console.log(movies);
// }



//          Q10 START

// let cars = [' BMW M-8 ', ' DODGE ', ' BUGATTI ', ' LAMBORGHINI '];
// document.write(`<h2>Favorite Cars</h2>`)
// document.write(`<p>${cars}</p>`);
// document.write(`<p>First index of the array = 0</p>`);
// document.write(`<p>Car at First index of the array = ${cars[0]}</p>`);
// document.write(`<p>Last index of the array = ${cars.length-1}</p>`);
// document.write(`<p>Car at Last index of the array = ${cars[cars.length-1]}</p>`);



//          Q11 START

// posible answer a
let names = [];
let scores = [];
let totalNum = 500;
document.write(`
<h2>Q11</h2>
<input type="text" placeholder="enter your name" id="input1">
<br><br>
<input type="number" placeholder="enter your obtained marks" id="input2">
<br>
<br>
<button onclick="getStudentData()">Click ME!</button>
<h1 class="heading"></h1>`);
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let output = document.querySelector('.heading');
function getStudentData() {
    output.innerHTML = ''
    names.push(input1.value);
    input1.value = '';
    scores.push(input2.value);
    input2.value = '';
    for (let i = 0; i < scores.length; i++) {
        let percentage = (scores[i]/totalNum*100);
        output.innerHTML += `Score of ${names[i]} is ${scores[i]} and Percentage = ${percentage}% <br>`;
    }
}

// posible answer b
// let names = ['Michael','John','Tony'];
// let scores = [320,230,480];
// let totalNum = 500;
// document.write(`<h2 class="abc"></h2>`)
// let output = document.querySelector('.abc');
// for (let i = 0; i < scores.length; i++) {
//     let percentage = (scores[i]/totalNum*100);
//     output.innerHTML += `Score of ${names[i]} is ${scores[i]} and Percentage = ${percentage}% <br>`;
// }