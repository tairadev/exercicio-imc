function calcular(){
  let status;
  const formulario = document.getElementById("formulario");	
      
  const weight    = +formulario.weight.value;
  const height 		= +formulario.height.value;
    
  // imc
  const imc = weight / (height * height);
  
  // o metodo toFixed fixa apenas duas casas decimais apos o ponto.
  formulario.imc.value = imc.toFixed(2);

  if(imc > 30) status = 'Obesidade';
  else if (imc > 24.9) status = 'Sobrepeso';
  else if (imc > 18.5) status = 'Normal';
  else status = 'Magreza';

  document.querySelector('h2').innerHTML = `Resultado: ${status}`;
}