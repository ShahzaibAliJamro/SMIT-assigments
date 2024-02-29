var num = +prompt("Enter your age!")

if (num >= 18){
    document.write("You are old enough to visit this site.")
}else if(num == 0){
    document.write("You aren't even born yet.")
}else{
    document.write("You are not old enough to visit this site.")
}