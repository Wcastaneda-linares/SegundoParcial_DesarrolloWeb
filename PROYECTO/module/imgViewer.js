//imgViewer.js

document.addEventListener("DOMContentLoaded", function () {
    
    // Obtener una referencia a los elementos del DOM que se encuentran en el archivo HTML
    const imageViewer = document.getElementById("image-viewer");
    const inputImageUrl = document.getElementById("image-url");
    const mostrarImagenButton = document.getElementById("mostrar-imagen-button");
    const limpiarImagenButton = document.getElementById("limpiar-imagen-button");

    // Función para mostrar una imagen
    function showImage(imageUrl) {
        if (imageViewer) {
            const imageElement = document.createElement("img");

            imageElement.src = imageUrl;
            imageElement.alt = "Imagen";

            // Eliminar cualquier contenido anterior en el visor
            imageViewer.innerHTML = "";

            // Agregar la imagen al visor
            imageViewer.appendChild(imageElement);
        } else {
            console.error("El elemento 'image-viewer' no se encuentra en el DOM.");
        }
    }

    // Funcion que se ejecuta cuando presionamos el boton "Mostrar Imagen"
    if (mostrarImagenButton) {
        mostrarImagenButton.addEventListener("click", function () {
            const imageUrl = inputImageUrl.value;
            showImage(imageUrl);
        });
    }

    // Funcion que se ejecuta cuando presionamos el boton "Limpiar Imagen"
    if (limpiarImagenButton) {
        limpiarImagenButton.addEventListener("click", function () {
            if (imageViewer) {
                // Eliminar cualquier contenido dentro del visor
                imageViewer.innerHTML = "";
            }

            if (inputImageUrl) {
                // Eliminar el valor del campo de texto
                inputImageUrl.value = "";
            }
        });
    }
});
