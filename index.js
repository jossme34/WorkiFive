// Lista de trabajos en localStorage
const trabajos = JSON.parse(localStorage.getItem('trabajos') || '[]');

// Función para mostrar los trabajos en el feed principal
function mostrarTrabajos(lista) {
    const contenedor = document.getElementById("jobList");
    contenedor.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevos trabajos

    // Iterar sobre todos los trabajos y mostrarlos
    lista.forEach(trabajo => {
        const card = document.createElement("div");
        card.className = "job-card";
        card.style.cursor = "pointer";
        card.onclick = () => {
            window.location.href = `perfil.html?nombre=${encodeURIComponent(trabajo.nombre)}`;
        };
        card.innerHTML = `
            <img src="${trabajo.foto}" alt="${trabajo.nombre}">
            <h3>${trabajo.nombre}</h3>
            <p><strong>${trabajo.oficio}</strong></p>
            <p>${trabajo.descripcion}</p>
        `;
        contenedor.appendChild(card);
    });
}

<span class="saludo">Hola, <strong>${usuario.nombre}</strong></span>


// Función para buscar trabajos
function buscar() {
    const filtro = document.getElementById("searchInput").value.toLowerCase();
    const filtrados = trabajos.filter(t => 
        t.nombre.toLowerCase().includes(filtro) ||
        t.oficio.toLowerCase().includes(filtro) ||
        t.descripcion.toLowerCase().includes(filtro)
    );
    mostrarTrabajos(filtrados);
}

// Mostrar los trabajos en la página
mostrarTrabajos(trabajos);
