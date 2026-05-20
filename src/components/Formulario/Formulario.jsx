import { useState } from "react";
import "./Formulario.css";

const Formulario = () => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    const enviarFormulario = (evento) => {
        evento.preventDefault();

        alert(
            "Nome: " + nome +
            "\nEmail: " + email +
            "\nTelefone: " + telefone
        );
    }

return (
    <div className="conteiner-form ">
        <form onSubmit={enviarFormulario}>
            <h1>Formulário</h1>

            <label htmlFor="nome">Nome:</label>
            <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <label htmlFor="email">E-mail:</label>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="telefone">Telefone:</label>
            <input
                type="text"
                placeholder="Telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
            />

        <button type="submit">Enviar</button>

      </form>

    </div>
  );
}

export default Formulario;