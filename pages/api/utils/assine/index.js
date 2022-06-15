export const formatToCurrency = (value = 0) => {
  return value.toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

export function addCartDataLayer() {
  if (!window || !window.dataLayer) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'eec.add',
    ecommerce: {
      currencyCode: 'BRL',
      add: {
        actionField: {
          list: 'Carrinho'
        },
        products: [
          {
            id: 'prev3Cartao',
            price: '89.90',
            name: 'Prev3 - Cartão de Crédito',
            category: 'Assinaturas',
            variant: 'Cartão de Crédito',
            brand: 'Previdenciarista',
            quantity: 1
          }
        ]
      }
    }
  });
};


export const features = [
  [
    '3.000 petições', `
    Envie o CNIS a partir do MeuINSS e calcule mais de 30 benefícios previdenciários.
    Veja todos os benefícios lado a lado e decida qual é o melhor para o seu cliente.
    `
  ],
  [
    'Sem limite de cálculos',
    `Envie o CNIS a partir do MeuINSS e calcule mais de 30 benefícios previdenciários.
    Veja todos os benefícios lado a lado e decida qual é o melhor para o seu cliente.
    `
  ],
  [
    'Sem pegadinhas',
    `Experimente agora, grátis por 15 dias no plano mensal e cancele quando quiser! Sem burocracia e enroscos no cancelamento.`
  ]
];

