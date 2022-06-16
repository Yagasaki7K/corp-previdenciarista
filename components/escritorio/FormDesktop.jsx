import { useState, useMemo, memo } from 'react';
import { postTracking, getPhone } from "/pages/api/services/advogados";
import { Form, Input, Button, Checkbox } from "antd";
import InputMask from 'react-input-mask';
import { postCatalogoEmail } from "/pages/api/services/advogados";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const FormAdvogadosDetails = ({ catalogo, bodyTracking, setState, setIsLoading, state, queryParams, originalUrl, membros }) => {
  const [sucesso, setSucesso] = useState(false);
  const [loading, setLoading] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const onFinish = async (values) => {
    setLoading(true);
    const captchaToken = await executeRecaptcha('catalogos');
    const { nome, email, telefone, mensagem } = values;

    postCatalogoEmail({
      slug: bodyTracking.slug,
      nome,
      email,
      telefone,
      mensagem,
      captchaToken: captchaToken,
    })
      .then(async (response) => {
        if (response && response.sucesso) {
          setLoading(false);
          setSucesso(true);
          if (bodyTracking.notLocation) {
            const body = {
              slug: bodyTracking.slug,
              tipo: 'ENVIO_MENSAGEM',
            };
            const captchaToken = await executeRecaptcha('catalogos_message');
            postTracking(body, captchaToken).then(() => {
              fecharModal();
            }).catch((err) => {
              console.error('err tracking:', err.message);
            });
          } else {
            const body = {
              slug: bodyTracking.slug,
              tipo: 'ENVIO_MENSAGEM',
              latitude: bodyTracking.latitude,
              longitude: bodyTracking.longitude,
              cidade: bodyTracking.cidade,
              pais: bodyTracking.pais,
              uf: bodyTracking.uf,
            };
            const captchaToken = await executeRecaptcha('catalogos_message');
            postTracking(body, captchaToken).then(() => {
              setSucesso(true);
            }).catch((err) => {
              console.error('err tracking:', err.message);
            });
          }
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useMemo(() => {
    async function funcSync() {
      try {
        const objetoFinal = await montaResultadoLDJson(
          catalogo,
          originalUrl,
          membros,
          queryParams
        );
        setIsLoading(false);
        setState((prevState) => ({
          ...prevState,
          objetoFinal,
        }));
      } catch (e) {

      }
    }
    funcSync();
  }, []);

  async function montaResultadoLDJson(catalogo, originalUrl, membros, queryParams) {
    const urlHost = 'https://previdenciarista.com';
    const objetoFinal = {
      '@context': 'https://schema.org',
      '@type': 'LegalService',
      name: catalogo && catalogo.nome,
      url: originalUrl,
      priceRange: '$',
      'areaServed.@type': 'City',
      'areaServed.name':
        catalogo &&
        catalogo.cidadesDeAtuacao.map((cur) => {
          const newFormat = `${cur.nome} - ${cur.estado ? cur.estado.sigla : "-"}`;
          return newFormat;
        }),
      'review.@type': 'Review',
      'review.author.@type': 'Person',
      'review.author.name': catalogo && membros[0].nome,
      'review.reviewBody': catalogo && catalogo.descricao,
    };

    if (catalogo.telefone) {
      try {
        const captchaToken = await executeRecaptcha(
          'get_phone_ld_json'
        );
        const resultPhone = await getPhone(queryParams.slug, captchaToken);
        console.log("phone: ", resultPhone)

        if (Object.keys(resultPhone).length) {
          const phone = {
            telephone: `+55${resultPhone.telefone.replace(/\D/g, '')}`,
          };
          Object.assign(objetoFinal, phone);
        }
      } catch (e) {
        console.log('errorCapthToken :', e.message);
      }
    }

    if (catalogo.urlImagemEscritorioExibicao) {
      const image = {
        image: catalogo.urlImagemEscritorioExibicao,
      };

      Object.assign(objetoFinal, image);
    }

    if (catalogo.latitude && catalogo.longitude) {
      const geo = {
        'geo.@type': 'GeoCoordinates',
        'geo.latitude': catalogo.endereco.latitude,
        'geo.longitude': catalogo.endereco.longitude,
      };

      Object.assign(objetoFinal, geo);
    }

    if (catalogo.endereco) {
      const addres = {
        'address.@type': 'PostalAddress',
        address: `${catalogo.endereco.endereco}, ${catalogo.endereco.numero}${catalogo.endereco.complemento && `, ${catalogo.endereco.complemento}`
          } `,
        'address.addressLocality': catalogo.endereco.cidade,
        'address.addressRegion': catalogo.endereco.uf,
        'address.addressCountry': 'BR',
        'address.postalCode': catalogo.endereco.cep,
      };

      Object.assign(objetoFinal, addres);
    }

    const breadcrumb = {
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@type': 'WebPage',
                '@id': urlHost,
                url: urlHost,
                name: 'Home',
              },
            },
            {
              '@type': 'ListItem',
              position: 2,
              item: {
                '@type': 'WebPage',
                '@id': `${urlHost}/advogados`,
                url: `${urlHost}/advogados`,
                name: 'Diretório de advogados',
              },
            },

            {
              '@type': 'ListItem',
              position: 4,
              item: {
                '@type': 'WebPage',
                '@id': `${originalUrl}`,
                url: `${originalUrl}`,
                name: catalogo.nome,
              },
            },
          ],
        },
      ],
    };

    if (catalogo.cidadesDeAtuacao[0].estado.sigla) {
      const editBread = {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'WebPage',
          '@id': `${urlHost}/advogado-previdenciario-inss/${catalogo.cidadesDeAtuacao[0].estado.sigla.toLowerCase()}/${catalogo.cidadesDeAtuacao[0].nome
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s/g, '-')}`,
          url: `${urlHost}/advogado-previdenciario-inss/${catalogo.cidadesDeAtuacao[0].estado.sigla.toLowerCase()}/${catalogo.cidadesDeAtuacao[0].nome
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s/g, '-')}`,
          name: `Advogados previdenciários INSS em ${catalogo.cidadesDeAtuacao[0].nome} - ${catalogo.cidadesDeAtuacao[0].estado.sigla}`,
        },
      };
      Object.assign(objetoFinal, editBread);
    }

    Object.assign(objetoFinal, breadcrumb);

    return objetoFinal;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setState((old) => {
      const { fildsValue, ...rest } = old;
      return { ...rest, fildsValue: { ...fildsValue, [name]: value, erros: {} } };
    });
  };

  return (
    <div
      style={{position: "sticky", bottom: 0, top: 100}}
      className="lg:visible lg:w-[400px] lg:h-[100%] my-8 p-3 bg-prev-default-text_white rounded"
    >
      <div>
        {sucesso ? (
          <>
            <div>
              <div>
                <b>Email enviado</b>
              </div>

              <div>
                Enviamos sua mensagem para o escritório <b>{catalogo.nome}</b>. Acompanhe
                eventuais respostas no seu e-mail ou telefone nos próximos dias.
              </div>

              <button
                id="mobile_enviar_outro_email"
                style={{
                  width: '100%',
                  height: '40px',
                  background: '#F26526',
                  color: '#FFFFFF',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)',
                  borderRadius: '4px',
                  padding: '0px 4px',
                  fontFamily: 'SourceSansPro',
                  marginTop: '16px',
                }}
                onClick={async () => {
                  setSucesso(false);
                }}
                size="small"
              >
                Enviar outro email
              </button>
            </div>
          </>
        ) : (
          <>
            {loading ? (
              <span>Enviando e-mail...</span>
            ) : (
              <>
                <p
                  style={{
                    fontFamily: 'Source Sans Pro',
                    fontWeight: 600,
                    fontSize: '20px',
                    lineHeight: '26px',
                    color: '#3575AB',
                  }}
                >
                  Contato
                </p>

                <span className="font-semibold text-base text-prev-default-card leading-lheight22">
                  Enviar mensagem
                </span>

                <div style={{ marginTop: 12 }}>
                  <Form
                    onFinish={onFinish}
                  >
                    <Form.Item
                      label="Nome completo"
                      name="nome"
                      rules={[{ required: true, message: 'Por favor insira seu nome!' }]}
                      style={{ marginBottom: 18 }}
                    >
                      <Input
                        className="inputForm"
                        name="nome"
                        onChange={handleChange}
                        placeholder="Digite seu nome"
                      />
                    </Form.Item>

                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <div style={{ flex: 1, marginRight: 0 }}>
                        <Form.Item
                          label="Email"
                          name="email"
                          rules={[
                            { required: true, message: 'Email é obrigatório' },
                            {
                              type: 'email',
                              min: 6,
                              message: 'Email deve ter formato válido',
                            }
                          ]}
                          style={{ marginBottom: 18 }}
                        >
                          <Input
                            className="inputForm"
                            name="email"
                            onChange={handleChange}
                            required
                            placeholder="exemplo@exemplo.com.br"
                          />
                        </Form.Item>
                      </div>

                      <div style={{ flex: 1, marginLeft: 0 }}>
                        <Form.Item
                          label="Telefone"
                          name="telefone"
                          rules={[
                            { required: true, message: 'Por favor insira seu telefone!' },
                          ]}
                          style={{ marginBottom: 18 }}
                        >
                          <InputMask
                            className="inputForm w-full h-[40px] p-2 border rounded"
                            mask="(99) 99999-9999"
                            onChange={handleChange}
                            name="telefone"
                            placeholder="(99) 99999-9999"
                          />
                        </Form.Item>
                      </div>
                    </div>

                    <Form.Item
                      name="mensagem"
                      rules={[
                        { required: true, message: 'Por favor insira com sua mensagem' },
                      ]}
                    >
                      <Input.TextArea
                        className="inputForm"
                        placeholder="Mensagem"
                        style={{ height: '114px' }}
                        rows={4}
                        name="mensagem"
                        onChange={handleChange}
                      />
                    </Form.Item>

                    <Form.Item
                      name="mensagem"
                      rules={[
                        { required: true, message: 'Por favor entre com sua mensagem' },
                      ]}
                    >
                      <div style={{ display: 'flex', marginBottom: '34px' }}>
                        <Checkbox style={{ marginRight: '8px' }} />
                        <span
                          style={{ fontSize: '14px', color: '#242525', fontWeight: 400 }}
                        >
                          Quero receber contatos do <strong>Prev</strong> por email sobre
                          soluções na aposentadoria.
                        </span>
                      </div>
                    </Form.Item>
                    <Form.Item>
                      <Button
                        id="desktop_enviar_email"
                        disabled={
                          !state.fildsValue.nome ||
                          !state.fildsValue.email ||
                          !state.fildsValue.telefone ||
                          !state.fildsValue.mensagem ||
                          state.fildsValue.mensagem.length < 6
                        }
                        htmlType="submit"
                        style={{
                          width: '100%',
                          height: 40,
                          background:
                            state.fildsValue.nome &&
                            state.fildsValue.email &&
                            state.fildsValue.telefone &&
                            state.fildsValue.mensagem.length >= 6
                              ? '#F26526'
                              : '#DDDDDC',
                          border: '1px solid #DDDDDC',
                          borderRadius: '4px',
                          color: '#FFFFFF',
                        }}
                      >
                        Enviar
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default memo(FormAdvogadosDetails);
