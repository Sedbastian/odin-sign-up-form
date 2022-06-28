function chequearPassword() {
    if (password.value === confirmPassword.value) {
        password.classList.remove("error");
        confirmPassword.classList.remove("error");
        password.classList.add("correcta");
        confirmPassword.classList.add("correcta");
        contrasenia.classList.remove("contrasenia");
    } else {
        password.classList.remove("correcta");
        confirmPassword.classList.remove("correcta");
        password.classList.add("error");
        confirmPassword.classList.add("error");
        contrasenia.classList.add("contrasenia");
    };

    return;
};

const password = document.querySelector("#password");
password.addEventListener("change", chequearPassword);

const confirmPassword = document.querySelector("#confirmPassword");
confirmPassword.addEventListener("change", chequearPassword);

const contrasenia = document.querySelector(".contrasenia");