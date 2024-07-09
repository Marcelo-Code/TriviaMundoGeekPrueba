let cantidadPreguntas = 1;

let data = [];
let index = 0;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;
let posiblesRespuestas = [];
let suspenderBotones = false;
let basePreguntas = [];
let botonCorrespondiente = [];
let arrayNumerosPreguntas = 0;
let nombreJugador = "";
let jugador = {};

//------ declaración variables globales

function cerrarVentana() {
    window.close();
}

function generarOrdenPreguntas(cantidad) {
    let arrayNumerosPreguntas = [];
    let num = 0;
    if (cantidad > preguntas.length) cantidad = preguntas.length;
    for (let i = 0; i < cantidad; i++) {
        do {
            num = Math.floor(Math.random() * preguntas.length);
            coincidencia = false;
            for (let j of arrayNumerosPreguntas) {
                if (j == num) {
                    coincidencia = true;
                    break;
                }
            }
        } while (coincidencia);
        arrayNumerosPreguntas.push(num);
    }
    return arrayNumerosPreguntas;
}

function select_id(id) {
    return document.getElementById(id);
}

function style(id) {
    return document.getElementById(id).style;
}

botonCorrespondiente = [
    select_id("btn1"),
    select_id("btn2"),
    select_id("btn3"),
    select_id("btn4")
];

function escogerPreguntas() {
    arrayNumerosPreguntas = generarOrdenPreguntas(cantidadPreguntas);
    nombreJugador = localStorage.getItem("nombreJugador");
    basePreguntas = preguntas[arrayNumerosPreguntas[index]];
    index += 1;
    select_id("pregunta").innerHTML = basePreguntas.pregunta;
    select_id("imagen").setAttribute("src", basePreguntas.imagen);
    if (basePreguntas.imagen) {
        style("imagen").heigth = "auto";
        style("imagen").width = "100%";
        style("imagen").objectFit = basePreguntas.objectFit;
    } else {
        style("imagen").heigth = 0;
        style("imagen").width = 0;
    }
    select_id("btn1").innerHTML = basePreguntas.respuesta;
    select_id("btn2").innerHTML = basePreguntas.incorrecta1;
    select_id("btn3").innerHTML = basePreguntas.incorrecta2;
    select_id("btn4").innerHTML = basePreguntas.incorrecta3;

    //En este segmento se desordenan las respuestas en los botones

    posiblesRespuestas = [
        basePreguntas.respuesta,
        basePreguntas.incorrecta1,
        basePreguntas.incorrecta2,
        basePreguntas.incorrecta3
    ];
    posiblesRespuestas.sort(() => Math.random() - 0.5);
    select_id("btn1").innerHTML = posiblesRespuestas[0];
    select_id("btn2").innerHTML = posiblesRespuestas[1];
    select_id("btn3").innerHTML = posiblesRespuestas[2];
    select_id("btn4").innerHTML = posiblesRespuestas[3];
}

function oprimirBoton(i) {
    if (suspenderBotones == true) {
        return;
    }
    suspenderBotones = true;
    if (posiblesRespuestas[i] == basePreguntas.respuesta) {
        botonCorrespondiente[i].style.background = "lightgreen";
        respuestasCorrectas += 1;
    } else {
        botonCorrespondiente[i].style.background = "red";
        respuestasIncorrectas += 1;
    }
    setTimeout(() => {
        if (index == arrayNumerosPreguntas.length) {
            pauseTimer();

            //terminar programa, mostrar resultados

            body.removeChild(contenedor);
            body.innerHTML = `<div class = "mensaje">
                                    <ul>
                                        <li>¡¡Gracias por participar en la trivia!!
                                        <li>Por último:
                                        <li>👉 Realizá una captura de pantalla a tu resultado.
                                        <li>👉 Compartilo en historias, etiquetanos y ya tenés un lugar asegurado en el ranking.
                                        <li>⚠📱💻 Si tenés la cuenta en privado, mandanos la captura por mp
                                    </ul>
                                </div>
                                <div class = "cartelFin rotate-in-center">
                                    <div class = "tracking-in-contract-bck"> ${nombreJugador} estos son tus resultados:</div>
                                    <div class = "tracking-in-contract-bck"> Correctas: ${respuestasCorrectas}</div>
                                    <div class = "tracking-in-contract-bck"> Incorrectas: ${respuestasIncorrectas}</div>
                                    <div class = "tracking-in-contract-bck"> Tiempo: ${minutos} ' ${segundos} . ${milisegundos} "</div>
                                    <br>
                                    <a class = "btnInicio" onclick = "cerrarVentana()">Salir</a>
                                </div>
                                <div class = "mensajeFin"> ¡¡Recordá visitarnos en nuestro local!!<br><br><br><br><br><br><br><br><br></div>
                                `;

            //Tiren papelitos!!

            const duration = 15 * 1000,
                animationEnd = Date.now() + duration,
                defaults = {
                    startVelocity: 30,
                    spread: 360,
                    ticks: 60,
                    zIndex: 0
                };

            function randomInRange(min, max) {
                return Math.random() * (max - min) + min;
            }

            const interval = setInterval(function () {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                const particleCount = 50 * (timeLeft / duration);

                // since particles fall down, start a bit higher than random
                confetti(
                    Object.assign({}, defaults, {
                        particleCount,
                        origin: {
                            x: randomInRange(0.1, 0.3),
                            y: Math.random() - 0.2
                        },
                    })
                );
                confetti(
                    Object.assign({}, defaults, {
                        particleCount,
                        origin: {
                            x: randomInRange(0.7, 0.9),
                            y: Math.random() - 0.2
                        },
                    })
                );
            }, 250);


            //Guardar los resutados en archivo:

            jugador.nombre = nombreJugador;
            jugador.respuestasCorrectas = respuestasCorrectas;
            jugador.tiempo = difference;

            //actualizarRanking(jugador);

        } else {

            //reiniciar botones una vez que se contestó la pregunta

            for (const btn of botonCorrespondiente) {
                btn.style.background = "skyblue";
            }
            escogerPreguntas(index);
            suspenderBotones = false;
        }
    }, 2000);
}

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        const body = document.getElementById("body");
        const contenedorConteo = document.getElementById("contenedorConteo");
        body.removeChild(contenedorConteo);
        const contenedor = document.getElementById("contenedor");
        contenedor.style.display = 'inline-flex';
    }, 7000);
});


setTimeout(() => {
    startTimer();
    escogerPreguntas(index);
}, 8000)
