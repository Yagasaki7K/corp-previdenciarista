import Head from "next/head";
import dynamic from 'next/dynamic';
import NavBar from "../../components/navbar";
const Lottie = dynamic(() => import('react-lottie'));
import animationData1 from '../api/utils/casosPrevidenciarios/animations/animacao1.json';
import animationData2 from '../api/utils/casosPrevidenciarios/animations/animacao2.json';
import Mail from "../../atoms/Icons/Mail";
import Branches from "../../atoms/Icons/Branches";
import FileSearch from "../../atoms/Icons/FileSearch";
import ContainerTrial from "../../atoms/containers/containerTrial";
import { OptionFooter } from '../../components/footer/option';
import Footer from "../../components/footer";

function CasosPage({originalUrl}) {
  const features = [
    [
      <Mail key={1} />,
      'Recebemos as informações',
      'Todos os dias recebemos <strong>centenas de casos novos</strong> em todo o Brasil por meio do nosso questionário detalhado.',
    ],
    [
      <Branches key={2} />,
      'Segmentamos o caso',
      'O advogado assinante do Prev <strong>tem acesso a todos os casos</strong> diretamente no painel do seu escritório.',
    ],
    [
      <FileSearch key={3} />,
      'Avaliação do seu caso',
      'No painel do escritório você pode avaliar as informações prestadas pelo segurado e <strong>entrar em contato direto</strong>.',
    ],
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Head>
        <meta name="description" content="Casos Previdenciários - Previdenciarista" />
        <title>Casos Previdenciários - Previdenciarista</title>
        <link rel="canonical" href={originalUrl} />
      </Head>

      <NavBar /> 
      <div className="lg:flex lg:justify-center lg:pt-24">
        <header className="w-auto m-5 mt-24 lg:max-w-[1200px]">
          <h1
            className="
              font-bold
              text-center
              text-title26
              leading-lheight30
              text-prev-default-text_body
              lg:max-w-[600px]
              lg:text-left
              lg:text-size48
              lg:leading-lheight56
              lg:mb-5
              "
          >
            Já pensou em receber novos casos no conforto de sua casa ou escritório?
          </h1>
          <a className="trialContainer">
            Teste grátis por 15 dias!
          </a>
        </header>
        <div>
          <img
            src={`/images/casos-previdenciarios/mulher-advogada.png`}
            width={600}
            height={686}
            alt="Advogada com tablet na mão"
          />
        </div>
      </div>

      <div className="lg:flex lg:justify-center lg:pt-24">
        <div className="lg:max-w-[1200px] lg:flex lg:flex-col lg:items-center">
          <h2
            className="
              font-bold
              text-center
              text-title26
              leading-lheight30
              text-prev-default-text_body
              lg:max-w-[720px]
              lg:text-size48
              lg:leading-lheight44
              lg:mb-5
              "
          >
            Entre em contato diretamente com o segurado.
          </h2>

          <div
            className="
              m-5 text-center
              text-base
              leading-lheight44
              text-prev-default-subtitle
              lg:max-w-[555px]
              lg:text-base
              lg:leading-lheight28
            "
          >
            Selecione entre milhares de casos previdenciários enviados todos os dias por pessoas
            no Brasil inteiro e fale diretamente com o segurado.
          </div>

          <div
            className="w-auto m-5 lg:max-w-[711px] lg:max-h-[456px]"
            style={{ filter: `drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.07))` }}
          >
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animationData1,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice',
                },
              }}
              width={`100%`}
            />
          </div>
        </div>
      </div>

      <div className="lg:flex lg:justify-center">
        <div
          className="w-auto m-5 order-none lg:w-full lg:max-w-[1200px]"
        >
          <h2
            className="
              text-title26
              text-center
              text-prev-casos-subtitle
              leading-lheight30
              lg:text-size38
              lg:font-bold
              lg:leading-lheight25
              lg:my-20
              "
          >
            Como funciona o PrevCasos para o Advogado?
          </h2>

          <div className="flex flex-col">
            <div className="lg:flex lg:px-2 lg:justify-between">
              {features.map(([icon, title, text]) => (
                <div className="max-w-[240px] mb-6 text-prev-casos-subtitle" key={title}>
                  <div
                    className="w-[40px] h-[40px] mb-3.5 flex justify-center items-center bg-prev-default-text_white shadow-lg rounded"
                    >
                    {icon}
                  </div>
                  <h3 className="mb-1.5 text-sub_title20 font-bold leading-lheight26">{title}</h3>
                  <p className="text-size18 leading-lheight22" dangerouslySetInnerHTML={{ __html: text }} />
                </div>
              ))}
            </div>
          </div>
        </div>      
      </div>

      <div className="lg:flex lg:justify-center border">
        <div className="w-auto m-5 lg:w-full lg:max-w-[1200px] lg:flex">
          <img
            src="/images/casos-previdenciarios/tela_form_caso.png"
            alt="casos"
          />

          <div className="lg:flex lg:flex-col">
            <div
              className="my-5 font-bold text-title30 text-prev-default-text_body"
              style={{ maxWidth: 438, lineHeight: "normal" }}
            >
              Formulário inteligente direcionando o caso para você
            </div>
      
            <div className="my-5 text-base">
              O nosso formulário exclusivo foi pensado para reunir as principais informações de um
              primeiro atendimento.{' '}
              <strong>
                Milhares de pessoas no Brasil inteiro acessam o Prev diariamente e encaminham suas
                demandas previdenciárias.
              </strong>
            </div>

            <div className="my-5 text-base">
              Essas informações então são compartilhadas com os advogados assinantes do PrevCasos, que
              podem avaliar o caso e entrar em contato com o segurado se assim desejarem.
            </div>

            <button
              href="/assine"
              primary
              className="min-w-[284px] h-[54px] my-10 rounded cursor-pointer bg-prev-default-bg_orange border border-prev-default-bg_orange text-prev-default-text_white"
            >
              Teste grátis por 15 dias
            </button>
          </div>        
          
        </div>
      </div>

      <>
        <div className="w-auto m-5" style={{ maxWidth: 555 }}>
          <div
            className="my-5 font-bold text-center text-title26 text-prev-default-text_body"
            style={{ maxWidth: 438, lineHeight: "normal" }}
          >
            Ferramenta gratuita para assinantes por tempo LIMITADO
          </div>
          <div
            className="my-5 ml-[0px] text-base"
          >
            Esta ferramenta está incluída em todos os nossos planos e todo assinante do Prev,
            sem precisar pagar nada a mais por isso no tempo determinado.{' '}
            <a
              href="https://ajuda.previdenciarista.com/article/278-quanto-custa-o-prevcasos"
              target="_blank" rel="noreferrer"
            >
              Clique e entenda
            </a>
            .
          </div>
        </div>
        <div className="mb-10" style={{ maxWidth: 700, filter: `drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.07))` }}>
          <Lottie options={defaultOptions} width={`100%`} />
        </div>
      </>
      
      <div className="lg:flex lg:justify-center">
        <ContainerTrial />
      </div>          

      <div className="mt-10 pb-10" style={{ backgroundColor: "#485158", color: 'white'}}>
        <img className="ml-6 pt-6" src="/images/prev-icon-footer.svg" alt="Previdenciárista" />
        <div>
          {OptionFooter.map((data, index) => {
            return (
              <Footer key={index} props={data} />
            )
          })}
        </div>
      </div>
    </>
  )
};

export default CasosPage;
