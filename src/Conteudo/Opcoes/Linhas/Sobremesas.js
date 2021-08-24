export default function Sobremesas() {
    return (
        <div>
            <p class="frases-topo-linhas"> Por fim, sua sobremesa</p>

            <ul class="lista-sobremesa">
                <li onclick="selecionarSobremesa(this);">
                    <img src="imagens/Pudim.jpeg" />

                    <p class="nome-da-opcao"> Pudim </p>

                    <p class="descricao-da-opcao"> Apenas pudim </p>

                    <p class="preco-da-opcao"> R$ 7,90 </p>

                    <ion-icon name="checkmark-circle" class="sumir"></ion-icon>
                </li>

                <li onclick="selecionarSobremesa(this);">
                    <img src="imagens/sorvete.jpg" />

                    <p class="nome-da-opcao"> Sorvete na casquinha </p>

                    <p class="descricao-da-opcao"> Baunilha, Chocolate ou Morango </p>

                    <p class="preco-da-opcao"> R$ 4,90 </p>

                    <ion-icon name="checkmark-circle" class="sumir"></ion-icon>
                </li>

                <li onclick="selecionarSobremesa(this);">
                    <img src="imagens/brownie.jpeg" />

                    <p class="nome-da-opcao"> Brownie </p>

                    <p class="descricao-da-opcao"> Brownie de chocolate amargo </p>

                    <p class="preco-da-opcao"> R$ 3,90 </p>

                    <ion-icon name="checkmark-circle" class="sumir"></ion-icon>
                </li>

                <li onclick="selecionarSobremesa(this);">
                    <img src="imagens/cookies.webp" />

                    <p class="nome-da-opcao"> Porção com 4 cookies </p>

                    <p class="descricao-da-opcao"> Saudades cookies do Kanzu </p>

                    <p class="preco-da-opcao"> R$ 11,90 </p>

                    <ion-icon name="checkmark-circle" class="sumir"></ion-icon>
                </li>
            </ul>
        </div>
    )
}