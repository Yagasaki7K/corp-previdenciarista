import PropTypes from 'prop-types';
import 'antd/lib/avatar/style/index.css';
import MapPinIcon from '../../atoms/Icons/MapPin';

const getEndereco = (endereco) => {
  if (!endereco) return '';
  return `${endereco.endereco} ${endereco.numero}, ${endereco.complemento ? `${endereco.complemento},` : `` } ${endereco.bairro}, ${endereco.cidade}/${endereco.uf}`;
};
const PeticaoCard = ({ filterCatalogos, onClick, href, tags, ...props }) => {

  return (
    <a
      className="border m-3 flex p-3 rounded shadow bg-prev-default-bg_white"
      href={href}
      onClick={(ev) => {
        ev.stopPropagation();
        try {
          localStorage.setItem("filterCatalogos", JSON.stringify(filterCatalogos))
        } catch(e) {}
        onClick(ev);
      }}
    >
      {props?.urlImagemEscritorioExibicao ? (
        <img
          style={{
            height: 60,
            width: 60,
            borderRadius: "50%"
          }}
          src={props?.urlImagemEscritorioExibicao}
        />
      ) : (
          <div className="flex w-[60px] h-[60px] justify-center items-center bg-prev-default-avatar p-7 rounded-full">
            <span className="text-title26 uppercase text-prev-default-text_white">{props ? (props?.nome + '')[0] : ''}</span>
          </div>
      )}
      <div className="flex-1 flex flex-col justify-center">
        <div className="flex items-center px-4">
          <p style={{textOverflow: "ellipsis"}} className="font-semibold text-prev-default-bg_blue1 leading-normal text-size18 overflow-hidden">{props?.nome}</p>
        </div>

        <div>
          <span style={{textOverflow: "ellipsis"}} className="flex px-4 text-prev-escritorio-clear text-size14 leading-normal overflow-hidden">
            {props?.endereco && <MapPinIcon />}
            <span style={{ marginLeft: 7 }}>{getEndereco(props?.endereco)}</span>
          </span>
        </div>
      </div>
    </a>
  );
};

PeticaoCard.defaultProps = {
  onClick: () => {},
};

PeticaoCard.propTypes = {
  onClick: PropTypes.func,
};

export default PeticaoCard;
