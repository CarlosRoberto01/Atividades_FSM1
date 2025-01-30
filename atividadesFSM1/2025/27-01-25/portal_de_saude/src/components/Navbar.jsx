import "./Navbar.css";


function Navbar() {
    return (
        <>
            <header>
                <nav>
                    <img src="https://icons.iconarchive.com/icons/erix-subyarko/medical/72/Healthcare-Heart-Love-Care-Health-icon.png" alt="Imagem ilustrativa sobre saúde e bem-estar"></img>
                    <ul>
                        <li>
                            <a href="/">Início</a>
                        </li>
                        <li>
                            <a href="conteudo1">Assunto 1 </a>
                        </li>
                        <li>
                            <a href="conteudo2">Assunto 2</a>
                        </li>
                        <li>
                            <a href="videos">Vídeos</a>
                        </li>
                        <li>
                            <a href="especialistas">Especialistas</a>
                        </li>
                        <li>
                            <a href="form">Contato</a>
                        </li>
                    </ul>
                    <form className="barra-pesquisa" action="https://www.google.com/search">
                        <input type="text" name="q" id="enviar" placeholder="Digite sua pesquisa" required />
                        <input type="submit" value="Pesquisar" />
                    </form>
                </nav>

            </header>

        </>
    )
}

export default Navbar