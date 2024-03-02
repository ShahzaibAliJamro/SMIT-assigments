var password = prompt('Enter your password');
var rePassword = prompt('Match your password');

if (password === rePassword){
    document.write('Welcome');
}else{
    alert('Passwords do not match')
}