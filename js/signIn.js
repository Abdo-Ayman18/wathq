// sections
const loginSection = document.getElementById("login");
const registerSection = document.getElementById("register");

// buttons
const goRegister = document.getElementById("go-register");
const btnRegister = document.getElementById("btn-register");

const goLogin = document.getElementById("go-login");
const btnLogin = document.getElementById("btn-login");


// open register
function showRegister() {
    loginSection.classList.add("d-none");
    registerSection.classList.remove("d-none");
}

// open login
function showLogin() {
    registerSection.classList.add("d-none");
    loginSection.classList.remove("d-none");
}


// events
goRegister?.addEventListener("click", (e) => {
    e.preventDefault();
    showRegister();
});

btnRegister?.addEventListener("click", showRegister);

goLogin?.addEventListener("click", (e) => {
    e.preventDefault();
    showLogin();
});

btnLogin?.addEventListener("click", showLogin);



// show / hide password
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.querySelector(".password-box input");

togglePassword?.addEventListener("click", () => {

    const type = passwordInput.type === "password" ? "text" : "password";

    passwordInput.type = type;

    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash");

});

// ===== show password in register =====

const toggleRegisterPassword = document.getElementById("toggleRegisterPassword");
const registerPassword = document.getElementById("registerPassword");

toggleRegisterPassword?.addEventListener("click", () => {

    const type = registerPassword.type === "password" ? "text" : "password";
    registerPassword.type = type;

    toggleRegisterPassword.classList.toggle("fa-eye");
    toggleRegisterPassword.classList.toggle("fa-eye-slash");

});



// ===== confirm password =====

const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
const confirmPassword = document.getElementById("confirmPassword");

toggleConfirmPassword?.addEventListener("click", () => {

    const type = confirmPassword.type === "password" ? "text" : "password";
    confirmPassword.type = type;

    toggleConfirmPassword.classList.toggle("fa-eye");
    toggleConfirmPassword.classList.toggle("fa-eye-slash");

});