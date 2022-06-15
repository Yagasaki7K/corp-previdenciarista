import LiquidacaoComponent from "./LiquidacaoProduto";
import { getCanonicalUrl } from "../api/services/global";

function Liquidacao({originalUrl}) {
  return (
    <LiquidacaoComponent
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

export default Liquidacao;
