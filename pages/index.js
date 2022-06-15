import HomePage from "./home";
// import {
//   fetchBlogPosts,
//   fetchNews,
//   fetchColunas,
// } from './api/services/wordpress';
// import { fetchJurisprudencias, getCanonicalUrl, handleJurisprudencias } from "./api/services/produto";

export default function Home({blog, noticias, colunas, decisoes, originalUrl}) {
  return (
    <HomePage
      blog={blog}
      noticias={noticias}
      colunas={colunas}
      decisoes={decisoes}
      originalUrl={originalUrl}
    />
  )
};

// export const getStaticProps = async ({context}) => {
//   const originalUrl = getCanonicalUrl(context)

//   const promises = [
//     fetchBlogPosts(),
//     fetchColunas(),
//     fetchNews(),
//     fetchJurisprudencias({
//       size: 3,
//       ordenaPor: 'DATA_DE_ATUALIZACAO',
//       tipoDeOrdenacao: 'DESC'
//     }),
//   ];

//   const [blogPosts, colunas, noticias, decisoes] = await Promise.all(promises);

//   return {
//     props: {
//       blog: blogPosts,
//       noticias,
//       colunas,
//       decisoes: handleJurisprudencias(decisoes.decisoes),
//       originalUrl,
//     }
//   };
// };
