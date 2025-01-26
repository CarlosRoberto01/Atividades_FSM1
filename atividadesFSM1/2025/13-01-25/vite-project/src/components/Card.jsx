import "./Card.css"

function Card() {
    return (
        <div className="card-container">
            <div className="card">
                <h3 className="card-title">Card 1</h3>
                <p className="card-content">Conteúdo do card 1.</p>
            </div>
            <div className="card">
                <h3 className="card-title">Card 2</h3>
                <p className="card-content">Conteúdo do card 2.</p>
            </div>
            <div className="card">
                <h3 className="card-title">Card 3</h3>
                <p className="card-content">Conteúdo do card 3.</p>
            </div>
        </div>
    )
}

export default Card