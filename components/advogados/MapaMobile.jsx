import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import { fetchCatalogos } from "../../pages/api/services/advogados";

mapboxgl.accessToken =
  'pk.eyJ1IjoicmVuYW5ubyIsImEiOiJjanZ3MG1ybGExNGJmNDVwMWs0eG9lejNrIn0.5bOyVV_UiJ0FyJCF8YUxzQ';


const MapaMobile = ({ isShowing, close, localizationNavegador, place = 'Brazil' }) => {
  const [escritorios, setEscritorios] = useState([]);
  const mapEl = useRef(null);
  const [escritorioSelecionado, setEscritorioSelecionado] = useState(null);
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

    const map = new mapboxgl.Map({
      container: mapEl.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [coordinates[0], coordinates[1]],
      zoom: coord.zoom,
      minZoom: 2,
    });

    map.on('load', () => {
      map.setLayoutProperty('country-label', 'text-field', ['get', 'name_pt']);
    });

    let listMarkers = [];

    const loadInit = async function () {
      const bounds = map.getBounds();
      const parameters = {
        topRightLat: bounds._ne.lat,
        topRightLon: bounds._ne.lng,
        bottomLeftLat: bounds._sw.lat,
        bottomLeftLon: bounds._sw.lng,
      };

      listMarkers = [];
      const { escritorios = [] } = await fetchCatalogos({ ...parameters });
      console.log("debugger escritorios: ", escritorios)

      setEscritorios(escritorios);
      escritorios.map((escritorio) => {
        
        const { endereco } = escritorio;
        console.log("debugger latitude: ", endereco.latitude)
        if (endereco) {
          const marker = new mapboxgl.Marker()
            .setLngLat([endereco.longitude, endereco.latitude])
            .addTo(map);
          listMarkers.push({
            marker,
            escritorio,
          });
        }
      });
    };

    setCoord({
      lng: coordinates[0],
      lat: coordinates[1],
      zoom: coord.zoom,
    });

    map.on('render', function (e) {
      const { lng, lat } = map.getCenter();
      console.log("debugger render lng : ", lng)
      console.log("debugger render lat: ", lat)

      const zoom = map.getZoom();

      setCoord({
        lng,
        lat,
        zoom,
      });
    });
    
    
    map.on('click', function (e) {
      const find = listMarkers.find(
        (item) => item.marker.getElement() === e.originalEvent.target.closest('div')
      );
      if (find) {
        setEscritorioSelecionado(find.escritorio);
      } else {
        setEscritorioSelecionado(null);
      }
    });

    map.on('zoomend', loadInit);
    map.on('pitchend', loadInit);
    map.on('moveend', loadInit);

    loadInit();
  };
  
  useEffect(() => {
    console.log("entrou")
    if (mapEl && isShowing) {
      console.log("isShowing && mapEl")

      if (localizationNavegador) {
        console.log("localizationNavegador")

        initMapBox();
      } else {
        console.log("else")

        axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=${mapboxgl.accessToken}`
          ) .then((r) => {
            initMapBox(r);
          });
      }
    }
  }, [isShowing]);

  return isShowing
    ? ReactDOM.createPortal(
      <div
        style={{
          position: "fixed",
          marginTop: "72px",
          top: 0,
          left: 0,
          zIndex: 1050,
          width: "100%",
          height: "100%",
          overflowX: "hidden",
          overflowY: "auto",
          outline: 0
        }}
      >
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

        <div style={{height: "100%"}} ref={mapEl}></div>
      </div>
      ,
      document.querySelector('#__next')
    )
    : null;
};

export default MapaMobile;
