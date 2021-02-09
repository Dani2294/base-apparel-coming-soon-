// CACHING THE DOM
const errorIcon = document.querySelector(".error-icon");
const errorMsg = document.getElementById("error-msg");
const submitBtn = document.querySelector(".btn");
const emailInput = document.getElementById("email-input");

// EVENT LISTENER
submitBtn.addEventListener("click", checkEmail);
emailInput.addEventListener("invalid", function(event){
    event.preventDefault();
});

// ERROR EMAIL FUNCTION
function checkEmail() {
    let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    

    if (reg.test(emailInput.value) === false) {
        emailInput.style.border = "1px solid #F96464";
        errorIcon.style.display = "inline-block";
        errorMsg.style.display = "block";
    } else {
        alert("valid adress!");
    }
    

    emailInput.addEventListener("click", function () {
        emailInput.style.border = "1px solid hsl(0, 36%, 70%)";
        errorIcon.style.display = "none";
        errorMsg.style.display = "none";
    })
};




