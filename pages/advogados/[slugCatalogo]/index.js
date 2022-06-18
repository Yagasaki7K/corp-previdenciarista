import EscritorioComponent from "./Escritorio";
import { getCanonicalUrl } from "../../api/services/global";
import { fetchCatalogoMembrosSLug, fetchCatalogos, fetchCatalogoSLug } from "../../api/services/advogados";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

function Escritorio({ queryParams, catalogo, membros, originalUrl }) {
    return (
        <>
            <GoogleReCaptchaProvider
                reCaptchaKey="6Lf0VccUAAAAANdGE1BkdpnSEnbb07RmUKLIP3KK"
                language="pt-BR"
            >
                <EscritorioComponent
                    queryParams={queryParams}
                    catalogo={catalogo}
                    membros={membros}
                    originalUrl={originalUrl}
                />
            </GoogleReCaptchaProvider>
        </>
    )
};

export const getStaticPaths = async () => {
    const params = {
        tipoDeBeneficio: null,
        q: null,
    };

    const { escritorios } = await fetchCatalogos(params);
    const paths = escritorios.map(({ slugCatalogo }) => {
        return {
            params: { slugCatalogo },
        }
    })
    return { paths, fallback: true }
}

export const getStaticProps = async (context) => {
    const { params: { slugCatalogo } } = context;
    const originalUrl = getCanonicalUrl(slugCatalogo);

    const params = {
        slugCatalogo,
    };

    const catalogo = await fetchCatalogoSLug(params);
    const membros = await fetchCatalogoMembrosSLug(params);
    console.log("server: ", slugCatalogo)

    return {
        props: {
            queryParams: slugCatalogo,
            catalogo,
            membros,
            originalUrl,
        }
    }
};

export default Escritorio;
