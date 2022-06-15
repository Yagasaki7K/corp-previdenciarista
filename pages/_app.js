import '../styles/globals.css';
import { CorporateContactJsonLd } from 'next-seo';
import { ParallaxProvider } from 'react-scroll-parallax';

function SitePrevidenciarista({ Component, pageProps }) {
    return (
        <>
            <ParallaxProvider>
                <CorporateContactJsonLd
                    url="https://previdenciarista.com/"
                    logo="https://previdenciarista.com/blog/wp-content/uploads/2019/03/logo-horizontal-660x102-1.png"
                    contactPoint={[]}
                />
                <Component {...pageProps} />
            </ParallaxProvider>
        </>
    )
}

export default SitePrevidenciarista;
