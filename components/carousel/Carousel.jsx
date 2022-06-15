import React from "react";
import Slider from 'react-slick';

const CarouselComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnDotsHover: false,
    pauseOnFocus: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          autoplay: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          autoplay: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const logos = [
    {
      img: '/images/carousel/valor-economico-min.svg',
      link: 'https://valor.globo.com/legislacao/noticia/2020/01/24/numero-de-startups-para-atender-mercado-juridico-dobra-no-brasil.ghtml',
      title: 'Número de startups para atender mercado jurídico dobra no Brasil',
    },

    {
      img: '/images/carousel/o-globo-min.svg',
      link: 'https://blogs.oglobo.globo.com/pense-grande/post/start-lanca-plataforma-para-conectar-advogados-pessoas-em-busca-de-ajuda-com-inss.html',
      title:
        'Start-up lança plataforma para conectar advogados a pessoas em busca de ajuda com INSS',
    },
    {
      img: '/images/carousel/estadao-min.svg',
      link: 'https://politica.estadao.com.br/blogs/fausto-macedo/tecnologia-para-um-direito-menos-burocratico/',
      title: 'Tecnologia para um direito menos burocrático',
    },
    {
      img: '/images/carousel/folha-de-s-paulo-min.svg',
      link: 'https://www1.folha.uol.com.br/mercado/2019/05/veja-como-aumentar-sua-renda-da-aposentadoria.shtml',
      title: 'Veja como aumentar sua renda da aposentadoria',
    },
    {
      img: '/images/carousel/zero-hora.webp',
      link: 'https://gauchazh.clicrbs.com.br/economia/noticia/2019/02/quando-fazer-o-pedido-de-aposentadoria-especialistas-respondem-cjsb03f7p02cy01mrl0px4a9o.html',
      title: 'Quando fazer o pedido de aposentadoria? Especialistas respondem',
    },
    {
      img: '/images/carousel/agora-sao-paulo-min.svg',
      link: 'https://agora.folha.uol.com.br/grana/2021/11/tire-15-duvidas-sobre-revisoes-para-aumentar-aposentadoria.shtml',
      title: 'Tire 15 dúvidas sobre revisões para aumentar aposentadoria',
    },
    {
      img: '/images/carousel/istoe-dinheiro-min.svg',
      link: 'https://www.istoedinheiro.com.br/veja-4-dicas-quem-que-uma-aposentadoria-vencedora/',
      title: 'Veja 4 dicas para uma aposentadoria vencedora',
    },
    {
      img: '/images/carousel/extra-min.svg',
      link: 'https://extra.globo.com/economia-e-financas/saiba-quais-sao-os-principais-erros-nos-pedidos-de-aposentadoria-confira-10-dicas-para-evita-los-25470330.html',
      title:
        'Saiba quais são os principais erros nos pedidos de aposentadoria. Confira 10 dicas para evitá-los',
    },
    {
      img: '/images/carousel/exame-min.svg',
      link: 'https://exame.com/bussola/confianca-do-comerciante-sobe-pela-primeira-vez-no-ano-diz-cnc/',
      title: 'Confiança do comerciante sobe pela primeira vez no ano, diz CNC',
    },
    {
      img: '/images/carousel/ebc-min.svg',
      link: 'https://radios.ebc.com.br/tarde-nacional-rio-de-janeiro/2021/03/principais-mudancas-nas-regras-da-aposentadoria-em-2021',
      title: 'Saiba as principais mudanças nas regras para se aposentar em 2021',
    },
  ];

  return (
    <div className="containerCarousel">
      <h2 className="text-center text-title30	font-semibold	text-prev-default-textos">O Previdenciarista na imprensa.</h2>

      <Slider className="sliderCarousel" {...settings}>
        {logos.map(({ img, link, title }, index) => (
          <div className="CardCarousel" key={index}>
            <a href={link} target="_blank" rel="noreferrer">
              <img
                className="opacity-20 grayscale hover:grayscale-0 hover:opacity-100"
                src={img}
                alt={title}
                style={{width: "150px", height: "150px"}}
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
