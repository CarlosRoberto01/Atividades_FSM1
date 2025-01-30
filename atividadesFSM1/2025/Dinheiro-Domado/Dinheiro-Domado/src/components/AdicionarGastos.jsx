import './AdicionarGastos.css';


function AdicionarGastos() {
  return (
    <div className="AdicionarGastos">
      <h1>Adicionar Gastos</h1>
      <form>
      
        <label htmlFor='nome' >Descrição</label>
        <input type="text"  id='descricao' placeholder="Descrição" />   

        <label htmlFor='Categoria'>Categoria</label>
        <select id='categoria' name='categoria' 
        required>
          <option value=''>Selecione</option>
          <option value='alimentacao'>Alimentação</option>
          <option value='contas'>Contas de Casa</option>
          <option value='transporte'>Transporte</option>
          <option value='lazer'>Lazer</option>
          <option value='entreterimento'>Entreterimento</option>
          <option value='outros'>Outros</option>
        </select>

        <label></label>

        <label htmlFor="valor">Valor:</label>
        <input type="text" placeholder="Valor" />


        <label htmlFor="data">Data:</label>
        <input type="date" id="data" name="data" required />

        <button type="submit">Adicionar</button>
      </form>
    </div>
  )
}

export default AdicionarGastos