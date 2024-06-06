
let password = document.getElementById('password');
let image = document.getElementById('image');


function pass() {
    
if (password.type == 'password') {
    password.type = 'text'
    image.src = 'img/1.png'

}else{
    password.type = 'password'
    image.src = 'img/2.png'
}

}
