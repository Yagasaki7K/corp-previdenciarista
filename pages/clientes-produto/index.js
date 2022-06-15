import ClientesComponent from "./ClientesProduto";
import { getCanonicalUrl } from "../api/services/global";

function Clientes({originalUrl}) {
  return (
    <ClientesComponent
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

export default Clientes;
