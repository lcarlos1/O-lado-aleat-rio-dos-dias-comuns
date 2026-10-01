export interface Cronica {
  id: string;
  title: string;
  part: string;
  partNumber: number;
  page: number;
  summary: string;
  tagline: string;
  content: string[];
  theme: string;
}

export const BOOK_INFO = {
  title: "O LADO ALEATÓRIO DOS DIAS COMUNS",
  subtitle: "30 crônicas cotidianas e aleatórias",
  author: "Luiz Carlos dos Santos",
  city: "Toledo, PR",
  publisher: "LSantos",
  printer: "UICLAP",
  printerUrl: "https://loja.uiclap.com/titulo/ua205494",
  year: 2026,
  pages: 158,
  paper: "Pólen 80g",
  typography: "Times New Roman",
  format: "Brochura editorial com orelhas (14x21cm)",
  isbn: "978-00-0000-000-0",
  edition: "Edição revista e ampliada com a Parte IV — Ainda",
  synopsis: "Um livro sobre o que acontece quando nada acontece. A vida não se dá nos grandes acontecimentos solenes; ela reside no intervalo. No café que esfria na bancada, na chave esquecida no molho que já não abre porta alguma, no bilhete guardado na gaveta da bagunça e na promessa de um encontro que levou anos para se concretizar numa simples quarta-feira."
};

export const PREFACIO = {
  title: "Prefácio",
  page: 3,
  content: [
    "Eu não sabia que estava escrevendo este livro.",
    "Escrevia na segunda-feira, porque a segunda pesa. Na terça, porque a terça finge que é segunda. Na quarta, porque na quarta a semana já cansa. E assim fui, um dia de cada vez, reparando no que ninguém acha digno de nota: o café que esfria enquanto a gente atende uma ligação, o carrinho de mercado que nunca vai para o lugar certo, o cheiro que fica na camiseta mesmo depois de lavada.",
    "Este livro é sobre isso. Sobre o que acontece quando nada acontece.",
    "Chamei de O Lado Aleatório dos Dias Comuns porque a vida não acontece nos grandes eventos. Ela acontece no intervalo. No aleatório. Um bilhete esquecido no bolso, uma conversa de dois minutos na fila do banco, uma decisão que a gente toma sem perceber que está decidindo tudo.",
    "São 30 crônicas. Sete, uma para cada dia da semana, e o resto para o que sobra dela: o que fica. E, agora, o que ainda fica.",
    "Nesta edição revisada e ampliada, acrescentei a Parte IV — Ainda. São cinco crônicas que nasceram depois que o livro já tinha terminado, quando achei que não havia mais nada para acrescentar. Falam do que permanece mesmo quando muda de nome, do que a gente esquece atrás da porta, das conversas que duram dois minutos e ficam o dia inteiro. Do café que a gente marca para amanhã e que, finalmente, chega.",
    "Se você chegou até aqui, não precisa correr. Este não é um livro para ser devorado. Pode ser aberto ao acaso, numa página qualquer, como quem abre a janela para ver se está chovendo. Mas, se for lido na ordem, algumas coisas vão voltar: um café, numa gaveta, uma quarta-feira, um guarda-chuva.",
    "Espero que em alguma dessas linhas você se reconheça. Não no extraordinário. No comum. Que é onde, no fim, a gente mora.",
    "— Luiz Carlos dos Santos"
  ]
};

export const PARTS = [
  {
    number: 1,
    title: "Parte I — A semana",
    page: 5,
    description: "Do peso inexorável da segunda-feira à indolência lúcida do domingo. Um mapa afetivo da rotina.",
    count: 7
  },
  {
    number: 2,
    title: "Parte II — Outros dias aleatórios",
    page: 51,
    description: "As filas de banco, a gaveta da bagunça, os barulhos do vizinho e as roupas salvas da tempestade.",
    count: 6
  },
  {
    number: 3,
    title: "Parte III — O que fica",
    page: 79,
    description: "Chaves antigas, o ônibus das seis, padarias que mudam de dono e cadeiras vazias na cozinha.",
    count: 12
  },
  {
    number: 4,
    title: "Parte IV — Ainda",
    page: 133,
    description: "Cinco crônicas inéditas sobre o que resiste ao tempo: telefonemas inesperados, guarda-chuvas e o café de amanhã.",
    count: 5
  }
];

