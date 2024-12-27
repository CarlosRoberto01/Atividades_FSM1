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

let minutos = 0;
let segundos = 0;
let intervalo;

function formatarNumero(numero) {
    return numero.toString().padStart(2, "0");
}
//Função atualizar o cronometro
function atualizarCronometro(){
    segundos ++;

    if (segundos == 60){
        segundos = 0;
        minutos ++;
    }
    elementoCronometroMinutos.textContent = `${formatarNumero(minutos)} :`;
    elementoCronometroSegundos.textContent = formatarNumero(segundos);
};
//Função botao iniciar
function iniciarCronometro(){
    if (!intervalo) {
        intervalo = setInterval(atualizarCronometro, 1000);
    }
};
//Função botao pausar
function pausarCronometro(){
    clearInterval(intervalo);
    intervalo = null;
};
//Função botao resetar
function resetarCronometro(){
    clearInterval(intervalo);
    intervalo = null;
    minutos = 0;
    segundos = 0;
    elementoCronometroMinutos.textContent = "00 :";
    elementoCronometroSegundos.textContent = "00";
};




