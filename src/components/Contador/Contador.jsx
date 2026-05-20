import {useState} from "react";
import Botao from "../Botao/Botao";
import "./Contador.css"

const Contador = () => {
    const [contador, setContador] = useState (0);

    const incrementar = () => {
        setContador(contador + 1);
    }

    const descrementar = () => {
        setContador(contador - 1);
    }

    const limpar = () => {
        setContador(0)
    }

    return(
        <div className="conteiner-botao">
            <h2>Contador</h2>
            <h1>{contador}</h1>

            <div className="botoes">
                <Botao
                  texto="Incrementar"
                  onClick={incrementar}
                  nome="incrementar"  
                />

                <Botao
                    texto="Descrementar"
                    onClick={descrementar}
                    nome="descrementar"
                />

                <Botao
                    texto="Limpar"
                    onClick={limpar}
                    nome="limpar"
                />
            </div>
        </div>
    )
}

export default Contador;