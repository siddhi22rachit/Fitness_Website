let signupb = document.getElementById("signupb");
        let loginb = document.getElementById("loginb");
        let namef = document.getElementById("namef");
        let callf = document.getElementById("callf");
        let title =document.getElementById("title");

        loginb.onclick=function(){
            namef.style.maxHeight="0";
            callf.style.maxHeight="0";
            title.innerHTML="Login";
            signupb.classList.add("disable");
            loginb.classList.remove("disable");
        }
        
        signupb.onclick=function(){
            namef.style.maxHeight="60px";
            callf.style.maxHeight="60px";
            title.innerHTML="Sign Up";
            signupb.classList.remove("disable");
            loginb.classList.add("disable");
        }
       
        document.addEventListener("DOMContentLoaded", function () {
          const contactNumberInput = document.getElementById("contactNumber");
          const errorMessage = document.getElementById("error-message");

           contactNumberInput.addEventListener("input", function () {
              const inputValue = this.value.trim();
              const minLength = 10;

              if (inputValue.length < minLength) {
                errorMessage.textContent = `Minimum ${minLength} characters required`;
              } else {
                errorMessage.textContent = "";
              }
            });
          });
          function signUp() {
            const nameInput = document.getElementById("nameInput").value;
            
            // Redirect to the success page with the username parameter
            window.location.href = `success.html?username=${encodeURIComponent(nameInput)}`;
          }
          function signUp() {
            const nameInput = document.getElementById("nameInput").value;
            const emailInput = document.getElementById("emailInput").value;
            const contactNumberInput = document.getElementById("contactNumber").value;
            const passwordInput = document.getElementById("passwordInput").value;
            
            // Redirect to the profile page with the user information in the URL parameters
            window.location.href = `myprofile.html?username=${encodeURIComponent(nameInput)}&email=${encodeURIComponent(emailInput)}&contactNumber=${encodeURIComponent(contactNumberInput)}&password=${encodeURIComponent(passwordInput)}`;
          }
          
