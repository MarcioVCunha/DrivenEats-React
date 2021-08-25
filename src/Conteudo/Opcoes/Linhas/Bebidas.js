export default function Bebidas(props, index) {
    const { image, name, description, price } = props;

    return (
        <li key={index} onclick="selecionarRefri(this);">
            <img src={"imagens/" + image} alt="" />

            <p className="nome-da-opcao"> {name} </p>

            <p className="descricao-da-opcao"> {description} </p>

            <p className="preco-da-opcao"> R$ {price} </p>

            <ion-icon name="checkmark-circle" className="sumir"></ion-icon>
        </li>
    )
}