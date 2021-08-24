export default function Bebidas() {
    return (
        <div>
            <p class="frases-topo-linhas"> Agora, sua bebida </p>

            <ul class="lista-refri">
                <li onclick="selecionarRefri(this);">
                    <img src="imagens/CocaCola.jpeg" />

                    <p class="nome-da-opcao"> Coquinha gelada </p>

                    <p class="descricao-da-opcao"> Lata 350ml </p>

                    <p class="preco-da-opcao"> R$ 4,90 </p>

                    <ion-icon name="checkmark-circle" class="sumir"></ion-icon>
                </li>

                <li onclick="selecionarRefri(this);">
                    <img src="imagens/coca2L.jpeg" />

                    <p class="nome-da-opcao"> Cocona gelada </p>

                    <p class="descricao-da-opcao"> Garrafa 2,5L </p>

                    <p class="preco-da-opcao"> R$ 11,90 </p>

                    <ion-icon name="checkmark-circle" class="sumir"></ion-icon>
                </li>

                <li onclick="selecionarRefri(this);">
                    <img src="imagens/Guarana.jpg" />

                    <p class="nome-da-opcao"> Guaraná Fanta Caçulinha </p>

                    <p class="descricao-da-opcao"> Garrafa 200ml </p>

                    <p class="preco-da-opcao"> R$ 2,50 </p>

                    <ion-icon name="checkmark-circle" class="sumir"></ion-icon>
                </li>

                <li onclick="selecionarRefri(this);">
                    <img src="imagens/agua.jpeg" />

                    <p class="nome-da-opcao"> Água (bem básico) </p>

                    <p class="descricao-da-opcao"> Garrafa 500ml </p>

                    <p class="preco-da-opcao"> R$ 2,00 </p>

                    <ion-icon name="checkmark-circle" class="sumir"></ion-icon>
                </li>
            </ul>
        </div>
    )
}