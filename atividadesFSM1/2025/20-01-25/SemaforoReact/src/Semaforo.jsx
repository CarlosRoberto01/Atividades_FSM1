import { useState } from 'react'
import './Semaforo.css'

function Semaforo() {

    const [luzLigada, setLuzLigada] = useState(null);

    function SemaforoLigado(cor) {
        setLuzLigada(cor)
    }

    return (
        <body>
            <div className="semaforo">
                <div className={`luz ${luzLigada === 'vermelho' ? 'vermelho' : ''}`}></div>
                <div className={`luz ${luzLigada === 'amarelo' ? 'amarelo' : ''}`}></div>
                <div className={`luz ${luzLigada === 'verde' ? 'verde' : ''}`}></div>
                <div className="botoes">
                    <button onClick={() => SemaforoLigado('vermelho')}>Pare</button>
                    <button onClick={() => SemaforoLigado('amarelo')}>Atenção</button>
                    <button onClick={() => SemaforoLigado('verde')}>Siga</button>
                </div>
            </div>
        </body>
    )

}

export default Semaforo