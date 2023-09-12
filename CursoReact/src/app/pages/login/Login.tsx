
export const Login = () => {

    const handleEntrar = () => {

    }
   
    return(
        <div>
            <form>
                <label>
                    <span>Email</span>
                    <input/>
                </label>

                <label>
                    <span>Senha</span>
                    <input type="password"/>
                </label>

                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>
            </form>
        </div>
    )
}