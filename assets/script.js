function randomPassword() {
  let displayPassword = document.querySelector("#display-password");
  let passwordLength = document.querySelector("#password-length").value;
  let error = document.querySelector("#error-info");
  let password = "";
  let characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";

  passwordLength = parseInt(passwordLength);
  if (passwordLength == 0) {
    error.innerHTML = "Selecione o tamanho da senha!";
    error.style.padding = "10px 15px";
    setTimeout(() => {
      error.style.visibility = "hidden";
      window.location.reload();
    }, 2000);
  }

  for (let i = 0; i < passwordLength; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  displayPassword.value = password;
}
