import { useState, useEffect } from "react";
import Head from "../../components/advogados/Head";
import Header from "../../components/advogados/Header";
import Footer from "../../components/footer";
import { OptionFooter } from "../../components/footer/option";
import NavBar from "../../components/navbar/navBarAdvogados";
import CatalogoCard from "../../components/advogados/Card"
import FixedBottom from '../../atoms/fixedBottom';

import ContentLoader from 'react-content-loader';
import { useGoogleReCaptcha, } from 'react-google-recaptcha-v3';
import axios from "axios";
import mapboxgl from 'mapbox-gl';
import { fetchCidades, fetchCatalogos } from "../api/services/advogados";
import MapaMobile from "../../components/advogados/MapaMobile";
import MapaDesktop from "../../components/advogados/MapaDesktop";

const showPosition = (position, callback) => {
  callback({
    lat: position.coords.latitude,
    long: position.coords.longitude,
  });
};

const getLocation = (callback, callbackError = null) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => showPosition(position, callback),
      (error) => showError(error, callbackError)
    );
  } else {
    return {
      error: 'Seu browser não suporta Geolocalização.',
    };
  }
};

const showError = (error, callbackError) => {
  let errorMsg;
  switch (error.code) {
    case error.PERMISSION_DENIED:
      errorMsg = 'Usuário rejeitou a solicitação de Geolocalização.';
      break;
    case error.POSITION_UNAVAILABLE:
      errorMsg = 'Localização indisponível.';
      break;
    case error.TIMEOUT:
      errorMsg = 'A requisição expirou.';
      break;
    case error.UNKNOWN_ERROR:
      errorMsg = 'Algum erro desconhecido aconteceu.';
      break;
  }

  callbackError && callbackError(errorMsg);
};

const skeletons = [1, 2, 3];

