var hour = +prompt('What is the current hour?\ntype in this format : 9 for 9 a.m , 15 for 3 p.m');
if (hour >= 6 && hour <= 9) {
    document.write('Breakfast is served.');
}else if (hour >= 11 && hour <= 13) {
    document.write('Time for lunch.');
}else if (hour >= 17 && hour <= 20) {
    document.write("It's dinner time.");
}else{
    document.write("Sorry, You'll have to wait or go get a snack.");
}