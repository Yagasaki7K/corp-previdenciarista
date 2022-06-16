import Link from "next/link";

const Banner = () => (
    <Link href="/assine">
        <a>
            <div className="containerBanner">
                <p className="bannerTitle">Assine o Prev e automatize cálculos e petições previdenciárias.</p>
                <p className="bannerText">a partir de</p>
                <p className="bannerPrice">
                    R$ <span className="bannerPriceNumber">99</span> / mês
                </p>
                <button className="buttonBanner">
                    Teste grátis!
                </button>
            </div>
        </a>
    </Link>
);

export default Banner;
