const h1 = document.querySelector('h1');
const forma = document.querySelector('#formulario');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#resultado');

//Para escuchar el evento y capturar el click
forma.addEventListener('submit', sumarImputs);


function sumarImputs(event)
{
  console.log({event});
  //Por la etiqueta formulario hay que colocar un preventDefault, para que no se reinicie de inmediato
  event.preventDefault();
  const sumaInputs = parseInt(input1.value) + parseInt(input2.value); 
  resultado.innerText  = "Resulatado: " + sumaInputs;
}