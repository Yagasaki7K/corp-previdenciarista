import { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { Image } from 'next/image'
import MapPinIcon from "../../../atoms/Icons/MapPin";
import EspecialidadeIcon from "../../../atoms/Icons/Especialidade";
import PhoneIcon from "../../../atoms/Icons/PhoneIcon";
import MailOutlined from '../../../atoms/Icons/Mail';
import Card from "../../../components/escritorio/Card";
import Title from "../../../components/escritorio/Title";
import Navbar from "../../../components/navbar/navBarAdvogados";
import Button from "../../../atoms/button";
import Footer from "../../../components/footer";
import formatCityLink from "../../api/utils/escritorio";
import { OptionFooter } from "../../../components/footer/option";
import PhoneModal from "../../../components/escritorio/Phone";
import MailModal from "../../../components/escritorio/Mail";

import axios from "axios";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import mapboxgl from "mapbox-gl";
import { getPhone, postTracking } from "../../api/services/advogados";
import FormDesktop from "../../../components/escritorio/FormDesktop";

mapboxgl.accessToken = "pk.eyJ1IjoicmVuYW5ubyIsImEiOiJjanZ3MG1ybGExNGJmNDVwMWs0eG9lejNrIn0.5bOyVV_UiJ0FyJCF8YUxzQ";

function Escritorio({catalogo, membros, queryParams, originalUrl}) {
  const router = useRouter();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [bodyTracking, setBodyTracking] = useState({
    notLocation: false,
    slug: '',
    latitude: '',
    longitude: '',
    cidade: '',
    pais: '',
    uf: '',
  });

  const [isPhone, setIsPhone] = useState({
    phone: '',
    phoneTwo: ''
  })
  const [state, setState] = useState({
    servico: null || {},
    isLoadingMore: false,
    loadingPeticaoId: null || {},
    showMailModal: false,
    showPhoneModal: false,
    fildsValue: {
      nome: '',
      email: '',
      mensagem: '',
      telefone: '',
    },
    objetoFinal: undefined,
  });

  const getEndereco = useCallback((endereco) => {
    if (!endereco) return '';
    return `${endereco.endereco} ${endereco.numero}, ${endereco.complemento ? `${endereco.complemento},` : ``
      } ${endereco.bairro}, ${endereco.cidade}/${endereco.uf}`;
  }, []);

  useEffect(() => {
    const checkIn = async () =>{
      try {
        navigator.geolocation.getCurrentPosition(
          (success) => {
            const {coords: {latitude, longitude }} = success;
            axios
              .get(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?&access_token=${mapboxgl.accessToken}&types=place`
              )
              .then(async (res) => {
                const split = res.data.features[0].context[0].short_code.split('-');
                const city = res.data.features[0].text;

                setBodyTracking((old) => {
                  return {
                    ...old,
                    slug: queryParams,
                    latitude: latitude,
                    longitude: longitude,
                    cidade: city,
                    pais: split[0],
                    uf: split[1],
                  };
                });

                const body = {
                  slug: queryParams,
                  tipo: 'VISITA',
                  latitude: latitude,
                  longitude: longitude,
                  cidade: city,
                  pais: split[0],
                  uf: split[1],
                };

                const captchaToken = await executeRecaptcha('catalogos_visits');

                postTracking(body, captchaToken);
              })
              .catch((error) => console.error('error map:', error));
          },
          async (_error) => {
            setBodyTracking((prevState) => ({
              ...prevState,
              notLocation: true,
              slug: queryParams,
            }));

            const body = {
              slug: queryParams,
              tipo: 'VISITA',
            };

            const captchaToken = await executeRecaptcha('catalogos_visits');
            postTracking(body, captchaToken);
          }
        );
      } catch (error) {
        console.error('error check in: ', error);
      }
    }
    checkIn();
  }, [executeRecaptcha])

  const openPhone = async () => {
    setState((prevState) => ({
      ...prevState,
      showPhoneModal: true,
    }));
  };
  const openMail = () => {
    setState((prevState) => ({
      ...prevState,
      showMailModal: true,
    }));
  };
  return(
    <>
      <Head>
        <meta name="description" content="Advogados - Prevideciarista" />
        <title>{catalogo && catalogo.nome} - Previdenciarista</title>
        <link rel="canonical" href={originalUrl} />
      </Head>

      <Navbar />

      <div className="bg-prev-escritorio-body">
        <header
          className="w-full h-[335px] p-6 pt-[85px] flex flex-col items-center bg-prev-default-text_white bg-[url('/images/escritorio-background-lines.svg')]"
        >
          {catalogo && catalogo?.urlImagemEscritorioExibicao ? (
            <div className="pt-1 rounded">
              <Image alt=""
                style={{
                  height: 88,
                  width: 88,
                  borderRadius: "100%",
                }}
                src={catalogo?.urlImagemEscritorioExibicao}
              />
            </div>
          ) : (
            <div className="flex w-[72px] h-[72px] justify-center items-center bg-prev-default-avatar p-10 rounded-full">
              <span className="text-title26 uppercase text-prev-default-text_white">J</span>
            </div>
          )}

          <h1
            className="w-[318px] pt-[25px] pb-[12px] font-bold text-center text-sub_title20 text-prev-escritorio-title_blue"
          >
            {catalogo?.nome || ""}
          </h1>

          <p
            className="flex text-prev-escritorio-clear text-left text-base leading-lheight23"
          >
            {catalogo && catalogo?.endereco && <MapPinIcon />}
            <span className="ml-[3px]">{getEndereco(catalogo?.endereco || "")}</span>
          </p>
    
          <div
            className="py-0.5 px-4 mt-1 uppercase font-bold text-size14 text-prev-default-blue bg-prev-default-alter_white rounded-t-xl">
            {catalogo?.numeroDaOAB || ""}
          </div>
        </header>

        <div className="m-5 lg:flex lg:justify-center">
         
          <div className="lg:p-3 lg:w-[726px]">
            <div style={{position: "sticky", bottom: 0, top: 100}}>
              <Card>
                <Title text="Sobre" />
                {catalogo && catalogo.descricao ? (
                  <div
                    className="text-base text-prev-default-card leading-lheight22"
                    style={{ marginTop: '16px', whiteSpace: 'pre-line' }}
                  >
                    {catalogo?.descricao || ""}
                  </div>
                ) : (
                  ''
                )}
              </Card>

              <Card>
                <Title text="Áreas de atuação" />
                <div className="mt-4 lg:flex lg:flex-wrap">
                  {catalogo?.especialidades ?
                    catalogo?.especialidades.map((item) => (
                      <div className="flex items-center py-1.5 lg:min-w-[310px]" key={item.id}>
                        <EspecialidadeIcon />
                        <span className="pl-2 text-prev-escritorio-clear font-bold leading-lheight28">{item.descricao}</span>
                      </div>
                  )) : ""}
                </div>      
              </Card>

              <Card>
                <Title text="Cidades de atuação" />
                <div className="w-auto mt-4 lg:flex lg:flex-wrap">
                  {catalogo?.cidadesDeAtuacao ?
                    catalogo?.cidadesDeAtuacao.map((item) => (
                      <div className="w-auto flex items-center py-1.5 lg:min-w-[310px]" key={item.id}>
                        <Link
                          className="pl-4"
                          as={`/advogado-previdenciario-inss/${formatCityLink(
                            item?.nome,
                            item?.estado.sigla
                          )}`}
                          passHref
                          href="/advogado-previdenciario-inss/:uf/:cidade"
                          key={item.id}
                        >
                          <div
                            className="flex items-center"
                            as="a"
                            title={`Encontre um Advogado Previdenciário (INSS) em ${item?.nome} (${item?.estado.sigla}) para sua demanda`}
                          >
                            <MapPinIcon />
                            <span className="pl-2 text-prev-escritorio-clear font-bold leading-lheight28">{item?.descricao}</span>
                          </div>
                        </Link>
                      </div>
                  )) : ""}
                </div>      
              </Card>

              <Card>
                <Title text="Equipe" />
                <div className="w-auto mt-4 lg:flex lg:flex-wrap">
                {membros?.length &&
                  membros.map((item, index) => (
                    <div className="w-auto flex items-center py-1 lg:min-w-[310px]" key={index}>
                      <div
                        className="flex w-[40px] h-[40px] justify-center items-center bg-prev-default-avatar rounded-full"
                      >
                        <span className="text-sm uppercase text-prev-default-text_white">
                          {item ? (item?.nome + '')[0] : ''}
                        </span> 
                      </div>

                      <div className="flex flex-col">
                        <span className="pl-2 font-base font-bold text-prev-escritorio-title_blue">{item?.nome || ""}</span>
                        <span className="pl-2 text-size12 font-bold text-prev-escritorio-oab">{item?.numeroDaOAB || ""}</span>
                      </div>
                    </div>
                  ))}
                </div>      
              </Card>
              
              <div className="lg:flex lg:items-center lg:justify-between p-4 my-5 bg-prev-default-blue rounded shadow">
                <div className="mb-2 text-[17px] text-prev-default-text_white leading-lheight26">
                  Você é um <b>advogado?</b>
                  <br />
                  Exiba seu escritório para mais de <b>650 mil</b> visitantes mensais.
                  <br />
                  Acesse <b>petições</b> e faça quantos <b>cálculos quiser!</b>
                </div>

                <Button
                  width="w-full lg:w-[200px]"
                  background="bg-prev-default-text_white"
                  cor="text-prev-default-blue"
                  bold="font-bold"
                  onClick={() => router.push('/assine')}
                >
                  Teste Grátis por 15 dias
                </Button>
              </div>
            </div>
          </div>

          <FormDesktop
            catalogo={catalogo}      
            setState={setState}
            state={state}
            bodyTracking={bodyTracking}
            captcha={executeRecaptcha}
            queryParams={queryParams}
            originalUrl={originalUrl}
            membros={membros}
          />
        </div>
      </div>

      <div className="mb-10 py-8" style={{ backgroundColor: "#485158", color: 'white'}}>
        <Image className="ml-6 pt-6" src="/images/prev-icon-footer.svg" alt="Previdenciárista" style={{width: "77px", height: "62px"}} />
        {OptionFooter.map((data, index) => {
          return (
            <Footer key={index} props={data} />
          )
        })}
      </div>

      <div
        className="lg:hidden"
        style={{
          width: '100%',
          position: 'fixed',
          bottom: 0,
          left: 0,
          height: '62px',
          zIndex: 999,
          background: '#3375ab',
        }}
      >
        <div
          className="w-auto mx-4 mt-3"
          style={{
            display: 'flex',
            justifyContent: !catalogo?.telefone ? 'center' : 'space-between',
          }}
        >
          {catalogo?.telefone && catalogo?.telefone ? (
            <butoon
              className="w-auto pr-2"
              id="mobile_ver_telefone"
              style={{
                height: '40px',
                background: ' #FFFFFF',
                border: '1px solid #F26526',
                borderRadius: '4px',
                color: '#F26526',
                display: "flex",
                alignItems: "center"
              }}
              onClick={async () => {
                const captchaToken = await executeRecaptcha('catalogos_get_telefone');

                const result = await getPhone(bodyTracking.slug, captchaToken);
                setIsPhone(() => ({
                  phone: result.telefone,
                  phoneTwo: result.telefoneSecundario,
                }));
                openPhone();

                if (bodyTracking.notLocation) {
                  const body = {
                    slug: bodyTracking.slug,
                    tipo: 'VISUALIZACAO_TELEFONE',
                  };
                  const captchaToken =
                    await executeRecaptcha(
                      'catalogos_view_phone'
                    );
                  postTracking(body, captchaToken, captchaToken);
                } else {
                  const body = {
                    slug: bodyTracking.slug,
                    tipo: 'VISUALIZACAO_TELEFONE',
                    latitude: bodyTracking.latitude,
                    longitude: bodyTracking.longitude,
                    cidade: bodyTracking.cidade,
                    pais: bodyTracking.pais,
                    uf: bodyTracking.uf,
                  };
                  const captchaToken =
                    await executeRecaptcha(
                      'catalogos_view_phone'
                    );
                  postTracking(body, captchaToken);
                }
              }}
            >
              <PhoneIcon />  
              <span className="ml-2">Ver Telefone</span>
            </butoon>
          ) : (
            ''
          )}
          <button
            className="w-auto pr-2"
            id="mobile_abrir_envio_email"
            style={{
              height: '40px',
              background: ' #F26526',
              border: '1px solid #F26526',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)',
              borderRadius: '4px',
              color: '#FFFFFF',
              display: "flex",
              alignItems: "center"
            }}
            onClick={() => openMail()}
          >
            <MailOutlined />
            <span className="ml-2">Enviar Mensagem</span>
          </button>
        </div>
      </div>

      {state.showPhoneModal &&
        <PhoneModal
          phone={isPhone.phone}
          phoneTwo={isPhone.phoneTwo}
          isShowing={state.showPhoneModal}
          close={() => {
            setState((prevState) => ({
              ...prevState,
              showPhoneModal: false,
            }));
          }}
        />
      }
      {state.showMailModal &&
          <MailModal
            captcha={executeRecaptcha}
            // phone={isPhone}
            // phoneTwo={isPhoneTwo}
            bodyTracking={bodyTracking}
            // googleReCaptchaProps={props.googleReCaptchaProps}
            isShowing={state.showMailModal}
            catalogo={catalogo}
            close={() => {
              setState((prevState) => ({
                ...prevState,
                showMailModal: false,
              }));
            }}
          />
        }
    </>
  )
};

export default Escritorio;