export const CRONICAS: Cronica[] = [
  {
    id: "segunda-feira",
    title: "Segunda-Feira",
    part: "Parte I — A semana",
    partNumber: 1,
    page: 7,
    tagline: "Segunda-feira chega sem pedir licença. Não bate na porta, não tira o sapato.",
    summary: "Sobre acordar cedo demais, o cheiro de pão francês na padaria e a pergunta que ninguém sabe responder direito.",
    theme: "Rotina & Início",
    content: [
      "Segunda-feira chega sem pedir licença. Não bate na porta, não tira o sapato, não pergunta se a gente está pronto. Quando percebemos, já está sentada à mesa, abrindo a geladeira e reclamando que o leite acabou.",
      "Há uma crueldade pequena nas segundas-feiras: elas começam cedo demais. O despertador toca quando a noite ainda parece agarrada às janelas. A rua tem outra cor, meio azul, meio cinza, e as pessoas saem de casa com aquele rosto de quem esqueceu alguma coisa importante — embora quase sempre tenham esquecido apenas de dormir mais.",
      "Na padaria, às sete e pouco, o homem do balcão passa o café pela máquina com a solenidade de quem está operando um equipamento de aeroporto. O cheiro de pão francês quente invade o salão.",
      "Uma mulher de casaco marrom segura o celular com uma mão e uma xícara com a outra. Está lendo alguma mensagem. Ri por um segundo. Depois volta àquela cara séria de segunda-feira, como se alguém pudesse descobrir que ela ainda sabe rir.",
      "Eu gosto de observar essas pequenas derrotas.",
      "O rapaz da entrega encosta a bicicleta na calçada e pede dois pingados. Um senhor conta moedas no bolso, uma por uma, até chegar ao valor exato. No fundo da padaria, alguém derruba uma colher. Ninguém olha.",
      "É segunda-feira e todos estão ocupados demais tentando chegar vivos à terça.",
      "Talvez seja por isso que a segunda tenha má fama. Ela não promete nada. A sexta oferece uma perspectiva. O sábado nem precisa se explicar. O domingo tem aquele silêncio de roupa no varal. A segunda não oferece nem migalha.",
      "Ela vem com boleto, reunião, uniforme, trânsito, marmita e aquela pergunta do colega de trabalho: '— E o fim de semana?' Como responder? Que no sábado fiquei vinte minutos procurando o carregador? Que a grande aventura foi comprar tomates bons por um preço razoável? Eu mesmo já menti sobre isso: 'Foi ótimo.'",
      "Mas há uma coisa curiosa nas segundas-feiras. Depois que passam as primeiras horas, elas começam a perder a pose. À tarde, o relógio ganha uma generosidade estranha. Quando saio para a rua, já é noite. No ponto, uma menina come biscoito e o pai tenta fechar o guarda-chuva que emperrou. Ela segura o riso. Ele também.",
      "Talvez a segunda-feira não seja tão ruim. Talvez o problema seja exigir dela uma gentileza que ela não sabe oferecer. Ela chega amassada, com sapato molhado e lista de coisas para resolver. Mas é justamente ela que aparece quando tudo precisa começar outra vez.",
      "No fim da noite, retiro o relógio do pulso. Amanhã será terça-feira. Há um copo na pia que eu devia ter lavado hoje. Deixo para amanhã."
    ]
  },
  {
    id: "terca-feira",
    title: "Terça-Feira",
    part: "Parte I — A semana",
    partNumber: 1,
    page: 11,
    tagline: "A terça entra pela porta dos fundos, pendura o casaco e pergunta: o que tem para hoje?",
    summary: "O dia mais adulto da semana, telefonemas maternos sem motivo e lembranças de dias difíceis que continuam.",
    theme: "Sobrevivência & Memória",
    content: [
      "A terça-feira é um dia que já chega trabalhando. A segunda ainda traz no rosto aquela ressaca do domingo. A quarta tem qualquer coisa de promessa. Mas a terça entra pela porta dos fundos, pendura o casaco, ajeita a cadeira e pergunta: '— O que tem para hoje?'",
      "E quase sempre tem.",
      "Na terça de manhã, a cidade parece ter encontrado o próprio ritmo. Não há mais a hesitação da segunda. O ônibus vem cheio, o padeiro já sabe quem vai pedir pão na chapa, o porteiro cumprimenta as mesmas pessoas com a mesma voz de sempre.",
      "Talvez a terça seja o dia mais adulto da semana. Não acontece nada muito especial. E justamente por isso a vida aparece melhor.",
      "Foi numa terça-feira, por exemplo, que minha mãe me ligou apenas para saber se eu tinha almoçado. Não precisava de nada. Perguntou do trabalho, falou que o tomate estava um absurdo e comentou que a vizinha tinha pintado a casa de amarelo. Antes de desligar, ficou em silêncio: '— Você está bem?' Eu disse que sim. Ela disse: '— Tá bom.' E desligou. Há perguntas que não procuram resposta. Procuram apenas uma brecha para entrar.",
      "Também foi numa terça que recebi uma notícia ruim anos atrás. Não lembro do céu nem do almoço, mas do homem de bicicleta com bananas amarradas na garupa. A memória não parece interessada no acontecimento principal. Guarda a beirada dele.",
      "A terça-feira não interrompe o expediente porque alguém está sofrendo. Ela simplesmente continua. Com o tempo, a gente aprende alguma coisa com ela: certas tristezas precisam caber no bolso junto com a chave de casa. A vida não espera a tristeza passar para continuar acontecendo; ela acontece ao redor dela."
    ]
  },
  {
    id: "quarta-feira",
    title: "Quarta-Feira",
    part: "Parte I — A semana",
    partNumber: 1,
    page: 17,
    tagline: "Quarta-feira tem uma maneira discreta de anunciar que a semana passou da metade.",
    summary: "Dia de meio-termo, quatro minutos de impaciência no banco e o café imaginado que nunca se tomou.",
    theme: "Esperança & Possibilidade",
    content: [
      "Quarta-feira tem uma maneira discreta de anunciar que a semana passou da metade. Não chega com a brutalidade da segunda nem com a festa da sexta. A quarta simplesmente aparece. Meio da semana. Já foram dois dias. Restam dois.",
      "Tenho uma lembrança de uma quarta-feira que não tinha nada de especial. Numa fila de banco, uma senhora procurava um documento dentro de uma bolsa enorme. A fila se impacientou. Eu também. Quatro minutos. Foi o tempo de uma pessoa procurar um papel. E eu me esqueci que um dia talvez seja eu o velho procurando um documento enquanto alguém atrás de mim suspira.",
      "Na hora do almoço, fui a um restaurante pequeno. Pedi café. Veio numa xícara branca, com uma lasquinha na borda. Foi então que me lembrei de um café que nunca tomei. Ele nasceu num convite que ficou pela metade. A mesa, na minha cabeça, é sempre a mesma: uma padaria antiga perto da praça, cadeiras de ferro que rangem.",
      "Os cafés de verdade terminam. A conta chega, a xícara esfria, a pessoa se levanta. Mas o café imaginado não termina: continua na mesa imaginária com duas xícaras cheias, esperando uma conversa. Na quarta-feira, gosto de pensar que aquele café ainda pode acontecer."
    ]
  },
  {
    id: "quinta-feira",
    title: "Quinta-Feira",
    part: "Parte I — A semana",
    partNumber: 1,
    page: 23,
    tagline: "Quinta-feira é um dia que já sabe que está perto.",
    summary: "A frase 'depois a gente vê isso' e a mensagem inesperada: 'Vamos tomar aquele café?'.",
    theme: "Reencontro & Tempo",
    content: [
      "Quinta-feira é um dia que já sabe que está perto. A gente acorda diferente. Não é alegria ainda, mas existe uma espécie de descanso antecipado no corpo. A semana já não parece uma coisa comprida.",
      "No almoço, escuto um homem ao telefone dizer: 'Depois a gente vê isso.' É uma frase que sustenta uma quantidade impressionante de coisas: contas, conversas, problemas, desculpas, telefonemas não feitos.",
      "Na quinta-feira, porém, o telefone vibrou. Era uma mensagem: 'Vamos tomar aquele café?'",
      "Fiquei olhando para a tela. Não era mais uma lembrança nem a mesa da minha cabeça. Escrevi: 'Vamos.' Ela mandou o horário e o endereço. De repente, o café tinha data, lugar e duas pessoas.",
      "Cheguei quinze minutos antes. Minha amiga chegou cinco minutos atrasada, um pouco mais grisalha. Sentou. Por alguns segundos, ficamos nos olhando, como se precisássemos confirmar que aquele encontro finalmente tinha saído da cabeça e entrado no mundo.",
      "Falamos de coisas inúteis: combustível, cachorro da rua, joelho que dói com a chuva. Ela disse: 'Sabe de uma coisa? Acho que a gente demorou demais.' O café de agora não consertava os anos que passaram, mas estava ali, quente o bastante para ocupar as duas mãos."
    ]
  },
  {
    id: "sexta-feira",
    title: "Sexta-Feira",
    part: "Parte I — A semana",
    partNumber: 1,
    page: 31,
    tagline: "Sexta-feira acorda antes da gente. O despertador toca e não parece uma ameaça.",
    summary: "O ar mais leve, os rituais de fuga no trabalho e a confirmação para a próxima quarta.",
    theme: "Alívio & Liberdade",
    content: [
      "Sexta-feira acorda antes da gente. Às seis da manhã, ela já está andando pela casa, mexendo nas cortinas, fazendo barulho com as chaves. O despertador toca e, pela primeira vez na semana, não parece uma ameaça.",
      "Na rua, as pessoas parecem carregar menos peso. No trabalho, surge a frase clássica: 'Hoje vai ter alguma coisa?' Às cinco e meia, começam os rituais de fuga: computadores desligados, canetas guardadas.",
      "No fim da manhã, recebo a mensagem: 'Café semana que vem?' Respondo: 'Quarta?' Ela manda: 'Quarta.' Duas pessoas já grisalhas aprendendo que alguns encontros precisam de data para não virarem lembrança.",
      "Sexta não quer saber se conseguimos fazer tudo na semana. Apenas abre a porta. Em casa, abro uma cerveja na varanda. Na pia, há duas xícaras limpas: uma minha, outra que lavei sem perceber. Deixo a sexta terminar sem pressa."
    ]
  },
  {
    id: "sabado",
    title: "Sábado",
    part: "Parte I — A semana",
    partNumber: 1,
    page: 39,
    tagline: "Sábado talvez seja o único dia em que alguém pode responder 'não sei' sem completar a frase.",
    summary: "Vinte minutos procurando o carregador de celular e o luxo de não precisar provar nada.",
    theme: "Desaceleração & Silêncio",
    content: [
      "Sábado tem uma espécie de preguiça própria. Deixa o despertador tocar sozinho até desistir. Acordei às oito e quarenta e sete, procurei uma razão para levantar, não encontrei, e virei para o outro lado.",
      "Na padaria, o atendente pergunta: 'O de sempre?' Eu respondo: 'Hoje, não sei.' Ele me olha como se eu tivesse cometido uma infração grave. No sábado, não precisamos provar que estamos aproveitando.",
      "Passei vinte minutos procurando o carregador de celular por todos os cômodos, até achá-lo na tomada do lado da cama. Deixei a bateria quase acabar de propósito — havia algo de bom naquela pequena desobediência.",
      "Dormi no sofá depois do almoço e acordei às quatro e vinte com o sol dourado entrando. Pela primeira vez em muito tempo, eu não estava esperando que algo acontecesse. Só estava acordado para ver se acontecia."
    ]
  },
  {
    id: "domingo",
    title: "Domingo",
    part: "Parte I — A semana",
    partNumber: 1,
    page: 45,
    tagline: "O domingo tem esse luxo estranho: por algumas horas, ninguém parece saber que horas são.",
    summary: "A fama de tristeza do domingo, os pequenos trabalhos domésticos e a espera pela quarta-feira.",
    theme: "Ausência & Afeto",
    content: [
      "Domingo começa devagar. A cidade acorda aos poucos, sem compromisso e sem telefone tocando antes das dez.",
      "Domingo, porém, tem uma mania de mexer nas gavetas da cabeça. Lembra domingos antigos: cheiro de carne assando, roupa molhada no varal, mesas que comportavam mais pessoas do que comportam hoje.",
      "Talvez por isso o domingo tenha essa fama de tristeza: quando o barulho da semana diminui, certas coisas escondidas aproveitam para aparecer.",
      "Na cozinha, percebo que estava esperando pela quarta-feira. Não pela semana. Pela quarta. Por uma mesa e duas xícaras. Peguei duas xícaras na pia, guardei uma e deixei a outra esperando."
    ]
  },
  {
    id: "a-fila",
    title: "A Fila",
    part: "Parte II — Outros dias aleatórios",
    partNumber: 2,
    page: 53,
    tagline: "A fila tem suas próprias regras, que ninguém escreveu.",
    summary: "A regra de nunca trocar de fila sem observar, a bolsa profunda e a ilusão de que o outro lado anda mais rápido.",
    theme: "Paciência & Sociedade",
    content: [
      "A fila tem suas próprias regras, que ninguém escreveu. Não se passa na frente. Não se encosta demais na pessoa adiante. E a mais importante: não se troca de fila sem observar a outra por pelo menos meio minuto.",
      "Naquela manhã no banco, escolhi a fila menor. Meu primeiro erro. A senhora da frente tirou lenço, envelope, chaves, carteira... A outra fila andou. Um homem trocou; no instante seguinte, a dele parou e a nossa andou.",
      "Talvez seja por isso que a fila canse tanto: não é apenas esperar. É olhar para o caminho ao lado e imaginar que ele pode ser mais rápido. A gente faz isso com filas. E, às vezes, com a vida inteira."
    ]
  },
  {
    id: "a-gaveta",
    title: "A Gaveta",
    part: "Parte II — Outros dias aleatórios",
    partNumber: 2,
    page: 57,
    tagline: "Existe uma gaveta em toda casa que não respeita nenhuma organização.",
    summary: "Pilhas velhas, fotografias antigas, contas de 2019 e o bilhete que dizia apenas 'Não esquecer'.",
    theme: "Memória & Objetos",
    content: [
      "Existe uma gaveta em toda casa que não respeita nenhuma organização. A minha só abre com um pequeno puxão.",
      "Fui procurar uma caneta. Encontrei uma pilha, um elástico, uma foto antiga onde reconheci duas pessoas e demorei para a terceira, uma conta paga de 2019 e um bilhete com minha letra apressada: 'Não esquecer'. Não esquecer o quê?",
      "A memória guardou o papel e perdeu aquilo que ele mandava guardar. E a única caneta que encontrei não funcionava.",
      "Fechei a gaveta. Por enquanto, ela poderia continuar com seus segredos. E eu com os meus."
    ]
  },
  {
    id: "o-vizinho-de-cima",
    title: "O Vizinho de Cima",
    part: "Parte II — Outros dias aleatórios",
    partNumber: 2,
    page: 61,
    tagline: "O apartamento de cima começa o dia antes do meu.",
    summary: "O móvel arrastado, a furadeira às oito da manhã, a discussão no WhatsApp e o neto que corre o dia todo.",
    theme: "Convivência & Humanidade",
    content: [
      "O apartamento de cima começa o dia antes do meu. Sei quando abre a torneira e quando arrasta uma cadeira que parece nunca encontrar seu lugar definitivo.",
      "No grupo do prédio, mais de cem mensagens reclamando da obra e da água no elevador. Eu não escrevo nada; leio tudo, espectador de janela.",
      "Dias depois, encontrei uma senhora no elevador. 'Tenho um neto lá em casa. Ele corre o dia inteiro.'",
      "Naquela noite, ouvi passos e uma corrida curta no teto. O barulho parecia diferente. Ou talvez eu tivesse mudado. Agora eu sabia quem corria lá."
    ]
  },
  {
    id: "a-roupa-no-varal",
    title: "A Roupa no Varal",
    part: "Parte II — Outros dias aleatórios",
    partNumber: 2,
    page: 67,
    tagline: "A roupa no varal sempre parece mais importante quando começa a chover.",
    summary: "O som rítmico do pregador amarelo batendo ao vento e a corrida ridícula para salvar o lençol.",
    theme: "Cuidado Doméstico",
    content: [
      "A roupa no varal sempre parece mais importante quando começa a chover. Antes disso, é apenas roupa.",
      "O pregador amarelo fazia 'toc, toc' contra a parede ao vento. De repente o céu escureceu. Três gotas caíram e começou o desespero.",
      "Corri para a área de serviço, recolhi lençol, camiseta voando, meias caídas. Fiquei no corredor, encharcado, segurando uma calça contra o peito e ri sozinho.",
      "Era uma cena ridícula. Mas havia ternura naquela pressa. Salvar roupa. Quem olha de fora talvez ache pouco. Quem mora sozinho sabe que não é."
    ]
  },
  {
    id: "o-visto-por-ultimo",
    title: "O Visto por Último",
    part: "Parte II — Outros dias aleatórios",
    partNumber: 2,
    page: 71,
    tagline: "Escrever uma mensagem é fácil. O difícil começa depois que apertamos 'enviar'.",
    summary: "Os dois traços azuis, o tempo que estica entre 21h17 e 23h07 e a arte de dizer muito com poucas palavras.",
    theme: "Comunicação Moderna & Ansiedade",
    content: [
      "Escrever uma mensagem é fácil. O difícil começa depois que apertamos 'enviar'. Escrevi 'Oi', apaguei. 'Tudo bem?', enviei. Duas marcas azuis. Visualizado às 21h17.",
      "Foi curioso perceber como um minuto muda de tamanho. 21h18, 21h21, 21h29. Fui lavar a louça para não olhar para a tela.",
      "Durante anos a espera aconteceu de outros jeitos: esperar o carteiro, o telefone de gancho. Agora existe o visto por último.",
      "Às 23h07 veio a resposta: 'Desculpa. Hoje não consegui responder. Amanhã te falo.' Soltei os ombros sem perceber. Poucas palavras carregando anos."
    ]
  },
  {
    id: "o-carrinho",
    title: "O Carrinho",
    part: "Parte II — Outros dias aleatórios",
    partNumber: 2,
    page: 75,
    tagline: "O carrinho do mercado nunca fica exatamente onde deveria.",
    summary: "O senhor das flores no mercado, a senhora comparando sabão e o gesto silencioso no estacionamento.",
    theme: "Solidariedade Invisível",
    content: [
      "O carrinho do mercado nunca fica onde deveria. Às vezes abandonado com duas bananas e um sabonete, como se alguém tivesse se lembrado de viver outra vida.",
      "No estacionamento, vi carrinhos espalhados entre as vagas. Peguei o meu, juntei outro abandonado perto da árvore e levei até a entrada. Fez um estalo metálico.",
      "Era uma coisa sem importância. Ninguém tinha pedido, ninguém notaria. Mas me deu uma sensação boa. Talvez porque alguns objetos — como algumas pessoas — passem tempo demais fora do lugar apenas porque ninguém se dispôs a levá-los de volta."
    ]
  },
  {
    id: "a-ultima-chave",
    title: "A Última Chave",
    part: "Parte III — O que fica",
    partNumber: 3,
    page: 81,
    tagline: "Há chaves que continuam no chaveiro muito depois de deixarem de abrir qualquer porta.",
    summary: "A chave de metal escurecido de uma casa que já não é nossa e a dificuldade de jogar fora o passado.",
    theme: "Despedida & Apego",
    content: [
      "Há chaves que continuam no chaveiro muito depois de deixarem de abrir qualquer porta. A gente sabe disso. Mesmo assim, não tira.",
      "Carreguei por meses uma chave pequena, de metal escurecido, com três marcas na lateral. A casa já não era minha, mas a chave continuava no molho.",
      "A vida tem uma maneira estranha de abandonar os lugares aos poucos: primeiro saem os móveis, depois as roupas, os objetos pequenos. Por último, o cheiro. E, às vezes, uma chave.",
      "Tentei jogar no lixo, hesitei e guardei na gaveta da bagunça. No dia seguinte o molho ficou mais leve, mas a mão sente antes da cabeça entender."
    ]
  },
  {
    id: "o-padeiro-que-fechou",
    title: "O Padeiro que Fechou",
    part: "Parte III — O que fica",
    partNumber: 3,
    page: 85,
    tagline: "A primeira coisa que estranhei foi o silêncio.",
    summary: "O dono antigo que se aposentou, a ausência do 'o de sempre' e o tempo necessário para um lugar voltar a ser nosso.",
    theme: "Mudança & Hábitos",
    content: [
      "A padaria estava aberta, mas o homem do balcão não estava. Havia outro no lugar dele, mais jovem. Ele perguntou: 'Mais alguma coisa?' Eu quase disse: 'O de sempre'. Mas não havia mais 'o de sempre'.",
      "É assim que um lugar vira nosso: não pela fachada, mas pelos pequenos hábitos não combinados. O padeiro que já sabia quem queria café forte e quem levava dois pães.",
      "Descobri que o antigo dono se aposentou. 'Coisa da vida'. Passei dias comprando em outro lugar, mas voltei. Na terceira semana, o novo rapaz me viu entrar e perguntou: 'O de sempre?' Sorri: 'O de sempre.' E a padaria voltou a ser a mesma."
    ]
  },
  {
    id: "a-cadeira-vazia",
    title: "A Cadeira Vazia",
    part: "Parte III — O que fica",
    partNumber: 3,
    page: 91,
    tagline: "Na cozinha há uma cadeira que ninguém usa.",
    summary: "A cadeira que envelheceu sem sair do lugar enquanto as pessoas foram embora.",
    theme: "Tempo & Saudade",
    content: [
      "Na cozinha há uma cadeira que ninguém usa. Não está quebrada nem velha demais. É simplesmente uma cadeira que ficou.",
      "Encontrei uma foto antiga e a cadeira estava lá, ocupada. Outra foto, outra toalha, e ela de novo. Ela envelheceu sem sair do lugar. As pessoas é que foram embora: para outras cidades, outras casas, ou não voltaram.",
      "A cadeira não guardou nada. Quem guardou fui eu. À noite, deixei-a quieta. Não tive coragem de puxá-la para perto da mesa."
    ]
  },
  {
    id: "o-onibus-das-seis",
    title: "O Ônibus das Seis",
    part: "Parte III — O que fica",
    partNumber: 3,
    page: 95,
    tagline: "O ônibus das seis nunca chega exatamente às seis.",
    summary: "Cumprimentos silenciosos com o motorista e o dia em que a linha mudou sem aviso.",
    theme: "Cotidiano & Laços Invisíveis",
    content: [
      "O ônibus das seis nunca chega às seis: chega às seis e quatro, seis e oito, seis e onze. Mas todo mundo chama de ônibus das seis.",
      "Havia os mesmos passageiros: a moça da mochila vermelha, o rapaz da farmácia, o senhor da marmita. E o motorista. Ele me conhecia. Não falávamos muito, apenas um aceno de cabeça. Relações que se sustentam com pouco.",
      "Naquela sexta, desci e ele disse: 'Bom fim de semana'. Foi a última vez. A linha mudou, o motorista mudou, o ponto continuou. Por meses ainda olhei para a rua às seis horas."
    ]
  },
  {
    id: "o-cheiro-que-fica",
    title: "O Cheiro que Fica",
    part: "Parte III — O que fica",
    partNumber: 3,
    page: 99,
    tagline: "A camiseta estava limpa. Mesmo assim, senti o cheiro.",
    summary: "O aroma que resiste na gola de uma roupa e no banco do passageiro do carro.",
    theme: "Sensações & Memória Involuntária",
    content: [
      "A camiseta tinha sido lavada, mas quando peguei pela gola senti o cheiro. O cheiro de alguém que já tinha ido embora.",
      "A gente não consegue guardar uma voz num armário, nem colocar uma risada numa caixa. Mas um cheiro permanece.",
      "No carro, no travesseiro. O vento leva aos poucos, mas enquanto dura, traz de volta manhãs inteiras que julgávamos esquecidas."
    ]
  },
  {
    id: "a-casa-de-outro",
    title: "A Casa de Outro",
    part: "Parte III — O que fica",
    partNumber: 3,
    page: 103,
    tagline: "Voltei à rua onde passei a infância num sábado de manhã.",
    summary: "A casa agora pintada de verde, o portão com outra fechadura e a fronteira entre lembrar e querer recuperar.",
    theme: "Infância & Passado",
    content: [
      "Voltei à rua da infância por acaso. A casa estava pintada de verde — antes era clara. Havia vasos na porta e roupas no varal.",
      "A casa parecia menor do que na minha lembrança. Na infância, o corredor parecia infinito. Agora caberia numa fotografia.",
      "Na calçada havia uma bola azul de brinquedo. Pensei em atravessar a rua, mas não atravessei. Há uma diferença profunda entre lembrar e querer recuperar. A casa verde era apenas a casa verde de outra pessoa."
    ]
  },
  {
    id: "a-foto-apagada-sem-querer",
    title: "A Foto Apagada sem Querer",
    part: "Parte III — O que fica",
    partNumber: 3,
    page: 107,
    tagline: "Foi um toque errado. Só isso.",
    summary: "Limpando a memória do telefone, o dedo escorrega e apaga o instante que não volta mais.",
    theme: "Efemeridade Digital",
    content: [
      "Apagando fotos inúteis para liberar espaço, meu dedo escorregou e confirmei sem ler. A foto sumiu.",
      "Era uma imagem simples: duas xícaras, uma janela, duas pessoas ao fundo. Fiquei uma hora vasculhando nuvens e lixeiras. Nada.",
      "A foto de papel da gaveta sobreviveu décadas porque alguém imprimiu. A do celular sumiu em um toque. Mas, sem a imagem, a memória começou a trabalhar dobrado para recriá-la em cada detalhe."
    ]
  },
  {
    id: "o-cafe-frio",
    title: "O Café Frio",
    part: "Parte III — O que fica",
    partNumber: 3,
    page: 111,
    tagline: "Numa quinta-feira, o café ficou frio.",
    summary: "Duas xícaras postas à mesa e uma ligação que adiou tudo: a tristeza doméstica de jogar café fora.",
    theme: "Solidão & Desencanto",
    content: [
      "Havia feito duas xícaras. Uma para mim, outra para ela. Atendi ao telefone, me distraí, e quando voltei, o café estava frio.",
      "Não é pelo café; é pelo motivo. Era para duas pessoas, virou apenas café frio.",
      "Existe uma tristeza doméstica em jogar café fora. Bebi a xícara fria assim mesmo. Café frio também pode ser bebido; só não precisa ser jogado fora."
    ]
  },
  {
    id: "o-nome-na-agenda",
    title: "O Nome na Agenda",
    part: "Parte III — O que fica",
    partNumber: 3,
    page: 115,
    tagline: "Há nomes que a gente não apaga.",
    summary: "O contato sem foto nem sobrenome mantido por pura incapacidade de deletar uma época inteira.",
    theme: "Lembrança & Relações",
    content: [
      "Há nomes que a gente não apaga. Não porque ainda ligue, mas justamente porque não liga mais.",
      "No meu telefone há um nome só com primeiro nome. Sem foto. Sem conversa recente. Ao rolar a lista, meu dedo diminui a velocidade ali.",
      "Como quem caminha por uma rua antiga e diminui o passo ao ver uma casa conhecida. O nome ocupa poucas letras na tela, e isso parece suficiente."
    ]
  },
  {
    id: "o-bilhete-que-nao-foi-entregue",
    title: "O Bilhete que Não Foi Entregue",
    part: "Parte III — O que fica",
    partNumber: 3,
    page: 119,
    tagline: "Não esquecer de dizer.",
    summary: "O papel dobrado na gaveta com palavras que perderam a hora de serem ditas.",
    theme: "Silêncios & Palavras Não Ditas",
    content: [
      "Encontrei na gaveta um papel dobrado: 'Não esquecer de dizer'. Escrito anos atrás para alguém que se foi.",
      "Pensei em entregar agora, mas não faria sentido algum. O assunto perdeu a hora.",
      "Há frases que foram feitas para chegar a alguém; outras precisam apenas ser escritas. Guardei na gaveta e não senti mais vontade de entregar."
    ]
  },
  {
    id: "o-aniversario-sem-bolo",
    title: "O Aniversário sem Bolo",
    part: "Parte III — O que fica",
    partNumber: 3,
    page: 123,
    tagline: "Meu aniversário caiu numa terça-feira.",
    summary: "A esperança silenciosa de que alguém lembre sozinho, a fatia de bolo comprada na padaria e o café prometido.",
    theme: "Aniversários & Expectativa",
    content: [
      "Acordei, olhei para o teto: terça-feira. No trabalho, reuniões e ninguém comentou nada. Às 11h14 vibrou propaganda, depois banco.",
      "Não queria cobrar parabéns forçado. À noite, comprei uma fatia de bolo na padaria, pus no prato, não acendi vela e comi metade.",
      "Às dez da noite, ela mandou mensagem: 'Você fez aniversário hoje? Amanhã eu pago um café.' Não era bolo, não era festa. Era um café. A outra metade do bolo no café da manhã estava melhor fria."
    ]
  },
  {
    id: "a-quarta-que-virou-quarta",
    title: "A Quarta que Virou Quarta",
    part: "Parte III — O que fica",
    partNumber: 3,
    page: 127,
    tagline: "Aquele foi o momento em que percebi que a quarta-feira tinha mudado.",
    summary: "O garçom que já traz duas xícaras sem perguntar: quando o encontro imaginado se torna rotina real.",
    theme: "Presença & Intimidade",
    content: [
      "Na primeira vez, cheguei quinze minutos antes. Na quarta, cheguei atrasado e ela já estava sentada. O garçom trouxe duas xícaras sem açúcar sem sequer perguntar.",
      "Falamos sobre o preço do pão, um vizinho barulhento, dores nas costas e no joelho. Durante anos imaginei conversas grandiosas; agora ela era banal e perfeita.",
      "A mesa real superava a da imaginação: o café podia esfriar, alguém podia rir de bobagem, não havia aflição.",
      "Ao despedirmos na esquina: '— Quarta que vem? — Quarta.' E pela primeira vez, quarta-feira podia ser apenas quarta-feira."
    ]
  },
  {
    id: "a-ligacao-que-nao-era-importante",
    title: "A Ligação que Não Era Importante",
    part: "Parte IV — Ainda",
    partNumber: 4,
    page: 135,
    tagline: "O telefone tocou às dez e dezessete de uma terça-feira.",
    summary: "Uma antiga colega liga para perguntar o nome de uma loja de móveis e a conversa dura três minutos a mais.",
    theme: "Laços Esquecidos",
    content: [
      "O telefone tocou às dez e dezessete de uma terça. Era uma colega de trabalho de anos atrás que precisava do nome de uma loja de mesas perto da praça.",
      "Ficamos tentando lembrar da fachada (era azul? ou verde?). Ela anotou, agradeceu e conversamos mais dois minutos sobre nada.",
      "Percebi que algumas pessoas não desaparecem de vez: primeiro saem da rotina, depois viram nome na agenda, e de repente o telefone toca e elas voltam ao tamanho de antes por três minutos."
    ]
  },
  {
    id: "o-lugar-que-mudou-de-nome",
    title: "O Lugar que Mudou de Nome",
    part: "Parte IV — Ainda",
    partNumber: 4,
    page: 141,
    tagline: "A loja tinha mudado de nome. Não era uma surpresa.",
    summary: "Onde antes era padaria, agora é loja de decoração; o café servido em máquina pequena e a nova placa ao sol.",
    theme: "Transformação Urbana",
    content: [
      "Passei por uma rua onde comprava café antigamente. O prédio agora abrigava uma loja de decoração.",
      "Entrei, olhei a janela que dava para a mesma calçada. A atendente perguntou se eu precisava de algo. 'Eu conhecia esse lugar antes. Era uma padaria.'",
      "Pedi um café na máquina pequena que tinham lá. Não era igual ao antigo, mas era bom. A lembrança não precisa que as coisas fiquem idênticas para sempre."
    ]
  },
  {
    id: "o-guarda-chuva-esquecido",
    title: "O Guarda-Chuva Esquecido",
    part: "Parte IV — Ainda",
    partNumber: 4,
    page: 145,
    tagline: "O guarda-chuva apareceu atrás da porta numa quarta-feira.",
    summary: "O objeto preto com cabo de madeira que ficou em casa, a mensagem adiada e a resposta: 'Pode ficar. Tenho outro.'",
    theme: "Permanência & Acaso",
    content: [
      "Um guarda-chuva preto com cabo de madeira ficou atrás da minha porta. Era dela. Pensei em avisar, mas deixei estar.",
      "Com o tempo, usei para segurar a porta, alcançar caixas no armário e, um dia de chuva torrencial, usei para ir ao mercado.",
      "Semanas depois ela mandou: 'Você ainda está com meu guarda-chuva? Pode ficar, tenho outro.' O guarda-chuva não era meu, mas a casa pareceu um pouco maior com ele ali."
    ]
  },
  {
    id: "a-pessoa-que-sentou-ao-lado",
    title: "A Pessoa que Sentou ao Lado",
    part: "Parte IV — Ainda",
    partNumber: 4,
    page: 149,
    tagline: "A sala de espera estava cheia. Ela sentou ao meu lado.",
    summary: "A conversa com uma desconhecida sobre a novela sem som, o feijão no fogo e o preço do pão.",
    theme: "Encontros Breves & Empatia",
    content: [
      "Na sala de espera do médico, uma senhora sentou ao meu lado. Olhamos para a TV sem som, comentamos as horas.",
      "Descobrimos que morávamos no mesmo bairro. Ela falou do preço do pão e que precisava voltar logo porque tinha deixado feijão no fogo: 'Feijão não espera.'",
      "Chamaram o nome dela e ela foi. Nunca soube seu sobrenome. Mas no banco do carro, a caminho de casa com pão quente, pensei nela e no feijão. Algumas pessoas passam rápido, mas deixam uma imagem terna no dia."
    ]
  },
  {
    id: "o-cafe-de-amanha",
    title: "O Café de Amanhã",
    part: "Parte IV — Ainda",
    partNumber: 4,
    page: 153,
    tagline: "Apenas duas pessoas que tinham marcado um café para amanhã. E o amanhã tinha chegado.",
    summary: "O despertar atrasado, a chuva fina na esquina, a xícara fumegante na mesa e a certeza tranquila da presença.",
    theme: "Chegada & Plenitude",
    content: [
      "Marquei o café para o dia seguinte: '— Amanhã? — Amanhã.' Sem ansiedade antiga, sem ensaiar falas.",
      "Acordei atrasado, corri na chuva fina, cheguei à cafeteria e sentei perto da janela. O garçom trouxe o café sem açúcar.",
      "A porta abriu. Ela entrou, tirou o casaco e sentou: '— Demorei. — Eu também.'",
      "O café dela chegou. Lá fora a chuva continuava batendo na vidraça. O telefone ficou no bolso. Não precisei olhar."
    ]
  }
];

