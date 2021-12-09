// Document is ready

$(document).ready(function () { 

    
// Validate Username

    $('#usercheck').hide();    

    let usernameError = true;

    $('#usernames').keyup(function () {

        validateUsername();

    });
usernameValue
     

    function validateUsername() {

      let usernameValue = $('#usernames').val();

      if (usernameValue.length == '') {

      $('#usercheck').show();

          usernameError = false;

          return false;

      } 

      else if((usernameValue.length < 3) || 

              (usernameValue.length > 10)) {

          $('#usercheck').show();

          $('#usercheck').html

("**length of username must be between 3 and 10");

          usernameError = false;

          return false;

      } 

      else {

          $('#usercheck').hide();

      }

    }
 

   // Validate Email

    const email = 

        document.getElementById('email');

    email.addEventListener('blur', ()=>{

       let regex =
/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

       let emailValue = email.value;

       if(regex.test(emailValue)){

          email.classList.remove('is-invalid');

          emailError = true;

        }

        else{

            email.classList.add('is-invalid');

            emailError = false;

        }

    })

     

   // Validate Password

    $('#passcheck').hide();

    let passwordError = true;

    $('#password').keyup(function () {

        validatePassword();

    });

    function validatePassword() {

        let passwrdValue = 

            $('#password').val();

        if (passwrdValue.length == '') {

            $('#passcheck').show();

            passwordError = false;

            return false;

        } 

        if ((passwrdValue.length < 3)|| 
passcheck
            (passwrdValue.length > 10)) {

            $('#passcheck').show();

            $('#passcheck').html

("**length of your password must be between 3 and 10");

            $('#').css("color", "red");

            passwordError = false;

            return false;

        } else {

            $('#passcheck').hide();

        }

    }

         
// Validate Confirm Password

    $('#conpasscheck').hide();

    let confirmPasswordError = true;

    $('#conpassword').keyup(function () {

        validateConfirmPasswrd();

    });

    function validateConfirmPasswrd() {

        let confirmPasswordValue = 

            $('#conpassword').val();

        let passwrdValue = 

            $('#password').val();

        if (passwrdValue != confirmPasswordValue) {

            $('#conpasscheck').show();

            $('#conpasscheck').html(

                "**Password didn't Match");

            $('#conpasscheck').css(

                "color", "red");

            confirmPasswordError = false;

            return false;

        } else {

            $('#conpasscheck').hide();

        }

    }

     
// Submit button

    $('#submitbtn').click(function () {

        validateUsername();

        validatePassword();

        validateConfirmPasswrd();

        validateEmail();

        if ((usernameError == true) && 

            (passwordError == true) && 

            (confirmPasswordError == true) && 

            (emailError == true)) {

            return true;

        } else {

            return false;

        }

    });
});


function hello(){
var me = 6;
if( me == 6)
}