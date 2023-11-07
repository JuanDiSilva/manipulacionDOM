const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#resultado');

//Para escuchar el evento y capturar el click
btn.addEventListener('click', escucharBtnClick);


function escucharBtnClick()
{
  const sumaInputs = parseInt(input1.value) + parseInt(input2.value); 
  resultado.innerText  = "Resulatado: " + sumaInputs;
}