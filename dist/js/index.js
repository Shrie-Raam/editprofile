const email = document.getElementById("inputEmail");
const password = document.getElementById("inputPassword");
const fEmail = document.getElementById("fInputEmail");
const fPassword = document.getElementById("fInputPassword");
const cfmPassword = document.getElementById("fConfirmPassword");

email.addEventListener('keyup', checkEmail);
password.addEventListener('keyup', goodPassword);
fEmail.addEventListener('keyup', checkEmail);
fPassword.addEventListener('keyup', goodPassword);
cfmPassword.addEventListener('keyup', confirmPassword);

function checkEmail(e){
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(e.target.value.match(mailformat) && e.target.value !== '' && e.target.value.includes(".com")){
        e.target.classList.add('is-valid')
        e.target.classList.remove('is-invalid')
    }else {
        e.target.classList.remove('is-valid')
        e.target.classList.add('is-invalid')
    }
}

function goodPassword(e){
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if(e.target.value.length < 8 || e.target.value.length > 10){
        e.target.classList.remove('is-valid')
        e.target.classList.add('is-invalid')
        return false;
    }else if(!e.target.value.match(upperCaseLetters)){
        e.target.classList.remove('is-valid')
        e.target.classList.add('is-invalid')
        return false;
    }else if(!e.target.value.match(lowerCaseLetters)){
        e.target.classList.remove('is-valid')
        e.target.classList.add('is-invalid')
        return false;
    }else if(!e.target.value.match(numbers)){
        e.target.classList.remove('is-valid')
        e.target.classList.add('is-invalid')
        return false;
    }else{
        e.target.classList.add('is-valid')
        e.target.classList.remove('is-invalid')
        return true;
    }
}

function confirmPassword(e){
    if(goodPassword(e) && fPassword.value === cfmPassword.value){
        e.target.classList.add('is-valid')
        e.target.classList.remove('is-invalid')
    }else{
        e.target.classList.remove('is-valid')
        e.target.classList.add('is-invalid')
    }
}




