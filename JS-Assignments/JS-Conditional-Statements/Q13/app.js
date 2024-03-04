var num1 = +prompt('Enter a number!');
if (num1 > 0) {
    document.write('The number is positive number.');
}else if (num1 < 0) {
    document.write('The number is negative number.');
}else if (num1 == 0) {
    document.write('The number is zero.');
}else{
    document.write("unknown error");
}