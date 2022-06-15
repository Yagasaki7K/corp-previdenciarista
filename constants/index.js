export const API_HOST =
  process.env.REACT_APP_PREV_ENV === 'production'
    ? 'https://api.prev.app/v1'
    : `https://api.homolog.prev.app/v1`;

export const API_JURISPRUDENCIA_HOST =
  process.env.REACT_APP_PREV_ENV === 'production'
    ? 'https://api.prev.app/decisoes/v1'
    : `https://api.homolog.prev.app/decisoes/v1`;

export const API_DASHBOARD_HOST_V2 =
  process.env.REACT_APP_PREV_ENV === 'production'
    ? 'https://api.prev.app/dashboard/v2'
    : `https://api.homolog.prev.app/dashboard/v2`;

// export const API_HOST = `https://api.homolog.prev.app/v1`;

export const SITE_BASE_URL = 'https://previdenciarista.com';
export const APP_ESCRITORIO_URL =
  process.env.REACT_APP_PREV_ENV === 'production' ? 'https://prev.app/' : 'https://prevhml.app/';

export const BREAKPOINT_WIDTH = 768;
export const BREAKPOINT_WIDTH_NOTE_PEQUENO = 1366;

export const tagsPeticao = [
  { tag: 'TRABALHADOR_RURAL', desc: 'Trabalhador Rural' },
  { tag: 'SERVICO_MILITAR', desc: 'Serviço Militar' },
  { tag: 'ESCOLA_TECNICA', desc: 'Escola Técnica' },
  { tag: 'SERVICO_PUBLICO', desc: 'Serviço Público' },
  { tag: 'PESSOA_COM_DEFICIENCIA', desc: 'Pessoa com deficiência' },
  { tag: 'TRABALHO_NO_EXTERIOR', desc: 'Trabalho no Exterior' },
  { tag: 'CONTRIBUINTE_INDIVIDUAL', desc: 'Contribuinte Individual' },
  { tag: 'GPS_NAO_COMPUTADO', desc: 'GPS não computado' },
  { tag: 'ATIVIDADE_ESPECIAL', desc: 'Atividade Especial' },
  { tag: 'INCAPACIDADE_PARA_TRABALHO', desc: 'Incapacidade para o Trabalho' },
  { tag: 'ATIVIDADE_CONCOMITANTE', desc: 'Atividades Concomitantes' },
  {
    tag: 'CONTRATO_DE_TRABALHO_COM_ERRO_NO_CNIS',
    desc: 'Contrato de - trabalho com erro no CNIS',
  },
];

export const modelos = {
  AUXILIO_DOENCA: 'auxilio-doenca',
  APOSENTADORIA_ESPECIAL: 'aposentadoria-especial',
  APOSENTADORIA_POR_IDADE: 'aposentadoria-por-idade',
  APOSENTADORIA_POR_INVALIDEZ: 'aposentadoria-por-invalidez',
  APOSENTADORIA_POR_TEMPO_DE_CONTRIBUICAO: 'aposentadoria-por-tempo-de-contribuicao',
  ASSISTENCIAL: 'beneficio-assistencial-loas',
  AUXILIO_ACIDENTE: 'auxilio-acidente',
  PENSAO_POR_MORTE: 'pensao-por-morte',
  AUXILIO_RECLUSAO: 'auxilio-reclusao',
  SALARIO_MATERNIDADE: 'salario-maternidade',
};

export const servicos = [
  { value: 'FEDERAL', desc: 'Federal' },
  { value: 'ESTADUAL', desc: 'Estadual' },
  { value: 'OUTROS', desc: 'Outros' },
];

export const competencia = [
  { value: 'FEDERAL', desc: 'Federal' },
  { value: 'ESTADUAL', desc: 'Estadual' },
  { value: 'OUTROS', desc: 'Outros' },
];

