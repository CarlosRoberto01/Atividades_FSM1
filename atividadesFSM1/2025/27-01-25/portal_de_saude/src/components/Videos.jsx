import "./Videos.css";


function Videos() {
  return (
    <section id="videos">
            <h2>Vídeos sobre Saúde e Bem-estar</h2>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/rQldpUqBjY8?si=hT_cLxCpsnH9-kJt"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/qMh-_1N6-7E?si=FTx1FeXxjnfDZE8-"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
        </section>

  )
}

export default Videos