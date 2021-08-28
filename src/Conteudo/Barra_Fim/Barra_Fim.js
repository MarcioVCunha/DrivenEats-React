export default function BarraFim(props) {

    const {classBotaoCinza, classBotaoVerde} = props;

    return (
        <div className="barra-fim">
            <button className={classBotaoCinza}> Selecione os 3 itens para fechar o pedido </button>
            <button className={classBotaoVerde}> Fechar pedido </button>
        </div>
    )
}