
var username = document.querySelector(".name");
var useremail = document.querySelector(".email");
var userpassword = document.querySelector(".pass");
var signInEmailInput= document.querySelector(".signinemail");
var signInPassInput= document.querySelector(".signinpass");

var emailexist;
var ckeckUser ;
var allUsers=[];

if ( localStorage.getItem("usersList") != null) {

    allUsers = JSON.parse(localStorage.getItem("usersList"))
}

function ValiadtionName(){
  let reg = /^[A-Za-z]{3,15}(\s?[A-Za-z]{3,15})?$/i;
    return reg.test(username.value)
}

function ValiadtionEmail(){
  let reg =/@[a-z]{4,}(\.com)$/;
    return reg.test(useremail.value)
}

function ValiadtionPassword(){
  let reg = /^[a-zA-Z0-9!@#$%^&*]{6,20}$/;
    return reg.test(userpassword.value)
}




function addForm() {   
    if (ValiadtionName() && ValiadtionEmail() && ValiadtionPassword()) {

      displayform()
      if (emailexist==true) {
        document.querySelector(".signupwarnning").innerHTML=`<span class="text-danger">this account is exist ! Try another one.
        signUp failed ! Try again</span>`
      }
      else{
       var user = {
           name : username.value,
           email : useremail.value,
           password : userpassword.value
       }
       allUsers.push(user)
       localStorage.setItem("usersList",JSON.stringify(allUsers))
       document.querySelector(".signupwarnning").innerHTML=`<span class="text-success">succeeded</span>`
       document.querySelector(".login").innerHTML=`<button class="btn btn-success mt-3">Sign In</button>`
      }
      
    }
    else{

      if (ValiadtionName()) {
        document.querySelector('.name').classList.add("is-valid")
        
      }else{
        document.querySelector('.name').classList.remove("is-valid")
        document.querySelector('.name').classList.add("is-invalid")
      }

      if (ValiadtionEmail()) {
        document.querySelector('.email').classList.add("is-valid")
        
      }else{
        document.querySelector('.email').classList.remove("is-valid")
        document.querySelector('.email').classList.add("is-invalid")
      }


      if (ValiadtionPassword()) {
        document.querySelector('.pass').classList.add("is-valid")
        
      }else{
        document.querySelector('.pass').classList.remove("is-valid")
        document.querySelector('.pass').classList.add("is-invalid")
      }


      document.querySelector(".signupwarnning").innerHTML=`<span class="text-danger">Please,check your data</span>`
    }
  }
 
if (document.querySelector(".signup") !=null) {
    document.querySelector(".signup").addEventListener("click",addForm)
}
 
function displayform() {
     emailexist= false ;
    for(var i = 0 ; i < allUsers.length ; i++ ){
        if (allUsers[i].email == useremail.value ) {
             emailexist=true;
        }
     }
}

    
// function ckeckUser() {
//   if (ValiadtionName() || ValiadtionEmail() || ValiadtionPassword()) {
//     return true;
//   }
//   return false;
// }

function signIn() {
    for(var i =0 ;i < allUsers.length; i++) {
        if (signInEmailInput.value ==allUsers[i].email && signInPassInput.value ==allUsers[i].password ) {
            console.log(allUsers[i].name);
            var name = allUsers[i].name;
            localStorage.setItem("username",JSON.stringify(name))
            return true;
        }
    }
    return false;    
}

function checkSignIn() {
    if (signInEmailInput.value =="" || signInPassInput.value=="" ) {
        return true;
      }
      return false;
}

if (document.querySelector(".signin") !=null) {
    document.querySelector(".signin").addEventListener("click",function(){
        if (checkSignIn()) {
         document.querySelector(".signinwarnning").innerHTML=`<span class="text-danger">Please,check your data</span>`
        }
        else{
         if (signIn()) {
            //document.querySelector(".link").setAttribute("href","file:///D:/session10/signin/logout.html")
            location.replace("file:///D:/session10/signin/logout.html")
            //  console.log("done")
           }
         else{
             document.querySelector(".signinwarnning").innerHTML=`<span class="text-danger">Your Email or Password incorrect</span>`
         }
        }
     })
}

if (document.querySelector(".item")!=null) {
    document.querySelector(".item").innerHTML=`<h1 class="text-info"> Welcome ${JSON.parse(localStorage.getItem("username"))}</h1>`
}