export const tiposDeBeneficio = [
  {
    value: 'APOSENTADORIA_POR_TEMPO_DE_CONTRIBUICAO',
    desc: 'Aposentadoria por tempo de contribuição',
  },
  {
    value: 'APOSENTADORIA_POR_TEMPO_DE_CONTRIBUICAO_PONTOS',
    desc: 'Aposentadoria por tempo de contribuição pontos',
  },
  {
    value: 'APOSENTADORIA_POR_IDADE_DEFICIENCIA',
    desc: 'Aposentadoria por Idade da Pessoa com Deficiência',
  },
  {
    value: 'APOSENTADORIA_POR_TEMPO_DE_CONTRIBUICAO_DEFICIENCIA',
    desc: 'Aposentadoria por Tempo de Contribuição da Pessoa com Deficiência',
  },
  { value: 'APOSENTADORIA_POR_IDADE', desc: 'Aposentadoria por idade' },
  { value: 'APOSENTADORIA_ESPECIAL', desc: 'Aposentadoria especial' },
  { value: 'APOSENTADORIA_POR_INVALIDEZ', desc: 'Aposentadoria por invalidez' },
  { value: 'AUXILIO_DOENCA', desc: 'Auxilio doença' },
  { value: 'AUXILIO_ACIDENTE', desc: 'Auxilio acidente' },
  { value: 'ASSISTENCIAL', desc: 'Assistencial' },
  { value: 'PENSAO_POR_MORTE', desc: 'Pensão por morte' },
  { value: 'SALARIO_MATERNIDADE', desc: 'Salário maternidade' },
  { value: 'AUXILIO_RECLUSAO', desc: 'Auxilio reclusão' },
  123,
];

export const anoDaPublicacao = [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020].map((v) => {
  return { value: v, desc: v };
});

export const tiposPeticao = [
  {
    value: 'ACORDO_CONTRAPROPOSTA',
    desc: 'Acordo - Contraproposta',
    tipoDeProcesso: 'JUDICIAL',
  },
  {
    value: 'ANALISES_DE_APOSENTADORIA',
    desc: 'Análises de Aposentadoria',
    tipoDeProcesso: 'OUTROS',
  },
  {
    value: 'ANTECIPACAO_DE_TUTELA',
    desc: 'Antecipação de Tutela',
    tipoDeProcesso: 'JUDICIAL',
  },
  { value: 'CONTESTACOES', desc: 'Contestações', tipoDeProcesso: 'JUDICIAL' },
  { value: 'CONTRARRAZOES', desc: 'Contrarrazões', tipoDeProcesso: 'JUDICIAL' },
  {
    value: 'CONTRARRAZOES_ADMINISTRATIVAS',
    desc: 'Contrarrazões Administrativas',
    tipoDeProcesso: 'JUDICIAL',
  },
  {
    value: 'CUMPRIMENTO_DE_SENTENCA',
    desc: 'Cumprimento de sentença',
    tipoDeProcesso: 'JUDICIAL',
  },
  { value: 'DECLARACOES', desc: 'Declarações', tipoDeProcesso: 'JUDICIAL' },
  {
    value: 'DEFESAS_ADMINISTRATIVAS',
    desc: 'Defesas Administrativas',
    tipoDeProcesso: 'ADMINISTRATIVO',
  },
  { value: 'MANIFESTACOES', desc: 'Manifestações', tipoDeProcesso: 'JUDICIAL' },
  { value: 'PETICOES', desc: 'Petições', tipoDeProcesso: 'JUDICIAL' },
  {
    value: 'PETICOES_ADMINISTRATIVAS',
    desc: 'Petições Administrativas',
    tipoDeProcesso: 'ADMINISTRATIVO',
  },
  {
    value: 'PETICOES_INICIAIS',
    desc: 'Petições Iniciais',
    tipoDeProcesso: 'JUDICIAL',
  },
  {
    value: 'PROPOSTA_DE_ACORDO',
    desc: 'Propostas de Acordo',
    tipoDeProcesso: 'JUDICIAL',
  },
  { value: 'RECURSOS', desc: 'Recursos', tipoDeProcesso: 'JUDICIAL' },
  {
    value: 'RECURSO_ADMINISTRATIVO',
    desc: 'Recursos Administrativos',
    tipoDeProcesso: 'ADMINISTRATIVO',
  },
  { value: 'REPLICAS', desc: 'Réplicas', tipoDeProcesso: 'JUDICIAL' },
  {
    value: 'REQUERIMENTO_ADMINISTRATIVO',
    desc: 'Requerimento Administrativo',
    tipoDeProcesso: 'ADMINISTRATIVO',
  },
  {
    value: 'RECURSO_DE_APELACAO',
    desc: 'Recurso de Apelação',
    tipoDeProcesso: 'JUDICIAL',
  },
  {
    value: 'RECURSO_INOMINADO',
    desc: 'Recurso Inominado',
    tipoDeProcesso: 'JUDICIAL',
  },
  {
    value: 'RECURSO_ESPECIAL',
    desc: 'Recurso Especial',
    tipoDeProcesso: 'JUDICIAL',
  },
  {
    value: 'RECURSO_EXTRAORDINARIO',
    desc: 'Recurso Extraordinário',
    tipoDeProcesso: 'JUDICIAL',
  },
  { value: 'AGRAVOS', desc: 'Agravos', tipoDeProcesso: 'JUDICIAL' },
  {
    value: 'AGRAVO_DE_INSTRUMENTO',
    desc: 'Agravo de Instrumento',
    tipoDeProcesso: 'JUDICIAL',
  },
  {
    value: 'AGRAVO_INTERNO',
    desc: 'Agravo Interno',
    tipoDeProcesso: 'JUDICIAL',
  },
  { value: 'EMBARGOS', desc: 'Embargos', tipoDeProcesso: 'JUDICIAL' },
  {
    value: 'EMBARGOS_DE_DECLARACAO',
    desc: 'Embargos de Declaração',
    tipoDeProcesso: 'JUDICIAL',
  },
  {
    value: 'EMBARGOS_INFRIGENTES',
    desc: 'Embargos Infrigentes',
    tipoDeProcesso: 'JUDICIAL',
  },
  {
    value: 'INCIDENTE_DE_UNIFORMIZACAO',
    desc: 'Incidente de Uniformização',
    tipoDeProcesso: 'JUDICIAL',
  },
];

