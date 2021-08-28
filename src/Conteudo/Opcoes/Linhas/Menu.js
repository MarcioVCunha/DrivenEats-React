import React from 'react';

export default function Menu(props, index) {
    const { definirSelecionado, mudarQtd, image, name, description, price, type } = props;

    const [qtd, setQtd] = React.useState(1);
    const [classes, setClasses] = React.useState("");
    const [classesCont, setClassesCont] = React.useState("quantidade-itens sumir");

    return (
        <li className={classes} key={index} onClick={() => {
            setClasses('selecionado');
            setClassesCont('quantidade-itens');

            definirSelecionado(qtd, name, price, type);
        }}>
            <img src={"imagens/" + image} alt="Imagem Comida" />
            <div className='conteiner-abaxio-foto'>
                <div className="descricao-item">
                    <p className="nome-da-opcao"> {name} </p>
                    <p className="descricao-da-opcao">{description} </p>
                    <p className="preco-da-opcao"> R$ {price} </p>
                </div>

                <div className={classesCont}>
                    <button onClick={(event) => mudarQtd(event, 'soma', setQtd, qtd, name, price, type, setClasses, setClassesCont)}>+</button>
                    <p>{qtd}</p>
                    <button onClick={(event) => mudarQtd(event, 'subtracao', setQtd, qtd, name, price, type, setClasses, setClassesCont)}>-</button>
                </div>
            </div>
        </li>
    )
}