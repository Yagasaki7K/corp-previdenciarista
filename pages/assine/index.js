import AssinePage from "./Assine";
// import { getCanonicalUrl } from "../api/services/global";
// import axios from "axios";
// import { API_DASHBOARD_HOST_V2 } from "../api/constants";

const Assine = ({originalUrl, anual, mensal}) => {
  return <AssinePage originalUrl={originalUrl} anual={anual} mensal={mensal} />
}

// export const getStaticProps = async ({req}) => {
//   const originalUrl = getCanonicalUrl(req);
//   const tipoDeProduto = "CALCULO_PETICOES";
//   const url = `${API_DASHBOARD_HOST_V2}/pricing`;
//   const [{ data: anual }, { data: mensal }] = await Promise.all([
//     axios.put(url, { tipoDeProduto, intervalo: "ANUAL" }),
//     axios.put(url, { tipoDeProduto, intervalo: "MENSAL" })
//   ])

//   return {
//     props: {
//       originalUrl,
//       anual,
//       mensal
//     } 
//   };
// };

export default Assine;
