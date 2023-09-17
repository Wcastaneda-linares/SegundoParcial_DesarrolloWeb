// Define las funciones suma, resta, multiplicacion y division
export function suma(a, b) {
  return a + b;
}

export function resta(a, b) {
  return a - b;
}

export function multiplicacion(a, b) {
  return a * b;
}

export function division(a, b) {
  if (b !== 0) {
      return a / b;
  } else {
      return "No se puede dividir por cero";
  }
}

// Función para inicializar la calculadora
function initializeCalculator() {
  // Obtén una referencia a los elementos del formulario
  const inputNum1 = document.getElementById("num1");
  const inputNum2 = document.getElementById("num2");
  const selectOperation = document.getElementById("operation");
  const buttonCalcular = document.getElementById("calcular-button");
  const buttonLimpiar = document.getElementById("limpiar-button");
  const resultadoElement = document.getElementById("resultado");

  // Agrega un evento al botón "Calcular" si los elementos existen
  if (buttonCalcular) {
      buttonCalcular.addEventListener("click", () => {
          const num1 = parseFloat(inputNum1.value);
          const num2 = parseFloat(inputNum2.value);
          const operation = selectOperation.value;

          let resultado;

          switch (operation) {
              case "sumar":
                  resultado = suma(num1, num2);
                  break;
              case "restar":
                  resultado = resta(num1, num2);
                  break;
              case "multiplicar":
                  resultado = multiplicacion(num1, num2);
                  break;
              case "dividir":
                  resultado = division(num1, num2);
                  break;
              default:
                  resultado = "Operación no válida";
          }

          resultadoElement.textContent = resultado;
      });
  }
}

// Ejecuta la función cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
  initializeCalculator();
});
