import { useState } from "react";
import ReactDOM from "react-dom";
import { Form, Input, Button, Checkbox } from "antd";
import InputMask from 'react-input-mask';
import { postCatalogoEmail } from "/pages/api/services/advogados";

const ModalMail = ({ isShowing, close, captcha, bodyTracking, catalogo }) => {
  const [sucesso, setSucesso] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fildsValue, setFildsValue] = useState({
    nome: '',
    email: '',
    mensagem: '',
    telefone: '',
  });

  const fecharModal = () => {
    setSucesso(false);
    close();
  };

  const onFinish = async (values) => {
    setLoading(true);
    const captchaToken = await captcha('catalogos');
    const { nome, email, telefone, mensagem } = values;
    console.log("telefone: ", telefone)

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
            const captchaToken = await captcha('catalogos_message');
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
            const captchaToken = await captcha('catalogos_message');
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFildsValue((old) => {
      return { ...old, [name]: value };
    });
  };

  const validateMail = {
    required: 'Por favor insira seu e-mail!',
    types: {
      email: 'E-mail inválido',
    },
  };

  return isShowing
    ? ReactDOM.createPortal(
      <>
        <div
          style={{width: "100vw", height: "100vh", zIndex: 99999, top: 0, left: 0}}
          className="fixed bg-prev-escritorio-back_modal opacity-[0.4]"
        />
        <div
          style={{width: "100%", height: "100%", zIndex: 99999, top: 0, left: 0}}
          className="p-5 fixed overflow-y-auto overflow-x-hidden outline-0"
        >
          <div
            style={{margin: "1.75rem auto"}}
            className="bg-prev-default-text_white rounded"
            closable={true}
            centered={true}
          >
            <div className="px-[42px] py-5">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span />
                <svg style={{ cursor: "pointer" }} onClick={() => fecharModal()} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.9257 5.99919L11.6132 0.411694C11.6918 0.318836 11.6257 0.177765 11.5043 0.177765H10.0793C9.99534 0.177765 9.91499 0.215265 9.85963 0.279551L5.99356 4.88848L2.12749 0.279551C2.07392 0.215265 1.99356 0.177765 1.90784 0.177765H0.482844C0.361415 0.177765 0.295344 0.318836 0.373915 0.411694L5.06142 5.99919L0.373915 11.5867C0.356315 11.6074 0.345023 11.6327 0.341381 11.6596C0.337739 11.6866 0.341899 11.714 0.353368 11.7386C0.364837 11.7632 0.383133 11.784 0.406083 11.7986C0.429034 11.8131 0.455675 11.8208 0.482844 11.8206H1.90784C1.99177 11.8206 2.07213 11.7831 2.12749 11.7188L5.99356 7.10991L9.85963 11.7188C9.9132 11.7831 9.99356 11.8206 10.0793 11.8206H11.5043C11.6257 11.8206 11.6918 11.6796 11.6132 11.5867L6.9257 5.99919Z" fill="#949595" />
                </svg>
              </div>

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
                          validateMessages={validateMail}
                        >
                          <Form.Item
                            label="Nome completo"
                            name="nome"
                            rules={[{ required: true, message: 'Por favor insira seu nome!' }]}
                            style={{ marginBottom: 18 }}
                          >
                            <Input
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
                                rules={[{ required: 'true', type: 'email' }]}
                                style={{ marginBottom: 18 }}
                              >
                                <Input
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
                                  style={{border: "1px solid rgba(0, 0, 0, 0.14)"}}
                                  className="w-full h-[40px] p-2 border rounded"
                                  mask="(99) 99999-9999"
                                  value={fildsValue.telefone}
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
                              { required: true, message: 'Por favor entre com sua mensagem' },
                            ]}
                          >
                            <Input.TextArea
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
                              id="mobile_enviar_email"
                              disabled={
                                !fildsValue.nome ||
                                !fildsValue.email ||
                                !fildsValue.telefone ||
                                !fildsValue.mensagem ||
                                fildsValue.mensagem.length < 6
                              }
                              secondary
                              htmlType="submit"
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                height: 40,
                                background:
                                  fildsValue.nome &&
                                    fildsValue.email &&
                                    fildsValue.telefone &&
                                    fildsValue.mensagem.length >= 6
                                    ? '#F26526'
                                    : '#DDDDDC',
                                border: '1px solid #DDDDDC',
                                borderRadius: '4px',
                                color: '#FFFFFF',
                                boxShadow: 'none',
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
        </div>
      </>,
      document.querySelector('#__next')
    )
    : null;
};

export default ModalMail;
