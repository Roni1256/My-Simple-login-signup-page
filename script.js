// Menu functionalities
let menuBtn=document.getElementById("menu-btn");
let menuCont=document.getElementById("menu-container");

menuBtn.addEventListener("click",function(){
  if(menuCont.style.display==="none" || menuCont.style.display==="")
  {
    menuCont.style.display="block";
  }
  else{
    menuCont.style.display="none";
  }
})

// Sign-up Functionalities---Opens the sign container
let signContainer=document.getElementById("sign-form-container");
let signBtn=document.getElementById("sign-in");
let closeBtn=document.getElementById("close-btn");


signBtn.addEventListener("click",function(){

  if(signContainer.style.display==="none"||signContainer.style.display==="")
  {
   signContainer.style.display="flex";
  }
  else{
    signContainer.style.display="none";
  }

});
// Close the sign-up container
closeBtn.addEventListener("click",function(){
  signContainer.style.display="none";
});

// Login button functionality ----Open the login the Login container
let logContainer=document.getElementById("login-form-container");
let loginBtn=document.getElementById("log-in");
let closeBtn1=document.getElementById("close-btn1");

loginBtn.addEventListener("click",function(){

  if(logContainer.style.display==="none"||logContainer.style.display==="")
  {
   logContainer.style.display="flex";
  }
  else{
    logContainer.style.display="none";
  }
});
// Close button----login container
closeBtn1.addEventListener("click",function(){
  logContainer.style.display="none";
});


// social-media Container function---
let socialMediaContainer=document.getElementById("social-media-container");
let googleBtn=document.getElementById("google");
let faceBookBtn=document.getElementById("facebook");
let twitterBtn=document.getElementById("twitter");
let instaGramBtn=document.getElementById("instagram");

// adding functions to input boxs


/* <div class="log-form" >
<div class="head-login-form">
  <h2>Login</h2>
  <span id="close-btn1">&times;</span>
</div>
<input type="text" placeholder="Username" id="username-login">
<input type="text" placeholder="Password" id="password-login">
<div class="log-box-btn">
  <input type="button" value="Log-in">
  <input type="button" value="Cancel">
</div>
</div> */


let LoginUsername=document.getElementById("username-login");
let LoginUsernameValue=LoginUsername.value;

let LoginPassword=document.getElementById("password-login");
let loginButton=document.getElementById("login-button");
let cancelLogin=document.getElementById("cancel-login");
const idContainer=[];

loginButton.addEventListener("click",()=>{

  console.log(LoginUsernameValue);

});

// function combineIds(LoginUsername,LoginPassword){
//  let idContainer=
//     {
//       username:LoginUsernameValue,
//       password:LoginPassword
//     }

// }

console.log(idContainer.username);