import React, { useState } from 'react';
import { formatDate } from '../../pages/api/services/produto';
import renderHTML from 'react-html-parser';

const classCardHeader = `flex items-center h-[55px] px-[16px]`;

const classCardDate = `text-size11 font-normal not-italic	leading-normal text-prev-default-subtitle	`;

const classCardTitle = `${classCardDate} uppercase	text-ellipsis	 overflow-hidden	mr-[8px] whitespace-nowrap`;

const classCardBody = `flex`;

const classBodyText = `text-size16 px-[16px] not-italic text-prev-home-p_word_pres`;

const classText = `text-size14 text-prev-default-bg_blue1 p-[14px]`;

const JurisprudenciaCard = ({ onClick, disableClick, tags, onCopyContent, ...props }) => {
  const [isViewFull, setIsViewFull] = useState(false);

  const renderCitacao = (texto, highlight) => {
    var x = 0;
    const highlights = highlight ? highlight.split(' ') : [];

    if (texto?.length > 500) {
      texto = texto.substring(0, 500) + ` ...`;
    }

    return texto?.split('\n').map((i, key) => {
        i = i.trim();
        
        if (i !== '' && i !== 'E M E N T A') {
          if (highlights.length) {
            highlights.map((h) => {
              if (
                (preposicoes.indexOf(h) === -1 || preposicoes.indexOf(h.toUpperCase()) === -1) &&
                h.length > 2
              ) {
                i = i.replace(
                  new RegExp(
                    '\\b(' + h.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '') + ')\\b',
                    'gim'
                  ),
                  (match) => `<span class="highlight">${match}</span>`
                );
              }
            });
          }

          return (
            <div type={'p2'} style={x++ === 0 ? { marginBottom: 10 } : {}} key={key}>
              {renderHTML(i)}
            </div>
          );
        } else {
          return null || {};
        }
      }, this)
      .filter((i) => i !== null || {})
      .slice(0, 3);
  };
  
  const renderCitacaoFull = (texto, highlight) => {
    var x = 0;
    const highlights = highlight ? highlight.split(' ') : [];
    
    const textoFull = texto
    .split('\n')
    .map((i, key) => {
      i = i.trim();
      if (i !== '' && i !== 'E M E N T A') {
          if (highlights.length) {
            highlights.map((h) => {
              if (
                (preposicoes.indexOf(h) === -1 || preposicoes.indexOf(h.toUpperCase()) === -1) &&
                h.length > 2
              ) {
                i = i.replace(
                  new RegExp(
                    '\\b(' + h.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '') + ')\\b',
                    'gim'
                  ),
                  (match) => `<span class="highlight">${match}</span>`
                );
              }
            });
          }

          return (
            <p type={'p2'} style={x++ === 0 ? { marginBottom: 10 } : {}} key={key}>
              {renderHTML(i)}
            </p>
          );
        } else {
          return null || {};
        }
      }, this)
      .filter((i) => i !== null || {});
      
      
      return textoFull
    };
    
  const classDisableClick = `cursor-pointer transition-shadow	will-change-[box-shadow]}`;

  const classCardContainer = `flex w-full shadow hover:shadow-2xl shadow-blue-500/100 rounded bg-prev-default-bg_white flex-col h-full my-[10px] ${disableClick ? '' : classDisableClick }`;

  return (
    <div
      className={classCardContainer}
    >
      <div className={classCardHeader}>
        <p className={classCardTitle}>
          <span className="text-sm font-medium bg-prev-default-bg_blue1 py-1 px-2 rounded text-green-500 align-middle">
            {`${props.tribunal} ${props.uf && props.uf[0] ? `(${props.uf[0]})` : ``}`}
          </span>
        </p>

        <p className={classCardTitle}>PROCESSO: {props.processo}</p>
        <p className={classCardTitle}>{props.relator}</p>
        <p className={classCardDate}>Data da publicação: {formatDate(props?.dataPublicacao)}</p>
      </div>

      <div className={classCardBody}>
        <div className={classBodyText}>
          {!isViewFull ? renderCitacao(props.ementa) : renderCitacaoFull(props.ementa)}
        </div>
      </div>

      <div className='flex justify-between'>
        <div>
          <div>
            <div
              className={classText}
              onClick={() => setIsViewFull(!isViewFull)}
            >
              {props.ementa?.length > 500 && (
                <>
                  {!isViewFull ? (
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" strokeWidth="2">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg> Ver mais
                    </div>
                  ) : (
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" strokeWidth="2">
                        <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                      </svg> Recolher
                    </div>
                    )}
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex">
          <div className={classText}>
            {!props.possuiInteiroTeor ? null || {} : (
                <div
                  // className="flex"
                  onClick={(ev) => {
                    ev.stopPropagation();
                    if (!disableClick) {
                      onClick(ev);
                    }
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  {` `}
                  <a href={props.hrefTitulo}>Ver inteiro teor</a>
                </div>
              )}
          </div>
          <div className={classText}>
            <div
              // className="flex"
              onClick={onCopyContent}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              {` `}
              Copiar sem formatação
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JurisprudenciaCard;
