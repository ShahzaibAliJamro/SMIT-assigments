var num1 = +prompt('Enter a variable');
var operator = prompt('What do you want to perform?\nex: + , - , * , / , % .');
var num2 = +prompt('Enter second variable');
if(operator === '+'){
    alert('The answer is ' + num1 + num2 )
}else if(operator === '-'){
    alert('The answer is ' + num1 - num2 )
}else if(operator === '*'){
    alert('The answer is ' + num1 * num2 )
}else if(operator === '/'){
    alert('The answer is ' + num1 / num2 )
}else if(operator === '%'){
    alert('The answer is ' + num1 / num2 * 100 )
}else{
    alert(operator)
}