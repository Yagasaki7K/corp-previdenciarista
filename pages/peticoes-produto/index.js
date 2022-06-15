import PeticaoComponent from "./PeticoesProduto";
import { getCanonicalUrl } from "../api/services/global";

function Peticao({originalUrl}) {
  return (
    <PeticaoComponent
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

export default Peticao;
