/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import Head from 'next/head';
import FixedBottom from '../../atoms/fixedBottom';
import NavBar from '../../components/navbar';
import { OptionFooter } from '../../components/footer/option';
import Footer from '../../components/footer/Footer';
import ContainerFilterListWrapper from '../../components/jurisprudencia';

const Jurisprudências = ({queryParams, decisoes: propDecisoes, hasMore: propsHasmore, next: propNext, isMobile }) => {
  const [ischangeColor, setIsChangeColor] = useState(null);

  useEffect(() => {
    window.addEventListener('scroll', checkHeader);
  }, [ischangeColor]);

  const checkHeader = () => {
    const scrollPosition = Math.round(window.scrollY);
    setIsChangeColor(scrollPosition > 19);
  }


  return (
    <div className='relative'>
      <Head>
        <meta name="description" content="Jurisprudências Previdenciárias - Previdenciarista" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Home - Previdenciarista" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <title>Jurisprudências Previdenciárias - Previdenciarista</title>
      </Head>
      <NavBar ischangeColor={ischangeColor} />

      <ContainerFilterListWrapper
        propDecisoes={propDecisoes}
        propsHasmore={propsHasmore}
        propNext={propNext}
        queryParams={queryParams}
      />

      <div className="pb-12 mt-10" style={{ backgroundColor: "#485158", color: 'white'}}>
        <img className="ml-6 pt-6" src="/images/prev-icon-footer.svg" alt="Previdenciárista" style={{ width: 77, height: 62 }}/>
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

export default Jurisprudências;
