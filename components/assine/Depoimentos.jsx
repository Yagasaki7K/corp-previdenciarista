const depoimentos = [
  {
    autor: 'Dra. Luciane Rodrigues da Silva',
    clienteDesde: '2018',
    depoimento: `A ação foi julgada procedente! O INSS juntou cálculos no valor de R$54 mil reais. Impugnamos com os cálculos de Liquidação de Sentença do Previdenciarista, no valor de R$104 mil reais. O dobro do ofertado.

    Adivinha? Ganhamos! Eles concordaram com nossos cálculos. Obrigada, mais uma vez. O melhor é poder confiar no seu trabalho!`,
  },
  {
    autor: 'Dr. Kléber Renato Crochemore Rios',
    clienteDesde: '2016',
    depoimento:
      'Posso afirmar com toda convicção de que o investimento que fiz no Previdenciarista já se pagou várias vezes, tendo em vista a quantidade de processos que resolvi graças às informações e jurisprudências recebidas.',
  },
  {
    autor: 'Dra. Jacqueline Marques',
    clienteDesde: '2017',
    depoimento:
      'Desde que assino a ferramenta, encontrei todos os modelos que necessitei. Geralmente, utilizo a fundamentação ou algum julgado reproduzido no modelo para ganhar agilidade na redação das minhas peças e até mesmo para estudar, porque o site tem teses que ainda não utilizei e servem de sugestão para clientes.',
  },
  {
    autor: 'Dra. Jane Marisa da Silva',
    clienteDesde: '2017',
    depoimento:
      'Parabéns, considero o Previdenciarista o melhor site de auxílio aos advogados previdenciários. É o Previdenciarista o meu instrumento de pesquisa quase que diário.',
  },
];

const Depoimentos = ({ isMobile }) => (
  <div className="flex flex-col align-center">
    <h1 className="mb-6 text-[38px] font-calibri font-black text-center text-assine-depoimentos">Quem usa o Prev, ama!</h1>
    <div className="flex items-start justify-start overflow-auto">
      {depoimentos.map((e, index) => (
        <div
          className="shrink-0 w-[270px] h-auto flex flex-col m-2.5 shadow-md bg-assine-bg_white"
          key={`depoimento_${index}`}
        >
          <p className="font-calibri text-base text-assine-textos pt-[30px] pr-[27px] pb-[11px] pl-[27px]">{e.depoimento}</p>
          <div
            className="flex flex-col bg-assine-footer_depoimentos pt-[0px] pr-[27px] pb-[16px] pl-[27px] border-b-4 border-assine-borda_card_mes"
          >
            <div className="flex items-center py-4">
              <p className="font-semibold text-sm text-assine-preco">{e.autor}</p>
            </div>
            <p style={{color: "rgba(0, 0, 0, 0.58)"}} className="font-calibri text-[11px] uppercase">
              {`Cliente desde ${e.clienteDesde}`}
            </p>
          </div>
        </div>
      ))}
    </div>

    <div className="flex justify-center">
      <p className="max-w-[250px] flex justify-center font-calibri text-assine-sem_fidelidade text-base text-center">
        Planos de assinatura sem fidelidade! Cancele quando quiser!
      </p>
    </div>
  </div>
);

export default Depoimentos;
