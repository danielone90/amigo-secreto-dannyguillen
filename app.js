document.addEventListener("DOMContentLoaded", () => {
    const inputNombre = document.getElementById("nombre");
    const btnAgregar = document.getElementById("agregar");
    const btnSortear = document.getElementById("sortear");
    const listaNombres = document.getElementById("listaNombres");
    const resultado = document.getElementById("resultado");

    let participantes = [];

    // Agregar participante
    btnAgregar.addEventListener("click", () => {
        let nombre = inputNombre.value.trim();

        if (nombre === "") {
            alert("⚠️ Por favor, ingresa un nombre.");
            return;
        }
        if (participantes.includes(nombre)) {
            alert("⚠️ Este nombre ya ha sido agregado.");
            return;
        }

        participantes.push(nombre);
        actualizarLista();
        inputNombre.value = "";
        inputNombre.focus();
    });

    // Actualizar la lista de nombres en pantalla
    function actualizarLista() {
        listaNombres.innerHTML = "";
        participantes.forEach((nombre, index) => {
            let li = document.createElement("li");
            li.textContent = `➤ ${nombre}`;
            
            // Botón para eliminar nombre
            let btnEliminar = document.createElement("button");
            btnEliminar.textContent = "❌";
            btnEliminar.classList.add("eliminar-btn");
            btnEliminar.onclick = () => eliminarParticipante(index);
            
            li.appendChild(btnEliminar);
            listaNombres.appendChild(li);
        });
    }

    // Eliminar participante
    function eliminarParticipante(index) {
        participantes.splice(index, 1);
        actualizarLista();
    }

    // Sorteo de un solo amigo secreto
    btnSortear.addEventListener("click", () => {
        if (participantes.length < 2) {
            alert("⚠️ Debes agregar al menos dos participantes.");
            return;
        }

        let ganador = participantes[Math.floor(Math.random() * participantes.length)];
        mostrarGanador(ganador);
    });

    // Mostrar el ganador en pantalla con animación
    function mostrarGanador(ganador) {
        resultado.innerHTML = "";
        let li = document.createElement("li");
        li.textContent = `🏆 ${ganador} 🏆`;
        li.classList.add("ganador-neon");
        resultado.appendChild(li);
    }
});
