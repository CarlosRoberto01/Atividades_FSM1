import "./Login.css"

function Login() {
    return (
        <>
            <h1>Login</h1>
            <form className="login-container">
                <input className="login-box" type="text" placeholder="Usuário" />
                <input className="login-box" type="password" placeholder="Senha" />
                <button type="submit">Entrar</button>
            </form>
        </>
    )
}

export default Login