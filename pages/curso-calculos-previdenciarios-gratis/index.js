import CursoCalculosPrevidenciariosGratisComponent from "./CursoCalculosPrevidenciariosGratis";
import { getCanonicalUrl } from "../api/services/global";

function CursoCalculosPrevidenciariosGratis({originalUrl}) {
  return (
    <CursoCalculosPrevidenciariosGratisComponent
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

export default CursoCalculosPrevidenciariosGratis;
