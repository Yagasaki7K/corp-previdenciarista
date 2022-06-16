import { useState } from "react";
import { useRouter } from 'next/router'
import JurisprudenciaCard from "./JurisprudenciaCard";
import ContentLoader from 'react-content-loader';

const skeletons = [1];

const classListWrapper = `flex-1 w-full max-w-[1300px] py-[22px] px-0 lg:w-[1019px]`;

const classListContainer = `w-full justify-center px-[30px] lg:px-[0px]`;

const classCardContainer = `flex  flex-col w-full bg-prev-default-bg_white h-full`;

const classFilterButton = `flex h-[30px] normal-case	items-center	`;

const ListWrapperContainer = ({ decisoes, hasMore, setHasMore, next: propNext, isLoading, setIsLoading, isLoadingMore, loadMore }) => {
  const Router = useRouter()
  const [loadingDecisaoId, setLoadingDecisaoId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [textModal, setTextModal] = useState("");

  return (
    <div className={classListWrapper}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <div className={classListContainer}>
          {isLoading ? (
            skeletons.map((e) => (
              <div className={classCardContainer}
                key={`skeleton_${e}`}
                style={{ padding: '16px', maxHeight: 150, marginTop: 10 }}
                ariaLabel="Carregando decisões"
              >
                <ContentLoader>
                  <rect x="0" y="0" rx="3" ry="3" width="170" height="8" />
                  <rect x="0" y="20" rx="3" ry="3" width="400" height="8" />
                  <rect x="0" y="40" rx="3" ry="3" width="400" height="8" />
                  <rect x="0" y="60" rx="3" ry="3" width="220" height="8" />
                </ContentLoader>
              </div>
            ))
          ) : decisoes && decisoes.length > 0 ? (
            <>
              {decisoes.map(({ id, slug, ...props }) => {
                return (
                  <div key={id}>
                    <>
                      {loadingDecisaoId === id ? (
                        <></>
                      ) : (
                        <>
                          <JurisprudenciaCard
                            hrefTitulo={`/${slug}`}
                            onClick={() => {
                              Router.push(`/${slug}`);
                              setLoadingDecisaoId(id);
                            } }
                            disableClick={false}
                            key={id}
                            onCopyContent={() => {
                              setShowModal(true);
                              setTextModal(props.ementa);
                            } }
                            {...props}
                          />
                        </>
                      )}
                    </>
                  </div>
                );
              })}

              {isLoadingMore &&
                skeletons.map((e) => (
                  <div className={classCardContainer}
                    key={`skeleton_${e}`}
                    style={{ padding: '16px', maxHeight: 150 }}
                    ariaLabel="Carregando decisões"
                  >
                    <ContentLoader>
                      <rect x="0" y="0" rx="3" ry="3" width="170" height="8" />
                      <rect x="0" y="20" rx="3" ry="3" width="400" height="8" />
                      <rect x="0" y="40" rx="3" ry="3" width="400" height="8" />
                      <rect x="0" y="60" rx="3" ry="3" width="220" height="8" />
                    </ContentLoader>
                  </div>
                ))}
            </>
          ) : (
            <p>Nenhum resultado encontrado.</p>
          )}
        </div>
        {hasMore && !isLoading && (
          <button
            className={classFilterButton}
            secondary
            as="button"
            onClick={(ev) => loadMore(ev)}
            style={{
              justifyContent: 'center',
              gridColumn: 2,
              height: '36px',
              maxWidth: '270px',
              alignSelf: 'center',
              width: '100%',
              marginTop: '24px',
              marginRight: 0,
              marginBottom: '24px',
            }}
          >
            carregar mais
          </button>
        )}
      </div>
    </div>
  )
}

export default ListWrapperContainer;