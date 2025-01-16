
document.getElementById('botaoTarefa').addEventListener('click', function () {
    const inputTarefa = document.getElementById('inputTarefa');
    const textoTarefa = inputTarefa.value.trim();

    if (textoTarefa !== '') {
        const li = document.createElement('li');
        li.textContent = textoTarefa;
        li.addEventListener('click', function () {
            li.classList.toggle('completa');
        });

        document.getElementById('listaTarefa').appendChild(li);
        taskInput.value = '';
    }
    reset();
});
