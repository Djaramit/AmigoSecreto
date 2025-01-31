// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // Array para almacenar los nombres de los amigos

    function agregarAmigo() {
        let nombre = document.getElementById('amigo').value; // Obtener el valor del input
        if (nombre) {
            amigos.push(nombre); // Agregar el nombre al array
            alert(`Amigo agregado: ${nombre}`);
            console.log(`Lista de amigos:`, amigos);
            
            // Limpiar el input después de agregar
            document.getElementById('amigo').value = '';
        } else {
            console.log("Por favor, ingresa un nombre válido.");
        }
    }







