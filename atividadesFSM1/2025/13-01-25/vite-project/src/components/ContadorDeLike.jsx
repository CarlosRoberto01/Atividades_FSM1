import { useState } from 'react'

function ContadorDeLike() {

    const [likes, setLikes] = useState(0)

    function incrementarLike() {
        setLikes(likes + 1)
    }

    function decrementarLike() {
        setLikes(likes - 1)
    }
    return (
        <>
            <h1>Contador de Likes</h1>
            
            <button onClick={incrementarLike}>Curtir</button>
            <p>{likes}</p>
            <button onClick={decrementarLike}>Descurtir</button> <br></br>

            <img src="https://icons.iconarchive.com/icons/praveen/minimal-outline/48/like-2-icon.png" onClick={incrementarLike} ></img>
            <p>{likes}</p>
            <img src="https://icons.iconarchive.com/icons/aniket-suvarna/box-regular/48/bx-dislike-icon.png" onClick={decrementarLike} ></img>
        </>
    )
}

export default ContadorDeLike