export const faq = [
  {
    q: 'Eu posso testar o sistema antes de assinar?',
    a: `
    <p style="margin-bottom: 10px">No plano MENSAL Você pode testar 100% das funcionalidades do sistema gratuitamente por 15 dias.</p>
    <p style="margin-bottom: 10px">Dentro desse período, caso não esteja satisfeito(a), você pode cancelar o plano sem nenhuma cobrança rapidamente dentro do seu próprio painel. Sem burocracia e sem precisar falar com ninguém. Após os 15 dias de teste, caso a assinatura não seja cancelada, o sistema cobrará o valor da mensalidade.</p>
    <p style="margin-bottom: 10px">No plano ANUAL, em decorrência do desconto de 20% aplicado na anuidade não há teste gratuito. Portanto nessa modalidade de plano você paga antecipadamente 1 ano de assinatura com desconto de 20%.</p>
    <p style="margin-bottom: 10px">Caso você prefira não abrir mão do teste gratuito, opte pelo plano MENSAL e dentro da plataforma, caso esteja satisfeito, troque posteriormente para o ANUAL.</p>
    `,
  },

  {
    q: 'Existe limite de cálculos ou acesso às petições?',
    a: 'Não, absolutamente nenhum. Você pode fazer <strong>quantos cálculos quiser</strong> e editar <strong>quantas petições quiser</strong>.',
  },
  {
    q: 'E se eu não encontrar uma petição que preciso?',
    a: `<p style="margin-bottom: 10px">Nossa equipe está sempre enviando novas petições para a base. Caso você não encontre uma petição que precisa, basta entrar em contato <a href="https://pedirpeticao.featureupvote.com/" target="_blank">conosco aqui</a> na nossa central de sugestões e sugerir uma petição à nossa equipe.</p>
      <p>Conte um pouco sobre seu caso e explique o que você precisa, para providenciarmos. Nós não vendemos petições sob medida, mas geralmente costumamos atender às sugestões dos usuários para melhorar nosso acervo.</p>`,
  },
  {
    id: 'clientes',
    q: 'Quantos clientes posso ter?',
    a: `<p>Quantos você quiser. Nossos planos funcionam por volume de clientes, mas podemos garantir que você poderá ter muitos clientes sem pagar um preço exorbitante.</p>
<a tabindex="-1" class="faq-link" href="#simulador">Confira aqui a tabela de volume de clientes e quanto, em cada faixa, você pagará.</a>
<p>Lembrando que, independente do volume de clientes você tiver, não importa se 10 ou 300 clientes, <strong>você poderá fazer quantos cálculos quiser e editar quantas petições quiser para cada um desses clientes.</strong></p>`,
  },
  {
    q: 'Existe fidelidade? Como posso cancelar?',
    a: `<p style="margin-bottom: 10px">Não existe qualquer espécie de fidelidade, você pode cancelar a assinatura a qualquer momento quando quiser, sem pagar nenhuma multa ou penalidade por isso.</p>
<p style="margin-bottom: 10px">Você pode cancelar diretamente na sua conta em apenas 3 cliques <a href="https://ajuda.previdenciarista.com/article/151-como-cancelar-minha-assinatura" target="_blank">(veja como aqui)</a>, sem precisar entrar em contato com ninguém para isso, mas se preferir também pode entrar em contato conosco.</p>
<p style="margin-bottom: 10px">Se você estiver no plano mensal, o sistema garante os dias restantes já pagos e não se renova no próximo mês. Se você estiver no plano anual, o sistema garante todo o período já pago (todos os meses subsequentes) e não se renova futuramente por mais 1 ano.</p>
<p style="margin-bottom: 10px">Os períodos já pagos são honrados pelo Previdenciarista até o fim da vigência e o valor não é devolvido.</p>`,
  },
  {
    id: 'equipe',
    q: 'Posso convidar minha equipe?',
    a: `<p>Sim! Deve! Você pode convidar toda a sua equipe para colaborar no seu escritório.</p>
<p>Independente da faixa de clientes que você tem no escritório, você tem 3 usuários grátis garantidos na sua conta, incluindo o seu. Você pode usar o sistema e convidar, portanto, mais 2 pessoas para usar o sistema sem pagar nada a mais por isso.</p>
<p>A partir do 4º usuário convidado, é cobrado o valor de R$19,90 ao mês por usuário. Essa cobrança é feita apenas a partir do 4º usuário. Portanto, se você tiver 3 usuários (incluindo o seu), não pagará nada; se tiver 4 usuários, pagará 1 usuário extra; se tiver 5 usuários, pagará 2 usuários extras e assim por diante.</p>
<p><a tabindex="-1" class="faq-link" href="#simulador">Confira aqui a tabela de preços considerando o volume de clientes e de usuários.</a></p>`,
  },
  {
    q: 'Como é feita a cobrança?',
    a: `<p style="margin-bottom: 10px;">No plano mensal a cobrança é feita no cartão de crédito informado todos os meses de forma recorrente, até que seja cancelado. No plano anual o sistema, ao final do período contratado e caso a assinatura ainda não esteja cancelada, faz uma nova cobrança de outra anuidade no cartão, ou gera novo boleto ou um novo PIX para mais um período de nova anuidade.</p>
    <p style="margin-bottom: 10px;">No entanto, se não estiver satisfeito, você pode cancelar quando quiser sem pagar multa ou qualquer penalidade. Isso faz o sistema parar de gerar novas cobranças no futuro.</p>`,
  },
  {
    q: 'Ainda tenho dúvidas, quero entrar em contato.',
    a: 'Nos envie um e-mail para <a tabindex="-1" class="faq-link" href="mailto:contato@previdenciarista.com">contato@previdenciarista.com</a> ou clique no balão de ajuda logo abaixo, no canto direito desta página.',
  },
  {
    q: `Como eu posso cancelar, caso não esteja satisfeito(a)?`,
    a: `
    <p>Nós garantimos um cancelamento fácil e rápido sem precisar entrar em contato com ninguém.</p>
    <p>Você pode cancelar seu plano a qualquer momento em até 3 cliques diretamente no seu painel. <a href="https://ajuda.previdenciarista.com/article/151-como-cancelar-minha-assinatura" target="_blank">Veja como é fácil cancelar aqui</a>.</p>
    `,
  },
  {
    q: `Posso pagar no boleto?`,
    a: `
    <p>Você pode pagar sua assinatura no boleto bancário apenas no plano ANUAL. O plano MENSAL comporta apenas o cartão de crédito como forma de pagamento.</p>
    `,
  },
  {
    q: `Existe renovação automática nos planos?`,
    a: `
    <p>Sim, porém a renovação automática por novos períodos (mais um mês no caso do mensal ou mais um ano no caso do anual) é feita apenas se você não cancelar sua assinatura ANTES da renovação. Cancelando a assinatura, independente do plano, antes da renovação, a renovação não é feita e o período de acesso já pago é honrado até o final. </p>
    `,
  },
  {
    q: `E o valor restante que eu paguei?`,
    a: `
    <p>Independente do plano o sistema garante seu acesso liberado a todas as funcionalidades contratadas até o fim do período que você já pagou. Apenas ao final do período já pago o sistema não renova (caso ocorra o cancelamento anterior) e o seu acesso é suspenso.</p>
    `,
  },
];


export const OptionFooter = [
  {
    title: "",
    body: [
      {
        text: "Termos de uso",
        isHref: "",
        isCor: "#FFFFFF",
        isFont: ""
      },
      {
        text: "Política de Privacidade",
        isHref: "",
        isCor: "#FFFFFF",
        isFont: ""
      },
      {
        text: "Previdenciarista - CNPJ 19.765.871/0001-24",
        isHref: "",
        isCor: "#FFFFFF",
        isFont: ""
      }
    ]
  }
]