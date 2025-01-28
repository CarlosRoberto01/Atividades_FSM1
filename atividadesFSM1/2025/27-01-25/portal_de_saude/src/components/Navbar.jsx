import "./Navbar.css";


function Navbar() {
    return (
        <>
            <header>
                <nav>
                    <img src="https://icons.iconarchive.com/icons/erix-subyarko/medical/72/Healthcare-Heart-Love-Care-Health-icon.png" alt="Imagem ilustrativa sobre saúde e bem-estar"></img>
                    <ul>
                        <li>
                            <a href="#inicio">Início</a>
                        </li>
                        <li>
                            <a href="#conteudo">Conteúdo</a>
                        </li>
                        <li>
                            <a href="#videos">Vídeos</a>
                        </li>
                        <li>
                            <a href="#especialistas">Especialistas</a>
                        </li>
                        <li>
                            <a href="#contato">Contato</a>
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