const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    parrafo,
    pid,
    input,
});

h1.innerHTML = "JULIO <br> julio";
//h1.innerText ="HOLA MUNDO";

//Clases
//console.log(h1.getAttribute('class','rojo'));
h1.classList.add('rojo');
h1.classList.remove('juliopc');
//h1.classList.toggle('juliopc');

input.value = "456";

//Crea una etiqueta en html y se inserta una imagen
const img = document.createElement('img');
img.setAttribute('src', 'https://www.gran-turismo.com/gtsport/decal/5980859549996811784_1.png');
pid.innerHTML = "";
pid.appendChild(img);