const endpoint = "https://jsonplaceholder.typicode.com/todos";
const listaTareas = document.getElementById("todos-list");
const mensajeError = document.getElementById("error-message");
const cargando = document.getElementById("loading");
const boton = document.getElementById("fetch-todos-btn");
 
boton.addEventListener("click", async () => {
    listaTareas.innerHTML = "";
    mensajeError.textContent = "";
    cargando.style.display = "block";

    try {
        const response = await fetch(endpoint);
        cargando.style.display = "none";

        if (!response.ok) {
          mensajeError.textContent = `Hubo un problema: ${response.status} - ${response.statusText}`;
          return;
        }

        const data = await response.json();

        
        const completadas = data.filter(t => t.completed === true);

        
        completadas.forEach(tarea => {
          const div = document.createElement("div");
          div.classList.add("todo-item", "completed");
          div.innerHTML = `
            <p><strong>ID:</strong> ${tarea.id}</p>
            <p><strong>Título:</strong> ${tarea.title}</p>
            <p><strong>Completado:</strong> Sí</p>
          `;
          listaTareas.appendChild(div);
        });

        if (completadas.length === 0) {
          listaTareas.innerHTML = "<p>No se encontraron tareas completadas.</p>";
        }

      } catch (error) {
        cargando.style.display = "none";
        mensajeError.textContent = "Error al conectar con la API.";
        console.error(error);
      }
    });