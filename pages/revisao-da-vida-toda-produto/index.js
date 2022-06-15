import RevisaoComponent from "./RevisaoDaVidaTodaProduto";
import { getCanonicalUrl } from "../api/services/global";

function Revisao({originalUrl}) {
  return (
    <RevisaoComponent
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

export default Revisao;

