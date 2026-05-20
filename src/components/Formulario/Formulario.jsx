import { useState } from "react"
import "./Formulario.css"

const Formulario = () => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    const enviarFormulario = (evento) => {
        evento.preventDefault();
        alert(
            "Nome:" + nome + "\nEmail:" + email + "\nTelefone:" + telefone
        );
    }

    return(
        <div className="conteiner-form">
            <form onSubmit={enviarFormulario}>
                <input 
                    type="text" 
                    placeholder="Nome"
                    value={nome}
                    onChange={(e)=> setNome(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />

                <input 
                    type="text"
                    placeholder="Telefone"
                    value={telefone}
                    onChange={(e)=> setTelefone(e.target.value)}
                />

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Formulario;