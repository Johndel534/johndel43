const signinBtnlink = document.querySelector('.signinBtn-link');
const signupBtnlink = document.querySelector('.signupBtn-link');
const wrapper = document.querySelector('.wrapper');

signupBtnlink.addEventListener('click',()=>{
    wrapper.classList.toggle('active');
});
signinBtnlink.addEventListener('click',()=>{
    wrapper.classList.toggle('active');
});
function Log in(){
    var username=document.getElementById("user").value;
    var username=document.getElementById("pass").value;
if(username=="johndel" && password=="johndel123"){
    window.location.href="homepage.html";
    alert("successful log in");
}
else{
    alert("incorrect password or username");
}
}