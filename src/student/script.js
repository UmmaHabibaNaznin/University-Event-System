document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let msg = document.getElementById("msg");

    if(email === "student@gmail.com" && password === "1234"){
        msg.style.color = "green";
        msg.innerText = "Login Successful!";
        window.location.href = "dashboard.html";

    } else {
        msg.style.color = "red";
        msg.innerText = "Invalid Email or Password!";
    }
});
// REGISTER FORM
let registerForm = document.getElementById("registerForm");

if(registerForm){
    registerForm.addEventListener("submit", function(e) {
        e.preventDefault();

        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
        let msg = document.getElementById("msg");

        if(password !== confirmPassword){
            msg.style.color = "red";
            msg.innerText = "Password does not match!";
            return;
        }

        msg.style.color = "lightgreen";
        msg.innerText = "Registration Successful!";
    });
}