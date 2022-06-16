import EscritorioComponent from "./Advogados";
// import loadable from '@loadable/component'
import { fetchCatalogos, fetchEspecialidades } from '../api/services/advogados';

// const OtherComponent = loadable(() => import('./Advogados'))

function Escritorio(props) {
  return (
    <EscritorioComponent props={props || {}} />
  )
};

export const getStaticProps = async () => {
  const uf = "";
  const cidade = "";
  const originalUrl = "";

  const params = {
    tipoDeBeneficio: null || {},
    q: null || {},
  };

  let cidadeTitle = '';
  let ufTitle = '';

  const { escritorios = [], ...rest } = await fetchCatalogos();
  const especialidades = await fetchEspecialidades();
  // console.log('server: ', escritorios, especialidades)

  return {
    props: {
      queryParams: params,
      escritorios,
      especialidades,
      ufUrl: uf,
      cidadeUrl: cidade,
      cidadeTitle,
      ufTitle,
      hasMore: escritorios.length && escritorios.length >= 20,
      originalUrl,
      ...rest,
    }
  };
};

export default Escritorio;