export const VantagesPlanos = [
  {
    title: 'CÁLCULOS',
    items: [
      'Cálculo automático a partir do CNIS em até 5 minutos',
      'Faça quantos cálculos você quiser, sem limites!',
      'Calcule a revisão da vida toda em segundos',
      'Faça liquidação de sentenças previdenciárias',
      'Relatório de requisitos não cumpridos pelo cliente',
      'Relatório detalhado de RMI e tempo de contribuição',
    ],
  },
  {
    title: 'PETIÇÕES',
    items: [
      'Indicação das melhores petições para o caso concreto',
      'Petições pré-preenchidas com dados do cliente e cálculo',
      'Edite a petição como quiser e imprima ou gere o PDF',
      'Petições que ganharam casos reais',
    ],
  },
  {
    title: 'CLIENTES',
    items: [
      'Gestão dos clientes cadastrados',
      'Geração automática de procurações e contratos',
      'Histórico de eventos do cliente',
      'Documentos do cliente guardados na nuvem',
    ],
  },
  // {
  //   title: 'E MAIS!',
  //   items: [
  //     'Sistema totalmente online, acesse tudo quando quiser de onde estiver',
  //     'Centralização da comunicação do escritório',
  //     'Gestão fácil dos segurados, assim como o histórico dos cálculos',
  //     'Gestão de contratos e procurações'
  //   ]
  // }
];

export const depoimentos = [
  {
    autor: 'Dra. Luciane Rodrigues da Silva',
    clienteDesde: '2018',
    depoimento: `A ação foi julgada procedente! O INSS juntou cálculos no valor de R$54 mil reais. Impugnamos com os cálculos de Liquidação de Sentença do Previdenciarista, no valor de R$104 mil reais. O dobro do ofertado.

    Adivinha? Ganhamos! Eles concordaram com nossos cálculos. Obrigada, mais uma vez. O melhor é poder confiar no seu trabalho!`,
  },
  {
    autor: 'Dr. Kléber Renato Crochemore Rios',
    clienteDesde: '2016',
    depoimento:
      'Posso afirmar com toda convicção de que o investimento que fiz no Previdenciarista já se pagou várias vezes, tendo em vista a quantidade de processos que resolvi graças às informações e jurisprudências recebidas.',
  },
  {
    autor: 'Dra. Jacqueline Marques',
    clienteDesde: '2017',
    depoimento:
      'Desde que assino a ferramenta, encontrei todos os modelos que necessitei. Geralmente, utilizo a fundamentação ou algum julgado reproduzido no modelo para ganhar agilidade na redação das minhas peças e até mesmo para estudar, porque o site tem teses que ainda não utilizei e servem de sugestão para clientes.',
  },
  {
    autor: 'Dra. Jane Marisa da Silva',
    clienteDesde: '2017',
    depoimento:
      'Parabéns, considero o Previdenciarista o melhor site de auxílio aos advogados previdenciários. É o Previdenciarista o meu instrumento de pesquisa quase que diário.',
  },
];

export const FAQ = [
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
