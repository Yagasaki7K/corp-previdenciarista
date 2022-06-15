import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import { fetchCatalogos } from "../../pages/api/services/advogados";

mapboxgl.accessToken =
  'pk.eyJ1IjoicmVuYW5ubyIsImEiOiJjanZ3MG1ybGExNGJmNDVwMWs0eG9lejNrIn0.5bOyVV_UiJ0FyJCF8YUxzQ';

const getEndereco = (endereco) => {
  if (!endereco) return '';
  return `${endereco.endereco} ${endereco.numero}, ${endereco.bairro}, ${endereco.cidade}/${endereco.uf}`;
};


const MapaMobile = ({ isShowing, close, localizationNavegador, place = 'Brazil' }) => {
  useEffect(() => {
    if (isShowing) {
      //   document.body.style.overflow = 'hidden';
    }
    return () => {
      //   document.body.style.overflow = 'auto';
    };
  }, [isShowing]);

  const [escritorios, setEscritorios] = useState([]);
  const mapEl = useRef(null);
  const [modalMapaOpen, setModalMapaOpen] = useState(false);
  const [escritorioSelecionado, setEscritorioSelecionado] = useState(null);
  const ampliarMapa = () => {
    setModalMapaOpen(true);
  };
  const [markerAtualSelecao, setMarkerAtualSelecao] = useState(null);
  const listMarkers = useRef([]);
  const map = useRef(null);
  const hoverMarker = useRef(null);
  const getEscritorios = () => {
    return escritorios.map((item) => {
      const ref = React.createRef();

      if (escritorioSelecionado && item.slugCatalogo === escritorioSelecionado.slugCatalogo) {
        return {
          ...item,
          selecionado: true,
          ref,
        };
      }
      return item;
    });
  };

  const escritoriosShow = getEscritorios();
  const [coord, setCoord] = useState({
    lng: 5,
    lat: 34,
    zoom: 10,
  });
  const initMapBox = (r) => {
    if (!mapEl.current) return;
    let coordinates = [];
    if (r) {
      const escolha = r.data.features[0];
      coordinates = escolha.geometry.coordinates;
    } else {
      coordinates[0] = localizationNavegador.long;
      coordinates[1] = localizationNavegador.lat;
    }

    map.current = new mapboxgl.Map({
      container: mapEl.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [coordinates[0], coordinates[1]],
      zoom: coord.zoom,
      // maxZoom: 8,
      minZoom: 2,
    });

    map.current.on('load', () => {
      map.current.setLayoutProperty('country-label', 'text-field', ['get', 'name_pt']);
    });

    let param = null;
    const loadInit = async function () {
      const bounds = map.current.getBounds();
      const parameters = {
        topRightLat: bounds._ne.lat,
        topRightLon: bounds._ne.lng,
        bottomLeftLat: bounds._sw.lat,
        bottomLeftLon: bounds._sw.lng,
      };

      param = parameters;

      const { escritorios = [] } = await fetchCatalogos({ ...parameters });
      setEscritorios(escritorios);
      escritorios.map((escritorio) => {
        const { endereco } = escritorio;
        if (endereco) {
          const marker = new mapboxgl.Marker()
            .setLngLat([endereco.longitude, endereco.latitude])
            // .onClick(() => {
            //   debugger
            // })
            .addTo(map.current);
          listMarkers.current.push({
            marker,
            escritorio,
          });
        }
      });

      // debugger;
    };

    setCoord({
      lng: coordinates[0],
      lat: coordinates[1],
      zoom: coord.zoom,
    });

    map.current.on('render', function (e) {
      const { lng, lat } = map.current.getCenter();
      const zoom = map.current.getZoom();

      setCoord({
        lng,
        lat,
        zoom,
      });
    });

    map.current.on('click', function (e) {
      const find = listMarkers.current.find(
        (item) => item.marker.getElement() === e.originalEvent.target.closest('div')
      );
      if (find) {
        setEscritorioSelecionado(find.escritorio);
      } else {
        setEscritorioSelecionado(null);
      }
    });
    let ultimoHover = null;
    let ultimoLaranjaHover = null;
    map.current.on('mousemove', function (e) {
      const find = listMarkers.current.find(
        (item) => item.marker.getElement() === e.originalEvent.target.closest('div')
      );

      if (
        hoverMarker &&
        hoverMarker.current &&
        e.originalEvent.target.closest('div') === hoverMarker.current.getElement()
      ) {
        // ultimoLaranjaHover && ultimoLaranjaHover.remove();
        return;
      }
      if (find) {
        if (ultimoHover && ultimoHover.escritorio.slugCatalogo === find.escritorio.slugCatalogo) {
          return;
        }
        ultimoHover = find;
        setEscritorioSelecionado(find.escritorio);
        try {
          document.querySelector(`#container_${find.escritorio.slugCatalogo}`).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        } catch (e) { }
        if (hoverMarker.current) {
          hoverMarker.current.remove();
        }
        hoverMarker.current = new mapboxgl.Marker({
          color: '#ff7522',
        })
          .setLngLat(find.marker.getLngLat())
          .addTo(map.current);
        // ultimoLaranjaHover = hoverMarker.current;
      } else {
        ultimoHover = null;
        if (hoverMarker.current) {
          hoverMarker.current.remove();
        }
        setEscritorioSelecionado(null);
      }
    });

    map.current.on('zoomend', loadInit);
    map.current.on('pitchend', loadInit);
    map.current.on('moveend', loadInit);

    loadInit();
  };

  const hoverEscritorio = (escritorio) => {
    const find = listMarkers.current.find(
      (item) => item.escritorio.slugCatalogo === escritorio.slugCatalogo
    );
    if (find) {
      // find.marker.remove();
      const newMarker = new mapboxgl.Marker({
        color: '#ff7522',
      })
        .setLngLat(find.marker.getLngLat())

        // .onClick(() => {
        //   debugger
        // })
        .addTo(map.current);
      setMarkerAtualSelecao(newMarker);
    }
  };

  const onMouseLeave = () => {
    markerAtualSelecao && markerAtualSelecao.remove();
  };

  useEffect(() => {
    if (mapEl && isShowing) {
      if (localizationNavegador) {
        initMapBox();
      } else {
        axios
          .get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=${mapboxgl.accessToken}`
          )
          .then((r) => {
            initMapBox(r);

            // map.setLayoutProperty('country-label', 'text-field', ['get', 'name_' + 'en']);
          });
      }
    }
  }, [isShowing]);

  return isShowing
    ? ReactDOM.createPortal(
      <>
        <div className="overlay" />
        <div
          className="modal"
          style={{
            position: "fixed",
            marginTop: "72px",
            top: 0,
            left: 0,
            zIndex: 1050,
            overflowX: "hidden",
            overflowY: "auto",
            outline: 0
          }}
        >
          <div >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "gray",
                color: "#fff",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                position: "absolute",
                top: 0,
                right: 0,
                zIndex: 999999,
                marginTop: "20px",
                marginRight: "20px",
                cursor: "pointer"
              }}
              onClick={close}
            >
              X
            </div>

            <div className="containerList">
              {escritoriosShow.map((item) => {
                return (
                  <a
                    className="card"
                    id={`container_${item.slugCatalogo}`}
                    onMouseEnter={() => hoverEscritorio(item)}
                    onMouseLeave={() => onMouseLeave(item)}
                    key={item.id}
                    href={`/advogados/${item.slugCatalogo}`}
                    selecionado={item.selecionado}
                  >
                    {item?.urlImagemEscritorioExibicao ? (
                      <div className="pt-1 rounded">
                        <img
                          style={{
                            height: 88,
                            width: 88,
                            borderRadius: "100%",
                          }}
                          src={item?.urlImagemEscritorioExibicao}
                      />
                      </div>
                    ) : (
                      <div
                        className="flex w-[72px] h-[72px] justify-center items-center bg-prev-default-avatar p-10 rounded-full"
                      >
                        <span className="text-title26 uppercase text-prev-default-text_white">J</span>
                      </div>
                    )}
                    <div className="containerText" style={{ maxWidth: 217 }}>
                      <div className="cardHeader">
                        <p className="title">{item.nome}</p>
                      </div>

                      <div>
                        <spa className="bodyText">{getEndereco(item.endereco)}</spa>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>  

          <div ref={mapEl}></div>
        </div>
      </>
      ,
      document.querySelector('#__next')
    )
    : null;
};

export default MapaMobile;
