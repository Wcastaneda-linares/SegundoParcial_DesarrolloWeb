/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./aggregator.js":
/*!***********************!*\
  !*** ./aggregator.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_calculos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/calculos.js */ \"./module/calculos.js\");\n/* harmony import */ var _module_unitConvert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/unitConvert.js */ \"./module/unitConvert.js\");\n/* harmony import */ var _module_passwordGen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/passwordGen.js */ \"./module/passwordGen.js\");\n/* harmony import */ var _module_imgViewer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/imgViewer.js */ \"./module/imgViewer.js\");\n/* harmony import */ var _module_imgViewer_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_module_imgViewer_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _module_taskList_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/taskList.js */ \"./module/taskList.js\");\n// Importa modulos\n\n\n\n\n\n\n//# sourceURL=webpack://proyecto/./aggregator.js?");

/***/ }),

/***/ "./module/calculos.js":
/*!****************************!*\
  !*** ./module/calculos.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   division: () => (/* binding */ division),\n/* harmony export */   multiplicacion: () => (/* binding */ multiplicacion),\n/* harmony export */   resta: () => (/* binding */ resta),\n/* harmony export */   suma: () => (/* binding */ suma)\n/* harmony export */ });\n// Define las funciones suma, resta, multiplicacion y division\nfunction suma(a, b) {\n  return a + b;\n}\nfunction resta(a, b) {\n  return a - b;\n}\nfunction multiplicacion(a, b) {\n  return a * b;\n}\nfunction division(a, b) {\n  if (b !== 0) {\n    return a / b;\n  } else {\n    return \"No se puede dividir por cero\";\n  }\n}\n\n// Función para inicializar la calculadora\nfunction initializeCalculator() {\n  // Obtén una referencia a los elementos del formulario\n  var inputNum1 = document.getElementById(\"num1\");\n  var inputNum2 = document.getElementById(\"num2\");\n  var selectOperation = document.getElementById(\"operation\");\n  var buttonCalcular = document.getElementById(\"calcular-button\");\n  var buttonLimpiar = document.getElementById(\"limpiar-button\");\n  var resultadoElement = document.getElementById(\"resultado\");\n\n  // Agrega un evento al botón \"Calcular\" si los elementos existen\n  if (buttonCalcular) {\n    buttonCalcular.addEventListener(\"click\", function () {\n      var num1 = parseFloat(inputNum1.value);\n      var num2 = parseFloat(inputNum2.value);\n      var operation = selectOperation.value;\n      var resultado;\n      switch (operation) {\n        case \"sumar\":\n          resultado = suma(num1, num2);\n          break;\n        case \"restar\":\n          resultado = resta(num1, num2);\n          break;\n        case \"multiplicar\":\n          resultado = multiplicacion(num1, num2);\n          break;\n        case \"dividir\":\n          resultado = division(num1, num2);\n          break;\n        default:\n          resultado = \"Operación no válida\";\n      }\n      resultadoElement.textContent = resultado;\n    });\n  }\n}\n\n// Ejecuta la función cuando el DOM esté listo\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  initializeCalculator();\n});\n\n//# sourceURL=webpack://proyecto/./module/calculos.js?");

/***/ }),

/***/ "./module/imgViewer.js":
/*!*****************************!*\
  !*** ./module/imgViewer.js ***!
  \*****************************/
/***/ (() => {

eval("//imgViewer.js\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  // Obtener una referencia a los elementos del DOM que se encuentran en el archivo HTML\n  var imageViewer = document.getElementById(\"image-viewer\");\n  var inputImageUrl = document.getElementById(\"image-url\");\n  var mostrarImagenButton = document.getElementById(\"mostrar-imagen-button\");\n  var limpiarImagenButton = document.getElementById(\"limpiar-imagen-button\");\n\n  // Función para mostrar una imagen\n  function showImage(imageUrl) {\n    if (imageViewer) {\n      var imageElement = document.createElement(\"img\");\n      imageElement.src = imageUrl;\n      imageElement.alt = \"Imagen\";\n\n      // Eliminar cualquier contenido anterior en el visor\n      imageViewer.innerHTML = \"\";\n\n      // Agregar la imagen al visor\n      imageViewer.appendChild(imageElement);\n    } else {\n      console.error(\"El elemento 'image-viewer' no se encuentra en el DOM.\");\n    }\n  }\n\n  // Funcion que se ejecuta cuando presionamos el boton \"Mostrar Imagen\"\n  if (mostrarImagenButton) {\n    mostrarImagenButton.addEventListener(\"click\", function () {\n      var imageUrl = inputImageUrl.value;\n      showImage(imageUrl);\n    });\n  }\n\n  // Funcion que se ejecuta cuando presionamos el boton \"Limpiar Imagen\"\n  if (limpiarImagenButton) {\n    limpiarImagenButton.addEventListener(\"click\", function () {\n      if (imageViewer) {\n        // Eliminar cualquier contenido dentro del visor\n        imageViewer.innerHTML = \"\";\n      }\n      if (inputImageUrl) {\n        // Eliminar el valor del campo de texto\n        inputImageUrl.value = \"\";\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack://proyecto/./module/imgViewer.js?");

/***/ }),

