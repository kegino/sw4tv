export interface FaqItem {
  q: string;
  a: string;
}

export const HOME_FAQ: FaqItem[] = [
  {
    q: "O que é o SW4TV e como funciona?",
    a: "O SW4TV é uma plataforma e reprodutor de streaming IPTV de alta potência, desenvolvido para proporcionar carregamento instantâneo e máxima estabilidade em mais de 35.000 canais ao vivo, filmes de cinema e séries completas em 4K. Ao solicitar seu acesso via WhatsApp, você recebe as credenciais (Xtream Codes / M3U) com tutorial de instalação para começar a assistir em menos de 5 minutos.",
  },
  {
    q: "O SW4TV realmente não trava durante os jogos de futebol?",
    a: "Não trava. A infraestrutura do SW4TV conta com servidores de alta capacidade distribuídos no Brasil aliados à tecnologia de compressão H.265 (HEVC). Isso assegura baixíssima latência e elimina travamentos mesmo durante clássicos e finais de campeonatos de grande audiência.",
  },
  {
    q: "Em quais dispositivos posso assistir ao SW4TV?",
    a: "O SW4TV é compatível com uma ampla variedade de aparelhos: Smart TVs (Samsung Tizen, LG webOS, Roku TV e Android TV), TV Box, Amazon Fire TV Stick, smartphones e tablets Android e iOS, além de computadores Windows e Mac.",
  },
  {
    q: "Posso solicitar um teste grátis do SW4TV?",
    a: "Com certeza! Disponibilizamos um teste grátis sem burocracia para que você comprove na prática a velocidade de carregamento dos canais, a qualidade em 4K e a estabilidade da grade antes de decidir assinar qualquer plano.",
  },
  {
    q: "Como recebo o acesso e o suporte após a contratação?",
    a: "O atendimento e suporte do SW4TV são realizados diretamente pelo WhatsApp. Assim que seu pedido é confirmado, você recebe login, senha, URL do servidor ou link M3U com tutorial ilustrado e acompanhamento humano para qualquer configuração.",
  },
  {
    q: "Quais são as formas de pagamento disponíveis?",
    a: "Aceitamos Pix com liberação imediata em poucos segundos, cartões de crédito nas principais bandeiras e boleto bancário através de gateway 100% seguro.",
  },
];

export const FULL_FAQ: FaqItem[] = [
  ...HOME_FAQ,
  {
    q: "Quantas telas posso assistir simultaneamente no SW4TV?",
    a: "Cada assinatura do SW4TV contempla 1 ponto de acesso em alta definição e 4K. Caso você queira adicionar mais telas para a família em outros cômodos, oferecemos pontos adicionais com valor promocional direto pelo WhatsApp.",
  },
  {
    q: "Qual a velocidade de internet recomendada para usar o SW4TV?",
    a: "O mínimo recomendado é 10 Mbps para canais em qualidade HD e 30 Mbps para streaming fluido em 4K Ultra HD. Para garantir o melhor desempenho, sugerimos conectar o aparelho via cabo Ethernet ou rede Wi-Fi 5 GHz.",
  },
  {
    q: "O SW4TV possui guia de programação (EPG) e favoritos?",
    a: "Sim. O SW4TV conta com Guia Eletrônico de Programação (EPG) completo e atualizado em tempo real, busca rápida por títulos e atores, lista de canais favoritos e controle parental com senha para canais adultos.",
  },
  {
    q: "Como funciona a renovação do meu plano?",
    a: "A renovação é prática e sem renovação automática forçada no cartão. Próximo ao fim do período contratado, nossa equipe envia um lembrete no WhatsApp e você renova quando quiser mantendo todas as suas preferências.",
  },
];
