const props = [{
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


export default function Comidas() {
    return (
        <div>
            <p class="frases-topo-linhas"> Primeiro, seu prato </p>

            <ul class="lista-comida">
                {props.map((props) => (
                    <li onclick="selecionarComida(this);">
                        <img src={"imagens/" + props.image} />

                        <p class="nome-da-opcao"> {props.name} </p>

                        <p class="descricao-da-opcao"> {props.description} </p>

                        <p class="preco-da-opcao"> R$ {props.price} </p>

                        <ion-icon name="checkmark-circle" class="sumir"></ion-icon>
                    </li>
                ))}
            </ul>
        </div>
    )
}