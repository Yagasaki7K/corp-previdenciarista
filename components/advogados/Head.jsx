import React, { memo } from 'react';
import Head from 'next/head';

const HeaderMeta = ({props = {}, nome, content, hrefUrl}) => {

  return (
    <>
      <Head>
        <meta name={nome} content={content} />
        {props?.cidadeTitle ? (
          <title>Advogado Previdenciário (INSS) em {props?.cidadeTitle} ({props?.ufTitle}) - Previdenciarista</title>
        ) : (
          <title>Buscar Advogados Previdenciários (INSS) - Previdenciarista</title>
        )}
        <link href={hrefUrl} rel="preload" as="style" />
      </Head>
    </>
  );
}

export default memo(HeaderMeta);
