
const loginForm = document.getElementById("login-form");

if(loginForm){

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();
     
const username = document.getElementsByName("username")[0].value; 
const password = document.getElementsByName("password")[0].value;

if(username!="" && password!=""){



    alert("Login Successfully");

    localStorage.setItem("IsLoggedIn", "true");

    window.location.href = "getStarted.html";

}
else{

    alert("Please fill all the fields");
}
});
}

document.addEventListener("DOMContentLoaded", function () {

const getStartedBtn = document.getElementById("getStartedBtn");

if (getStartedBtn) {

    getStartedBtn.addEventListener("click", function(event) {
        
        event.preventDefault(); 

        const isLoggedIn = localStorage.getItem("IsLoggedIn");

        if (isLoggedIn === "true") {
            window.location.href = "getStarted.html";
        } else {
    
    const popup = document.querySelector(".popup");

    if (popup) {
        popup.style.display = "flex";
    }

        }
});
}
});

const loginBtn = document.getElementById("loginBtn");
const popup = document.querySelector(".popup");

if (loginBtn && popup) {
    loginBtn.addEventListener("click", function(event) {
        event.preventDefault();
        popup.style.display = "flex";
    });
}

console.log("app.js loaded successfully");
const resumeInput = document.getElementById("Resume")
const uploadsection = document.getElementById("upload-section")
const preferencesection = document.getElementById("preference-section")

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
let resumeProfile = null;
if(resumeInput){
resumeInput.addEventListener("change", function(event){

        if(resumeInput.files[0].type === "application/pdf"){
        console.log("File selected:", resumeInput.files[0].name);
        step1.classList.remove("step-active");
        step1.classList.add("step-completed");
        step2.classList.remove("step-locked");
        step2.classList.add("step-active");

        uploadsection.hidden = true;
        preferencesection.hidden = false;
      
    }


        else{
           preferencesection.hidden = true;
            console.log("Invalid file type selected:", resumeInput.files[0].type);
            alert("Please upload a valid PDF file.");
            resumeInput.value = "";
        }
});

}
const backButton = document.getElementById("back");
if(backButton){
    backButton.addEventListener("click", function(event){
        uploadsection.hidden = false;
        preferencesection.hidden = true;

        step1.classList.add("step=active");
        step1.classList.remove("step-completed");
        step2.classList.add("step-locked");
        step2.classList.remove("step-acive");
    })
}


