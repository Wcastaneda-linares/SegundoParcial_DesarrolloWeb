// taskList.js

// Función para agregar una nueva tarea
export function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <input type="checkbox">
            <span>${taskText}</span>
        `;
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}

// Agregar evento al botón para agregar tarea cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    if (addTaskButton) {
        addTaskButton.addEventListener("click", addTask);
    }
});



  
  
