import "./Botao.css";

const Botao = ({texto, onClick, nome}) => {
    return(
        <button className={nome} onClick={onClick}>
            {texto}
        </button>
    )
}

export default Botao;