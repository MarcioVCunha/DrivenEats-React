export default function Comidas(props, index) {
    const { image, name, description, price } = props;

    return (
        <li key={index} onclick="selecionarComida(this);">
            <img src={"imagens/" + image} alt="Imagem Comida" />

            <p className="nome-da-opcao"> {name} </p>

            <p className="descricao-da-opcao"> {description} </p>

            <p className="preco-da-opcao"> R$ {price} </p>

            <ion-icon name="checkmark-circle" className="sumir"></ion-icon>
        </li>
    )
}