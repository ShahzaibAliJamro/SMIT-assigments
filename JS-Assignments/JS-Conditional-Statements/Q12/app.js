var num1 = +prompt('Enter an integer!');
var num2 = +prompt('Enter another integer!');
if (num1 > num2) {
    document.write('Integer 1 is greater than integer 2.');
}else if (num1 < num2) {
    document.write('Integer 2 is greater than integer 1.');
}else if (num1 == num2) {
    document.write('Both integers are equal.');
}else{
    document.write("unknown error");
}