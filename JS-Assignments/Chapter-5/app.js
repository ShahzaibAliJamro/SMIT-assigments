//Q1 Start


// const num1 = +prompt(`Enter a number`);
// const num2 = +prompt(`Enter another number`);
// document.write(`Sum of <b>${num1}</b> and <b>${num2}</b> is <b>${num1+num2}</b>`);


//Q1 end






//Q2 Start


// const num3 = +prompt(`Enter a number`);
// const num4 = +prompt(`Enter another number`);
// document.write(`Subtraction of <b>${num3}</b> and <b>${num4}</b> is <b>${num3-num4}</b>`);


// const num5 = +prompt(`Enter a number`);
// const num6 = +prompt(`Enter another number`);
// document.write(`Product of <b>${num5}</b> and <b>${num6}</b> is <b>${num5*num6}</b>`)


// const num7 = +prompt(`Enter a number`);
// const num8 = +prompt(`Enter another number`);
// document.write(`Division of <b>${num7}</b> and <b>${num8}</b> is <b>${num7/num8}</b>`);


// const num9 = +prompt(`Enter a number`);
// const num10 = +prompt(`Enter another number`);
// document.write(`modulus of <b>${num9}</b> and <b>${num10}</b> is <b>${num9%num10}</b>`);


//Q2 end







//Q3 Start


//declaring a variable
// let number;
// document.write(`<h2>Value after variable declaration is ${number}.</h2>`);




//assigning a value
// number = 7;
// document.write(`<h2>Initial Value is ${number}.</h2>`);



//incrementing the value
// number++;
// document.write(`<h2>Value after increment is ${number}.</h2>`);



//adding the value to 7
// number = number+7;
// document.write(`<h2>Value after addition is ${number}.</h2>`);



//decrementing the value
// number--;
// document.write(`<h2>Value after decrement is ${number}.</h2>`);



//Calculating the reminder after dividing the final value with 3
// number = number%3;
// document.write(`<h2>The reminder is ${number}.</h2>`);


//Q3 end






//Q4 Start


// const movieCost = 600;
// const numOfTickets = +prompt(`How many movie tickets do you want? \nPrice of single ticket is 600 PKR.`)
// document.write(`<h1>Your total would be ${600*numOfTickets} PKR.<br><br>
// ${numOfTickets} * ${movieCost} = ${600*numOfTickets}</h1>`)


//Q4 end






//Q5 Start


// document.write(`<h2>Table of 7 : </h2> 7 x 1 = <b>7</b>
// <br/><br/> 7 x 2 = <b>14</b>
// <br/><br/> 7 x 3 = <b>21</b>
// <br/><br/> 7 x 4 = <b>28</b>
// <br/><br/> 7 x 5 = <b>35</b>
// <br/><br/> 7 x 6 = <b>42</b>
// <br/><br/> 7 x 7 = <b>49</b>
// <br/><br/> 7 x 8 = <b>56</b>
// <br/><br/> 7 x 9 = <b>63</b>
// <br/><br/> 7 x 10 = <b>70</b>`);


//Q5 end






//Q6 Start


// const celcius = +prompt(`I will convert Celcius into Fahrenheit. \nEnter a celcius temperature!`);
// const celcToFahr = (celcius*9/5)+32;
// document.write(`${celcius} deg C, is ${celcToFahr} deg F.`);
// document.write(`<br/>`);
// document.write(`<br/>`);

// const Fahrenheit = +prompt(`I will convert Fahrenheit into Celcius. \nEnter a Fahrenheit temperature!`);
// const fahrToCelc = (Fahrenheit-32)*5/9;
// document.write(`${Fahrenheit} deg F, is ${fahrToCelc} deg C.`);


//Q6 End







//Q7 Start


// const priceItem1 = 650;
// const quantityItem1 = 3;
// const priceItem2 = 100;
// const quantityItem2 = 7;
// const shippingCharges = 100;
// const total = (priceItem1*quantityItem1)+(priceItem2*quantityItem2)+shippingCharges;

// document.write(`Price of Item 1 is ${priceItem1}.`);
// document.write(`<br/>`);
// document.write(`Quantity of Item 1 is ${quantityItem1}.`);
// document.write(`<br/>`);
// document.write(`Price of Item 2 is ${priceItem2}.`);
// document.write(`<br/>`);
// document.write(`Quantity of Item 2 is ${quantityItem2}.`);
// document.write(`<br/>`);
// document.write(`Shipping Charges are ${shippingCharges}.`);
// document.write(`<br/>`);
// document.write(`<br/>`);
// document.write(`Total cost of your order is ${total}.`);


//Q7 End







//Q8 Start


// document.write(`<h1>Marks Sheet</h1><br/>`);

// const totalMarks = 980;
// const marksObtained = 804;
// const percentage = marksObtained/totalMarks*100;
// document.write(`<p>Total Marks : ${totalMarks}.</p>`);
// document.write(`<p>Marks Obtained : ${marksObtained}.</p>`);
// document.write(`<p>Percentage : ${percentage}%.</p>`);



//Q8 End






//Q9 Start


// const heading = document.write('<h1>CURRENCY IN PKR</h1>');

// const dollars = +prompt('I can convert USD to PKR \nEnter a USD amount:');
// const riyals = 0;


// const pkr = `Total currency in PKR is <b>${(dollars*275.87)+(riyals*73.55)}</b>`;

// document.write(pkr)


//Q9 End






//Q10 Start


// const initialNumber = 7;
// const finalNumber = ((initialNumber+5) * 10)/2;
// console.log('Initial Number ==> ', initialNumber);
// console.log('Final Number ==> ', finalNumber);


//Q10 End






//Q11 Start


// const currentYear = +prompt('Enter Current Year:');
// const birthYear = +prompt('Enter Your Birth Year:');
// const age = currentYear-birthYear;
// document.write(`Current Year = <b>${currentYear}</b></br>`);
// document.write(`Birth Year = <b>${birthYear}</b></br>`);
// document.write(`Age = <b>${age}</b>`);


//Q11 End






//Q12 Start


// const radius = +prompt("Enter a radius value:");
// const pi = 3.14159;
// const circumference = 2*pi*radius;
// const area = pi*(radius*radius);
// document.write(`Radius of the circle = <b>${radius}</b></br>`);
// document.write(`Circumference of the circle = <b>${circumference}</b></br>`);
// document.write(`Area of the circle = <b>${area}</b></br>`);


//Q12 End






//Q13 Start


const snack = prompt('Enter your favorite snack!');
const age = +prompt('Enter your current age!');
const maxAge = +prompt('Enter a maximum current age!');
const amountPerDay = +prompt('Enter an estimated amount of snack per day (as a number).')
const netAge = maxAge-age;
const final = (netAge*365)*amountPerDay;
document.write(`Favorite snack = <b>${snack}</b></br>`);
document.write(`Your Current Age = <b>${age}</b></br>`);
document.write(`Maximum Age = <b>${maxAge}</b></br>`);
document.write(`Amount of snacks per day = <b>${amountPerDay}</b></br>`);
document.write(`You will need ${final} to last you until the ripe old age of ${maxAge}`);


//Q13 End