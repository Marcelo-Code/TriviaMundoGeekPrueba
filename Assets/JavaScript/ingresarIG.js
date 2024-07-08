let iGExistente = false;
let nombreJugadorValido = false;
let nombreJugadorepetido = false;

// Valida que el texto ingresado sea una expresión válida

function validarIG(nombreJugador) {
    const condiciones = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
    return condiciones.test(nombreJugador);
}

async function tomarIG() {
    let nombreJugador = document.getElementById('ingresarIG').value
    nombreJugador = nombreJugador.toLowerCase();
    if (validarIG(nombreJugador)) {

        //dataJson = await apiPeticionGET();

        dataJson.forEach(elemento => {
            if (elemento.nombre === nombreJugador) nombreJugadorepetido = true;
        })
        if (nombreJugadorepetido == false) {
            window.open("./pages/trivia.html", "_blank");
            localStorage.setItem("nombreJugador", nombreJugador);
        } else alert("Esta cuenta ya figura en nuestro ranking");
    } else alert("Instagram inválido, volvé a ingresar");
}

//Elimina espacios en blanco

ingresarIG.addEventListener('keyup', (e) => {
    let texto = e.target.value;
    e.target.value = texto.trim();
})

btnInicio.addEventListener('click', tomarIG);