var character = prompt('Enter a character and I will tell you if it is a number, uppercase letter or lowercase letter!');
if(!isNaN(character)){
    alert(character + ' is a number.')
}else{
    alert(character + ' is a string.')
}