
const botonModoNoche = document.querySelector('.modo-noche');


botonModoNoche.addEventListener('click', () => {
    document.body.classList.toggle('noche');
});

function copiarLink(link) {

  const input = document.createElement('input');
  input.value = link;  
  document.body.appendChild(input);
  input.select(); 
  document.execCommand('copy'); 
  document.body.removeChild(input);  

  alert('Enlace copiado: ' + link);
}

// Función para cambiar idioma
function toggleIdioma() {
  idiomaActual = idiomaActual === 'es' ? 'en' : 'es';
  
  actualizarTexto();

  const botonIdioma = document.getElementById('cambiar-idioma');
  const iconoIdioma = botonIdioma.querySelector('i');
  
  if (idiomaActual === 'es') {
    iconoIdioma.classList.remove('fa-globe-americas');
    iconoIdioma.classList.add('fa-globe');
  } else {
    iconoIdioma.classList.remove('fa-globe');
    iconoIdioma.classList.add('fa-globe-americas');
  }
}

// Función para actualizar los textos en la página según el idioma
function actualizarTexto() {
  document.querySelector('.nombre').textContent = textos[idiomaActual].nombre;
  document.querySelector('.descripcion').textContent = textos[idiomaActual].descripcion;
  document.querySelector('#sobre-mi h2').textContent = textos[idiomaActual].sobreMiTitulo;
  document.querySelector('#sobre-mi p').textContent = textos[idiomaActual].sobreMiTexto;
  document.querySelector('#proyectos h2').textContent = textos[idiomaActual].proyectosTitulo;
  document.querySelector('#contacto h2').textContent = textos[idiomaActual].contactoTitulo;
  document.querySelector('#contacto p').textContent = textos[idiomaActual].contactoTexto;
  document.querySelector('.formulario-contacto h3').textContent = textos[idiomaActual].mensaje;
  document.querySelector('.formulario-contacto form button').textContent = textos[idiomaActual].btnEnviar;
}


document.addEventListener('DOMContentLoaded', actualizarTexto);

// Función para mostrar los detalles del proyecto
function mostrarDetalles(proyecto) {
  let titulo = '';
  let descripcion = '';
  let imagen = '';

  // Definir el contenido según el proyecto seleccionado
  if (proyecto === 'proyecto1') {
    titulo = 'Recetario';
    descripcion = 'Este es un proyecto de un sitio web temático de recetario estático utilizando HTML, CSS y JavaScript.';
    imagen = 'pictures/download (1).jpg';  
  } else if (proyecto === 'proyecto2') {
    titulo = 'Proyecto 2';
    descripcion = 'Descripción del Proyecto 2: Aquí puedes poner los detalles más completos sobre el segundo proyecto.';
    imagen = 'pictures/download (2).jpg';  
  } else if (proyecto === 'proyecto3') {
    titulo = 'Proyecto 3';
    descripcion = 'Descripción del Proyecto 3: Este es el tercer proyecto en el que trabajé, que utiliza tecnologías web avanzadas.';
    imagen = 'pictures/download.jpg';  
  }

  // Mostrar el cuadro con los detalles del proyecto
  document.getElementById('detalle-proyecto').style.display = 'flex';
  document.getElementById('titulo-detalle').textContent = titulo;
  document.getElementById('descripcion-detalle').textContent = descripcion;
  document.getElementById('imagen-detalle').src = imagen;
}
function cerrarDetalle() {
  document.getElementById('detalle-proyecto').style.display = 'none';
}
