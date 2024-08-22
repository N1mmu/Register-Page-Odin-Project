const password = document.getElementById('password');
const confirmPassword =  document.getElementById('confirm-password');

const validator = function(){
    if(password && confirmPassword){
        if(password.value!=confirmPassword.value){
            password.classList.add('incorrect');
            confirmPassword.classList.add('incorrect');
        }else{
            password.classList.remove('incorrect');
            confirmPassword.classList.remove('incorrect');
        }
    }
}
function test(){
console.log(password)
}
confirmPassword.addEventListener("input",(e) => {
    validator();
    console.log('hi');
})

password.addEventListener("input",(e) => {
    validator();
})