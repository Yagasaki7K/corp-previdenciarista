import ComponentJurisprudencias from "./Jurisprudencias";
import { fetchJurisprudencias, getCanonicalUrl, handleJurisprudencias } from "../api/services/produto";

function Jurisprudencias({ queryParams, decisoes, hasMore, originalUrl }) {
  return (
    <ComponentJurisprudencias
      queryParams={queryParams}
      decisoes={decisoes}
      hasMore={hasMore}
      originalUrl={originalUrl}
    />
  )
};

export const getStaticProps = async ({ context }) => {
  const originalUrl = getCanonicalUrl(context);

  const params = {
    tipoDeBeneficio: null,
    q: null,
  };

  const { decisoes, ...rest } = await fetchJurisprudencias(params);
  return {
    props: {
      queryParams: params,
      decisoes: handleJurisprudencias(decisoes),
      hasMore: decisoes.length < rest.total,
      originalUrl,
    }
  };
};

export default Jurisprudencias;
