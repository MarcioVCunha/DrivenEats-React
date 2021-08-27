import React from 'react';

export default function Menu(props, index) {
    const { image, name, description, price } = props;

    const [valor, setValor] = React.useState(1);
    const [classes, setClasses] = React.useState("");
    const [classesCont, setClassesCont] = React.useState("quantidade-itens sumir");

    function mudarQtd(event, operacao) {
        event.stopPropagation();

        if (operacao === 'soma') {
            setValor(valor + 1);
        } else {
            if (valor === 1) {
                setClasses('');
                setClassesCont('quantidade-itens sumir');
            }
            setValor(valor - 1);
        }
    }

    return (
        <li className={classes} key={index} onClick={() => {
            setClasses('selecionado');
            setClassesCont('quantidade-itens');
        }}>
            <img src={"imagens/" + image} alt="Imagem Comida" />
            <div className='conteiner-abaxio-foto'>
                <div className="descricao-item">
                    <p className="nome-da-opcao"> {name} </p>
                    <p className="descricao-da-opcao"> {description} </p>
                    <p className="preco-da-opcao"> R$ {price} </p>
                </div>

                <div className={classesCont}>
                    <button onClick={(event) => mudarQtd(event, 'soma')}>+</button>
                    <p>{valor}</p>
                    <button onClick={(event) => mudarQtd(event, 'subtracao')}>-</button>
                </div>
            </div>
        </li>
    )
}