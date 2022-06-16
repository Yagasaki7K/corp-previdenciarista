/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import CollapseHome from '../../components/home/collapses';
import { OptionCollapse } from '../../components/home/collapses/options';
import ContainerHome from '../../atoms/containers';
import OptionContainerHome from '../../atoms/containers/option';
import Footer from '../../components/footer';
import { OptionFooter } from '../../components/footer/option';
import ContainerTrial from '../../atoms/containers/containerTrial';
import FixedBottom from '../../atoms/fixedBottom';
import NavBar from '../../components/navbar';
import WordpressSection from '../../components/home/wordpress/WordPress';
import Carousel from '../../components/carousel';

const HomePage = ({ blog, noticias, colunas, decisoes, originalUrl }) => {
    return (
        <div className="relative">
            <Head>
                <meta name="description" content="Home - Prevideciarista" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Home - Previdenciarista" />
                <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
                <title>Cálculos Previdenciários e Petições para Advogados - Previdenciarista</title>
                <link rel="canonical" href={originalUrl} />
            </Head>

            <NavBar />

            <div className="fundoHome">
                <div className="flex flex-col mt-20 px-8 items-center min-h-[800px] home-content">

                    <div className="w-[584px]">
                        <h1 className="text-title36 pt-64 mb-8 font-black text-prev-default-text_body leading-lheight46">
                            Seu escritorio previdenciário nunca foi tão moderno.
                        </h1>
                        <p className="text-base leading-1_44">Faça cálculos diretamente a partir do CNIS, saiba quais benefícios estão disponíveis e receba recomendações de petições que venceram casos reais. Receba tudo pronto para o processo.</p>
                    </div>

                    <div>
                        <img src="/images/home/escritorio.svg" alt="Logo" className="absolute opacity-25 bg-contain	px-5" />
                    </div>
                </div>

                <div className="flex flex-col pt-12 px-5 items-center home2-content">
                    <h1 className="text-title30 pt-4 font-bold	text-gray-800 max-w-lg">
                        Faça um cálculo previdenciário em até 5 minutos!
                    </h1>
                    <div className="mt-8 home-content-calc">
                        <p>Reforma da previdência, cálculo automático a partir do CNIS, cálculo de qualidade de
                        segurado, conversão de tempos especiais em comum e especiais em especiais, checagem de
                        pendências, panorama completo dos benefícios, relatórios de tempo e RMI.
                        </p>
                        
                        <p className="text-sub_title20 font-semibold mt-1.5 home-content-bold">
                            FAÇA QUANTOS CÁLCULOS QUISER, SEM LIMITES!
                        </p>
                    </div>
                </div>
            </div>

            <div className="pt-8 px-5 drop-shadow-sm home-three-content">
                {OptionCollapse.map((data, index) => {
                    return (
                        <CollapseHome key={index} props={data} />
                    )
                })}
            </div>
            <div className="flex flex-col mt-40 px-5 items-center home-four-content">
                {OptionContainerHome.map((data, index) => {
                    return (
                        <ContainerHome key={index} props={data} />
                    )
                })}
            </div>

            <Carousel />

            <WordpressSection
                blog={blog || []}
                noticias={noticias || []}
                colunas={colunas || []}
                decisoes={decisoes || []}
            />

            <div className=''>
                <ContainerTrial />
            </div>

            <div className="mb-10 pb-10" style={{ backgroundColor: "#485158", color: 'white' }}>
                <img className="ml-6 pt-6" src="/images/prev-icon-footer.svg" alt="Previdenciárista" style={{ width: "77px", height: "62px" }} />
                <div>
                    {OptionFooter.map((data, index) => {
                        return (
                            <Footer key={index} props={data} />
                        )
                    })}
                </div>
            </div>
            <FixedBottom />
        </div>
    );
};

export default HomePage;
