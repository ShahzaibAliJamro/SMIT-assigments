var percentage = +prompt('Enter your Percentage');

if(percentage > 100){
    document.write("Invalid Percentage !!");
}else if(percentage <= 33){
    document.write("You are a failure!");
}else if(percentage <= 40 && percentage > 33){
    document.write("E Grade!");
}else if(percentage <= 50 && percentage > 40){
    document.write("D Grade!");
}else if(percentage <= 60 && percentage > 51){
    document.write("C Grade!");
}else if(percentage <= 70 && percentage > 61){
    document.write("B Grade!");
}else if(percentage <= 80 && percentage > 71){
    document.write("Congratulations, You've got an A Grade!");
}else if(percentage <= 90 && percentage > 81){
    document.write("Congratulations, You've got an A+ Grade!");
}else if(percentage <= 100 && percentage > 91){
    document.write("Congratulations, You've got an A++ Grade!");
}else{
    document.write(percentage);
}