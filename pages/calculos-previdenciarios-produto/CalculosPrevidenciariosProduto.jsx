/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Footer from '../../components/footer';
import { OptionFooter } from '../../components/footer/option';
import NavBar from '../../components/navbar';
import FixedBottom from '../../atoms/fixedBottom';
import { OptionTitleBodyImg } from '../api/utils/calculosPrevidenciario';
import ContainerTextBodyImg from '../../atoms/containers/containerTextBodyImg';
import Carousel from '../../components/carousel';
import ContainerTestFree from '../../atoms/containers/containerTrial';

const CalculosPrevidenciariosProduto = ({ originalUrl }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Home - Prevideciarista" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Home - Previdenciarista" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <title>Cálculos Previdenciários em poucos segundos! - Previdenciarista</title>
        <link rel="canonical" href={originalUrl} />
      </Head>
      <NavBar />

      <div className="flex flex-col pt-14 px-5 mt-36 items-center">
        <div>
          <h1 className="font-bold text-prev-default-text_body text-[29px] leading-lheight13 lg:text-size48">
            Cálculos Previdenciários em poucos segundos!
          </h1>
        </div>

        <p className="mt-2 text-center text-base text-prev-default-select lg:text-size24 lg:max-w-[1027px]">
          Envie o CNIS a partir do MeuINSS e calcule
          <b> mais de 30 benefícios previdenciários do INSS. </b>{" "}
         
          Veja todos os benefícios lado a lado e decida qual é o melhor para o seu cliente.
        </p>
      </div>
      
      <div className="mx-6 mt-20">
        {OptionTitleBodyImg.map((data, index) => {
          {if (index < 2) {
            return (
              <ContainerTextBodyImg key={index} props={data} />
            )
          }}
        })}
      </div>

      <div className="lg:flex lg:justify-center">
        <Carousel />
      </div>

      <div className="mx-6 mt-20">
        {OptionTitleBodyImg.map((data, index) => {
          {if (index >= 2) {
            return (
              <ContainerTextBodyImg key={index} props={data} index={index} />
            )
          }}
        })}
      </div>

      <div className="lg:flex lg:justify-center">
        <ContainerTestFree />
      </div>


      <div className="mb-10 pb-10" style={{ backgroundColor: "#485158", color: 'white'}}>
        <img
          className="ml-6 pt-6"
          src="/images/prev-icon-footer.svg"
          alt="Previdenciárista"
          style={{ width: '77px', height: '62px' }}
        />
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

export default CalculosPrevidenciariosProduto;
