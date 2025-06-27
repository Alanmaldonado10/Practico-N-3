const palabras = ["Lionel", "Emiliano", "Rodrigo", "Julian", "Enzo", "Alexis"];

  
 window.onload = () => mostrarPalabras(palabras);

function mostrarPalabras(lista) {
const contenedor = document.getElementById("listaPalabras");
    contenedor.innerHTML = "";
     lista.forEach(palabra => {
    const li = document.createElement("li");
    li.textContent = palabra;
     contenedor.appendChild(li);
    });
}

function filtrarPalabras() {
    const texto = document.getElementById("Filtro").value.trim().toLowerCase();
     const mensaje = document.getElementById("mensaje");

    if (texto === "") {
        alert("Por favor ingrese una palabra para filtrar");
        mostrarPalabras(palabras);
        return;
    }

    const resultado = palabras.filter(p => p.toLowerCase().includes(texto));

    if (resultado.length === 0) {
    mensaje.textContent = "No se encontraron coincidencias.";
    } else {
    mensaje.textContent = "";
    }

    mostrarPalabras(resultado);
    }    