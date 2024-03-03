var year = +prompt('Enter a calender year in the following format!\nex: 2024');
if(year%4 == 0){
    alert(year + ' is a leap year.')
}else{
    alert(year + ' is not a leap year.')
}