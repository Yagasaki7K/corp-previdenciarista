import { useState } from "react";
import Button from "../../atoms/button/Button";
import {addCartDataLayer} from "../../pages/api/utils/assine";
import Col from "./Col";
import TableBody from "./TableBody";

const paymentRows = [
  ['Opção de pagamento via boleto', true, false],
  ['Opção de pagamento via cartão de crédito', true, true],
  ['Desconto de 20%', true, false]
];

const calcRows = [
  ['Cálculo automático a partir do CNIS em PDF', true, true],
  ['Cálculo em apenas um clique usando a extensão para Chrome', true, true],
  ['Cálculos e petições ilimitados', true, true],
  ['Cálculo da revisão da vida toda em segundos', true, true],
  ['Cálculo da liquidação de sentenças previdenciárias e valor da causa', true, true],
  ['Conversão de tempo especial e comparador de benefícios', true, true],
];

const infoTableHead = [
  {
    title: "Plano Anual",
    subtitle: "Economize 20%",
    textButton: "Assinar",
    borderTop: "5px solid #3575ab"
  },
  {
    title: "Plano mensal",
    subtitle: "Teste grátis agora mesmo!",
    textButton: "Iniciar teste",
    borderTop: "5px solid #F26526"
  }
]

const infoTableBody = [
  {
    title: "Pagamento",
    data: paymentRows
  },
  {
    title: "Cálculos",
    data: calcRows
  }
]

const TableFeatures = () => {
  const [intervalo, setIntervalo] = useState("ANUAL")
  return (
    <>
      <h2 className="font-calibri m-4 text-size24 font-bold">Tabela de comparação de planos</h2>
      <div className="w-auto m-4 mb-[0px] flex border border-prev-assine-bd_line_card text-center">
        {
          infoTableHead.map(({title, subtitle, textButton, borderTop}, i) => (
            <Col
              key={i}
              style={{borderTop: borderTop}}
              onClick={() => i === 0 ? setIntervalo("ANUAL") : setIntervalo("MENSAL")}
            >
              <p className="font-calibri p-assine">{title}</p>
              <span className="span-assine">{subtitle}</span>
              {intervalo === "ANUAL" && i === 0 && (
                <Button
                  width="w-[140px]"
                  cor="text-prev-assine-bg_white"
                  intervalo="ANUAL"
                  onClick={addCartDataLayer}
                >
                  <a className="font-semibold" href="https://prev.app/checkout?periodo=anual">
                    {textButton} 
                  </a>
                </Button>
              )}
              {intervalo === "MENSAL" && i === 1 && (
                <Button
                  width="w-[140px]"
                  cor="text-prev-assine-bg_white"
                  intervalo="MENSAL"
                  onClick={addCartDataLayer}
                >
                  <a className="font-semibold" href="https://prev.app/checkout?periodo=anual">
                    {textButton} 
                  </a>
                </Button>
              )}
            </Col>
          ))
        }
      </div>

      <div className="w-auto m-4 mt-[0px]">
        {
          infoTableBody.map(({title, data}, i) => (
            <TableBody key={i} title={title} data={data} intervalo={intervalo} />
          ))
        }
      </div>
    </>
  )
    
}

export default TableFeatures;