function Advogados({props}) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [cidades, setCidades] = useState({
    servico: null,
    cidades: [],
    listaCidadeOpen: false,
    cidadeSelecionada: null,
    cidadeSelecionadaId: null,
    cidadeEstadoSelecionado: null,
    filterCidade: { nome: null },
  });
  const [localizationNavegador, setLocalizationNavegador] = useState(null);
  const [escritoriosOffice, setEscritoriosOffice] = useState(props?.escritorios || []);
  const [state, setState] = useState({
    servico: null,
    q: '',
    tipo: [],
    tipoDeBeneficio: [],
    filter: {},
    isLoading: true,
    isLoadingMore: false,
    next: props?.next || false,
    loadingPeticaoId: null,
    showMapaMobile: false,
    especialidades: props?.especialidades || []
  });
  const [hasMore, setHasMore] = useState(escritoriosOffice.length && escritoriosOffice.length >= 10);
  const [next, setNext] = useState(props?.next || false);
  const [showMapaMobile, setShowMapaMobile] = useState(false);

  const getUf = (features) => {
    if (!features || !features.length) return null;
    if (!features[0] || !features[0].context) return null;
    return features[0].context[0].short_code.split('-')[1];
  };
  
  const getLocalizationBrowser = () => {
    getLocation(
      async (localization) => {
        axios
          .get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${localization.long},${localization.lat}.json?&access_token=${mapboxgl.accessToken}&types=place`
          )
          .then(async (r) => {
            const { features } = r.data;
            let cidade = null;
            let uf = null;
            if (features && features.length) {
              cidade = features[0].text;
              uf = getUf(features);
            }

            if (cidade && uf) {
              const cidades = await fetchCidades({
                nome: cidade,
                uf,
              });
              if (cidades) {
                setCidades((prevState) => ({
                  ...prevState,
                  cidadeSelecionada: cidades[0].descricao,
                  cidadeSelecionadaId: cidades[0].id,
                })),
                setLocalizationNavegador(localization);
                buscarCatalogos();
              }
            }
          });
      },
      () => {
      }
    );
  };

  async function loadFromCidadeUrl() {
    let { cidadeUrl, ufUrl } = props;
    if (cidadeUrl.indexOf('-') > -1) {
      cidadeUrl = cidadeUrl.replaceAll('-', ' ');
    }
    const cidades = await fetchCidades({
      nome: cidadeUrl,
      uf: ufUrl,
    });
    if (cidades) {
      setCidades((prevState) => ({
        ...prevState,
        cidadeSelecionadaId: cidades[0].id,
        cidadeSelecionada: cidades[0].nome,
        cidadeEstadoSelecionado: `${cidades[0].nome} ${ufUrl}`,
      }));
      setState((prevState) => ({
        ...prevState,
        cidadeSelecionadaId: cidades[0].id,
        cidadeSelecionada: cidades[0].nome,
        cidadeEstadoSelecionado: `${cidades[0].nome} ${ufUrl}`,
      })),
      buscarCatalogos();
      getCidadeMap();
    }
  }

  const getCidadeMap = () => {
    if (state.cidadeEstadoSelecionado) {
      axios
        .get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${state.cidadeEstadoSelecionado}.json?&access_token=${mapboxgl.accessToken}&country=br&types=place&limit=1`
        )
        .then(async (r) => {
          if (r && r.data && r.data.features) {
            const cordenadas = r.data.features[0].center;
            setLocalizationNavegador((prevState) => ({
              ...prevState,
              lat: cordenadas[1],
              long: cordenadas[0],
            }));
          }
        });
    }
  };

  async function loadMore(ev) {
    const captchaToken = await executeRecaptcha('catalogos');

    ev.stopPropagation();
    const { filter } = state;

    const { escritorios = [], next: nextPage } = await fetchCatalogos(
      { ...filter, next },
      { 'g-recaptcha-response': captchaToken }
    );

    setEscritoriosOffice((prevState) => ([
      ...prevState,
      ...escritorios
    ]));
    setHasMore(escritoriosOffice.length && nextPage ? true : false);
    setNext(nextPage);
    setState((prevState) => ({
      ...prevState,
      isLoadingMore: false,
    }));
  }

  useEffect(() => {
    setTimeout(() => {
      
      const captcha = document?.querySelector(".grecaptcha-badge");
      if (captcha) {
        captcha.style.visibility = "visible";
      }

    }, 1000);

    const { queryParams, ufUrl, cidadeUrl } = props;
    
    try {
      const filterCatalogosSave = localStorage.getItem('filterCatalogos');
      if (ufUrl && cidadeUrl) {
        loadFromCidadeUrl();
      } else if (filterCatalogosSave && filterCatalogosSave != 'undefined') {
        const filter = JSON.parse(filterCatalogosSave);
        if (filter) {
          setState((prevState) => ({
            ...prevState,
            cidadeSelecionadaId: filter.cidadeSelecionadaId,
            cidadeSelecionada: filter.cidadeSelecionada,
            cidadeEstadoSelecionado: filter.cidadeSelecionada,
            servico: filter.especialidadeCompleto
            ? {
              value: filter.especialidadeCompleto.value,
              desc: filter.especialidadeCompleto.desc,
            }
            : null,
          }));
          buscarCatalogos();
          getCidadeMap();
        }
      } else {
        getLocalizationBrowser();
      }
      localStorage.removeItem('filterCatalogos');
    } catch (e) {
      getLocalizationBrowser();
    }
    setState((prevState) => ({
      ...prevState,
      isLoading: false,
      q: queryParams ? queryParams?.q : '',
    }));
  }, [props]);

  const buscarCatalogos = async () => {
    const filter = {
      especialidade: state.servico && state.servico.value,
      cidade: state.cidadeSelecionadaId,
    };
    setState({
      isLoadingMore: true,
      filterCatalogos: {
        ...filter,
        cidadeSelecionadaId: state.cidadeSelecionadaId,
        cidadeSelecionada: state.cidadeSelecionada,
        cidadeEstadoSelecionado: state.cidadeEstadoSelecionado,
        especialidadeCompleto: state.servico,
      },
    });
    const { escritorios = [], next: nextPage } = await fetchCatalogos({ ...filter });
    setState((_prevState) => ({
      escritorios: escritorios || [],
      hasMore: escritorios.length && next ? true : false,
      next: nextPage,
      isLoadingMore: false,
    }));
  }

  return (
    <>
      <Head
        props={props || {}}
        nome="description"
        content="Advogados - Prevideciarista"
        hrefUrl="https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.css"
      />

      <NavBar />

      <Header
        setCidades={setCidades}
        cidadesState={cidades}
        setEscritoriosOffice={setEscritoriosOffice}
        setHasMore={setHasMore}
        setNext={setNext}
        props={props || {}}
        setShowMapaMobile={setShowMapaMobile}
      />

      <div className="lg:flex lg:justify-center bg-prev-escritorio-body">
        <div className="lg:p-3 lg:w-[726px]">
          <div className="">
              {state.isLoading ? (
                skeletons?.map((e) => (
                  <a key={`skeleton_${e}`} style={{ padding: '16px' }}>
                    <ContentLoader style={{ height: '100%' }} ariaLabel="Carregando petições">
                      <rect x="0" y="0" rx="3" ry="3" width="170" height="8" />
                      <rect x="0" y="20" rx="3" ry="3" width="400" height="8" />
                      <rect x="0" y="40" rx="3" ry="3" width="400" height="8" />
                      <rect x="0" y="60" rx="3" ry="3" width="220" height="8" />
                    </ContentLoader>
                  </a>
                ))
              ) : escritoriosOffice.length > 0 ? (
                <>
                  {escritoriosOffice?.map(({ id, slug, slugCatalogo, ...props }) => (
                    <CatalogoCard
                      filterCatalogos={state.filterCatalogos}
                      href={`/advogados/${slugCatalogo}`}
                      disableClick={false}
                      key={id}
                      {...props || {}}
                    />
                  ))}

                  {state.isLoadingMore &&
                    skeletons?.map((e) => (
                      <a
                        key={`skeleton_${e}`}
                        style={{ padding: '16px' }}
                        ariaLabel="Carregando petições"
                      >
                        <ContentLoader style={{ height: '100%' }}>
                          <rect x="0" y="0" rx="3" ry="3" width="170" height="8" />
                          <rect x="0" y="20" rx="3" ry="3" width="400" height="8" />
                          <rect x="0" y="40" rx="3" ry="3" width="400" height="8" />
                          <rect x="0" y="60" rx="3" ry="3" width="220" height="8" />
                        </ContentLoader>
                      </a>
                    ))}
                </>
              ) : (
                <p>Nenhum resultado encontrado.</p>
              )}
          </div>
        </div>

        <div
          style={{position: "sticky", bottom: 0, top: 100}}
          className="lg:visible lg:w-[400px] lg:h-[100px] my-8 p-3 bg-prev-default-text_white rounded"
        >
          <MapaDesktop
            className="banner"
            escritorios={escritoriosOffice}
            localizationNavegador={localizationNavegador}
          />
        </div>
      </div>

      {hasMore && !state.isLoading && (
        <div className="w-auto m-5 flex justify-center">
          <button
            className="text-base text-prev-default-text_white bg-prev-advogados-green rounded"
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
              borderColor: "#3cb624"
            }}
          >
            carregar mais
          </button>
        </div>
      )}

      <MapaMobile
        className="banner"
        isShowing={showMapaMobile}
        escritorios={escritoriosOffice}
        close={() => {
          setShowMapaMobile(false)
          try {
            document.getElementsByTagName('main')[0].style.position = 'relative';
          } catch (e) { }
        }}
        localizationNavegador={localizationNavegador}
      />

      <div className="mb-10 pb-10" style={{ backgroundColor: "#485158", color: 'white'}}>
        <img className="ml-6 pt-6" src="/images/prev-icon-footer.svg" alt="Previdenciárista" style={{width: "77px", height: "62px"}} />
        <div>
          {OptionFooter?.map((data, index) => {
            return (
              <Footer key={index} props={data} />
            )
          })}
        </div>
      </div>

      <div className="lg:hidden">
        <FixedBottom />
      </div>    
    </>
  )
};

export default Advogados;
