import "./CartaoProduto.css";

const CartaoProduto = ({nome, preco, imagem}) => {
    return(
        <div className="conteiner">
            <div className="card">
                <img src= {imagem} alt="" className="imagem"/>
                <h2>{nome}</h2>
                <p className="card-preco">R$ {preco}</p>
            </div>
        </div>
    )
}

export default CartaoProduto