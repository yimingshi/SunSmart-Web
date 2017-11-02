var email = document.getElementById('inputemail');
var password=document.getElementById('inputpassword');



$(document).ready(function() {
  $("#loginb").click(function(){
      $('#loginModal').modal('show');
  });
  $("#signinb").click(function(){
      if (email.value==="yimingshi"){
        console.log("right email");
      }
      else {
        console.log("wrong");
      }
  });
  $("#signupb").click(function(){
      $('#signupModal').modal('show');
  });
});
