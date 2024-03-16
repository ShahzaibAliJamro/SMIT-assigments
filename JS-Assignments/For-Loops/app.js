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
// document.write('items = <br><br><br>');
// for (let i = 0; i < array_length; i++) {
//     array[i] = prompt('Enter items!');
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


let shop = ['cake','apple pie','cookie','chips','patties',];

let order = prompt('Assalam-o-Alaikum, Welcome to ABC Bakers. \nWhat do you want to order sir/madam?');
if (shop.includes(order)) {
    console.log(`${order} is availabe at index ${shop.indexOf(order)} in our bakery.`);
}else{
    console.log(`we are sorry! ${order} is not available at our bakery.`);
}