/***/ "./module/passwordGen.js":
/*!*******************************!*\
  !*** ./module/passwordGen.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateAndShowPassword: () => (/* binding */ generateAndShowPassword),\n/* harmony export */   generatePassword: () => (/* binding */ generatePassword)\n/* harmony export */ });\n// passwordGen.js\n\n// Función para generar una contraseña aleatoria basada en preferencias del usuario\nfunction generatePassword(length, useUppercase, useNumbers, useSymbols) {\n  var lowercaseChars = \"abcdefghijklmnopqrstuvwxyz\";\n  var uppercaseChars = useUppercase ? \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\" : \"\";\n  var numberChars = useNumbers ? \"0123456789\" : \"\";\n  var symbolChars = useSymbols ? \"!@#$%^&*()_+-=[]{}|;:'\\\",.<>?/\" : \"\";\n  var allChars = lowercaseChars + uppercaseChars + numberChars + symbolChars;\n  var password = \"\";\n  for (var i = 0; i < length; i++) {\n    var randomIndex = Math.floor(Math.random() * allChars.length);\n    password += allChars.charAt(randomIndex);\n  }\n  return password;\n}\n\n// Función para generar una contraseña y mostrarla en el resultado\nfunction generateAndShowPassword() {\n  var length = parseInt(document.getElementById(\"passwordLength\").value);\n  var useUppercase = document.getElementById(\"uppercase\").checked;\n  var useNumbers = document.getElementById(\"numbers\").checked;\n  var useSymbols = document.getElementById(\"symbols\").checked;\n  var resultElement = document.getElementById(\"passwordResult\");\n  var password = generatePassword(length, useUppercase, useNumbers, useSymbols);\n\n  // Muestra la contraseña generada en el elemento \"passwordResult\"\n  resultElement.textContent = \"Contraseña generada: \" + password;\n}\n\n// Agrega un evento de clic al botón cuando el DOM esté listo\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var generateButton = document.getElementById(\"generateButton\");\n  if (generateButton) {\n    generateButton.addEventListener(\"click\", generateAndShowPassword);\n  }\n});\n\n//# sourceURL=webpack://proyecto/./module/passwordGen.js?");

/***/ }),

/***/ "./module/taskList.js":
/*!****************************!*\
  !*** ./module/taskList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: () => (/* binding */ addTask)\n/* harmony export */ });\n// taskList.js\n\n// Función para agregar una nueva tarea\nfunction addTask() {\n  var taskText = taskInput.value.trim();\n  if (taskText !== \"\") {\n    var listItem = document.createElement(\"li\");\n    listItem.innerHTML = \"\\n            <input type=\\\"checkbox\\\">\\n            <span>\".concat(taskText, \"</span>\\n        \");\n    taskList.appendChild(listItem);\n    taskInput.value = \"\";\n  }\n}\n\n// Agregar evento al botón para agregar tarea cuando el DOM esté listo\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var taskInput = document.getElementById(\"taskInput\");\n  var addTaskButton = document.getElementById(\"addTaskButton\");\n  var taskList = document.getElementById(\"taskList\");\n  if (addTaskButton) {\n    addTaskButton.addEventListener(\"click\", addTask);\n  }\n});\n\n//# sourceURL=webpack://proyecto/./module/taskList.js?");

/***/ }),

/***/ "./module/unitConvert.js":
/*!*******************************!*\
  !*** ./module/unitConvert.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   convertCelsiusToFahrenheit: () => (/* binding */ convertCelsiusToFahrenheit),\n/* harmony export */   convertFahrenheitToCelsius: () => (/* binding */ convertFahrenheitToCelsius)\n/* harmony export */ });\n// unitConvert.js\n\n// Función para convertir Celsius a Fahrenheit\nfunction convertCelsiusToFahrenheit() {\n  var celsiusInput = document.getElementById(\"celsius\");\n  var resultDisplay = document.getElementById(\"result\");\n  var celsius = parseFloat(celsiusInput.value);\n  if (!isNaN(celsius)) {\n    var fahrenheit = celsius * 9 / 5 + 32;\n    resultDisplay.innerHTML = \"\".concat(celsius, \" Celsius es igual a \").concat(fahrenheit.toFixed(2), \" Fahrenheit.\");\n  } else {\n    resultDisplay.innerHTML = \"Por favor, ingresa una temperatura válida en Celsius.\";\n  }\n}\n\n// Función para convertir Fahrenheit a Celsius\nfunction convertFahrenheitToCelsius() {\n  var fahrenheitInput = document.getElementById(\"fahrenheit\");\n  var resultDisplay = document.getElementById(\"result\");\n  var fahrenheit = parseFloat(fahrenheitInput.value);\n  if (!isNaN(fahrenheit)) {\n    var celsius = (fahrenheit - 32) * 5 / 9;\n    resultDisplay.innerHTML = \"\".concat(fahrenheit, \" Fahrenheit es igual a \").concat(celsius.toFixed(2), \" Celsius.\");\n  } else {\n    resultDisplay.innerHTML = \"Por favor, ingresa una temperatura válida en Fahrenheit.\";\n  }\n}\n\n// Agregar eventos a los botones para realizar las conversiones\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var convertCelsiusToFahrenheitButton = document.getElementById(\"convertCelsiusToFahrenheitButton\");\n  var convertFahrenheitToCelsiusButton = document.getElementById(\"convertFahrenheitToCelsiusButton\");\n  if (convertCelsiusToFahrenheitButton) {\n    convertCelsiusToFahrenheitButton.addEventListener(\"click\", convertCelsiusToFahrenheit);\n  }\n  if (convertFahrenheitToCelsiusButton) {\n    convertFahrenheitToCelsiusButton.addEventListener(\"click\", convertFahrenheitToCelsius);\n  }\n});\n\n//# sourceURL=webpack://proyecto/./module/unitConvert.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./aggregator.js");
/******/ 	
/******/ })()
;