import ReactDOM from 'react-dom';

import Link from 'next/link'
import PhoneIcon from '../../atoms/Icons/PhoneIcon';
import TextButton from './TextButtonModal';
import TextPhone from './TextPhone';

const ModalPhone = ({ isShowing, close, phone = "", phoneTwo }) => {
  const fecharModal = () => {
    close();
  };

  const numeroTratado = phone?.replace(/\D/g, "");

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
                <span
                  style={{
                    fontFamily: "Source Sans Pro",
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "26px",
                    color: "#3575AB",
                  }}
                >
                  Telefone
                </span>
                <svg style={{ cursor: "pointer" }} onClick={() => fecharModal()} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.9257 5.99919L11.6132 0.411694C11.6918 0.318836 11.6257 0.177765 11.5043 0.177765H10.0793C9.99534 0.177765 9.91499 0.215265 9.85963 0.279551L5.99356 4.88848L2.12749 0.279551C2.07392 0.215265 1.99356 0.177765 1.90784 0.177765H0.482844C0.361415 0.177765 0.295344 0.318836 0.373915 0.411694L5.06142 5.99919L0.373915 11.5867C0.356315 11.6074 0.345023 11.6327 0.341381 11.6596C0.337739 11.6866 0.341899 11.714 0.353368 11.7386C0.364837 11.7632 0.383133 11.784 0.406083 11.7986C0.429034 11.8131 0.455675 11.8208 0.482844 11.8206H1.90784C1.99177 11.8206 2.07213 11.7831 2.12749 11.7188L5.99356 7.10991L9.85963 11.7188C9.9132 11.7831 9.99356 11.8206 10.0793 11.8206H11.5043C11.6257 11.8206 11.6918 11.6796 11.6132 11.5867L6.9257 5.99919Z" fill="#949595" />
                </svg>
              </div>
              <div
                style={{
                  width: "100%",
                  marginTop: "8px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <TextPhone>{phone}</TextPhone>
                {phoneTwo ?
                  <TextPhone>
                    {phoneTwo}
                  </TextPhone>
                  : ""
                }
              </div>

              <div style={{ marginTop: 12 }}>
                <Link target="_blank" href={`https://api.whatsapp.com/send/?phone=55${numeroTratado}&text=Ol%C3%A1%2C+encontrei+seu+escrit%C3%B3rio+no+site+Previdenciarista+e+gostaria+de+conversar.&app_absent=0`} rel="noreferrer">
                  <button
                    id="mobile_abrir_whatsapp"
                    style={{
                      width: '100%',
                      height: "50px",
                      background: "#00A881",
                      border: "1px solid #00A881",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
                      borderRadius: "4px",
                      color: "#FFFFFF",
                      marginBottom: "16px"
                    }}
                  >
                     <div className="flex items-center justify-center">
                      <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.5984 9.5653C11.4037 9.4653 10.4341 8.9903 10.2537 8.92602C10.0734 8.85816 9.94124 8.82602 9.81088 9.02602C9.67874 9.22423 9.30374 9.6653 9.18588 9.79923C9.0716 9.93137 8.95552 9.94745 8.76088 9.84923C7.60374 9.27066 6.84481 8.81709 6.08231 7.50816C5.88052 7.15995 6.28409 7.18495 6.66088 6.43316C6.72517 6.30102 6.69302 6.18852 6.64302 6.08852C6.59302 5.98852 6.20017 5.02066 6.03588 4.62602C5.87695 4.24209 5.71267 4.29566 5.59302 4.28852C5.47874 4.28137 5.34838 4.28137 5.21624 4.28137C5.08409 4.28137 4.87159 4.33137 4.69124 4.52602C4.51088 4.72423 4.00195 5.20102 4.00195 6.16887C4.00195 7.13673 4.70731 8.07423 4.80374 8.20637C4.90374 8.33852 6.19124 10.3242 8.16802 11.1796C9.41802 11.7189 9.90731 11.7653 10.5323 11.6724C10.9127 11.6153 11.6966 11.1974 11.8591 10.7349C12.0216 10.2742 12.0216 9.87959 11.9734 9.79745C11.9252 9.70995 11.793 9.65995 11.5984 9.5653Z" fill="white" />
                          <path d="M15.3787 4.9C14.9751 3.94107 14.3965 3.08036 13.659 2.34107C12.9267 1.60607 12.0573 1.02182 11.1001 0.621429C10.118 0.208929 9.0751 0 8.0001 0H7.96439C6.88225 0.00535714 5.83403 0.219643 4.84832 0.641071C3.89931 1.04557 3.03807 1.63085 2.3126 2.36429C1.58224 3.10179 1.00903 3.95893 0.612601 4.91429C0.201887 5.90357 -0.00525584 6.95536 0.000101308 8.0375C0.00616069 9.27763 0.299551 10.4995 0.857244 11.6071V14.3214C0.857244 14.5393 0.943787 14.7482 1.09784 14.9023C1.25188 15.0563 1.46082 15.1429 1.67867 15.1429H4.39474C5.50241 15.7006 6.72426 15.9939 7.96439 16H8.00189C9.07153 16 10.109 15.7929 11.0858 15.3875C12.0382 14.9919 12.9043 14.4144 13.6358 13.6875C14.3733 12.9571 14.9537 12.1036 15.359 11.1518C15.7805 10.1661 15.9947 9.11786 16.0001 8.03571C16.0055 6.94821 15.7947 5.89286 15.3787 4.9ZM12.6805 12.7214C11.4287 13.9607 9.76796 14.6429 8.0001 14.6429H7.96974C6.89296 14.6375 5.82332 14.3696 4.87867 13.8661L4.72867 13.7857H2.21439V11.2714L2.13403 11.1214C1.63046 10.1768 1.3626 9.10714 1.35724 8.03036C1.3501 6.25 2.03046 4.57857 3.27867 3.31964C4.5251 2.06071 6.19117 1.36429 7.97153 1.35714H8.00189C8.89474 1.35714 9.76082 1.53036 10.5769 1.87321C11.3733 2.20714 12.0876 2.6875 12.7019 3.30179C13.3144 3.91429 13.7965 4.63036 14.1305 5.42679C14.4769 6.25179 14.6501 7.12679 14.6465 8.03036C14.6358 9.80893 13.9376 11.475 12.6805 12.7214Z" fill="white" />
                      </svg>
                      <TextButton>Falar no Watsapp</TextButton>
                     </div>
                  </button>
                </Link>

                <Link href={`tel:+55${numeroTratado}`}>
                  <button
                    id="mobile_abrir_chamada_telefone"
                    style={{
                      width: '100%',
                      height: "50px", 
                      background: "#F26526",
                      border: "1px solid #F26526",
                      boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.15)",
                      borderRadius: "4px",
                      color: "#FFFFFF",
                      marginBottom: "16px"
                    }}
                  >
                    <div className="flex items-center justify-center">
                      <PhoneIcon />
                      <TextButton>Ligar agora!</TextButton>
                    </div>
                  </button>

                </Link>
              </div>
            </div>
          </div>
        </div>
      </>,
      document.querySelector('#__next')
    )
    : null || {};
};

export default ModalPhone;
