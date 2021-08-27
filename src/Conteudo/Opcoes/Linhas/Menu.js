import React from 'react';

export default function Menu(props, index) {
    const { image, name, description, price } = props;

    const [valor, setValor] = React.useState(0);
    const [classes, setClasses] = React.useState("");
    const [classesCont, setClassesCont] = React.useState("quantidade-itens sumir");

    function mudarQtd(operacao) {
        if (operacao === 'soma') {
            setValor(valor + 1);
        } else {
            setClasses('');
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
                    <button onClick={() => mudarQtd('soma')}>+</button>
                    <p>{valor}</p>
                    <button onClick={() => mudarQtd('subtracao')}>-</button>
                </div>
            </div>
        </li>
    )
}