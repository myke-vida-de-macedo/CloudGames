const data_base = [
    {
        id:1,
        nome:"GTA V",
        img:"./img/GTA 5.webp",
        valor:60,
        categoria:["Corrida", "Mundo Aberto", "Guerra", "Fantasioso"],
        descricao:"Grand Theft Auto V para PC oferece aos jogadores a opção de explorar o gigantesco e premiado mundo de Los Santos e Blaine County em resoluções de até 4K e além, assim como a chance de experimentar o jogo rodando a 60 FPS (quadros por segundo).",
        button:"Visualizar",
        imgs:["./img/img gta/gta1.jpg", "./img/img gta/gta2.jpg", "./img/img gta/gta3.jpg", "./img/img gta/gta4.jpg"]
    },
    {
        id:2,
        nome:"Raibow Six Siege",
        img:"./img/Raibow six.jpg",
        valor:40,
        categoria:["FPS", "Fantasioso", "Tiro", "Multiplayer", "Equipe"],
        descricao:"O Tom Clancy's Rainbow Six Siege é o próximo lançamento da aclamada franquia de FPS desenvolvida pelo renomado estúdio Ubisoft Montreal.",
        button:"Visualizar",
        imgs:["./img/img raibow/rai1.jpg", "./img/img raibow/rai2.jpg", "./img/img raibow/rai3.jpg", "./img/img raibow/rai4.jpg"]
    },
    {
        id:3,
        nome:"Call Of duty Black Ops 3",
        img:"./img/Call od duty black ops 3.jpg",
        valor:50,
        categoria:["Multiplayer", "FPS", "Tiro", "Guerra"],
        descricao:"Quebrando as barreiras do que os fãs esperariam da franquia de entretenimento recordista, Call of Duty®: Black Ops II leva os jogadores a um futuro próximo, na Guerra Fria do século XXI, onde a tecnologia e as armas convergiram para criar uma nova geração de guerras.",
        button:"Visualizar",
        imgs:["./img/img black 3/1.jpg", "./img/img black 3/2.jpg", "./img/img black 3/3.jpg", "./img/img black 3/4.jpg"]
    },
    {
        id:4,
        nome:"Batlefield 2042",
        img:"./img/BF 2042.jpg",
        valor:250,
        categoria:["Mundo Aberto", "Guerra", "Multiplayer"],
        descricao:"Battlefield 2042 é um jogo eletrônico de tiro em primeira pessoa desenvolvido pela DICE e publicado pela Electronic Arts. É o décimo sétimo título da série Battlefield e a sequência de Battlefield V, de 2018.",
        button:"Visualizar",
        imgs:["./img/img 2042/1.jpg", "./img/img 2042/2.jpg", "./img/img 2042/3.jpg", "./img/img 2042/4.jpg"]
    },
    {
        id:5,
        nome:"Apex Legends",
        img:"./img/Apex Legends.jpg",
        valor:0,
        categoria:["Mundo Aberto", "Sobrevivencia", "Multiplayer", "Free To Play", "Battle Royale"],
        descricao:"Apex Legends é o premiado jogo de tiro em primeira pessoa de heróis e heroínas da Respawn Entertainment. Domine um elenco cada vez mais amplo de personagens lendários com habilidades poderosas, experimente partidas estratégicas e a jogabilidade inovadora na próxima evolução do",
        button:"Visualizar",
        imgs:["./img/img apex/1.jpg", "./img/img apex/2.jpg", "./img/img apex/3.jpg", "./img/img apex/4.jpg"]
    },
    {
        id:6,
        nome:"Call of duty Warzone",
        img:"./img/Call of duty Warzone.jpg",
        valor:0,
        categoria:["Mundo Aberto", "Sobrevivencia", "Multiplayer", "Free To Play", "Battle Royale"],
        descricao:"Call of Duty: Warzone é um jogo eletrônico free-to-play do gênero battle royale desenvolvido pela Infinity Ward e Raven Software e publicado pela Activision. Lançado em 10 de março de 2020 para Microsoft Windows, PlayStation 4 e Xbox One, o jogo faz parte do título Call of Duty: Modern Warfare, mas não requer compra.",
        button:"Visualizar",
        imgs:["./img/img warzone/1.jpg", "./img/img warzone/2.jpg", "./img/img warzone/3.jpg", "./img/img warzone/4.jpg"]
    },
    {
        id:7,
        nome:"Call of Duty: Modern Warfare",
        img:"./img/Call of Duty: Modern Warfare.jpg",
        valor:100,
        categoria:["Multiplayer", "FPS", "Guerra"],
        descricao:"Call of Duty: Warzone é um jogo eletrônico free-to-play do gênero battle royale desenvolvido pela Infinity Ward e Raven Software e publicado pela Activision.",
        button:"Visualizar",
        imgs:["./img/img mw/1.jpg", "./img/img mw/2.jpg", "./img/img mw/3.jpg", "./img/img mw/4.jpg"]
    },
    {
        id:8,
        nome:"Fortnite",
        img:"./img/Fortnite.jpg",
        valor:0,
        categoria:["Mundo Aberto", "Sobrevivencia", "Multiplayer", "Free To Play", "Battle Royale"],
        descricao:"Fortnite é um jogo eletrônico multijogador online revelado originalmente em 2011, desenvolvido pela Epic Games e lançado como diferentes modos de jogo que compartilham a mesma jogabilidade e motor gráfico de jogo",
        button:"Visualizar",
        imgs:["./img/img fortnite/1.jpg", "./img/img fortnite/2.jpg", "./img/img fortnite/3.jpg", "./img/img fortnite/4.jpg"]
    },
    {
        id:9,
        nome:"Forza horizon 5",
        img:"./img/forza horizon 5.jpg",
        valor:250,
        categoria:["Corrida", "Mundo Aberto", "Multiplayer"],
        descricao:"Sua maior aventura Horizon te espera! Explore o mundo aberto vibrante e em constante evolução nas terras mexicanas. Participe de corridas divertidas e sem limites enquanto pilota centenas dos melhores carros do mundo. Comece hoje sua Aventura Horizon e adicione o jogo a sua Lista de Desejos!",
        button:"Visualizar",
        imgs:["./img/img forza/1.jpg", "./img/img forza/2.jpg", "./img/img forza/3.jpg", "./img/img forza/4.jpg"]
    },
    {
        id:10,
        nome:"Rise Of The Tomb Raider",
        img:"./img/rise of the tomb raider.jpg",
        valor:50,
        categoria:["Aventura", "Exploração", "Modo Historia", "Imersivo"],
        descricao:"O Passe de Temporada do Rise of the Tomb Raider: aniversário de 20 anos inclui o jogo base e o Passe de Temporada que apresenta conteúdo totalmente novo. Explore a Mansão Croft na nova história “Laços de Sangue” e a defenda contra uma invasão zumbi em “Pesadelo de Lara”.",
        button:"Visualizar",
        imgs:["./img/img raider/1.jpg", "./img/img raider/2.jpg", "./img/img raider/3.jpg", "./img/img raider/4.jpg"]
    },
    {
        id:11,
        nome:"The Division 2",
        img:"./img/The Division 2.jpg",
        valor:30,
        categoria:["Mundo Aberto", "Sobrevivencia", "Multiplayer"],
        descricao:"Após uma pandemia mortal deixar a cidade à beira do colapso, cabe aos agentes da Division salvar o que restou. Conclua missões, explore a Zona Cega, e enfrente facções inimigas sozinho ou com 3 amigos até chegar ao jogo avançado com PvP e PvE.",
        button:"Visualizar",
        imgs:["./img/img division/1.jpg", "./img/img division/2.jpg", "./img/img division/3.jpg", "./img/img division/4.jpg"]
    },
    {
        id:12,
        nome:"Destiny 2",
        img:"./img/Destiny 2.jpg",
        valor:0,
        categoria:["Mundo Aberto", "Fantasioso", "Multiplayer", "Modo Historia", "Free To Play"],
        descricao:"Destiny 2 é um MMO de ação com um mundo único em evolução, que se pode jogar a qualquer hora e em qualquer lugar com os amigos, inteiramente de graça.",
        button:"Visualizar",
        imgs:["./img/img destiny/1.jpg", "./img/img destiny/2.jpg", "./img/img destiny/3.jpg", "./img/img destiny/4.jpg"]
    },
    {
        id:13,
        nome:"Red Dead Redemption 2",
        img:"./img/Red Dead Redemption 2.jpg",
        valor:120,
        categoria:["Mundo Aberto", "Velho oeste", "Multiplayer", "Modo Historia"],
        descricao:"Red Dead Redemption 2, a épica aventura de mundo aberto da Rockstar Games aclamada pela crítica e o jogo mais bem avaliado desta geração de consoles, agora chega aprimorado para PC com conteúdos inéditos no Modo História, melhorias visuais e muito mais.",
        button:"Visualizar",
        imgs:["./img/img Red Dead/red1.jpg", "./img/img Red Dead/red2.jpg", "./img/img Red Dead/red3.jpg", "./img/img Red Dead/red4.jpg"]
    },
    {
        id:14,
        nome:"Spider Man Miles Morales",
        img:"./img/man game miles morales.png",
        valor:130,
        categoria:["Mundo Aberto", "Fantasioso", "Imersivo"],
        descricao:"",
        button:"Visualizar",
        imgs:["./img/img morales/1.jpg", "./img/img morales/2.jpg", "./img/img morales/3.jpg", "./img/img morales/4.jpg"]
    },
    {
        id:15,
        nome:"Shadow of the Colossus",
        img:"./img/shadow of the colossus.jpg",
        valor:40,
        categoria:["Mundo Aberto", "Fantasioso", "Modo Historia"],
        descricao:"",
        button:"Visualizar",
        imgs:["./img/img colossus/1.jpg", "./img/img colossus/2.jpg", "./img/img colossus/3.jpg", "./img/img colossus/4.jpg"]
    },
    {
        id:16,
        nome:"Detroit Become Human",
        img:"./img/detroit become human.jpg",
        valor:60,
        categoria:["Imersivo", "Modo Historia"],
        descricao:"Detroit: Become Human coloca o destino da humanidade e dos androides em suas mãos. Todas as suas escolhas afetam o resultado do jogo, com uma das narrativas mais intrinsecamente ramificadas já criadas.",
        button:"Visualizar",
        imgs:["./img/img human/1.jpg", "./img/img human/2.jpg", "./img/img human/3.jpg", "./img/img human/4.jpg"]
    },
    {
        id:17,
        nome:"The Last Of Us",
        img:"./img/The Last Of Us.jpg",
        valor:150,
        categoria:["Imersivo", "Modo Historia"],
        descricao:"",
        button:"Visualizar",
        imgs:["./img/img last/1.jpg", "./img/img last/2.jpg", "./img/img last/3.jpg", "./img/img last/4.jpg"]
    },
    {
        id:18,
        nome:"Scape From Tarkov",
        img:"./img/Scape From Tarkov.png",
        valor:90,
        categoria:["Mundo Aberto", "Realista", "Sobrevivencia", "Multiplayer"],
        descricao:"",
        button:"Visualizar",
        imgs:["./img/img tarkov/1.jpg", "./img/img tarkov/2.jpg", "./img/img tarkov/3.jpg", "./img/img tarkov/4.jpg"]
    },
    {
        id:19,
        nome:"Arma 3",
        img:"./img/Arma 3.jpg",
        valor:50,
        categoria:["Mundo Aberto", "Guerra", "Multiplayer"],
        descricao:"Viva um jogo de combate realista num mundo aberto militar descomunal. Arma 3 apresenta uma grande variedade militar para um ou mais jogadores, mais de 20 veículos e 40 armas, e oportunidades ilimitadas para criação de conteúdo. Autêntico, diverso, aberto: Arma 3 envia você para a guerra.",
        button:"Visualizar",
        imgs:["./img/img arma/1.jpg", "./img/img arma/2.jpg", "./img/img arma/3.jpg", "./img/img arma/4.jpg"]
    },
    {
        id:20,
        nome:"Star Wars Jedi Fallen Order",
        img:"./img/star wars jedi fallen order.jpg",
        valor:200,
        categoria:["Mundo Aberto", "Modo Historia", "Fantasioso"],
        descricao:"Prepare-se para cruzar a galáxia em STAR WARS Jedi: Fallen Order, uma aventura em terceira pessoa cheia de ação da Respawn Entertainment. Um padawan perdido precisa completar seu treinamento, desenvolver novas habilidades com a Força e dominar a arte do sabre de luz — tudo isso enquan...",
        button:"Visualizar",
        imgs:["./img/img fallen/1.jpg", "./img/img fallen/2.jpg", "./img/img fallen/3.jpg", "./img/img fallen/4.jpg"]
    },
    {
        id:21,
        nome:"Need For Speed Heat",
        img:"./img/Need for Speed Heat.png",
        valor:280,
        categoria:["Corrida", "Mundo Aberto", "Modo Historia"],
        descricao:"Trabalhe de dia e arrisque tudo à noite em Need for Speed™ Heat Edição Deluxe, um jogo eletrizante de corridas de rua, onde a lei desaparece com o pôr do sol.",
        button:"Visualizar",
        imgs:["./img/img heat/1.jpg", "./img/img heat/2.jpg", "./img/img heat/3.jpg", "./img/img heat/4.jpg"]
    },
    {
        id:22,
        nome:"Elder Ring",
        img:"./img/Elder Ring.jpg",
        valor:250,
        categoria:["Mundo Aberto", "Medieval", "Modo Historia"],
        descricao:"O NOVO RPG DE AÇÃO E FANTASIA. Levante-se, Maculado, e seja guiado pela graça para portar o poder do Anel Prístino e se tornar um Lorde Prístino nas Terras Intermédias.",
        button:"Visualizar",
        imgs:["./img/img ring/1.jpg", "./img/img ring/2.jpg", "./img/img ring/3.jpg", "./img/img ring/4.jpg"]
    },
    {
        id:23,
        nome:"Death Stranding",
        img:"./img/Death Stranding.jpg",
        valor:40,
        categoria:["Mundo Aberto", "Fantasioso", "Modo Historia"],
        descricao:"Do lendário diretor Hideo Kojima, surge uma experiência que desafia gêneros, ainda maior em DIRECTOR’S CUT. Jogando como Sam Bridges, sua missão é entregar esperança à humanidade ao conectar os sobreviventes de uma América devastada. Você conseguirá reunir este mundo...   ",
        button:"Visualizar",
        imgs:["./img/img death/1.jpg", "./img/img death/2.jpg", "./img/img death/3.jpg", "./img/img death/4.jpg"]
    },
    
    
]