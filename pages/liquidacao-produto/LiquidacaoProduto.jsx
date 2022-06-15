/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Footer from '../../components/footer';
import { OptionFooter } from '../../components/footer/option';
import NavBar from '../../components/navbar';
import FixedBottom from '../../atoms/fixedBottom';
import { OptionTitleBodyImg } from '../api/utils/liquidacaoProduto';
import ContainerTextBodyImg from '../../atoms/containers/containerTextBodyImg';
import ContainerTestFree from '../../atoms/containers/containerTrial';

const LiquidacaoProduto = ({ originalUrl }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Calculadora de Liquidação de Sentença - Prevideciarista" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <title>Calculadora de Liquidação de Sentença - Previdenciarista</title>
        <link rel="canonical" href={originalUrl} />
      </Head>
      <NavBar />
      <div className="flex flex-col pt-14 px-5 mt-36	items-center text-default-text_body">
        <div>
          <h1 className="font-bold text-prev-default-text_body text-[29px] leading-lheight13 lg:text-size48">
            Liquidação de sentença pronta em apenas 5 passos!
          </h1>
        </div>
        <p className="mt-2 text-center text-base text-prev-default-select lg:text-size24 lg:max-w-[1027px]">
          Informe poucos dados do processo e receba o cálculo de liquidação de sentença previdenciária para cumprimento em poucas etapas.
        </p>
      </div>
      <div className="mx-6 mt-20">
        {OptionTitleBodyImg.map((data, index) => {
          return (
            <ContainerTextBodyImg key={index} props={data} />
          )
        })}
      </div>
      <div className="lg:flex lg:justify-center">
        <ContainerTestFree />
      </div>
      <div className="mb-10 pb-10" style={{ backgroundColor: "#485158", color: 'white'}}>
        <img className="ml-6 pt-6" src="/images/prev-icon-footer.svg" alt="Previdenciárista" />
        <div>
          {OptionFooter.map((data, index) => {
            return (
              <Footer key={index} props={data} />
            )
          })}
        </div>
      </div>
      <div className="hidden">
        <FixedBottom />
      </div>
    </>
  );
};

export default LiquidacaoProduto;
