
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        
   document.getElementById("user_div").style.display="initial"; 
   document.getElementById("login_div").style.display="none";

      // User is signed in.
    } else {
        document.getElementById("user_div").style.display="none";
        document.getElementById("login_div").style.display="initial";

      // No user is signed in.
    }
  });

function login()
{
var email=document.getElementById("email_field").value;
var pass=document.getElementById("password_field").value;

//firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
    // Handle Errors here.
    //var errorCode = error.code;
    //var errorMessage = error.message;
   // window.alert("Error : " + errorMessage);

    // ...
    
 // });
}