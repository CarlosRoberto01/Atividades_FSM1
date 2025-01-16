function montarPizza() {
    // Obtém o nome da pizza
    const nomePizza = document.getElementById('nomePizza').value.trim();
    if (!nomePizza) {
        alert('Por favor, insira o nome da pizza.');
        return;
    }

    // Obtém o tamanho selecionado
    const tamanho = document.getElementById('tamanho').value;

    // Obtém os ingredientes selecionados
    const ingredientesSelecionados = Array.from(document.querySelectorAll('.sabor:checked'))
        .map(ingrediente => ingrediente.value);

    // Valida se há ao menos um ingrediente selecionado
    if (ingredientesSelecionados.length === 0) {
        alert('Por favor, selecione ao menos um ingrediente.');
        return;
    }

    // Atualiza os elementos na página
    document.getElementById('nomeExibido').innerText = `🍕 ${nomePizza}`;
    document.getElementById('nomeExibido').style.display = 'block';

    document.getElementById('tamanhoExibido').innerText = `Tamanho: ${tamanho}`;
    document.getElementById('tamanhoExibido').style.display = 'block';

    document.getElementById('pizzaPronta').innerHTML = `Ingredientes: ${ingredientesSelecionados.join(' ')}`;
}
