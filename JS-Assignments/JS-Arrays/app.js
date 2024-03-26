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
// let names = [];
// let scores = [];
// let totalNum = 500;
// document.write(`
// <h2>Q11</h2>
// <input type="text" placeholder="enter your name" id="input1">
// <br><br>
// <input type="number" placeholder="enter your obtained marks" id="input2">
// <br>
// <br>
// <button onclick="getStudentData()">Click ME!</button>
// <h1 class="heading"></h1>`);
// let input1 = document.querySelector('#input1');
// let input2 = document.querySelector('#input2');
// let output = document.querySelector('.heading');
// function getStudentData() {
//     output.innerHTML = ''
//     names.push(input1.value);
//     input1.value = '';
//     scores.push(input2.value);
//     input2.value = '';
//     for (let i = 0; i < scores.length; i++) {
//         let percentage = (scores[i]/totalNum*100);
//         output.innerHTML += `Score of ${names[i]} is ${scores[i]} and Percentage = ${percentage}% <br>`;
//     }
// }

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



//          Q12 START

// let colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "cyan", "magenta", "teal"];
// let colors1 = document.write(`<p class = "no1"></p>`);
// let no1 = document.querySelector(".no1");
// no1.innerHTML = `<h3>1. Initial array</h3>${colors}`;

// a

// document.write(`
// <h3>Q12 part a</h3>
// <input type="text" placeholder="Add another color at start" id="input1">
// <button onclick="input1Push()">Add</button>
// <p class="h21"></p>
// `);
// let input1 = document.querySelector('#input1');
// let h21 = document.querySelector('.h21');
// function input1Push() {
//     colors.unshift(input1.value);
//     input1.value = '';
//     h21.innerHTML = `<h3>2. Array after adding 1 at the beginning.</h3>${colors}`;
// }

// b, c, d and e

// document.write(`
// <h3>Q12 part b</h3>
// <input type="text" placeholder="Add another color at end" id="input2">
// <button onclick="input2Push()">Add</button>
// <p class="h22"></p>
// `);
// let input2 = document.querySelector('#input2');
// let h22 = document.querySelector('.h22');
// document.write(`<p class="h23"></p>`);
// let h23 = document.querySelector('.h23');
// document.write(`<p class="h24"></p>`);
// let h24 = document.querySelector('.h24');
// document.write(`<p class="h25"></p>`);
// let h25 = document.querySelector('.h25');
// document.write(`<p class="h26"></p>`);
// let h26 = document.querySelector('.h26');
// function input2Push() {
//     colors.push(input2.value);
//     input2.value = '';
//     h22.innerHTML = `<h3>3. Array after adding 1 at the end.</h3>${colors}`;
//     colors.unshift('Sarcoline', 'Coquelicot');
//     h23.innerHTML = `<h3>4. Array after adding 2 more at the beginning.</h3>${colors}`;
//     colors.shift();
//     h24.innerHTML = `<h3>5. Array after deleting 1 at the beginning.</h3>${colors}`;
//     colors.pop();
//     h25.innerHTML = `<h3>6. Array after deleting 1 at the end.</h3>${colors}`;
//     h26.innerHTML = `<h3>7. Enter in 1st field where you want to add a color, enter the color name in the second field.</h3>`;
// }

// f

// document.write(`
// <h3>Q12 part f</h3>
// <input type="text" placeholder="where do you want to add" id="input3">
// <input type="text" placeholder="enter color name" id="input4">
// <button onclick="input3Push()">Add</button>
// <p class="h27"></p>
// `);
// let h27 = document.querySelector('.h27');
// let input3 = document.querySelector('#input3');
// let input4 = document.querySelector('#input4');
// function input3Push() {
// colors.splice(input3.value,0,input4.value);
// h27.innerHTML = `${colors}`;
// }

// g

// document.write(`
// <h3>Q12 part g</h3>
// <input type="text" placeholder="where do you want to dlt from" id="input5">
// <input type="text" placeholder="how many do you want to dlt" id="input6">
// <button onclick="input4Push()">Add</button>
// <p class="h28"></p>
// `);
// let h28 = document.querySelector('.h28');
// let input5 = document.querySelector('#input5');
// let input6 = document.querySelector('#input6');
// function input4Push() {
// colors.splice(input5.value,input6.value,);
// h28.innerHTML = `${colors}`;
// }



//          Q13 START

// let scores = [320,230,480,120];
// scores.sort((a,b) => a-b);
// console.log(scores);



//          Q14 START

// let fruits = ['strawberry','apple','orange','banana'];
// fruits.sort();
// console.log(fruits);



//          Q15 START

// let cities = ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad'];
// document.write(
//     `<h2 class='h1'></h2>
//     <h2 class='h2'></h2>`
// )
// let h1 = document.querySelector('.h1');
// let h2 = document.querySelector('.h2');
// h1.innerHTML = `<h2>Cities List:</h2>${cities}`;
// let selectedCities = cities.slice(1,4);
// h2.innerHTML = `<h2>Selected Cities List:</h2>${selectedCities}`;
// // console.log(cities);
// // console.log(selectedCities);



//          Q16 START

// var arr = ['This','is','my','cat'];
// let joined = arr.join(' ');
// console.log(joined);



//          Q17 START

// let devices = [];
// console.log(devices);
// let push1 = devices.push('keyboard');
// console.log('add =>', devices[push1-1]);
// console.log(devices);
// let push2 = devices.push('mouse');
// console.log('add =>', devices[push2-1]);
// console.log(devices);
// let push3 = devices.push('printer');
// console.log('add =>', devices[push3-1]);
// console.log(devices);
// let push4 = devices.push('monitor');
// console.log('add =>', devices[push4-1]);
// console.log(devices);
// let shift1 = devices.shift();
// console.log('out => ' , shift1);
// console.log(devices);
// let shift2 = devices.shift();
// console.log('out => ' , shift2);
// console.log(devices);
// let shift3 = devices.shift();
// console.log('out => ' , shift3);
// console.log(devices);
// let shift4 = devices.shift();
// console.log('out => ' , shift4);
// console.log(devices);
// console.log('This illustrates the FIFO behavior, as the first element to be added =keyboard= is the first one to get removed');



//          Q18 START

// let devices = [];
// console.log(devices);
// let push1 = devices.push('keyboard');
// console.log('add =>', devices[push1-1]);
// console.log(devices);
// let push2 = devices.push('mouse');
// console.log('add =>', devices[push2-1]);
// console.log(devices);
// let push3 = devices.push('printer');
// console.log('add =>', devices[push3-1]);
// console.log(devices);
// let push4 = devices.push('monitor');
// console.log('add =>', devices[push4-1]);
// console.log(devices);
// let pop1 = devices.pop();
// console.log('out => ' , pop1);
// console.log(devices);
// let pop2 = devices.pop();
// console.log('out => ' , pop2);
// console.log(devices);
// let pop3 = devices.pop();
// console.log('out => ' , pop3);
// console.log(devices);
// let pop4 = devices.pop();
// console.log('out => ' , pop4);
// console.log(devices);
// console.log('This illustrates the LIFO behavior, as the first element to be added =keyboard= is the last one to get removed');