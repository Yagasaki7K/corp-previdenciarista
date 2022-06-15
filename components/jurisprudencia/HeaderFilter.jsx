import MultiSelect from './MultiSelect';
import { anoDaPublicacao as anos } from '../../../constants/index';
import { DebounceInput } from 'react-debounce-input';

const HeaderFilter = ({ onChangeHandler, inputSearch, onChangeFiltroRapido, onCleanFiltroRapido }) => {
  return (
    <div className="w-auto">
      <div
        className="
        text-prev-default-text_white
        text-size18
        lg:flex
        lg:justify-center
        lg:text-title30
        lg:font-calibri
        "
      >
        Acesse mais de <b> 3 mil</b>petições e mais de <b>500 mil</b> deciçõs previdenciárias. 
      </div>

        <div
          className="
            flex
            flex-col
            justify-items-start
            mt-4
          "
        >
          <div className="text-prev-default-text_silver1">
            <p>Filtros rápidos</p>
          </div>
          <div className='flex mt-1'>
            <MultiSelect
              className="multi-select"
              onClean={(items) => onCleanFiltroRapido(items, 'anoDaPublicacao')}
              onChange={(items) => onChangeFiltroRapido(items, 'anoDaPublicacao')}
              label="Ano da publicação"
              lista={anos}
              valuePropName="value"
              descPropName="desc"
            />
          </div>
        </div>

        <div className="mt-5">
          <div className="relative z-9">
            <DebounceInput
              className="block h-16 pr-12 focus:outline-none focus:ring-0  pl-4 w-full text-sm text-gray-900 rounded "
              name="q"
              minLength={0}
              debounceTimeout={500}
              onChange={(ev) => onChangeHandler(ev)}
              value={inputSearch}
              placeholder="Pesquise por Juiz, tribunal, etc..."
              required
            />
             <button
              type="submit"
              className="absolute  h-16 top-0 right-0 px-2.5 text-sm font-medium text-white"
              aria-label='button'
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="#5FA1D8"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                </path>
              </svg>
            </button>
          </div>
        </div>
    </div>
  )
}

export default HeaderFilter;