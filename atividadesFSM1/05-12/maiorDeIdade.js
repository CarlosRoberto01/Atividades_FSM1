//Verifica Se é maior de idade ou não 
function verificaMaiorDeIdade(idade){
    return idade >=18 ? "É maior de idade" : "É menor de idade";
}

//Solicita idade para Usuário
const inputIdade = prompt("Digite sua idade: ");

const idade = parseInt(inputIdade);

//Exibe mensagem para usuario
const mensagem = verificaMaiorDeIdade(idade);
    alert(mensagem);
    console.log(mensagem);
