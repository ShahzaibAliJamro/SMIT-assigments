var num1 = +prompt('Enter a variable');
var operator = prompt('What do you want to perform?\nex: + , - , * , / , % .');
var num2 = +prompt('Enter second variable');
var num3 = num1 + num2
var num4 = num1 - num2
if(operator === '+'){
    alert('The answer is ' + num3 )
}else if(operator === '-'){
    alert('The answer is ' + num4 )
}else if(operator === '*'){
    alert('The answer is ' + num1 * num2 )
}else if(operator === '/'){
    alert('The answer is ' + num1 / num2 )
}else if(operator === '%'){
    alert('The answer is ' + num1 / num2 * 100 )
}else{
    alert(operator)
}