import "./Form.css";


function Form() {
    return (
        <>
            <h2>Formulário de Contato</h2><form className="formulario_cliente" action="#" method="post">
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required />

                <label htmlFor="idade">Idade:</label>
                <input type="number" id="idade" name="idade" placeholder="Digite sua idade" required />

                <label htmlFor="sexo">Sexo:</label>
                <select id="sexo" name="sexo" required>
                    <option value="">Selecione</option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    <option value="outro">Outro</option>
                </select>

                <label htmlFor="cidade">Cidade:</label>
                <input type="text" id="cidade" name="cidade" placeholder="Digite sua cidade" required />

                <label htmlFor="data">Data:</label>
                <input type="date" id="data" name="data" required />

                <label htmlFor="mensagem">Mensagem:</label>
                <textarea id="mensagem" name="mensagem" rows="5" placeholder="Digite sua mensagem" required></textarea>

                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}

export default Form