export const NOTABLE_QUOTES = [
  {
    quote: "A vida não acontece nos grandes eventos. Ela acontece no intervalo. No aleatório.",
    source: "Prefácio",
    page: 3
  },
  {
    quote: "Certas tristezas precisam caber no bolso junto com a chave de casa.",
    source: "Terça-Feira",
    page: 14
  },
  {
    quote: "A memória não parece interessada no acontecimento principal. Guarda a beirada dele.",
    source: "Terça-Feira",
    page: 12
  },
  {
    quote: "Alguns encontros precisam de data para não virarem lembrança.",
    source: "Sexta-Feira",
    page: 33
  },
  {
    quote: "Alguns objetos, como algumas pessoas, passam tempo demais fora do lugar apenas porque ninguém resolveu levá-los de volta.",
    source: "O Carrinho",
    page: 77
  },
  {
    quote: "A vida tem uma maneira estranha de abandonar os lugares aos poucos. Primeiro saem os móveis. Depois as roupas. Depois os objetos pequenos. Por último, talvez, fica o cheiro.",
    source: "A Última Chave",
    page: 82
  },
  {
    quote: "Há frases que foram feitas para chegar a alguém. Outras precisam apenas ser escritas.",
    source: "O Bilhete que Não Foi Entregue",
    page: 120
  },
  {
    quote: "Espero que em alguma dessas linhas você se reconheça. Não no extraordinário. No comum. Que é onde, no fim, a gente mora.",
    source: "Prefácio",
    page: 3
  }
];

