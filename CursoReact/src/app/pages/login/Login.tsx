import { useState, useMemo, useCallback, useRef } from "react"
import { InputLogin } from "./components/inputLogin";

export const Login = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')

    const emailLength = useMemo(() => {
        return email.length * 1000;
    }, [email.length]);

    const handleEntrar = useCallback(() => {
        console.log(email)
        console.log(senha)
    }, [email, senha]);
   
    return(
        <div>
            <form>

                <InputLogin 
                    label="Email"
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                />

                <InputLogin 
                    type="password"
                    label="Senha"
                    value={senha}
                    onChange={newValue => setSenha(newValue)}
                />
            

                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>
            </form>
        </div>
    )
}