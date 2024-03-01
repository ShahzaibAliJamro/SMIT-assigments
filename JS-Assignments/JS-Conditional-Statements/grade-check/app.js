var percentage = +prompt("Enter your Percentage and I'll guess your Grade!");

if(percentage > 100){
    document.write("Invalid Percentage !!");
}else if(percentage <= 33){
    document.write("You are a failure!");
}else if(percentage <= 39 && percentage > 32){
    document.write("E Grade!");
}else if(percentage <= 49 && percentage > 39){
    document.write("D Grade!");
}else if(percentage <= 59 && percentage > 49){
    document.write("C Grade!");
}else if(percentage <= 69 && percentage > 59){
    document.write("B Grade!");
}else if(percentage <= 79 && percentage > 69){
    document.write("Congratulations, You've got an A Grade!");
}else if(percentage <= 89 && percentage > 79){
    document.write("Congratulations, You've got an A+ Grade!");
}else if(percentage <= 100 && percentage > 89){
    document.write("Congratulations, You've got an A++ Grade!");
}else{
    document.write(percentage);
}