import "./MensagemSecreta.css";

const MensagemSecreta = ({mensagem}) => {
    return(
        <>
            <h2>{mensagem ? "Mensagem super secreta" : ""}</h2>
        </>
    )
}

export default MensagemSecreta