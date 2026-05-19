import "./App.css";
import BoasVindas from "./components/BoasVindas/BoasVindas";
import MensagemSecreta from "./components/MensagemSecreta/MensagemSecreta";
import CartaoProduto from "./components/CartaoProduto/CartaoProduto";

const App = () => {
  return(
    <>
      <BoasVindas nome="Laura" />
      <MensagemSecreta mensagem = {true}/>
      <MensagemSecreta mensagem = {false}/>

      <div className="principal">
        <CartaoProduto
          imagem="imagem1.jpg"
          nome = "Bolo de cenoura"
          preco= "32,50"
        />
        <CartaoProduto
          imagem="imagem2.jpg"
          nome="Chocolate quente"
          preco="14,69"
        />
        <CartaoProduto
          imagem='imagem3.jpg'
          nome="Croassaint de chocolate"
          preco="24,80"
        />
      </div>
    </>
  )
}

export default App