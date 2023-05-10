//Função responsável por gerar uma senha aleatória.
function randomPassword() {
  //Obter o elemento de exibição da senha.
  let displayPassword = document.querySelector("#display-password");
  //Obter o elemento de entrada de senha.
  let passwordLength = document.querySelector("#password-length").value;
  //Obter o elemento de exibição de error.
  let error = document.querySelector("#error-info");
  //Inicializar a variável que irá armazenar a senha.
  let password = "";
  //Definir os caracteres possíveis para a senha
  let characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  //Converte o tamanho da senha para um número inteiro.
  passwordLength = parseInt(passwordLength);
  //Verifica se o tamanho da senha é igual a zero.
  if (passwordLength == 0) {
    //Exibe mensage, de erro.
    error.innerHTML = "Selecione o tamanho da senha!";
    error.style.padding = "10px 15px";
    //Ocultar a mensagem de erro após 2 segundose recarregar a página.
    setTimeout(() => {
      error.style.visibility = "hidden";
      window.location.reload();
    }, 2000);
  }
  // Exibir a senha gerada no elemento de exibição.
  for (let i = 0; i < passwordLength; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  displayPassword.value = password;
}
