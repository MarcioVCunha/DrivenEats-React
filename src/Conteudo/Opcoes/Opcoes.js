import Menu from "./Linhas/Menu";
import React from "react";

const comidas = [{
    image: 'frango.jpg',
    name: 'Frango Yin Yang',
    description: 'Um pouco de batata, um pouco de salada',
    price: '14,90'

},
{
    image: 'macarronada.jpeg',
    name: 'Macarronada',
    description: 'Macarrão ao molho vermelho com carne moída',
    price: '19,90'

},
{
    image: 'fricasse-de-frango.jpg',
    name: 'Fricasse de Frango',
    description: 'Um delicioso fricasse de frango com batata palha',
    price: '21,90'

},
{
    image: 'salada-ceasar-veg.jpg',
    name: 'Salada Ceasar',
    description: 'Salada Ceasar para os vegetarianos de plantão',
    price: '11,90'

}]

const bebidas = [{
    image: 'CocaCola.jpeg',
    name: 'Coquinha gelada',
    description: 'Lata 350ml',
    price: '4,90'

},
{
    image: 'coca2L.jpeg',
    name: 'Cocona gelada',
    description: 'Garrafa 2,5L',
    price: '11,90'

},
{
    image: 'Guarana.jpg',
    name: 'Guaraná Fanta Caçulinha',
    description: 'Garrafa 200ml',
    price: '2,50'

},
{
    image: 'agua.jpeg',
    name: 'Água (bem básico)',
    description: 'Garrafa 500ml',
    price: '2,00'

}]

const sobremesas = [{
    image: 'Pudim.jpeg',
    name: 'Pudim ',
    description: 'Apenas pudim',
    price: '7,90'

},
{
    image: 'sorvete.jpg',
    name: 'Sorvete na casquinha',
    description: 'Baunilha, Chocolate ou Morango',
    price: '4,90'

},
{
    image: 'brownie.jpeg',
    name: 'Brownie',
    description: 'Brownie de chocolate amargo',
    price: '3,90'

},
{
    image: 'cookies.webp',
    name: 'Porção com 4 cookies',
    description: 'Saudades cookies do Kanzu',
    price: '11,90'

}]

let pedido = [];

export default function Linhas(props) {



    const { averiguarPedido } = props;

    function mudarQtd(event, operacao, setQtd, qtd, name, price, type, setClasses, setClassesCont) {
        event.stopPropagation();

        if (operacao === 'soma') {
            setQtd(qtd + 1);
            definirSelecionado(qtd + 1, name, price, type);

        } else if (operacao === 'subtracao') {
            if (qtd === 1) {
                setClasses('');
                setClassesCont('quantidade-itens sumir');
                definirSelecionado(qtd = 0, name, price, type);
            } else {
                setQtd(qtd - 1);
                definirSelecionado(qtd - 1, name, price, type);
            }
        }
    }

    function definirSelecionado(qtd, name, price, type) {
        let repetido = 0;

        for (let i = 0; i < pedido.length; i++) {
            if (pedido[i].name === name) {
                pedido[i].qtd = qtd;
                repetido++;
            }
        }

        if (repetido === 0) {
            pedido.push({
                name: name,
                price: price,
                qtd: qtd,
                type: type
            })
        }
        console.log(pedido);
        averiguarPedido(pedido);
    }

    return (
        <div className="coluna-de-opcoes">
            <p className="frases-topo-linhas"> Primeiro, seu prato </p>

            <ul className="lista-comida">
                {comidas.map((comida, index) => {
                    return <Menu key={index} definirSelecionado={definirSelecionado} mudarQtd={mudarQtd} image={comida.image} name={comida.name} description={comida.description} price={comida.price} type='comida' />
                })}
            </ul>

            <p className="frases-topo-linhas"> Agora, sua bebida </p>

            <ul className="lista-refri">
                {bebidas.map((bebida, index) => {
                    return <Menu key={index} definirSelecionado={definirSelecionado} mudarQtd={mudarQtd} image={bebida.image} name={bebida.name} description={bebida.description} price={bebida.price} type='bebida' />
                })}
            </ul>

            <p className="frases-topo-linhas"> Por fim, sua sobremesa</p>

            <ul className="lista-sobremesa">
                {sobremesas.map((sobremesa, index) => {
                    return <Menu key={index} definirSelecionado={definirSelecionado} mudarQtd={mudarQtd} image={sobremesa.image} name={sobremesa.name} description={sobremesa.description} price={sobremesa.price} type='sobremesa' />
                })}
            </ul>
        </div>
    )
}