/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Footer from '../../components/footer';
import { OptionFooter } from '../../components/footer/option';
import ContainerTextBodyImg from '../../atoms/containers/containerTextBodyImg';
import ContainerTestFree from '../../atoms/containers/containerTrial';
import FixedBottom from '../../atoms/fixedBottom';
import { OptionTitleBodyImg } from '../api/utils/peticoesProduto';
import NavBar from '../../components/navbar';

const PeticoesProduto = ({ blog, noticias, colunas, decisoes, originalUrl }) => {

  return (
    <>
      <Head>
        <meta name="description" content="Home - Prevideciarista" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Home - Previdenciarista" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <title>Petições previdenciárias preenchidas automaticamente - Previdenciarista</title>
        <link rel="canonical" href={originalUrl} />
      </Head>
      <NavBar />
      <div className="flex flex-col pt-14 px-5 mt-36 items-center text-default-text_body">
        <div>
          <h1 className="font-bold text-prev-default-text_body text-[29px] leading-lheight13 lg:text-size48">
            Gere petições para cada caso automaticamente
          </h1>
        </div>
        <p className="mt-2 text-center text-base text-prev-default-select lg:text-size24 lg:max-w-[1007px]">
          O Previdenciarista possui mais de 3 mil modelos de petições. Você só precisa vincular seu cliente e a petição já sai automaticamente preenchida com todos os dados pessoais. Dê seu toque final e imprima a petição ou baixe-a em PDF para o processo eletrônico!
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
      <div className="lg:hidden">
        <FixedBottom />
      </div>
    </>
  );
};

export default PeticoesProduto;
