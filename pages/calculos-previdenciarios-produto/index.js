import CalculosComponent from "./CalculosPrevidenciariosProduto";
import { getCanonicalUrl } from "../api/services/global";

function Calculos({originalUrl}) {
  return (
    <CalculosComponent
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

export default Calculos;

