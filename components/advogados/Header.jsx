/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, memo } from 'react';
// import Select from '../../components/Select';
import SearchIcon from '../../atoms/Icons/Search';
import MapPinIcon from '../../atoms/Icons/MapPin';
import Label from "./Label";

import mapboxgl from 'mapbox-gl';
import { fetchCatalogos, fetchCidades } from '../../pages/api/services/advogados';
import Select from './Select';
import { DebounceInput } from 'react-debounce-input';


mapboxgl.accessToken =
  'pk.eyJ1IjoicmVuYW5ubyIsImEiOiJjanZ3MG1ybGExNGJmNDVwMWs0eG9lejNrIn0.5bOyVV_UiJ0FyJCF8YUxzQ';

const HeaderAdvogados = ({
  setCidades, cidadesState, setEscritoriosOffice, setHasMore, setNext, props, setShowMapaMobile
}) => {

  async function buscarCatalogos() {
    const filter = {
      especialidade: cidadesState.servico && cidadesState.servico.value,
      cidade: cidadesState.cidadeSelecionadaId,
    };

    const { escritorios = [], next: nextPage } = await fetchCatalogos({ ...filter });
    setEscritoriosOffice(escritorios);
    setHasMore(escritorios.length && next ? true : false);
    setNext(nextPage);
    setCidades((prevState) => ({
      ...prevState,
      isLoadingMore: false,
    }));
  }

  const clearFilterCitys = async () => {
    await setCidades((prevState) => ({
      ...prevState,
      listaCidadeOpen: false,
      cidadeSelecionadaId: null,
      filterCidade: {
        nome: null,
      },
    }),
    );
    buscarCatalogos();
    updateCidades();
  }

  function onChangeHandler(event) {
    const value = event.target.value;
    
    setCidades((prevState) => ({
      ...prevState,
      listaCidadeOpen: true,
      cidadeSelecionadaId: null,
      cidadeEstadoSelecionado: null,
      filterCidade: {
        nome: value,
      },
    }),
    );

    if(!value) return clearFilterCitys();
  }

  function onSelectCidade(cidade) {
    setCidades((prevState) => ({
      ...prevState,
      listaCidadeOpen: false,
      cidadeSelecionada: `${cidade.nome}`,
      cidadeSelecionadaId: cidade.id,
      cidadeEstadoSelecionado: `${cidade.nome} ${cidade.estado.nome}`,
    }));
  }

  async function updateCidades() {
    if (!cidadesState.filterCidade) {
      return;
    }
    const cidades = await fetchCidades(cidadesState.filterCidade);
    setCidades((prevState) => ({
      ...prevState,
      cidades,
    }));
  }

  async function onChangeServico(selectedItens) {
    setCidades((prevState) => ({
      ...prevState,
      servico: selectedItens[0],
    }));
  }
  
  useEffect(() => {
    buscarCatalogos();
  }, [cidadesState.servico]);

  useEffect(() => {
    if (cidadesState.cidadeSelecionadaId) {
      buscarCatalogos();
    }
  }, [cidadesState.cidadeSelecionadaId]);

  useEffect(() => {
    async function execAsync() {
      if (cidadesState.filterCidade.nome === null) {
        setCidades((prevState) => ({
          ...prevState,
          listaCidadeOpen: false,
        }));
        return;
      }
      updateCidades();
    }
    execAsync();
  }, [cidadesState.filterCidade.nome]);

  return (
    <>
      <header className="w-full flex flex-col items-center p-6 pt-[72px] bg-prev-default-blue">
        <h1
          style={{lineHeight: "normal"}}
          className="mt-5 text-center text-prev-default-text_white text-title30">
          {props?.cidadeTitle ? (
            <>
              Encontre um Advogado Previdenciário (INSS) em <b>{props?.cidadeTitle}</b> ({props?.ufTitle})
              para sua demanda
            </>
          ) : (
            <>
              Encontre um <b>Advogado Previdenciário (INSS)</b> para sua demanda
            </>
          )}
        </h1>

        <h2
          className="
            mt-10
            text-center
            text-size14
            text-prev-default-text_white
            lg:text-size18
            lg:leading-lheight16
          "
        >
          Mais de 10 mil advogados especializados em Direito Previdenciário estão prontos para ajudar com sua aposentadoria do INSS.
        </h2>

        <div className="lg:flex max-w-[1120px] w-full flex-col m-6">
          <div
            className="
            lg:flex
            lg:max-w-[1220px]
            lg:items-center
            "
          >
            <div className="my-5 lg:w-[408px]">
              <Label title="Selecione o serviço que você deseja" />
              <Select
                 className="select-catalogo"
                 onChange={(items) => onChangeServico(items)}
                 defaultValue={cidadesState.servico ? [cidadesState.servico] : []}
                 label="Serviço"
                 lista={
                   props?.especialidades?.map((item) => ({ desc: item.descricao, value: item.id }))
                 }
                 valuePropName="value"
                 descPropName="desc"
              />
            </div>
            
            <div className="lg:w-[695px] lg:ml-[20px]">
              <Label title="Em qual cidade será realizado o serviço?" />
              <div className="flex justify-end items-center">
                <DebounceInput
                  style={{borderTopLeftRadius: "4px", borderTopRightRadius: "4px", outline: "none"}}
                  className="
                  debunce
                  w-full
                  h-[56px]
                  p-4
                  text-size12
                  placeholder
                  lg:h-[83px]
                  "
                  name="cidadeSelecionada"
                  minLength={3}
                  debounceTimeout={100}
                  onChange={(ev) => onChangeHandler(ev)}
                  value={cidadesState.cidadeSelecionada}
                  placeholder="Pesquise por cidades. Ex: Curitiba"
                />
                <SearchIcon style={{position: "absolute", marginLeft: "-15px"}}  />
              </div>


              <div>
                {cidadesState.listaCidadeOpen && (
                  <ul
                    style={{color: "rgba(0, 0, 0, 0.65)", maxHeight: "250px", position: "absolute"}}
                    className="w-full shadow-md overflow-auto text-sub_title20 leading-lheight22 bg-prev-default-bg_white"
                  >
                    {cidadesState.cidades.length ?
                      cidadesState.cidades.map((item, index) => {
                        return (
                          <li
                            className="py-2 px-4 "
                            onClick={() => onSelectCidade(item)}
                            key={index}
                          >
                            {`${item.descricao}`}
                          </li>
                        );
                      }) : null}
                  </ul>
                )}
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <button
            style={{color: "rgba(0, 0, 0, 0.58)"}}
            className="min-w-[145px] w-[145px] h-[54px] flex items-center justify-center text-base bg-prev-default-bg_white rounded"
            onClick={() => {
              setShowMapaMobile(true);
            }}
          >
            Ver o mapa
            <div className="ml-2">
              <MapPinIcon />
            </div>
          </button>
        </div>  
      </header>
    </>
  );
}

export default memo(HeaderAdvogados);
