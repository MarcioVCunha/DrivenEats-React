import Topo from "./Topo/Topo"
import Linhas from "./Opcoes/Opcoes"
import BarraFim from "./Barra_Fim/Barra_Fim"

export default function Corpo() {
    return (
        <div>
            <Topo />
            <Linhas />
            <BarraFim />
        </div>
    )
}