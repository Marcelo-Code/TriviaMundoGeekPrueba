const preguntas = [
    {
        id: 0,
        categoria: "retro",
        pregunta: "¿Quién inventó el condensador de flujos?",
        respuesta: "Emmet Brown",
        incorrecta1: "Yo",
        incorrecta2: "George McFly",
        incorrecta3: "Biff Tannen",
        imagen: "../images/backToTheFuture.JPG"
    },
    {
        id: 1,
        categoria: "retro",
        pregunta: "¿En qué año se estrenó la primera película de Volver al Futuro?",
        respuesta: "1985",
        incorrecta1: "1990",
        incorrecta2: "1980",
        incorrecta3: "1995",
        imagen: "../images/backToTheFuture.JPG"
    },
    {
        id: 2,
        categoria: "retro",
        pregunta: "¿Cómo se llama el perro de Doc Brown?",
        respuesta: "Einstein",
        incorrecta1: "Newton",
        incorrecta2: "Galileo",
        incorrecta3: "Tesla",
        imagen: "../images/backToTheFuture.JPG"
    },
    {
        id: 3,
        categoria: "retro",
        pregunta: "¿Qué tipo de automóvil es el DeLorean?",
        respuesta: "DMC-12",
        incorrecta1: "DMC-10",
        incorrecta2: "DMC-20",
        incorrecta3: "DMC-30",
        imagen: "../images/backToTheFuture.JPG"
    },
    {
        id: 4,
        categoria: "retro",
        pregunta: "¿Cuál es el nombre completo de Marty?",
        respuesta: "Marty McFly",
        incorrecta1: "Marty Brown",
        incorrecta2: "Marty Baines",
        incorrecta3: "Marty Tannen",
        imagen: "../images/backToTheFuture.JPG"
    },
    {
        id: 5,
        categoria: "retro",
        pregunta: "¿Qué velocidad debe alcanzar el DeLorean para viajar en el tiempo?",
        respuesta: "88 mph",
        incorrecta1: "78 mph",
        incorrecta2: "98 mph",
        incorrecta3: "68 mph",
        imagen: "../images/backToTheFuture.JPG"
    },
    {
        id: 6,
        categoria: "retro",
        pregunta: "¿Cómo se llama el alcalde de Hill Valley en 1955?",
        respuesta: "Red Thomas",
        incorrecta1: "Goldie Wilson",
        incorrecta2: "Lou Caruthers",
        incorrecta3: "George McFly",
        imagen: "../images/backToTheFuture.JPG"
    },
    {
        id: 7,
        categoria: "retro",
        pregunta: "¿Cuál es la famosa frase de Doc Brown?",
        respuesta: "¡Gran Scott!",
        incorrecta1: "¡Eureka!",
        incorrecta2: "¡Por Dios!",
        incorrecta3: "¡Asombroso!",
        imagen: "../images/backToTheFuture.JPG"
    },
    {
        id: 8,
        categoria: "retro",
        pregunta: "¿Qué evento importante ocurre en Hill Valley en 1955?",
        respuesta: "El baile del Encantamiento bajo el mar",
        incorrecta1: "El festival de música",
        incorrecta2: "La inauguración del reloj de la torre",
        incorrecta3: "La feria de ciencia",
        imagen: "../images/backToTheFuture.JPG"
    },
    {
        id: 9,
        categoria: "retro",
        pregunta: "¿Qué marca de zapatillas usa Marty en 2015?",
        respuesta: "Nike",
        incorrecta1: "Adidas",
        incorrecta2: "Puma",
        incorrecta3: "Reebok",
        imagen: "../images/backToTheFuture.JPG"
    },
    {
        id: 10,
        categoria: "retro",
        pregunta: "¿Quién es el villano principal de la trilogía?",
        respuesta: "Biff Tannen",
        incorrecta1: "George McFly",
        incorrecta2: "Emmet Brown",
        incorrecta3: "Lorraine Baines",
        imagen: "../images/backToTheFuture.JPG"
    },
    {
        id: 11,
        categoria: "retro",
        pregunta: "¿En qué ciudad vive Marty McFly?",
        respuesta: "Hill Valley",
        incorrecta1: "Hill City",
        incorrecta2: "Valley Hill",
        incorrecta3: "Hill Town",
        imagen: "../images/backToTheFuture.JPG"
    },
    {
        id: 12,
        categoria: "retro",
        pregunta: "¿Cómo se llama la madre de Marty?",
        respuesta: "Lorraine Baines",
        incorrecta1: "Jennifer Parker",
        incorrecta2: "Clara Clayton",
        incorrecta3: "Linda McFly",
        imagen: "../images/backToTheFuture.JPG"
    },
    {
        id: 13,
        categoria: "retro",
        pregunta: "¿Qué nombre utiliza Marty cuando se hace pasar por un forastero en 1885?",
        respuesta: "Clint Eastwood",
        incorrecta1: "John Wayne",
        incorrecta2: "Billy the Kid",
        incorrecta3: "Wyatt Earp",
        imagen: "../images/backToTheFuture.JPG"
    },
    {
        id: 14,
        categoria: "retro",
        pregunta: "¿Qué objeto da lugar a la invención del condensador de flujo?",
        respuesta: "Un reloj",
        incorrecta1: "Un coche",
        incorrecta2: "Una bicicleta",
        incorrecta3: "Una lámpara",
        imagen: "../images/backToTheFuture.JPG"
    },
    {
        id: 15,
        categoria: "retro",
        pregunta: "¿Cuál es el nombre de la novia de Marty?",
        respuesta: "Jennifer Parker",
        incorrecta1: "Lorraine Baines",
        incorrecta2: "Clara Clayton",
        incorrecta3: "Linda McFly",
        imagen: "../images/backToTheFuture.JPG"
    },
    {
        id: 16,
        categoria: "retro",
        pregunta: "¿En qué fecha viajan al futuro en 'Volver al Futuro II'?",
        respuesta: "21 de octubre de 2015",
        incorrecta1: "21 de octubre de 2016",
        incorrecta2: "21 de octubre de 2014",
        incorrecta3: "21 de octubre de 2017",
        imagen: "../images/backToTheFuture.JPG"
    },
    {
        id: 17,
        categoria: "retro",
        pregunta: "¿Qué deporte profesional juega el hijo de Marty en 2015?",
        respuesta: "Hockey",
        incorrecta1: "Fútbol americano",
        incorrecta2: "Baloncesto",
        incorrecta3: "Béisbol",
        imagen: "../images/backToTheFuture.JPG"
    },
    {
        id: 18,
        categoria: "retro",
        pregunta: "¿Cuál es el nombre del amigo de Marty en 1955 que trabaja en el café?",
        respuesta: "Goldie Wilson",
        incorrecta1: "Lou Caruthers",
        incorrecta2: "Biff Tannen",
        incorrecta3: "George McFly",
        imagen: "../images/backToTheFuture.JPG"
    },
    {
        id: 19,
        categoria: "retro",
        pregunta: "¿Cómo se llama el antagonista de Doc Brown en 1885?",
        respuesta: "Buford 'Mad Dog' Tannen",
        incorrecta1: "Biff Tannen",
        incorrecta2: "Clara Clayton",
        incorrecta3: "George McFly",
        imagen: "../images/backToTheFuture.JPG"
    }
];
