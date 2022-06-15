
import SubCardPrice from './SubCardPrice';
import { formatToCurrency, addCartDataLayer } from '../../pages/api/utils/assine';

const infoCardPrice = [
  {
    title: "+3 MIL PETIÇÕES",
    subtitle: "Para você usar escritas por nossa equipe"
  },
  {
    title: "SEM LIMITE!",
    subtitle: "Faça quantos cálculos quiser."
  },
  {
    title: "+500 MIL DECISÕES",
    subtitle: "Jurisprudência Previdenciária atualizada"
  }
];

const CardPrice = ({ intervalo = "", value = "", discount = "" }) => {
  return (
    <div className={`w-auto m-4 mb-5 p-5 rounded shadow-xl border-t-4 ${intervalo === "ANUAL" ? "border-prev-assine-borda_card_ano" : "border-prev-assine-borda_card_mes"}`}>
      {intervalo === "ANUAL" && (
        <div className="w-[140px] mb-10 px-2 py-1 font-semibold text-prev-assine-borda_card_ano bg-prev-assine-fundo_plano_indicado rounded">PLANO INDICADO</div>
      )}

      <h2 className="font-calibri mb-1 font-semibold text-sub_title20 text-prev-assine-textos">PLANO PREMIER {intervalo}</h2>

      <p  className="font-calibri text-size14 text-prev-assine-subtextos">{intervalo === "ANUAL" ? "Pra quem gosta de economizar" : "Assinatura padrão do Prev"}</p>

      <div className={`flex flex-col ${intervalo === "MENSAL" && "mb-5"}`}>
        <div className="flex text-prev-assine-preco mt-7 text-right">
          <span className="font-semibold mr-2 text-sub_title20">R$</span>
          <p className="font-calibri font-semibold text-size38 tex-prev-assine-preco mr-2">{formatToCurrency(value)}</p>
          <span className="font-semibold mr-2 text-sub_title20 self-end">/{intervalo === "ANUAL" ? "ano" : "mês"}</span>
        </div>
        {discount && (
          <div className="mb-4 font-semibold text-size12 text-prev-assine-desconto ml-7">
            Desconto especial de R$ {formatToCurrency(discount)}
          </div>
        )}
      </div>

      <button
        className={`w-auto h-10 px-6 py-2 text-base rounded text-prev-assine-botao border-prev-assine-borda_button ${intervalo === "ANUAL" ? "bg-prev-assine-borda_card_ano" : "bg-prev-assine-borda_card_mes"}`}
        onClick={addCartDataLayer}
      >
        <a
          href={intervalo === "ANUAL" ? "https://prev.app/checkout?periodo=anual" : "https://prev.app/checkout"} target="_blank"
          rel="noreferrer"
        >
          {intervalo === "ANUAL" ? "Assinar agora" : "Comece a testar agora"}
        </a>
      </button>

      <div className="mt-12">
        {
          infoCardPrice.map(({title, subtitle}, i) =>
            <SubCardPrice key={i} title={title} subtitle={subtitle} />)
        }
        {
          intervalo === "ANUAL" ? (
            <div className="py-4 text-sub_title20">
              <p className="font-semibold text-sub_title20">ECONOMIA</p>
              <p className="text-base text-prev-assine-textos">
                Neste plano você irá{" "}
                <span className="font-semibold text-prev-assine-desconto">economizar 20%</span>
                {" "} e ficar despreocupado com acesso.
              </p>
            </div>
          ) : (
            <div className="py-4 text-assine-textos">
              <p className="font-semibold text-sub_title20">SEM PEGADINHAS</p>
              <p className="text-base text-prev-assine-textos">
                Cacelamento{" "}
                <span className="font-semibold">rápido e fácil</span>
                {" "} quando você quiser.
              </p>
            </div>
          )
        }
      </div> 
    </div>
  )
}

export default CardPrice;
