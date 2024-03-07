var num1 = +prompt("Enter a number and I'll tell you if it's a positive number or a negative one!");
if (num1 > 0) {
    document.write('The number is positive number.');
}else if (num1 < 0) {
    document.write('The number is negative number.');
}else if (num1 == 0) {
    document.write('The number is zero.');
}else{
    document.write("unknown error");
}