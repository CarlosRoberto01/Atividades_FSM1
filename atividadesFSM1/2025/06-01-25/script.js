let anoNascimento = document.querySelector("#anoNascimento");
let resultadoIdade = document.getElementById("resultado");       

function calcularIdade() {
  let anoAtual = new Date().getFullYear();
  let idade = anoAtual - anoNascimento.value;
  resultadoIdade.innerHTML = (`Você tem ${idade} anos.`);
  resultadoIdade.style.backgroundColor = "yellow";
};

 
