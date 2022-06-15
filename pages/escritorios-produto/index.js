import EscritorioComponent from "./EscritoriosProduto";
import { getCanonicalUrl } from "../api/services/global";

function Escritorio({originalUrl}) {
  return (
    <EscritorioComponent
      originalUrl={originalUrl}
    />
  )
};

export const getStaticProps = async ({context}) => {
  const originalUrl = getCanonicalUrl(context)

  return {
    props: {
      originalUrl,
    }
  };
};

export default Escritorio;
