import "./Footer.css";


function Footer() {
    return (
        <footer>

            <p>Autor: <br /> Carlos Roberto <br />
                <p>Contato: <br />
                    <a href="https://www.linkedin.com/in/carlos-roberto-alves-bezerra-luna-125288224/" target="blank">
                        <img src="https://icons.iconarchive.com/icons/graphics-vibe/simple-rounded-social/48/linkedin-icon.png" alt="Linkedin" />
                    </a>
                </p>


                <a href="mailto:carloos.bezerra@hotmail.com">
                    <img src="https://icons.iconarchive.com/icons/hopstarter/sleek-xp-basic/48/Mail-icon.png" alt="Email" />
                </a>
            </p>

            <a href="#politica-de-privacidade">Política de Privacidade</a>
            <a href="#termos-de-uso">Termos de Uso</a>
            <a href="#ajuda">Ajuda</a>
        </footer>
    )
}

export default Footer