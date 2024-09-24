const bookData = [
  {
    bookId: '1',
    image: 'assets/images/image-1.jpg',
    title: 'História da Beleza',
    author: 'Umberto Eco',
    genre: 'História',
    pages: 440,
    stars: '4',
    description:
      'Se a Beleza está nos olhos de quem vê, é certo que esse olhar é influenciado pelos padrões culturais de quem observa. Afinal, o que é beleza? O que é arte? Gosto se discute? A Beleza deve ser analisada friamente ou livre das amarras da razão? Com a perspicácia e erudição de sempre, Umberto Eco propõe essas indagações em História da beleza , um ensaio sobre as transformações do conceito do Belo através dos tempos.',
  },
  {
    bookId: '2',
    image: 'assets/images/image-2.jpg',
    title: 'Um Dia "Daqueles" - Uma Lição de Vida para Levantar o seu Astral',
    author: 'Bradley Trevor Greive',
    genre: 'Autoajuda',
    pages: 108,
    stars: '2',
    description:
      'Um Dia "Daqueles" é um inspirador e bem-humorado livro que tem encantado milhões de leitores no mundo inteiro com suas incríveis e expressivas fotos de animais ensinando-nos a superar os dias em que nos sentimos desanimados, pequenos e de mal com a vida. É impossível não rir e se encantar com a inteligente combinação de texto e imagens, fazendo-nos reconhecer no variado mundo animal sentimentos e estados de espírito tão humanos.',
  },
  {
    bookId: '3',
    image: 'assets/images/image-3.jpg',
    title: 'Sargento Getúlio',
    author: 'João Ubaldo Ribeiro',
    genre: 'Literatura Brasileira',
    pages: 144,
    stars: '4',
    description:
      'Uma das mais poderosas histórias da literatura brasileira, Sargento Getúlio comemora cinquenta anos mais atual do que nunca. Esta edição especial traz texto de Jorge Amado e prefácio de Juva Batella.',
  },
  {
    bookId: '4',
    image: 'assets/images/image-4.jpg',
    title: 'O Universo numa Casca de Noz',
    author: 'Stephen Hawking',
    genre: 'Ciências - Cosmologia',
    pages: 309,
    stars: '4',
    description:
      'Após o enorme sucesso de Uma breve história do tempo, a Intrínseca traz a luxuosa reedição de O universo numa casca de noz, na qual Stephen Hawking se vale de ilustrações, fotos e esquemas detalhados para mostrar grandes descobertas no campo da física teórica. Tudo isso, é claro, com sua conhecida clareza, elucidando temas complexos por meio de conceitos e ideias do dia a dia, como a inflação, as cartas de baralho e as linhas ferroviárias, e permeado com seu peculiar senso de humor.',
  },
  {
    bookId: '5',
    image: 'assets/images/image-5.jpg',
    title: 'Pálido Ponto Azul - Uma Visão do Futuro da Humanidade no Espaço',
    author: 'Carl Sagan',
    genre: 'Ciências - Astronomia',
    pages: 336,
    stars: '5',
    description:
      'Um dos grandes astrônomos do século XX, Carl Sagan revela como descobertas científicas alteraram a percepção de quem somos e do lugar que ocupamos no Universo. Edição inclui caderno de imagens. Temos algum tipo de privilégio em relação a outros corpos celestes? Qual deve ser nossa postura perante a imensidão do universo? Faz sentido investir em missões aeroespaciais incertas enquanto ainda somos incapazes de solucionar os problemas que nos afligem todos os dias? Em Pálido ponto azul, Carl Sagan esmiúça essas perguntas e continua a revolucionária investigação sobre o tempo e o espaço iniciada em Cosmos, uma das mais importantes obras de divulgação científica do século XX. Com a mesma linguagem envolvente do best-seller que conquistou milhões de leitores pelo mundo, ele traça a história das primeiras aventuras extraterrestres e avalia o futuro que se abre para nós a partir das viagens feitas pelo sistema solar e para galáxias distantes.',
  },
  {
    bookId: '6',
    image: 'assets/images/image-6.jpg',
    title: 'Caim',
    author: 'José saramago',
    genre: 'Literatura Portuguesa',
    pages: 176,
    stars: '4',
    description:
      'O vencedor do prêmio Nobel José Saramago reconta episódios bíblicos do Velho Testamento sob o ponto de vista de Caim, que, depois de assassinar seu irmão, trava um incomum acordo com Deus e parte numa jornada que o levará do jardim do Éden aos mais recônditos confins da criação.',
  },
  {
    bookId: '7',
    image: 'assets/images/image-7.jpg',
    title: 'Armas, Germes e Aço',
    author: 'Jared Diamond',
    genre: 'Sociologia',
    pages: 476,
    stars: '5',
    description:
      'Vencedor do Prêmio Pulitzer de 1998, Armas, germes e aço apresenta uma narrativa inovadora e unificada da história humana. Um marco importante em nossa compreensão das sociedades, Jared Diamond narra a maneira como o mundo moderno e suas desigualdades surgiram. Esta e dição comemorativa conta com nova capa arrojada e um posfácio inédito do autor.',
  },
  {
    bookId: '8',
    image: 'assets/images/image-8.jpg',
    title: 'O Espírito das Leis',
    author: 'Montesquieu',
    genre: 'Filosofia',
    pages: 740,
    stars: '4',
    description:
      'Pensador influente nas áreas da filosofia da história e do direito constitucional Montesquieu foi também um dos maiores prosadores da língua francesa. A partir dele os escritores franceses tornaram-se mais que literatos e passaram também a discutir os assunto públicos. Na sua obra-prima ´Do espírito das leis´ Montesquieu elabora conceitos sobre formas de governo e exercícios da autoridade política que se tornaram pontos doutrinários básicos da ciência política. Suas teorias exerceram profunda influência no pensamento político moderno. Elas inspiraram as ´Declarações dos Direitos do Homem e do Cidadão´ elaborada em 1798 durante a Revolução Francesa.',
  },
  {
    bookId: '9',
    image: 'assets/images/image-9.jpg',
    title: '50 Batalhas que Mudaram o Mundo',
    author: 'William Weir',
    genre: 'História Geral',
    pages: 440,
    stars: '3',
    description:
      'Esta é uma das melhores obras já escritas sobre batalhas. Listadas por ordem de importância desde 490 A.C. até a atualidade, o livro não celebra a guerra. Além das batalhas, que tiveram importância vital na formação cultural e geográfica dos povos e das nações, o livro analisa as razões e conseqüências de cada conflito. A preservação da democracia, prevenção de anarquia, promoção da ordem, disputas religiosas, econômicas, conquistas de território são exemplos de justificativas ou razões para as batalhas.',
  },
  {
    bookId: '10',
    image: 'assets/images/coming-soon.jpg',
    title: 'Brasil: uma história',
    author: 'Eduardo Bueno',
    genre: 'História Geral',
    pages: 480,
    stars: '3',
    description:
      'A história do Brasil como você nunca viu antes! Há mais de cinco séculos diz-se que o Brasil é o país do futuro. O problema, é que nunca chegamos lá. Procurando sanar esse problema, Eduardo Bueno tira a História da prisão das salas de aula e a leva para as ruas. Transforma-a em conversa de mesa de bar, a leva para favelas, esquinas, ruas, shoppings, estádios de futebol. Em "Brasil – Uma história", Eduardo Bueno atualiza seu famoso livro, incluindo fatos como a posse de Dilma Roussef e o julgamento do Mensalão.',
  },
  {
    bookId: '11',
    image: 'assets/images/coming-soon.jpg',
    title: 'Renoir: A Sensuous Vision',
    author: 'Anne Distel',
    genre: 'Artes',
    pages: 175,
    stars: '4',
    description:
      'Uma visão geral ilustrada da obra do mestre impressionista Pierre-Auguste Renoir, com citações do artista e de sua família e amigos, explorando sua relação com os negociantes, críticos e compradores de sua época. Original.',
  },
  {
    bookId: '12',
    image: 'assets/images/image-10.jpg',
    title:
      'Vícios privados, benefícios públicos?: A ética na riqueza das nações',
    author: 'Eduardo Giannetti',
    genre: 'Ensaios',
    pages: 239,
    stars: '5',
    description:
      'Ganância, inveja, egoísmo, esperteza: o que tudo isso tem a ver com a riqueza das nações? Qual a relação entre ética e racionalidade? Até que ponto a "mão invisível" do mercado é suficiente para levar uma sociedade da pobreza ao máximo de prosperidade? Ou será que o próprio progresso científico, tecnológico e material do mundo moderno é a causa da decadência moral do homem? Examinando a evolução do pensamento filosófico e econômico da Antigüidade clássica aos nossos dias, este livro busca a resposta para estas e outras questões que envolvem as relações entre ética e economia. Sem cair no moralismo fácil nem na pura engenharia econômica, Eduardo Giannetti da Fonseca recupera o papel das virtudes privadas para a vida comunitária organizada e o progresso das nações. Prêmio Jabuti 1994 de Melhor Ensaio e Biografia.',
  },
];

export default bookData;
