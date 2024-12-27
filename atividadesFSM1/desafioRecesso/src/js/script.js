//variáveis do jogo
let menorValor = 1;
let maiorValor = 100;
let palpite = 0;
let tentativas = 0;

//DOM jogo
const elementoNumeroPalpite = document.getElementById('numero-aleatorio');
const btnMaior = document.querySelector(".btn-maior");
const btnMenor = document.querySelector(".btn-menor");
const btnCorreto = document.querySelector(".btn-correto");
const btnSim = document.querySelector(".btn-sim");
const btnNao = document.querySelector(".btn-nao");


//Gerando numero aleatório
function gerarNumeroPalpite() {
   palpite = Math.floor((menorValor + maiorValor) / 2 );
   elementoNumeroPalpite.textContent = palpite;
   tentativas++
};
elementoNumeroPalpite.innerHTML = gerarNumeroPalpite();

//Escutador de evento botoes

btnMaior.addEventListener("click" , () => {
    menorValor = palpite + 1;
    gerarNumeroPalpite();
})
btnMenor.addEventListener("click" , () => {
    maiorValor = palpite - 1;
    gerarNumeroPalpite();
})
btnCorreto.addEventListener("click" , () => {
    alert(`Acertei o número ${palpite} em ${tentativas} tentativas!`)
})


//cronometro
let minutos = 0;
let segundos = 0;
let intervalo;

//DOM cronometro
const elementoCronometroMinutos = document.getElementById("cronometro-minuto");
const elementoCronometroSegundos = document.getElementById("cronometro-segundo");

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

