/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import ListWrapper from './ListWrapper';
import HeaderFilter from './HeaderFilter';
import { isEqual } from 'lodash';
import { anoDaPublicacao as anos } from '../../../constants/index';
import { fetchJurisprudencias, handleJurisprudencias } from '../../pages/api/services/produto/index';
import Banner from './Banner';

const ContainerTitleFilterSearch = ({ queryParams, propDecisoes, propsHasmore, propNext }) => {
  const [inputSearch, setInputSearch] = useState("");
  const [anoDaPublicacao, setPublicacao] = useState([]);
  const [decisoes, setDecisoes] = useState(propDecisoes || []);
  const [filter, setFilter] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(propsHasmore || false);
  const [next, setNext] = useState(propNext || false);

  useEffect(() => {
    const ano = anos.find((e) => e.value === queryParams?.anoDaPublicacao);
    setIsLoading(false);
    setPublicacao(ano ? [ano] : anoDaPublicacao);
    setInputSearch(queryParams?.q || "");
  }, []);

  const onChangeHandler = (event) => {
    const field = event.target.name;
    const value = event.target.value || null || {};

    setInputSearch(value);
    setIsLoading(true);
    setFilter({...filter, [field]: value});
  };

  const loadMore = async (ev) => {
    const { decisoes: getDecisoes, total, next: nextPage } = await fetchJurisprudencias({ ...filter, next });
    ev.stopPropagation();
    setIsLoadingMore(true)
    setDecisoes([...decisoes, ...handleJurisprudencias(getDecisoes)]);
    setHasMore(decisoes.length < total);
    setNext(nextPage);
    setIsLoadingMore(false);
  };

  const updateJurisprudencias = async () => {
    const { decisoes: getDecisoes, total, next: nextPage } = await fetchJurisprudencias(filter);
    setDecisoes(handleJurisprudencias(getDecisoes));
    setHasMore((decisoes && decisoes.length < total) || false);
    setNext(nextPage);
    setIsLoading(false);
    setIsLoadingMore(false);
  };

  const onChangeFiltroRapido = async (selectedItens, field) => {
    if (isEqual(anoDaPublicacao, selectedItens)) return;

    setPublicacao(selectedItens);
    setFilter({...filter, [field]: selectedItens?.map((e) => e.value)});
  }
  
  useEffect(() => {
    updateJurisprudencias();
  }, [filter]);

  const onCleanFiltroRapido = async (selectedItens, field) => {
    if (isEqual(anoDaPublicacao, selectedItens)) return;
    setPublicacao([]);
    setFilter({...filter, [field]: []});
  };

  return (
    <>
      <div
        className="
          flex
          flex-col
          pt-14
          px-12
          mt-12
          py-8
          bg-prev-default-bg_blue
          lg:items-center
          "
      >
        <div className="lg:w-[1300px]">
          <HeaderFilter
            onChangeHandler={onChangeHandler}
            onChangeFiltroRapido={onChangeFiltroRapido}
            onCleanFiltroRapido={onCleanFiltroRapido}
            inputSearch={inputSearch}
          />
        </div>
      </div>

      <div className="lg:flex lg:justify-center">
        <div className="lg:p-3">
          <ListWrapper
            decisoes={decisoes}
            hasMore={hasMore}
            setHasMore={setHasMore}
            next={next}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            isLoadingMore={isLoadingMore}
            loadMore={loadMore}
          />
        </div>

        <div
          style={{position: "sticky", bottom: 0, top: 100, height: "100%"}}
          className="lg:visible lg:w-[245px] lg:h-[100px] my-8 p-3 bg-prev-default-text_white rounded"
        >
          <Banner />
        </div>
      </div>
    </>
  )
};

export default ContainerTitleFilterSearch;
