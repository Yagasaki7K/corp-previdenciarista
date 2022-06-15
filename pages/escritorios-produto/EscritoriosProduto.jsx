/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Footer from '../../components/footer';
import { OptionFooter } from '../../components/footer/option';
import ContainerTextBodyImg from '../../atoms/containers/containerTextBodyImg';
import ContainerTestFree from '../../atoms/containers/containerTrial';
import FixedBottom from '../../atoms/fixedBottom';
import { OptionTitleBodyImg } from '../api/utils/escritoriosProduto';
import NavBar from '../../components/navbar';

const EscritorioProduto = ({ originalUrl }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Escritório previdenciário online - Previdenciarista" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Home - Previdenciarista" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <title>Escritório previdenciário online - Previdenciarista</title>
        <link rel="canonical" href={originalUrl} />
      </Head>
      <NavBar />
      <div className="flex flex-col pt-14 px-5 mt-36 items-center text-default-text_body">
        <div>
          <h1 className="font-bold text-prev-default-text_body text-[29px] leading-lheight13 lg:text-size48">
            Trabalhe em equipe no seu escritório virtual
          </h1>
        </div>
        <p className="mt-2 text-center text-base text-prev-default-select lg:text-size24 lg:max-w-[1027px]">
          Tenha um endereço virtual próprio e reúna sua equipe “local” no seu escritório virtual. Coordene e saiba quem fez o que, quando e em qual cliente.
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

export default EscritorioProduto;
