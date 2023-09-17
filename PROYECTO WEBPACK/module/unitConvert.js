// unitConvert.js

// Función para convertir Celsius a Fahrenheit
export function convertCelsiusToFahrenheit() {
    const celsiusInput = document.getElementById("celsius");
    const resultDisplay = document.getElementById("result");

    const celsius = parseFloat(celsiusInput.value);

    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        resultDisplay.innerHTML = `${celsius} Celsius es igual a ${fahrenheit.toFixed(2)} Fahrenheit.`;
    } else {
        resultDisplay.innerHTML = "Por favor, ingresa una temperatura válida en Celsius.";
    }
}

// Función para convertir Fahrenheit a Celsius
export function convertFahrenheitToCelsius() {
    const fahrenheitInput = document.getElementById("fahrenheit");
    const resultDisplay = document.getElementById("result");

    const fahrenheit = parseFloat(fahrenheitInput.value);

    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5/9;
        resultDisplay.innerHTML = `${fahrenheit} Fahrenheit es igual a ${celsius.toFixed(2)} Celsius.`;
    } else {
        resultDisplay.innerHTML = "Por favor, ingresa una temperatura válida en Fahrenheit.";
    }
}

// Agregar eventos a los botones para realizar las conversiones
document.addEventListener("DOMContentLoaded", function () {
    const convertCelsiusToFahrenheitButton = document.getElementById("convertCelsiusToFahrenheitButton");
    const convertFahrenheitToCelsiusButton = document.getElementById("convertFahrenheitToCelsiusButton");

    if (convertCelsiusToFahrenheitButton) {
        convertCelsiusToFahrenheitButton.addEventListener("click", convertCelsiusToFahrenheit);
    }

    if (convertFahrenheitToCelsiusButton) {
        convertFahrenheitToCelsiusButton.addEventListener("click", convertFahrenheitToCelsius);
    }
});
