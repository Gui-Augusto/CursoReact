import { useState, useMemo, useCallback, useRef } from "react"
import { InputLogin } from "./components/inputLogin";
import { Buttonlogin } from "./components/ButtonLogin";

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
                <p>Quantidade de caracteres no email: {emailLength}</p>
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
                    ref={inputPasswordRef}
                    onChange={newValue => setSenha(newValue)}
                />
        
                <Buttonlogin type="button" onClick={handleEntrar}>
                    Entrar
                </Buttonlogin>
            </form>
        </div>
    )
}