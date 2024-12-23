console.log("Começando");

//Gerando numero aleatório
const menorValor = 1;
const maiorValor = 100;

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor);
};

const elementoNumeroAleatorio = document.getElementById('numero-aleatorio');
elementoNumeroAleatorio .innerHTML = gerarNumeroAleatorio();


