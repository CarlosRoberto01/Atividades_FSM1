console.log("Começando");

//Gerando numero aleatório
const menorValor = 1;
const maiorValor = 100;

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor);
};

const elementoNumeroAleatorio = document.getElementById('numero-aleatorio');
elementoNumeroAleatorio.innerHTML = gerarNumeroAleatorio();

//cronometro

const elementoCronometroMinutos = document.getElementById("cronometro-minuto");
const elementoCronometroSegundos = document.getElementById("cronometro-segundo");



