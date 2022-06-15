/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import FixedBottom from '../../atoms/fixedBottom';
import Header from '../../components/header';
import NavBar from '../../components/navbar';
import { OptionHeader, OptionTitleBodyImage } from '../api/utils/diretorioDeAdvogados';
import { OptionFooter } from '../../components/footer/option';
import ContainerTextBodyImg from '../../atoms/containers/containerTextBodyImg';
import Footer from '../../components/footer/Footer';
import ContainerTestFree from '../../atoms/containers/containerTrial';

const DiretorioProduto = ({ originalUrl }) => {
  return (
    <div className='relative'>
      <Head>
        <meta name="description" content="Cálculos previdenciários em segundos - Previdenciarista" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Home - Previdenciarista" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <title>Cálculos previdenciários em segundos - Previdenciarista</title>
        <link rel="canonical" href={originalUrl} />
      </Head>
      <NavBar />
      <Header props={OptionHeader}/>

      <div className='mx-6'>
        {OptionTitleBodyImage.map((data, index) => {
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
    </div>
  );
};

export default DiretorioProduto;
