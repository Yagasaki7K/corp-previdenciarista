module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/atoms/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        calibri: ["Calibri"],
      },
      fontSize: {
        'size11': '11px',
        'size12': '12px',
        'size14': '14px',
        'base': '16px',
        'size18': '18px',
        'sub_title20': '20px',
        'size22': '22px',
        'size24': '24px',
        'title26': '26px',
        'size28': '28px',
        'title30': '30px',
        'title36': '36px',
        'size38': '38px',
        'size16': "16px",
        'size20': "20px",
        'size26': "26px",
        'size30': "30px",
        'size36': "36px",
        'size38': "38px",
        'size42': "42px",
        'size48': "48px",
      }
    },
    colors: {
      prev: {
        default: {
          text_body: "#4D4D4D",
          text_white: "#FFFFFF",
          text_orange: "#FF7522",
          bg_orange: "#FF7522",
          subtitle: "#000000A3",
          textos: "#262626",
          alter_white: "#EDF6FD",
          blue: "#3575ab",
          avatar: "#ccc",
          card: "#242525",
          bg_orange1: "#db6e13",
          bg_orange2: "#ff8822",
          bg_blue: '#3375AB',
          bg_blue1: '#5FA1D8',
          text_silver1: "#C0D4E5",
          bg_silver: "#7e8ca1",
          bg_white: "#FFFFFF",
          select: "#000000B3",
        },
        assine: {
          textos: "#262626",
          borda_card_ano: "#3575ab",
          borda_card_mes: "#F26526",
          bg_trial: "#FF7522",
          bg_white: "#FFFFFF",
          fundo_plano_indicado: "#EDF6FD",
          subtextos: "#737373",
          preco: "#000000",
          desconto: "#00A881",
          botao: "#ffffff",
          borda_button: "#566274",
          bd_line_card: "#EAEAEA",
          borda_col: "#E5E5E5",
          depoimentos: "#4d4d4d",
          footer_depoimentos: "#f5f7fa",
          border_faq: "#D9D9D9"
        },
        casos: {
          subtitle: "#242525"
        },
        home: {
          date_word_pres: "#0000004D",
          p_word_pres: "#000000D6"
        },
        advogados: {
          green: "#3cb624",
        },
        escritorio: {
          title_blue: "#5fa1d8",
          clear: "#0000007A",
          body: "#F5F7FA",
          oab: "#787993",
          back_modal: "#000000"
        }
      }
    },
    lineHeight: {
      'lheight13': '1.13',
      'lheight44': '1.44',
      'lheight44': '1.81',
      'lheight16': '16px',
      'lheight22': '22px',
      'lheight23': '23px',
      'lheight25': '25px',
      'lheight26': '26px',
      'lheight28': '28px',
      'lheight30': '30px',
      'lheight40': '40px',
      'lheight44': '44px',
      'lheight46': '46px',
      'lheight56': '56px',
    }
  },
  plugins: [],
};
