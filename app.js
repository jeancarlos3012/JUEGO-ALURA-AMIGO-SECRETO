// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//la function agregarAmigo se encarga de agregar un amigo a la lista de amigos.
let amigo = [];

// Función validador para verificar si el nombre es válido
function validador(nombre) {
  const regex = /^[a-zA-Z\s]+$/; // Expresión regular que permite solo letras y espacios
  if (regex.test(nombre)) {
    return true; // El nombre es válido
  } else {
    alert('Por favor, ingresa un nombre de amigo válido.');
    return false; // El nombre no es válido
  }
}

function agregarAmigo() {
  const inputAmigo = document.getElementById('amigo');
  const nombreAmigo = inputAmigo.value.trim();

  // Verifica si el nombre es vacío
  if (nombreAmigo === '') {
    alert('Por favor, ingresa un nombre de amigo.');
    return;
  }

  // Llama a la función validador para verificar el formato del nombre
  if (!validador(nombreAmigo)) {
    inputAmigo.value = ''; // Limpia el input
    inputAmigo.focus(); // Pone el foco de nuevo en el input
    return;
  }

  // Verifica si el amigo ya existe en la lista
  if (amigo.includes(nombreAmigo)) {
    alert('El amigo ya existe en la lista.');
    return;
  }

  amigo.push(nombreAmigo);
  inputAmigo.value = "";
  mostrarAmigos();
}

function mostrarAmigos() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';
  amigo.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigo.length === 0) {
    alert('No hay amigos en la lista.');
    return;
  }
  const amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
  alert(`El amigo sorteado es: ${amigoSorteado}`);
  return amigoSorteado;
}

function borrarAmigo() {
  const inputAmigo = document.getElementById('amigo');
  const nombreAmigo = inputAmigo.value.trim();

  // Llama a la función validador para verificar el formato del nombre
  if (!validador(nombreAmigo)) {
    inputAmigo.value = ''; // Limpia el input
    inputAmigo.focus(); // Pone el foco de nuevo en el input
    return;
  }

  const index = amigo.indexOf(nombreAmigo);
  if (index === -1) {
    alert('El amigo no existe en la lista.');
    return;
  }
  amigo.splice(index, 1);
  inputAmigo.value = '';
  mostrarAmigos();
}