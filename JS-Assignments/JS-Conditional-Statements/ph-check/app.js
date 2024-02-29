var pH = +prompt("Enter a pH value from 1 to 14!")

if (pH > 14){
    document.write("Invalid pH value described.")
}else if (pH == 14){
    document.write("ph level is basic" + '<br/>' + "ex: Concentrated solutions of alkali.")
}else if (pH == 13){
    document.write("ph level is basic" + '<br/>' + "ex: Concentrated solutions of alkali.")
}else if (pH == 12){
    document.write("ph level is basic" + '<br/>' + "ex: Bleach.")
}else if (pH == 11){
    document.write("ph level is basic" + '<br/>' + "ex: Ammonia Solution.")
}else if (pH == 10){
    document.write("ph level is basic" + '<br/>' + "ex: Hand Soap.")
}else if (pH == 9){
    document.write("ph level is basic" + '<br/>' + "ex: Baking Soda.")
}else if (pH == 8){
    document.write("ph level is basic" + '<br/>' + "ex: Egg.")
}else if (pH == 7){
    document.write("ph level is Neutral" + '<br/>' + "ex: Pure Water.")
}else if (pH == 6){
    document.write("ph level is acidic" + '<br/>' + "ex: Milk.")
}else if (pH == 5){
    document.write("ph level is acidic" + '<br/>' + "ex: Black Coffee.")
}else if (pH == 4){
    document.write("ph level is acidic" + '<br/>' + "ex: Tomato Juice.")
}else if (pH == 3){
    document.write("ph level is acidic" + '<br/>' + "ex: Apple Juice.")
}else if (pH == 2){
    document.write("ph level is acidic" + '<br/>' + "ex: Lemon Juice.")
}else if (pH == 1){
    document.write("ph level is acidic" + '<br/>' + "ex: Gastric Acid.")
}else if (pH == 0){
    document.write("Invalid pH value described.")
}else if (pH > 7){
    document.write("ph level is basic.")
}else if (pH <= 6){
    document.write("ph level is acidic.")
}else{
    document.write(pH)
}