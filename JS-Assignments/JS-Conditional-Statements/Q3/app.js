var num = +prompt("Enter your age and I'll determine if you are old enough to visit this site or not!")

if (num >= 18){
    document.write("You are old enough to visit this site.")
}else if(num == 0){
    document.write("You aren't even born yet.")
}else{
    document.write("You are not old enough to visit this site.")
}