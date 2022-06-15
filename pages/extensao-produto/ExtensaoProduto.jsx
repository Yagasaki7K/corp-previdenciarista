import FixedBottom from '../../atoms/fixedBottom';
import NavBar from '../../components/navbar';

const RevisaoDaVidaTodaProduto = ({ blog, noticias, colunas, decisoes, originalUrl }) => {

  return (
    <div className='relative'>
      <NavBar />
      
      <FixedBottom />
    </div>
  );
};

export default RevisaoDaVidaTodaProduto;