export const ORDINARY_MOMENTS = [
  {
    id: "cafe-esfriou",
    icon: "Coffee",
    trigger: "Meu café esfriou na mesa",
    mood: "Distração & Ausência",
    excerpt: "Não é pelo café. É pelo motivo. Era para duas pessoas. Agora era apenas café... Existe uma espécie de tristeza doméstica em jogar café fora.",
    cronicaId: "o-cafe-frio",
    cronicaTitle: "O Café Frio"
  },
  {
    id: "chave-perdida",
    icon: "Key",
    trigger: "Carrego uma chave que não abre nada",
    mood: "Apego & Demora",
    excerpt: "Há chaves que continuam no chaveiro muito depois de deixarem de abrir qualquer porta. A gente sabe disso. Mesmo assim, não tira.",
    cronicaId: "a-ultima-chave",
    cronicaTitle: "A Última Chave"
  },
  {
    id: "esperando-mensagem",
    icon: "MessageSquare",
    trigger: "Fiquei olhando os dois traços azuis",
    mood: "Ansiedade do tempo",
    excerpt: "Foi curioso perceber como um minuto pode mudar de tamanho. 21h18. 21h21. 21h29. Agora existe o visto por último.",
    cronicaId: "o-visto-por-ultimo",
    cronicaTitle: "O Visto por Último"
  },
  {
    id: "trocou-fila",
    icon: "Users",
    trigger: "Troquei de fila e a minha parou",
    mood: "Ironia do destino",
    excerpt: "Não é apenas esperar. É olhar para o caminho ao lado e imaginar que ele pode ser mais rápido. A gente faz isso com fila. Às vezes, com o resto.",
    cronicaId: "a-fila",
    cronicaTitle: "A Fila"
  },
  {
    id: "chuva-varal",
    icon: "CloudRain",
    trigger: "Começou a chover com roupa no varal",
    mood: "Urgência cotidiana",
    excerpt: "Era uma cena ridícula. Mas havia alguma ternura naquela pressa. Salvar roupa. Quem olha de fora talvez ache pouco. Quem mora sozinho sabe que não é.",
    cronicaId: "a-roupa-no-varal",
    cronicaTitle: "A Roupa no Varal"
  },
  {
    id: "guarda-chuva",
    icon: "Umbrella",
    trigger: "Ficou um objeto esquecido em casa",
    mood: "Permanência casual",
    excerpt: "Algumas coisas entram na nossa vida por acidente e permanecem porque ninguém se dá ao trabalho de mandá-las embora.",
    cronicaId: "o-guarda-chuva-esquecido",
    cronicaTitle: "O Guarda-Chuva Esquecido"
  }
];
