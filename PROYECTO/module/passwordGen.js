// passwordGen.js

// Función para generar una contraseña aleatoria basada en preferencias del usuario
export function generatePassword(length, useUppercase, useNumbers, useSymbols) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = useUppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
  const numberChars = useNumbers ? "0123456789" : "";
  const symbolChars = useSymbols ? "!@#$%^&*()_+-=[]{}|;:'\",.<>?/" : "";

  const allChars = lowercaseChars + uppercaseChars + numberChars + symbolChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
}

// Función para generar una contraseña y mostrarla en el resultado
export function generateAndShowPassword() {
  const length = parseInt(document.getElementById("passwordLength").value);
  const useUppercase = document.getElementById("uppercase").checked;
  const useNumbers = document.getElementById("numbers").checked;
  const useSymbols = document.getElementById("symbols").checked;
  const resultElement = document.getElementById("passwordResult");

  const password = generatePassword(length, useUppercase, useNumbers, useSymbols);

  // Muestra la contraseña generada en el elemento "passwordResult"
  resultElement.textContent = "Contraseña generada: " + password;
}

// Agrega un evento de clic al botón cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generateButton");
  if (generateButton) {
    generateButton.addEventListener("click", generateAndShowPassword);
  }
});
