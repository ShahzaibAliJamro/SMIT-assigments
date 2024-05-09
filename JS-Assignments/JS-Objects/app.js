//             Q1


// const itemsArray = [
//     {name: 'juice', price:50, quantity:3},
//     {name: 'cookie', price:30, quantity:9},
//     {name: 'shirt', price:880, quantity:1},
//     {name: 'pen', price:100, quantity:2}
// ];

// document.write(`
// <div class='h1'></div>
// `)
// let h1 = document.querySelector('.h1');
// let singlePrice = 0;
// let totalPrice = 0;
// for (let index = 0; index < itemsArray.length; index++) {
//     h1.innerHTML += `<p style='font-weight: 600;font-size: 23px;'>The price of ${itemsArray[index].quantity} ${itemsArray[index].name} will be ${itemsArray[index].price*itemsArray[index].quantity}. </br></p>`;
//     totalPrice += itemsArray[index].price*itemsArray[index].quantity;
// }
// h1.innerHTML += `<h1>Your total bill would be ${totalPrice} pkr.</h1>`



//             Q2


let obj = {
    name: 'Shahzaib Ali',
    email: 'shahzaibalijamro@gmail.com',
    password: 123456789,
    age: 18,
    gender: 'male',
    city: 'Manchester',
    country: 'England'
}
console.log('country' in obj);
console.log('age' in obj);
console.log('firstName' in obj);
console.log('lastName' in obj);



//             Q3


