const userName = document.querySelector(".userName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const password2 = document.querySelector(".password2");
const button = document.querySelector(".button");
const form = document.querySelector(".form");
const userNameSmall = document.querySelector("#userNameSmall");
const EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const digit = new RegExp('[0-9]');
const lowerCase = new RegExp('[a-z]');
const upperCase = new RegExp('[A-Z]');
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    checkInputs();
})
function checkInputs(){
    //username validation
    if(userName.value.length == "0"){
        userName.className= "userName error"
        userNameSmall.innerText = "نام کاربری نمی تواند خالی باشد"
        userNameSmall.style.display = "inline"
    }
    else if(digit.test(userName.value[0])){
        userName.className= "userName error"
        userNameSmall.innerText = "نام کاربری نمی تواند با عدد شروع شود"
        userNameSmall.style.display = "inline"
    }
    else if(userName.value.length < 5){
        userName.className= "userName error"
        userNameSmall.innerText = "نام کاربری حداقل باید 6 کاراکتر باشد"
        userNameSmall.style.display = "inline"
    }
    else{
        userName.className= "userName success"
        userNameSmall.style.display = "none"
    }
    //email validation
    if(email.value.length == "0"){
        email.className= "email error"      
        emailSmall.innerText = "ایمیل نمی تواند خالی باشد"
        emailSmall.style.display = "inline"
    }
    else if(!EmailRegex.test(email.value)){
        email.className= "email error"
        emailSmall.innerText = "ایمیل باید به فرم someone@domain.example باشد" 
        emailSmall.style.display = "inline"
    }
    else{
        email.className= "email success"
        emailSmall.style.display = "none"
    }
    //password validation
    if(password.value.length == "0"){
        password.className= "userName error"
        passwordSmall.innerText = "رمز عبور نمی تواند خالی باشد"
        passwordSmall.style.display = "inline"
    }
    else if(password.value.length < 8){
        password.className= "userName error"
        passwordSmall.innerText = "رمز عبور حداقل باید 8 کاراکتر باشد"
        passwordSmall.style.display = "inline"
    }
    else if(!lowerCase.test(password.value)){
        password.className= "userName error"
        passwordSmall.innerText = "رمز عبور باید شامل حروف کوچک باشد"
        passwordSmall.style.display = "inline"
    }
    else if(!upperCase.test(password.value)){
        password.className= "userName error"
        passwordSmall.innerText = "رمز عبور باید شامل حروف بزرگ باشد"
        passwordSmall.style.display = "inline"
    }
    else if(!digit.test(password.value)){
        password.className= "userName error"
        passwordSmall.innerText = "رمز عبور باید شامل اعداد باشد"
        passwordSmall.style.display = "inline"
    }
    else{
        password.className= "password success"
        passwordSmall.style.display = "none"
    }
    //password repeat
    if(password.value != password2.value){
        password2.className= "userName error"
        password2Small.innerText = "تکرار رمز عبور درست نیست"
        password2Small.style.display = "inline"
    }
    else{
        password2.className= "password success"
        password2Small.style.display = "none"
    }
}