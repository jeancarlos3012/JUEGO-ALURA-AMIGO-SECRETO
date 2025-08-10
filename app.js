// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//la function agregarAmigo se encarga de agregar un amigo a la lista de amigos.
let amigo = [];
function agregarAmigo() {
  const inputAmigo = document.getElementById('amigo');

const nombreAmigo=inputAmigo.value.trim();

if (nombreAmigo=== '') {
  alert('Por favor, ingresa un nombre de amigo válido.');
  return;
}
if (amigo.includes(nombreAmigo)) {
  alert('El amigo ya existe en la lista.');
  return;
}
amigo.push(nombreAmigo);
inputAmigo.value = "";
mostrarAmigos();
}

//la funcion mostrar amigos se encarga de mostrar la lista de amigos en un elemento HTML.
function mostrarAmigos() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';
  amigo.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}
//la function sortear amigo se encarga de seleccionar un amigo al azar de la lista de amigos y mostrarlo en una ventana emergente.
function sortearAmigo() {
  const amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
  alert(`El amigo sorteado es: ${amigoSorteado}`);
  return amigoSorteado;

}

//la funcion   borrar amigo se encarga de eliminar un amigo de la lista de amigos y mostrar la lista actualizada.

function borrarAmigo() {
  const inputAmigo = document.getElementById('amigo');
  const nombreAmigo = inputAmigo.value.trim();
  if (nombreAmigo === '') {
    alert('Por favor, ingresa un nombre de amigo válido.');
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
