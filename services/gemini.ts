
import { PracticeText } from '../types';

// Database of practice texts.
// Currently contains 30 diverse texts with rich alternative translations.
// To reach 150 texts, this pattern can be continued with more entries.

const TEXT_DATABASE: PracticeText[] = [
  {
    id: 1,
    title: "Morning Routine",
    englishContent: "I wake up every day at 7 AM. I like to drink a cup of coffee before I start working. It helps me focus on my tasks. After breakfast, I usually go for a short walk.",
    portugueseContent: "Eu acordo todos os dias às 7 da manhã. Gosto de beber uma xícara de café antes de começar a trabalhar. Isso me ajuda a focar nas minhas tarefas. Depois do café da manhã, geralmente faço uma curta caminhada.",
    segments: [
      { 
        english: "I wake up every day at 7 AM.", 
        portuguese: "Eu acordo todos os dias às 7 da manhã.",
        alternatives: [
          "Acordo todo dia às 7h.", 
          "Eu desperto diariamente às 7 da manhã.",
          "Levanto-me todos os dias às 7h.",
          "Todo dia acordo às 7 da manhã."
        ]
      },
      { 
        english: "I like to drink a cup of coffee", 
        portuguese: "Gosto de beber uma xícara de café",
        alternatives: [
          "Eu gosto de tomar uma xícara de café", 
          "Adoro tomar um café",
          "Gosto de tomar um cafezinho",
          "Aprecio beber uma xícara de café"
        ]
      },
      { 
        english: "before I start working.", 
        portuguese: "antes de começar a trabalhar.",
        alternatives: [
          "antes de iniciar o trabalho.", 
          "antes de começar meu serviço.",
          "antes de dar início ao trabalho.",
          "antes de pegar no batente."
        ]
      },
      { 
        english: "It helps me focus on my tasks.", 
        portuguese: "Isso me ajuda a focar nas minhas tarefas.",
        alternatives: [
          "Isso me ajuda a concentrar nas minhas tarefas.", 
          "Ajuda-me a manter o foco.",
          "Auxilia-me a focar no que preciso fazer.",
          "Faz com que eu me concentre melhor."
        ]
      },
      { 
        english: "After breakfast,", 
        portuguese: "Depois do café da manhã,",
        alternatives: [
          "Após o café,", 
          "Depois de comer,",
          "Ao terminar o café da manhã,",
          "Após o desjejum,"
        ]
      },
      { 
        english: "I usually go for a short walk.", 
        portuguese: "geralmente faço uma curta caminhada.",
        alternatives: [
          "costumo dar uma caminhada rápida.", 
          "normalmente vou caminhar um pouco.",
          "habitualmente faço uma breve caminhada.",
          "dou uma volta curta a pé."
        ]
      }
    ]
  },
  {
    id: 2,
    title: "The Weekend Plan",
    englishContent: "This weekend, I am going to visit my grandmother. She lives in a small house in the countryside. We are going to cook lunch together. I miss her stories about the past.",
    portugueseContent: "Neste fim de semana, vou visitar minha avó. Ela mora em uma casa pequena no interior. Vamos fazer o almoço juntos. Sinto falta das histórias dela sobre o passado.",
    segments: [
      { 
        english: "This weekend,", 
        portuguese: "Neste fim de semana,",
        alternatives: [
          "Neste final de semana,",
          "No fim de semana,",
          "Durante este fim de semana,"
        ]
      },
      { 
        english: "I am going to visit my grandmother.", 
        portuguese: "vou visitar minha avó.",
        alternatives: [
          "irei visitar minha avó.", 
          "vou ver minha avó.",
          "pretendo visitar minha avó.",
          "estou indo visitar minha avó."
        ]
      },
      { 
        english: "She lives in a small house", 
        portuguese: "Ela mora em uma casa pequena",
        alternatives: [
          "Ela vive numa casinha", 
          "Ela reside em uma casa pequena",
          "Ela habita uma casa pequena",
          "Ela mora numa pequena residência"
        ]
      },
      { 
        english: "in the countryside.", 
        portuguese: "no interior.",
        alternatives: [
          "no campo.", 
          "na roça.",
          "na zona rural.",
          "fora da cidade."
        ]
      },
      { 
        english: "We are going to cook lunch together.", 
        portuguese: "Vamos fazer o almoço juntos.",
        alternatives: [
          "Nós vamos cozinhar o almoço juntos.", 
          "Cozinharemos juntos.",
          "Prepararemos o almoço em conjunto.",
          "Vamos preparar a comida juntos."
        ]
      },
      { 
        english: "I miss her stories about the past.", 
        portuguese: "Sinto falta das histórias dela sobre o passado.",
        alternatives: [
          "Tenho saudades das histórias dela.", 
          "Sinto falta de suas histórias antigas.",
          "Tenho saudade dos contos dela sobre antigamente.",
          "Sinto falta de quando ela conta sobre o passado."
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Learning New Things",
    englishContent: "Learning a new language can be difficult. However, it is very rewarding. You can make friends from different countries. Consistency is the most important key to success.",
    portugueseContent: "Aprender uma nova língua pode ser difícil. No entanto, é muito gratificante. Você pode fazer amigos de países diferentes. A consistência é a chave mais importante para o sucesso.",
    segments: [
      { 
        english: "Learning a new language can be difficult.", 
        portuguese: "Aprender uma nova língua pode ser difícil.",
        alternatives: [
          "Aprender um novo idioma pode ser complicado.",
          "Estudar uma língua nova pode ser árduo.",
          "Aprender outra língua pode ser um desafio."
        ]
      },
      { 
        english: "However, it is very rewarding.", 
        portuguese: "No entanto, é muito gratificante.",
        alternatives: [
          "Porém, é muito recompensador.", 
          "Mas vale muito a pena.",
          "Contudo, traz muita satisfação.",
          "Entretanto, é bastante gratificante."
        ]
      },
      { 
        english: "You can make friends", 
        portuguese: "Você pode fazer amigos",
        alternatives: [
          "É possível fazer amigos", 
          "Dá para fazer amizades",
          "Consegue-se criar laços de amizade",
          "Você consegue fazer novos amigos"
        ]
      },
      { 
        english: "from different countries.", 
        portuguese: "de países diferentes.",
        alternatives: [
          "de outros países.", 
          "de diversas nacionalidades.",
          "de várias partes do mundo.",
          "de nações distintas."
        ]
      },
      { 
        english: "Consistency is the most important key to success.", 
        portuguese: "A consistência é a chave mais importante para o sucesso.",
        alternatives: [
          "A constância é o segredo do sucesso.", 
          "Ser consistente é o mais importante para ter êxito.",
          "A regularidade é fundamental para o sucesso.",
          "Manter a consistência é a chave principal do êxito."
        ]
      }
    ]
  },
  {
    id: 4,
    title: "At the Supermarket",
    englishContent: "I need to buy some vegetables for dinner. The tomatoes look very fresh today. I also need milk and eggs. The supermarket is always busy on Mondays.",
    portugueseContent: "Preciso comprar alguns vegetais para o jantar. Os tomates parecem muito frescos hoje. Também preciso de leite e ovos. O supermercado está sempre movimentado às segundas-feiras.",
    segments: [
      { 
        english: "I need to buy some vegetables", 
        portuguese: "Preciso comprar alguns vegetais",
        alternatives: [
          "Eu preciso comprar legumes", 
          "Tenho que comprar verduras",
          "Necessito comprar alguns vegetais",
          "Preciso adquirir legumes"
        ]
      },
      { 
        english: "for dinner.", 
        portuguese: "para o jantar.",
        alternatives: [
          "pro jantar.", 
          "para a janta.",
          "para a refeição da noite."
        ]
      },
      { 
        english: "The tomatoes look very fresh today.", 
        portuguese: "Os tomates parecem muito frescos hoje.",
        alternatives: [
          "Os tomates estão com uma cara ótima hoje.",
          "Os tomates parecem fresquinhos hoje.",
          "Hoje os tomates aparentam estar muito frescos."
        ]
      },
      { 
        english: "I also need milk and eggs.", 
        portuguese: "Também preciso de leite e ovos.",
        alternatives: [
          "Preciso também de ovos e leite.",
          "Eu também necessito de leite e ovos.",
          "Falta comprar leite e ovos também."
        ]
      },
      { 
        english: "The supermarket is always busy on Mondays.", 
        portuguese: "O supermercado está sempre movimentado às segundas-feiras.",
        alternatives: [
          "O mercado está sempre cheio nas segundas.", 
          "O supermercado sempre lota na segunda.",
          "O mercado é sempre agitado às segundas.",
          "Há sempre muita gente no supermercado às segundas."
        ]
      }
    ]
  },
  {
    id: 5,
    title: "My Favorite Hobby",
    englishContent: "Reading books is my favorite hobby. It allows me to travel without leaving my room. I prefer mystery novels because they are exciting. I try to read at least one book per month.",
    portugueseContent: "Ler livros é meu hobby favorito. Isso me permite viajar sem sair do meu quarto. Prefiro romances de mistério porque são emocionantes. Tento ler pelo menos um livro por mês.",
    segments: [
      { 
        english: "Reading books is my favorite hobby.", 
        portuguese: "Ler livros é meu hobby favorito.",
        alternatives: [
          "A leitura é o meu passatempo preferido.",
          "Meu passatempo favorito é ler livros.",
          "Adoro ler livros mais que tudo."
        ]
      },
      { 
        english: "It allows me to travel", 
        portuguese: "Isso me permite viajar",
        alternatives: [
          "Me deixa viajar", 
          "Permite-me viajar",
          "Possibilita que eu viaje",
          "Faz com que eu viaje"
        ]
      },
      { 
        english: "without leaving my room.", 
        portuguese: "sem sair do meu quarto.",
        alternatives: [
          "sem sair do lugar.",
          "estando no meu quarto.",
          "sem precisar sair do quarto."
        ]
      },
      { 
        english: "I prefer mystery novels", 
        portuguese: "Prefiro romances de mistério",
        alternatives: [
          "Eu gosto mais de livros de mistério",
          "Tenho preferência por livros de suspense",
          "Prefiro histórias de mistério"
        ]
      },
      { 
        english: "because they are exciting.", 
        portuguese: "porque são emocionantes.",
        alternatives: [
          "pois são empolgantes.", 
          "porque dão emoção.",
          "visto que são excitantes.",
          "porque são cheios de emoção."
        ]
      },
      { 
        english: "I try to read at least one book per month.", 
        portuguese: "Tento ler pelo menos um livro por mês.",
        alternatives: [
          "Eu tento ler no mínimo um livro a cada mês.",
          "Busco ler ao menos um livro mensalmente.",
          "Procuro ler um livro por mês, no mínimo."
        ]
      }
    ]
  },
  {
    id: 6,
    title: "The Job Interview",
    englishContent: "I was very nervous about my job interview. I wore my best suit and arrived early. The interviewer asked difficult questions about my experience. However, I answered them with confidence.",
    portugueseContent: "Eu estava muito nervoso com minha entrevista de emprego. Vesti meu melhor terno e cheguei cedo. O entrevistador fez perguntas difíceis sobre minha experiência. No entanto, respondi com confiança.",
    segments: [
      {
        english: "I was very nervous about my job interview.",
        portuguese: "Eu estava muito nervoso com minha entrevista de emprego.",
        alternatives: [
          "Estava nervosíssimo com a entrevista.",
          "Fiquei muito ansioso por causa da entrevista de trabalho.",
          "A entrevista de emprego me deixou muito nervoso."
        ]
      },
      {
        english: "I wore my best suit and arrived early.",
        portuguese: "Vesti meu melhor terno e cheguei cedo.",
        alternatives: [
          "Usei meu melhor terno e cheguei adiantado.",
          "Coloquei meu terno mais bonito e cheguei antes da hora.",
          "Fui com meu melhor terno e cheguei com antecedência."
        ]
      },
      {
        english: "The interviewer asked difficult questions",
        portuguese: "O entrevistador fez perguntas difíceis",
        alternatives: [
          "O recrutador fez perguntas complicadas",
          "A pessoa que me entrevistou perguntou coisas difíceis",
          "Foram feitas perguntas complexas"
        ]
      },
      {
        english: "about my experience.",
        portuguese: "sobre minha experiência.",
        alternatives: [
          "a respeito da minha experiência.",
          "sobre meu histórico profissional.",
          "relacionadas à minha experiência."
        ]
      },
      {
        english: "However, I answered them with confidence.",
        portuguese: "No entanto, respondi com confiança.",
        alternatives: [
          "Porém, respondi confiante.",
          "Mas respondi a elas com segurança.",
          "Contudo, respondi de forma segura."
        ]
      }
    ]
  },
  {
    id: 7,
    title: "A Rainy Day",
    englishContent: "It was raining heavily when I left the house. I forgot my umbrella, so I got wet. The bus was late because of the weather. I arrived at work completely soaked.",
    portugueseContent: "Estava chovendo forte quando saí de casa. Esqueci meu guarda-chuva, então me molhei. O ônibus atrasou por causa do tempo. Cheguei ao trabalho completamente encharcado.",
    segments: [
      {
        english: "It was raining heavily",
        portuguese: "Estava chovendo forte",
        alternatives: [
          "Chovia muito",
          "Caía um temporal",
          "Estava chovendo torrencialmente"
        ]
      },
      {
        english: "when I left the house.",
        portuguese: "quando saí de casa.",
        alternatives: [
          "ao sair de casa.",
          "no momento em que saí de casa.",
          "quando deixei minha casa."
        ]
      },
      {
        english: "I forgot my umbrella, so I got wet.",
        portuguese: "Esqueci meu guarda-chuva, então me molhei.",
        alternatives: [
          "Esqueci a sombrinha, por isso me molhei.",
          "Deixei o guarda-chuva e acabei me molhando.",
          "Como esqueci o guarda-chuva, fiquei molhado."
        ]
      },
      {
        english: "The bus was late because of the weather.",
        portuguese: "O ônibus atrasou por causa do tempo.",
        alternatives: [
          "O ônibus demorou devido ao clima.",
          "O coletivo atrasou por conta do tempo ruim.",
          "O tempo fez o ônibus atrasar."
        ]
      },
      {
        english: "I arrived at work completely soaked.",
        portuguese: "Cheguei ao trabalho completamente encharcado.",
        alternatives: [
          "Cheguei no serviço todo molhado.",
          "Cheguei ensopado ao trabalho.",
          "Fiquei totalmente encharcado ao chegar no trabalho."
        ]
      }
    ]
  },
  {
    id: 8,
    title: "At the Restaurant",
    englishContent: "The waiter brought us the menu immediately. I ordered a steak with french fries. My friend chose the pasta with tomato sauce. The food was delicious and the service was excellent.",
    portugueseContent: "O garçom nos trouxe o cardápio imediatamente. Pedi um bife com batatas fritas. Meu amigo escolheu o macarrão com molho de tomate. A comida estava deliciosa e o serviço foi excelente.",
    segments: [
      {
        english: "The waiter brought us the menu immediately.",
        portuguese: "O garçom nos trouxe o cardápio imediatamente.",
        alternatives: [
          "O garçom trouxe o menu na hora.",
          "Imediatamente, o garçom nos entregou o cardápio.",
          "O atendente trouxe o cardápio de imediato."
        ]
      },
      {
        english: "I ordered a steak with french fries.",
        portuguese: "Pedi um bife com batatas fritas.",
        alternatives: [
          "Eu pedi carne com fritas.",
          "Solicitei um filé com batata frita.",
          "Escolhi bife acompanhado de fritas."
        ]
      },
      {
        english: "My friend chose the pasta with tomato sauce.",
        portuguese: "Meu amigo escolheu o macarrão com molho de tomate.",
        alternatives: [
          "Meu amigo optou pela massa ao sugo.",
          "O amigo que estava comigo pediu macarrão ao molho vermelho.",
          "Ele escolheu a pasta com molho de tomate."
        ]
      },
      {
        english: "The food was delicious and the service was excellent.",
        portuguese: "A comida estava deliciosa e o serviço foi excelente.",
        alternatives: [
          "A refeição estava ótima e o atendimento foi excelente.",
          "A comida estava saborosa e o serviço, perfeito.",
          "Estava tudo uma delícia e fomos muito bem atendidos."
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Public Transportation",
    englishContent: "Taking the subway is faster than driving in the city. However, it can be very crowded during rush hour. I always listen to music to relax. It is a cheap and efficient way to travel.",
    portugueseContent: "Pegar o metrô é mais rápido do que dirigir na cidade. No entanto, pode estar muito cheio durante a hora do rush. Eu sempre ouço música para relaxar. É uma maneira barata e eficiente de viajar.",
    segments: [
      {
        english: "Taking the subway is faster than driving",
        portuguese: "Pegar o metrô é mais rápido do que dirigir",
        alternatives: [
          "Ir de metrô é mais veloz que ir de carro",
          "Usar o metrô é mais rápido que dirigir",
          "O metrô é mais rápido que o carro"
        ]
      },
      {
        english: "in the city.",
        portuguese: "na cidade.",
        alternatives: [
          "dentro da cidade.",
          "pela cidade.",
          "no centro urbano."
        ]
      },
      {
        english: "However, it can be very crowded",
        portuguese: "No entanto, pode estar muito cheio",
        alternatives: [
          "Porém, pode ficar muito lotado",
          "Mas costuma estar abarrotado",
          "Contudo, pode ter muita gente"
        ]
      },
      {
        english: "during rush hour.",
        portuguese: "durante a hora do rush.",
        alternatives: [
          "no horário de pico.",
          "na hora de maior movimento.",
          "durante o pico de trânsito."
        ]
      },
      {
        english: "I always listen to music to relax.",
        portuguese: "Eu sempre ouço música para relaxar.",
        alternatives: [
          "Sempre escuto música para ficar tranquilo.",
          "Costumo ouvir música para descansar.",
          "Ouço música sempre para descontrair."
        ]
      },
      {
        english: "It is a cheap and efficient way to travel.",
        portuguese: "É uma maneira barata e eficiente de viajar.",
        alternatives: [
          "É um jeito econômico e eficaz de viajar.",
          "É uma forma barata e eficiente de se locomover.",
          "É um meio de transporte barato e eficiente."
        ]
      }
    ]
  },
  {
    id: 10,
    title: "My Pet Dog",
    englishContent: "I have a dog named Max. He is very energetic and loves to play fetch. Every afternoon, we go to the park together. He is my best friend and always makes me happy.",
    portugueseContent: "Tenho um cachorro chamado Max. Ele é muito energético e adora brincar de buscar. Toda tarde, vamos ao parque juntos. Ele é meu melhor amigo e sempre me faz feliz.",
    segments: [
      {
        english: "I have a dog named Max.",
        portuguese: "Tenho um cachorro chamado Max.",
        alternatives: [
          "Eu possuo um cão chamado Max.",
          "Tenho um cãozinho de nome Max.",
          "Meu cachorro se chama Max."
        ]
      },
      {
        english: "He is very energetic",
        portuguese: "Ele é muito energético",
        alternatives: [
          "Ele tem muita energia",
          "Ele é super agitado",
          "Ele é cheio de energia"
        ]
      },
      {
        english: "and loves to play fetch.",
        portuguese: "e adora brincar de buscar.",
        alternatives: [
          "e ama brincar de pegar a bolinha.",
          "e gosta muito de buscar objetos.",
          "e adora quando jogo coisas para ele buscar."
        ]
      },
      {
        english: "Every afternoon, we go to the park together.",
        portuguese: "Toda tarde, vamos ao parque juntos.",
        alternatives: [
          "Todas as tardes, nós vamos juntos ao parque.",
          "Vamos ao parque juntos toda tarde.",
          "Diariamente à tarde, vamos ao parque."
        ]
      },
      {
        english: "He is my best friend",
        portuguese: "Ele é meu melhor amigo",
        alternatives: [
          "Ele é o meu grande amigo",
          "Considero ele meu melhor amigo",
          "É o meu companheiro fiel"
        ]
      },
      {
        english: "and always makes me happy.",
        portuguese: "e sempre me faz feliz.",
        alternatives: [
          "e me deixa sempre feliz.",
          "e sempre me alegra.",
          "e traz felicidade sempre."
        ]
      }
    ]
  },
  {
    id: 11,
    title: "Summer Vacation",
    englishContent: "Last summer, I went to the beach with my family. The water was warm and the sun was shining. We built a big sandcastle near the water. It was the best vacation of my life.",
    portugueseContent: "No verão passado, fui à praia com minha família. A água estava morna e o sol estava brilhando. Construímos um grande castelo de areia perto da água. Foram as melhores férias da minha vida.",
    segments: [
      {
        english: "Last summer,",
        portuguese: "No verão passado,",
        alternatives: ["No último verão,", "Durante o verão passado,"]
      },
      {
        english: "I went to the beach with my family.",
        portuguese: "fui à praia com minha família.",
        alternatives: ["fui para a praia com meus familiares.", "viajei para a praia com a família."]
      },
      {
        english: "The water was warm and the sun was shining.",
        portuguese: "A água estava morna e o sol estava brilhando.",
        alternatives: [
          "A água estava quente e fazia sol.",
          "O mar estava morno e o sol brilhava."
        ]
      },
      {
        english: "We built a big sandcastle",
        portuguese: "Construímos um grande castelo de areia",
        alternatives: ["Fizemos um castelo de areia enorme", "Montamos um grande castelo na areia"]
      },
      {
        english: "It was the best vacation of my life.",
        portuguese: "Foram as melhores férias da minha vida.",
        alternatives: ["Foi a melhor viagem da minha vida.", "Essas foram minhas melhores férias."]
      }
    ]
  },
  {
    id: 12,
    title: "The Gym Workout",
    englishContent: "I joined a gym to get fit. At first, the exercises were very tiring. My muscles ached for days. Now, I feel stronger and healthier than before.",
    portugueseContent: "Entrei em uma academia para entrar em forma. No início, os exercícios eram muito cansativos. Meus músculos doeram por dias. Agora, me sinto mais forte e saudável do que antes.",
    segments: [
      {
        english: "I joined a gym to get fit.",
        portuguese: "Entrei em uma academia para entrar em forma.",
        alternatives: ["Comecei na academia para ficar em forma.", "Me matriculei na academia para melhorar o físico."]
      },
      {
        english: "At first, the exercises were very tiring.",
        portuguese: "No início, os exercícios eram muito cansativos.",
        alternatives: ["Primeiramente, os exercícios cansavam muito.", "No começo, era exaustivo."]
      },
      {
        english: "My muscles ached for days.",
        portuguese: "Meus músculos doeram por dias.",
        alternatives: ["Fiquei com dor muscular por dias.", "Senti dores nos músculos durante dias."]
      },
      {
        english: "Now, I feel stronger and healthier",
        portuguese: "Agora, me sinto mais forte e saudável",
        alternatives: ["Hoje, me sinto com mais força e saúde", "Agora, sinto-me mais forte e com mais saúde"]
      },
      {
        english: "than before.",
        portuguese: "do que antes.",
        alternatives: ["do que antigamente.", "comparado a antes."]
      }
    ]
  },
  {
    id: 13,
    title: "Buying a Gift",
    englishContent: "It is my sister's birthday next week. I want to buy her a nice necklace. I went to the shopping mall to look for one. I hope she likes the one I chose.",
    portugueseContent: "É o aniversário da minha irmã na semana que vem. Quero comprar um colar bonito para ela. Fui ao shopping para procurar um. Espero que ela goste do que eu escolhi.",
    segments: [
      {
        english: "It is my sister's birthday next week.",
        portuguese: "É o aniversário da minha irmã na semana que vem.",
        alternatives: ["Semana que vem é aniversário da minha irmã.", "O aniversário da minha irmã é na próxima semana."]
      },
      {
        english: "I want to buy her a nice necklace.",
        portuguese: "Quero comprar um colar bonito para ela.",
        alternatives: ["Desejo comprar um belo colar para ela.", "Quero dar a ela um colar legal."]
      },
      {
        english: "I went to the shopping mall",
        portuguese: "Fui ao shopping",
        alternatives: ["Fui ao centro comercial", "Fui até o shopping"]
      },
      {
        english: "to look for one.",
        portuguese: "para procurar um.",
        alternatives: ["para buscar um.", "atrás de um."]
      },
      {
        english: "I hope she likes the one I chose.",
        portuguese: "Espero que ela goste do que eu escolhi.",
        alternatives: ["Tomara que ela goste do que escolhi.", "Espero que o que escolhi a agrade."]
      }
    ]
  },
  {
    id: 14,
    title: "The Coffee Shop",
    englishContent: "I love the smell of fresh coffee in the morning. This coffee shop has the best pastries in town. I usually bring my laptop and work here for a few hours. The atmosphere is very cozy.",
    portugueseContent: "Eu amo o cheiro de café fresco de manhã. Esta cafeteria tem os melhores doces da cidade. Geralmente trago meu notebook e trabalho aqui por algumas horas. O ambiente é muito aconchegante.",
    segments: [
      {
        english: "I love the smell of fresh coffee",
        portuguese: "Eu amo o cheiro de café fresco",
        alternatives: ["Adoro o aroma de café fresquinho", "Amo cheiro de café novo"]
      },
      {
        english: "in the morning.",
        portuguese: "de manhã.",
        alternatives: ["pela manhã.", "nas manhãs."]
      },
      {
        english: "This coffee shop has the best pastries in town.",
        portuguese: "Esta cafeteria tem os melhores doces da cidade.",
        alternatives: ["Este café tem as melhores massas da cidade.", "Aqui tem os melhores salgados e doces da cidade."]
      },
      {
        english: "I usually bring my laptop",
        portuguese: "Geralmente trago meu notebook",
        alternatives: ["Costumo trazer meu laptop", "Normalmente trago meu computador"]
      },
      {
        english: "and work here for a few hours.",
        portuguese: "e trabalho aqui por algumas horas.",
        alternatives: ["e fico trabalhando aqui umas horas.", "e trabalho aqui durante algumas horas."]
      }
    ]
  },
  {
    id: 15,
    title: "Late for Work",
    englishContent: "My alarm did not ring this morning. I woke up late and had to rush. I skipped breakfast and ran to the bus stop. Luckily, my boss was not angry.",
    portugueseContent: "Meu despertador não tocou esta manhã. Acordei tarde e tive que correr. Pulei o café da manhã e corri para o ponto de ônibus. Felizmente, meu chefe não ficou bravo.",
    segments: [
      {
        english: "My alarm did not ring this morning.",
        portuguese: "Meu despertador não tocou esta manhã.",
        alternatives: ["O alarme não tocou hoje cedo.", "Meu despertador falhou esta manhã."]
      },
      {
        english: "I woke up late and had to rush.",
        portuguese: "Acordei tarde e tive que correr.",
        alternatives: ["Levantei tarde e precisei me apressar.", "Acordei atrasado e tive que voar."]
      },
      {
        english: "I skipped breakfast",
        portuguese: "Pulei o café da manhã",
        alternatives: ["Não tomei café da manhã", "Fiquei sem o café da manhã"]
      },
      {
        english: "and ran to the bus stop.",
        portuguese: "e corri para o ponto de ônibus.",
        alternatives: ["e fui correndo para a parada de ônibus.", "e corri até o ponto."]
      },
      {
        english: "Luckily, my boss was not angry.",
        portuguese: "Felizmente, meu chefe não ficou bravo.",
        alternatives: ["Por sorte, meu chefe não se irritou.", "Ainda bem que meu chefe não ficou zangado."]
      }
    ]
  },
  {
    id: 16,
    title: "A Visit to the Doctor",
    englishContent: "I have a terrible headache and a sore throat. I made an appointment with the doctor. He told me to rest and drink plenty of water. I need to take medicine for three days.",
    portugueseContent: "Estou com uma dor de cabeça terrível e dor de garganta. Marquei uma consulta com o médico. Ele me disse para descansar e beber bastante água. Preciso tomar remédio por três dias.",
    segments: [
      {
        english: "I have a terrible headache",
        portuguese: "Estou com uma dor de cabeça terrível",
        alternatives: ["Tenho uma dor de cabeça horrível", "Estou com muita dor de cabeça"]
      },
      {
        english: "and a sore throat.",
        portuguese: "e dor de garganta.",
        alternatives: ["e a garganta inflamada.", "e com a garganta doendo."]
      },
      {
        english: "I made an appointment with the doctor.",
        portuguese: "Marquei uma consulta com o médico.",
        alternatives: ["Agendei uma visita ao médico.", "Marquei horário no médico."]
      },
      {
        english: "He told me to rest",
        portuguese: "Ele me disse para descansar",
        alternatives: ["Ele mandou eu repousar", "Ele recomendou descanso"]
      },
      {
        english: "and drink plenty of water.",
        portuguese: "e beber bastante água.",
        alternatives: ["e tomar muita água.", "e me hidratar bastante."]
      }
    ]
  },
  {
    id: 17,
    title: "Cooking Dinner",
    englishContent: "Tonight, I am cooking pasta for my family. I need to chop onions and garlic first. The sauce needs to simmer for twenty minutes. Everyone loves my special recipe.",
    portugueseContent: "Hoje à noite, vou cozinhar macarrão para minha família. Preciso picar cebola e alho primeiro. O molho precisa cozinhar em fogo baixo por vinte minutos. Todo mundo adora minha receita especial.",
    segments: [
      {
        english: "Tonight, I am cooking pasta",
        portuguese: "Hoje à noite, vou cozinhar macarrão",
        alternatives: ["Esta noite, farei uma massa", "Hoje à noite, estou preparando macarrão"]
      },
      {
        english: "for my family.",
        portuguese: "para minha família.",
        alternatives: ["para os meus familiares.", "para o pessoal de casa."]
      },
      {
        english: "I need to chop onions and garlic first.",
        portuguese: "Preciso picar cebola e alho primeiro.",
        alternatives: ["Tenho que cortar cebola e alho antes.", "Primeiro preciso picar o alho e a cebola."]
      },
      {
        english: "The sauce needs to simmer",
        portuguese: "O molho precisa cozinhar em fogo baixo",
        alternatives: ["O molho tem que apurar", "O molho deve ferver lentamente"]
      },
      {
        english: "Everyone loves my special recipe.",
        portuguese: "Todo mundo adora minha receita especial.",
        alternatives: ["Todos amam minha receita especial.", "Todos gostam muito da minha receita."]
      }
    ]
  },
  {
    id: 18,
    title: "The New Phone",
    englishContent: "I bought a new smartphone yesterday. The camera quality is amazing. I spent all night downloading useful apps. It is much faster than my old phone.",
    portugueseContent: "Comprei um smartphone novo ontem. A qualidade da câmera é incrível. Passei a noite toda baixando aplicativos úteis. É muito mais rápido do que meu telefone antigo.",
    segments: [
      {
        english: "I bought a new smartphone yesterday.",
        portuguese: "Comprei um smartphone novo ontem.",
        alternatives: ["Adquiri um celular novo ontem.", "Comprei um telefone novo ontem."]
      },
      {
        english: "The camera quality is amazing.",
        portuguese: "A qualidade da câmera é incrível.",
        alternatives: ["A câmera é de qualidade impressionante.", "A qualidade das fotos é maravilhosa."]
      },
      {
        english: "I spent all night downloading useful apps.",
        portuguese: "Passei a noite toda baixando aplicativos úteis.",
        alternatives: ["Fiquei a noite inteira baixando apps.", "Gastei a noite toda instalando aplicativos."]
      },
      {
        english: "It is much faster than my old phone.",
        portuguese: "É muito mais rápido do que meu telefone antigo.",
        alternatives: ["É bem mais veloz que meu celular velho.", "Roda muito mais rápido que o anterior."]
      }
    ]
  },
  {
    id: 19,
    title: "Watching a Movie",
    englishContent: "We went to the cinema to see an action movie. The special effects were incredible. I ate a large bucket of popcorn. The ending was a big surprise.",
    portugueseContent: "Fomos ao cinema ver um filme de ação. Os efeitos especiais eram incríveis. Comi um balde grande de pipoca. O final foi uma grande surpresa.",
    segments: [
      {
        english: "We went to the cinema",
        portuguese: "Fomos ao cinema",
        alternatives: ["Fomos ver um filme", "A gente foi ao cinema"]
      },
      {
        english: "to see an action movie.",
        portuguese: "ver um filme de ação.",
        alternatives: ["para assistir a um filme de ação.", "ver um filme agitado."]
      },
      {
        english: "The special effects were incredible.",
        portuguese: "Os efeitos especiais eram incríveis.",
        alternatives: ["Os efeitos visuais eram fantásticos.", "Os efeitos eram impressionantes."]
      },
      {
        english: "I ate a large bucket of popcorn.",
        portuguese: "Comi um balde grande de pipoca.",
        alternatives: ["Comi um pacote enorme de pipoca.", "Devorei um balde de pipoca."]
      },
      {
        english: "The ending was a big surprise.",
        portuguese: "O final foi uma grande surpresa.",
        alternatives: ["O desfecho foi surpreendente.", "O fim me surpreendeu muito."]
      }
    ]
  },
  {
    id: 20,
    title: "The Traffic Jam",
    englishContent: "There was a huge traffic jam on the highway. Cars were not moving at all. I was worried about being late for my meeting. I listened to the radio to pass the time.",
    portugueseContent: "Havia um enorme engarrafamento na rodovia. Os carros não estavam se movendo de jeito nenhum. Eu estava preocupado em me atrasar para minha reunião. Ouvi o rádio para passar o tempo.",
    segments: [
      {
        english: "There was a huge traffic jam",
        portuguese: "Havia um enorme engarrafamento",
        alternatives: ["Tinha um trânsito enorme", "Ocorreu um grande congestionamento"]
      },
      {
        english: "on the highway.",
        portuguese: "na rodovia.",
        alternatives: ["na estrada.", "na autoestrada."]
      },
      {
        english: "Cars were not moving at all.",
        portuguese: "Os carros não estavam se movendo de jeito nenhum.",
        alternatives: ["Os carros não saíam do lugar.", "O trânsito estava parado."]
      },
      {
        english: "I was worried about being late",
        portuguese: "Eu estava preocupado em me atrasar",
        alternatives: ["Fiquei preocupado com o atraso", "Tive receio de chegar tarde"]
      },
      {
        english: "I listened to the radio to pass the time.",
        portuguese: "Ouvi o rádio para passar o tempo.",
        alternatives: ["Escutei rádio para o tempo passar.", "Fiquei ouvindo rádio para distrair."]
      }
    ]
  },
  {
    id: 21,
    title: "Cleaning the House",
    englishContent: "I spent the whole Saturday cleaning my house. I dusted the furniture and vacuumed the floors. It was exhausting work, but necessary. Now, everything looks shiny and clean.",
    portugueseContent: "Passei o sábado todo limpando minha casa. Tirei o pó dos móveis e passei aspirador no chão. Foi um trabalho exaustivo, mas necessário. Agora, tudo parece brilhante e limpo.",
    segments: [
      {
        english: "I spent the whole Saturday",
        portuguese: "Passei o sábado todo",
        alternatives: ["Gastei meu sábado inteiro", "Fiquei o sábado todo"]
      },
      {
        english: "cleaning my house.",
        portuguese: "limpando minha casa.",
        alternatives: ["faxinando a casa.", "arrumando o lar."]
      },
      {
        english: "I dusted the furniture",
        portuguese: "Tirei o pó dos móveis",
        alternatives: ["Limpei a poeira da mobília", "Espananei os móveis"]
      },
      {
        english: "and vacuumed the floors.",
        portuguese: "e passei aspirador no chão.",
        alternatives: ["e aspirei o piso.", "e passei o aspirador."]
      },
      {
        english: "Now, everything looks shiny and clean.",
        portuguese: "Agora, tudo parece brilhante e limpo.",
        alternatives: ["Agora está tudo brilhando de limpo.", "Agora tudo está limpo e brilhante."]
      }
    ]
  },
  {
    id: 22,
    title: "Planning a Trip",
    englishContent: "We are planning a trip to Europe next year. We need to save money for the tickets. I am reading a guidebook about Italy and France. It is exciting to plan our itinerary.",
    portugueseContent: "Estamos planejando uma viagem para a Europa no ano que vem. Precisamos economizar dinheiro para as passagens. Estou lendo um guia sobre a Itália e a França. É empolgante planejar nosso itinerário.",
    segments: [
      {
        english: "We are planning a trip to Europe",
        portuguese: "Estamos planejando uma viagem para a Europa",
        alternatives: ["Nós planejamos viajar para a Europa", "Estamos organizando uma ida à Europa"]
      },
      {
        english: "next year.",
        portuguese: "no ano que vem.",
        alternatives: ["no próximo ano.", "ano que vem."]
      },
      {
        english: "We need to save money for the tickets.",
        portuguese: "Precisamos economizar dinheiro para as passagens.",
        alternatives: ["Temos que juntar dinheiro para os bilhetes.", "Precisamos guardar grana para as passagens."]
      },
      {
        english: "It is exciting to plan our itinerary.",
        portuguese: "É empolgante planejar nosso itinerário.",
        alternatives: ["É animador fazer o roteiro.", "Planejar o trajeto é emocionante."]
      }
    ]
  },
  {
    id: 23,
    title: "The Birthday Party",
    englishContent: "We threw a surprise party for John yesterday. We hid behind the sofa until he arrived. He was shocked when we shouted surprise. We ate cake and danced until midnight.",
    portugueseContent: "Fizemos uma festa surpresa para o John ontem. Nos escondemos atrás do sofá até ele chegar. Ele ficou chocado quando gritamos surpresa. Comemos bolo e dançamos até meia-noite.",
    segments: [
      {
        english: "We threw a surprise party",
        portuguese: "Fizemos uma festa surpresa",
        alternatives: ["Organizamos uma festa surpresa", "Demos uma festa surpresa"]
      },
      {
        english: "We hid behind the sofa",
        portuguese: "Nos escondemos atrás do sofá",
        alternatives: ["Ficamos escondidos atrás do sofá", "A gente se escondeu atrás do sofá"]
      },
      {
        english: "He was shocked when we shouted surprise.",
        portuguese: "Ele ficou chocado quando gritamos surpresa.",
        alternatives: ["Ele ficou pasmo quando gritamos surpresa.", "Ele se assustou quando gritamos."]
      },
      {
        english: "We ate cake and danced until midnight.",
        portuguese: "Comemos bolo e dançamos até meia-noite.",
        alternatives: ["Comemos bolo e ficamos dançando até a meia-noite.", "Teve bolo e dança até as 12 da noite."]
      }
    ]
  },
  {
    id: 24,
    title: "Studying for Exams",
    englishContent: "Final exams are coming up soon. I spend five hours a day in the library. I have many notes to review. I am tired, but I want to get good grades.",
    portugueseContent: "As provas finais estão chegando em breve. Passo cinco horas por dia na biblioteca. Tenho muitas anotações para revisar. Estou cansado, mas quero tirar boas notas.",
    segments: [
      {
        english: "Final exams are coming up soon.",
        portuguese: "As provas finais estão chegando em breve.",
        alternatives: ["Os exames finais estão próximos.", "As provas finais logo vão chegar."]
      },
      {
        english: "I spend five hours a day in the library.",
        portuguese: "Passo cinco horas por dia na biblioteca.",
        alternatives: ["Fico cinco horas diárias na biblioteca.", "Gasto cinco horas por dia estudando na biblioteca."]
      },
      {
        english: "I have many notes to review.",
        portuguese: "Tenho muitas anotações para revisar.",
        alternatives: ["Tenho muito material para rever.", "Preciso revisar muitas anotações."]
      },
      {
        english: "I am tired, but I want to get good grades.",
        portuguese: "Estou cansado, mas quero tirar boas notas.",
        alternatives: ["Estou exausto, mas quero notas altas.", "Cansa, mas quero ir bem nas provas."]
      }
    ]
  },
  {
    id: 25,
    title: "The Park Walk",
    englishContent: "It is a beautiful spring day. The flowers are blooming in the park. I see children playing on the swings. Walking here helps me clear my mind.",
    portugueseContent: "É um lindo dia de primavera. As flores estão desabrochando no parque. Vejo crianças brincando nos balanços. Caminhar aqui me ajuda a limpar a mente.",
    segments: [
      {
        english: "It is a beautiful spring day.",
        portuguese: "É um lindo dia de primavera.",
        alternatives: ["Está um belo dia de primavera.", "O dia de primavera está lindo."]
      },
      {
        english: "The flowers are blooming in the park.",
        portuguese: "As flores estão desabrochando no parque.",
        alternatives: ["As flores estão florescendo no parque.", "Há flores abrindo no parque."]
      },
      {
        english: "I see children playing on the swings.",
        portuguese: "Vejo crianças brincando nos balanços.",
        alternatives: ["Vejo crianças nos balanços.", "Estou vendo crianças brincar no balanço."]
      },
      {
        english: "Walking here helps me clear my mind.",
        portuguese: "Caminhar aqui me ajuda a limpar a mente.",
        alternatives: ["Andar aqui ajuda a clarear as ideias.", "Caminhar neste lugar espairece a mente."]
      }
    ]
  },
  {
    id: 26,
    title: "Lost in the City",
    englishContent: "I got lost in the city center yesterday. My phone battery died, so I had no map. I asked a stranger for directions. He was very kind and showed me the way.",
    portugueseContent: "Eu me perdi no centro da cidade ontem. A bateria do meu celular acabou, então eu não tinha mapa. Pedi informações a um estranho. Ele foi muito gentil e me mostrou o caminho.",
    segments: [
      {
        english: "I got lost in the city center yesterday.",
        portuguese: "Eu me perdi no centro da cidade ontem.",
        alternatives: ["Ontem me perdi no centro.", "Fiquei perdido no centro da cidade ontem."]
      },
      {
        english: "My phone battery died,",
        portuguese: "A bateria do meu celular acabou,",
        alternatives: ["Meu celular ficou sem bateria,", "Minha bateria morreu,"]
      },
      {
        english: "so I had no map.",
        portuguese: "então eu não tinha mapa.",
        alternatives: ["então fiquei sem mapa.", "por isso estava sem GPS."]
      },
      {
        english: "I asked a stranger for directions.",
        portuguese: "Pedi informações a um estranho.",
        alternatives: ["Perguntei o caminho a um desconhecido.", "Pedi direção a uma pessoa na rua."]
      },
      {
        english: "He was very kind and showed me the way.",
        portuguese: "Ele foi muito gentil e me mostrou o caminho.",
        alternatives: ["Ele foi simpático e indicou o caminho.", "Ele gentilmente me explicou como ir."]
      }
    ]
  },
  {
    id: 27,
    title: "The Hotel Check-in",
    englishContent: "We arrived at the hotel late at night. The receptionist was very welcoming. Our room had a great view of the ocean. The bed was extremely comfortable.",
    portugueseContent: "Chegamos ao hotel tarde da noite. O recepcionista foi muito acolhedor. Nosso quarto tinha uma ótima vista para o oceano. A cama era extremamente confortável.",
    segments: [
      {
        english: "We arrived at the hotel late at night.",
        portuguese: "Chegamos ao hotel tarde da noite.",
        alternatives: ["Chegamos no hotel tarde.", "Fizemos check-in tarde da noite."]
      },
      {
        english: "The receptionist was very welcoming.",
        portuguese: "O recepcionista foi muito acolhedor.",
        alternatives: ["Quem nos atendeu foi muito hospitaleiro.", "O recepcionista nos recebeu muito bem."]
      },
      {
        english: "Our room had a great view of the ocean.",
        portuguese: "Nosso quarto tinha uma ótima vista para o oceano.",
        alternatives: ["O quarto tinha vista para o mar.", "A vista do quarto para o oceano era ótima."]
      },
      {
        english: "The bed was extremely comfortable.",
        portuguese: "A cama era extremamente confortável.",
        alternatives: ["A cama era muito confortável.", "Dormimos numa cama super confortável."]
      }
    ]
  },
  {
    id: 28,
    title: "Making a Reservation",
    englishContent: "I called the restaurant to book a table for two. I requested a table near the window. They said they were fully booked at 8 PM. We decided to go at 9 PM instead.",
    portugueseContent: "Liguei para o restaurante para reservar uma mesa para dois. Pedi uma mesa perto da janela. Disseram que estavam lotados às 20h. Decidimos ir às 21h então.",
    segments: [
      {
        english: "I called the restaurant to book a table",
        portuguese: "Liguei para o restaurante para reservar uma mesa",
        alternatives: ["Telefonei para reservar uma mesa", "Liguei para fazer uma reserva"]
      },
      {
        english: "I requested a table near the window.",
        portuguese: "Pedi uma mesa perto da janela.",
        alternatives: ["Solicitei ficar perto da janela.", "Pedi para sentar junto à janela."]
      },
      {
        english: "They said they were fully booked",
        portuguese: "Disseram que estavam lotados",
        alternatives: ["Informaram que não havia vagas", "Falaram que estava tudo reservado"]
      },
      {
        english: "We decided to go at 9 PM instead.",
        portuguese: "Decidimos ir às 21h então.",
        alternatives: ["Resolvemos ir às 9 da noite.", "Optamos por ir às 21h."]
      }
    ]
  },
  {
    id: 29,
    title: "The Beach Day",
    englishContent: "We spent the whole day at the beach playing volleyball. The sand was hot under our feet. We drank coconut water to stay hydrated. We watched the sunset before leaving.",
    portugueseContent: "Passamos o dia todo na praia jogando vôlei. A areia estava quente sob nossos pés. Bebemos água de coco para nos hidratar. Assistimos ao pôr do sol antes de ir embora.",
    segments: [
      {
        english: "We spent the whole day at the beach",
        portuguese: "Passamos o dia todo na praia",
        alternatives: ["Ficamos o dia inteiro na praia", "Passamos o dia na areia"]
      },
      {
        english: "playing volleyball.",
        portuguese: "jogando vôlei.",
        alternatives: ["jogando voleibol.", "praticando vôlei."]
      },
      {
        english: "The sand was hot under our feet.",
        portuguese: "A areia estava quente sob nossos pés.",
        alternatives: ["A areia queimava nossos pés.", "O chão estava quente."]
      },
      {
        english: "We drank coconut water",
        portuguese: "Bebemos água de coco",
        alternatives: ["Tomamos água de coco", "Consumimos água de coco"]
      },
      {
        english: "We watched the sunset before leaving.",
        portuguese: "Assistimos ao pôr do sol antes de ir embora.",
        alternatives: ["Vimos o sol se pôr antes de sair.", "Observamos o entardecer antes de partir."]
      }
    ]
  },
  {
    id: 30,
    title: "Winter Cold",
    englishContent: "It is freezing outside today. I need to wear my heavy coat and gloves. The streets are covered in snow. I prefer to stay inside with a hot chocolate.",
    portugueseContent: "Está congelando lá fora hoje. Preciso usar meu casaco pesado e luvas. As ruas estão cobertas de neve. Prefiro ficar dentro de casa com um chocolate quente.",
    segments: [
      {
        english: "It is freezing outside today.",
        portuguese: "Está congelando lá fora hoje.",
        alternatives: ["Faz um frio de rachar hoje.", "Está muito gelado lá fora."]
      },
      {
        english: "I need to wear my heavy coat and gloves.",
        portuguese: "Preciso usar meu casaco pesado e luvas.",
        alternatives: ["Tenho que por meu casaco grosso e luvas.", "Preciso vestir roupa de frio e luvas."]
      },
      {
        english: "The streets are covered in snow.",
        portuguese: "As ruas estão cobertas de neve.",
        alternatives: ["Tem neve cobrindo as ruas.", "A neve cobriu as ruas."]
      },
      {
        english: "I prefer to stay inside",
        portuguese: "Prefiro ficar dentro de casa",
        alternatives: ["Prefiro não sair", "Gosto mais de ficar no interior"]
      }
    ]
  }
];

export const getRandomText = (excludeIds: number[] = []): PracticeText => {
  const available = TEXT_DATABASE.filter(t => !excludeIds.includes(t.id));

  if (available.length === 0) {
    // If all texts have been seen, reset the pool.
    // Try to avoid the immediate last one if possible to prevent back-to-back repetition.
    let resetPool = TEXT_DATABASE;
    if (excludeIds.length > 0 && TEXT_DATABASE.length > 1) {
        const lastSeenId = excludeIds[excludeIds.length - 1];
        resetPool = TEXT_DATABASE.filter(t => t.id !== lastSeenId);
    }
    const randomIndex = Math.floor(Math.random() * resetPool.length);
    return resetPool[randomIndex];
  }

  const randomIndex = Math.floor(Math.random() * available.length);
  return available[randomIndex];
};
