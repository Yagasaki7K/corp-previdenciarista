import Head from 'next/head';
import Navbar from "../../components/navbar"
import CardPrice from '../../components/assine';
import Button from '../../atoms/button/Button';
import TableFeatures from '../../components/assine/TableFeatures';
import Depoimentos from '../../components/assine/Depoimentos';
import Faq from '../../components/assine/Faq';
import TrialBottom from '../../atoms/fixedBottom';
import { features, faq } from '../api/utils/assine';
import Carousel from "../../components/carousel";
import { OptionFooter } from '../api/utils/assine';
import Footer from '../../components/footer';
import Link from 'next/link';

const AssinePage = ({ originalUrl = "", anual = {}, mensal = {} }) => {
    const infoCardPrice = [
        {
            intervalo: "ANUAL",
            value: anual.valor,
            discount: anual.valorDoDesconto
        },
        {
            intervalo: "MENSAL",
            value: mensal.valor,
            discount: null
        }
    ];
    return (
        <>
            <Head>
                <meta name="description" content="Assine - Prevideciarista" />
                <title>Planos de assinatura - Previdenciarista</title>
                <link rel="canonical" href={originalUrl} />
            </Head>

            <Navbar />

            <header className="mt-10 mb-8">
                <div className="w-auto flex flex-col max-w-7xl justify-center text-center px-5">
                    <h1
                        className="text-size30 leading-lheight56 font-semibold not-italic py-9 text-prev-assine-textos"
                    >
                        Economize tempo e dinheiro com o Prev
                    </h1>
                    <p className="text-size20 font-semibold text-center leading-lheight26 text-prev-assine-textos">
                        Comparado aos softwares tradicionais, você economiza até 90% do orçamento e vê uma melhoria significativa de produtividade do seu escritório.
                    </p>
                </div>
            </header>

            <>
                {infoCardPrice.map(({ intervalo, value, discount }, i) => (
                    <CardPrice key={i} intervalo={intervalo} value={value} discount={discount} />
                ))}
            </>

            <div className="w-auto m-4 text-prev-assine-bg_white px-5 py-5 bg-prev-assine-borda_card_ano shadow-lg rounded">
                <div>
                    <h2 className="font-calibri pt-6 mb-3 text-size24 font-semibold">Curso Grátis de Cálculos Previdenciários</h2>
                    <p className="font-calibri mb-5 text-base">
                        Mais um benefício para você assinante, não perca tempo e dinheiro, assine agora o plano que mais se encaixa para você e sua equipe.
                    </p>
                </div>

                <Button
                    intervalo={false}
                    background="bg-prev-assine-bg_white"
                    cor="text-prev-assine-borda_card_ano"
                >
                    <Link href="/curso-calculos-previdenciarios-gratis">
                        Saiba mais
                    </Link>
                </Button>
            </div>

            <>
                <TableFeatures />
            </>

            <>
                <div style={{ margin: '10px 20px' }}>
                    <h2 className="font-calibri font-semibold leading-lheight44 text-size38 text-center">
                        Ainda está com dúvida de que o Prev é o melhor?
                    </h2>
                    <div style={{ marginTop: 16, maxWidth: 670 }}>
                        <p className="font-calibri text-base text-center">
                            Comparado aos softwares tradicionais, você economiza até 90% do orçamento e vê uma melhoria significativa de produtividade do seu escritório.
                        </p>
                    </div>
                </div>
                <div className="w-auto flex flex-col justify-center m-5">
                    {features.map(([title, sub]) => (
                        <div
                            className="mb-5 py-[30px] px-[20px] border-b-8 border-prev-assine-borda_card_mes bg-prev-assine-bg_white shadow-md rounded" key={title}
                        >
                            <h3 className="mb-5 font-calibri font-bold text-title26 text-prev-assine-textos">{title}</h3>
                            <p className="font-calibri text-base">{sub}</p>
                        </div>
                    ))}
                </div>
            </>

            <div className="w-auto flex flex-col flex-nowrap">
                <Depoimentos />

                <div className="my-10">
                    <Carousel />
                </div>

                <>
                    <h2 className="p-[9px] font-calibri font-black text-prev-assine-depoimentos text-size22 text-center">
                        Perguntas frequentes
                    </h2>
                    {
                        faq.map((props, index) => (
                            <Faq key={index} props={props} />
                        ))
                    }
                </>
            </div>

            <div className="mb-10 py-8" style={{ backgroundColor: "#485158", color: 'white' }}>
                <div>
                    {OptionFooter.map((data, index) => {
                        return (
                            <Footer key={index} props={data} />
                        )
                    })}
                </div>
            </div>

            <TrialBottom />
        </>
    )
}

export default AssinePage;
