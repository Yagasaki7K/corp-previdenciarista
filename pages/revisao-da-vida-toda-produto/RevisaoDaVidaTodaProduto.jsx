/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Footer from '../../components/footer';
import { OptionFooter } from '../../components/footer/option';
import ContainerTestFree from '../../atoms/containers/containerTrial';
import FixedBottom from '../../atoms/fixedBottom';
import NavBar from '../../components/navbar';
import Carousel from '../../components/carousel';
import ContainerTextBodyImg from '../../atoms/containers/containerTextBodyImg';
import { OptionTitleBodyImg } from '../api/utils/revisaoDaVidaTodaProduto';

const RevisaoDaVidaTodaProduto = ({ originalUrl }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Home - Prevideciarista" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Home - Previdenciarista" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <title>Calculadora de Revisão da Vida Toda - Previdenciarista</title>
        <link rel="canonical" href={originalUrl} />
      </Head>
      <div className='relative'>
        <NavBar />
        <div className="flex flex-col pt-14 px-5 mt-36	items-center text-default-text_body">
          <div>
            <h1 className="font-bold text-prev-default-text_body text-[29px] leading-lheight13 lg:text-size48">
              Calcule a Revisão da Vida Toda em poucos cliques!
            </h1>
          </div>
          <p className="mt-2 text-center text-base text-prev-default-select lg:text-size24 lg:max-w-[1007px]">
            O Prev calcula automaticamente para você, a partir do CNIS, todas as possibilidades de revisão da vida toda para qualquer benefício aplicável.
          </p>
        </div>
        <div className="w-auto m-5">
          <iframe
            src="https://player.vimeo.com/video/402997506?autoplay=1"
            width="100%"
            height="300"
            allow="autoplay; fullscreen"
          />
        </div>
        <div className="mx-6">
          {OptionTitleBodyImg.map((data, index) => {
            {if (index < 2) {
              return (
                <ContainerTextBodyImg key={index} props={data} />
              )
            }}
          })}
        </div>
        <div className="text-center">
      </div>
      <div className="lg:flex lg:justify-center">
        <Carousel />
      </div>
      <div className="mx-6">
        {OptionTitleBodyImg.map((data, index) => {
          {if (index >= 2) {
            return (
              <ContainerTextBodyImg key={index} props={data} />
            )
          }}
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
      </div>
    </>
  );
};

export default RevisaoDaVidaTodaProduto;
