import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import ModalMap from "./ModalMap";

mapboxgl.accessToken =
  'pk.eyJ1IjoicmVuYW5ubyIsImEiOiJjanZ3MG1ybGExNGJmNDVwMWs0eG9lejNrIn0.5bOyVV_UiJ0FyJCF8YUxzQ';

const MapCatalogo = ({
  place = 'Brazil',
  escritorios,
  isMobile,
  localizationNavegador,
  showMapModal = false,
}) => {
  const mapEl = useRef(null || {});
  const [modalMapaOpen, setModalMapaOpen] = useState(false);
  const [coord, setCoord] = useState({
    lng: 5,
    lat: 34,
    zoom: 10,
  });
  const ampliarMapa = () => {
    setModalMapaOpen(true);
  };

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
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [coordinates[0], coordinates[1]],
      zoom: coord.zoom,
      minZoom: 2,
    });

    map.on('load', () => {
      map.setLayoutProperty('country-label', 'text-field', ['get', 'name_pt']);
    });

    setCoord({
      lng: coordinates[0],
      lat: coordinates[1],
      zoom: coord.zoom,
    });

    map.on('render', function (e) {
      const { lng, lat } = map.getCenter();
      const zoom = map.getZoom();

      setCoord({
        lng,
        lat,
        zoom,
      });
    });

    if (escritorios) {
      escritorios.map((escritorio) => {
        const { endereco } = escritorio;
        if (endereco) {
          const marker = new mapboxgl.Marker()
            .setLngLat([endereco.longitude, endereco.latitude])
            .addTo(map);
        }
      });
    }
  };
  useEffect(() => {
    if (mapEl && mapEl.current) {
      if (localizationNavegador) {
        initMapBox();
      } else {
        axios
          .get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=${mapboxgl.accessToken}`
          )
          .then((r) => {
            initMapBox(r);
          });
      }
    }
  }, [localizationNavegador]);
  return (
    <div className="w-[270px] h-[467px]">
      <ModalMap
        isShowing={modalMapaOpen}
        coord={coord}
        localizationNavegador={localizationNavegador}
        close={() => setModalMapaOpen(false)}
      />
      <div onClick={ampliarMapa}>
        <button>Ampliar mapa</button>
        {/* <div id="mapa" show={showMapModal && false} ref={mapEl} /> */}
      </div>
    </div>
  );
};

export default MapCatalogo;
