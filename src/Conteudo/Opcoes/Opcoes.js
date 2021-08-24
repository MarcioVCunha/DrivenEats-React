import Comidas from "./Linhas/Comidas";
import Bebidas from "./Linhas/Bebidas";
import Sobremesas from "./Linhas/Sobremesas";

export default function Linhas() {
    return (

        <div class="coluna-de-opcoes">
            <Comidas />
            <Bebidas />
            <Sobremesas />
        </div>
    )
}