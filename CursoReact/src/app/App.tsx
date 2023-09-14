import { Rotas } from "./routes";
import { UsuarioLogadoProvider } from "./shared/contexts";

export const  App = () => {
  return (
    <UsuarioLogadoProvider>
          <Rotas/>
    </UsuarioLogadoProvider>
  );
}

