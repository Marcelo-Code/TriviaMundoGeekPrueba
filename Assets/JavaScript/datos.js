async function crearRegistro() {
    let confirmar = false;
    let jugador = {};
    let minutos = 0;
    let segundos = 0;

    dataJson = await apiPeticionGET();

    confirmar = confirm("¿Crear nuevo registro?");
    if (confirmar) {
        jugador.nombre = prompt("Ingresar nuevo nombre: ");
        jugador.respuestasCorrectas = Number(prompt("Ingresar cantidad de respuestas correctas: "));
        minutos = parseInt(prompt("Ingresar minutos: "));
        segundos = parseFloat(prompt("Ingresar segundos: "));
        segundos = Number(segundos.toFixed(3));
        jugador.tiempo = minutos * 60000 + segundos * 1000;
        jugador.posicion = 0;

        //Si lo que existe es el registro vacío, se reemplazan los valores del mismo con los ingresados

        if ((dataJson.length == 1) && (dataJson[0].nombre == "...")) {
            dataJson[0].nombre = jugador.nombre;
            dataJson[0].respuestasCorrectas = jugador.respuestasCorrectas;
            dataJson[0].tiempo = jugador.tiempo;
        } else dataJson.push(jugador);

        guardarDatos(dataJson);

        //Se agrega un pequeño retraso para asegurarnos de que se accedan a los datos ya modificados

        setTimeout(() => {
            cargarRegistros()
        }, 500);
    }
}

// Función para cargar datos del servidor

async function cargarRegistros() {

    dataJson = await apiPeticionGET();

    const datosPosicion = document.getElementById("datosPosicion");
    const datosNombre = document.getElementById("datosNombre");
    const datosCorrectas = document.getElementById("datosCorrectas");
    const datosTiempo = document.getElementById("datosTiempo");

    let mensajePosicion = "";
    let mensajeNombre = "";
    let mensajeCorrectas = "";
    let mensajeTiempo = "";

    //Si lo que existe es el registro vacío, el mismo no se muestra

    if ((dataJson.length == 1) && (dataJson[0].nombre == "...")) alert("no hay registro de jugadores");
    else {
        dataJson.forEach(element => {

            mensajePosicion += `<div>${element.posicion}</div>`;
            mensajeNombre += `<div>${element.nombre}</div>`;
            mensajeCorrectas += `<div>${element.respuestasCorrectas}</div>`;
            let minutos = Math.floor((element.tiempo / 60000));
            let segundos = Math.floor((element.tiempo - minutos * 60000) / 1000);
            let milisegundos = element.tiempo - minutos * 60000 - segundos * 1000;
            minutos = minutos.toString().padStart(2, '0');
            segundos = segundos.toString().padStart(2, '0');
            milisegundos = milisegundos.toString().padStart(3, '0');
            mensajeTiempo += `<div>${minutos}' ${segundos}.${milisegundos}"</div>`;
        });
    }
    datosPosicion.innerHTML = mensajePosicion;
    datosNombre.innerHTML = mensajeNombre;
    datosCorrectas.innerHTML = mensajeCorrectas;
    datosTiempo.innerHTML = mensajeTiempo;
}

// Función para guardar datos en el servidor

async function guardarDatos(dataJson) {

    // Ordena los datos antes de guardarlos

    dataJson.sort((a, b) => {
        if (b.respuestasCorrectas != a.respuestasCorrectas) {
            return b.respuestasCorrectas - a.respuestasCorrectas;
        } else {
            return a.tiempo - b.tiempo;
        }
    });

    // Asigna el valor de la posición después de ordenar

    dataJson.forEach((item, index) => {
        item.posicion = index + 1;
    });

    await apiPeticionPUT(dataJson)
}

async function modificarRegistro() {
    let confirmar = false;
    let jugador = {};
    let nombre = "";
    let respuestasCorrectas = 0;
    let tiempo = 0;
    let minutos = 0;
    let segundos = 0;
    ID = prompt("Ingresar la posición del jugador:");

    dataJson = await apiPeticionGETGET();

    jugador = dataJson[ID - 1];
    confirmar = confirm("¿modificar datos de " + jugador.nombre + " en posición " + jugador.posicion + "?");
    if (confirmar) {
        confirmar = false;
        confirmar = confirm("¿modificar nombre de " + jugador.nombre + "?");
        if (confirmar) {
            nombre = prompt("Ingresar nuevo nombre: ");
            dataJson[ID - 1].nombre = nombre;
        }
        confirmar = false;
        confirmar = confirm("¿modificar cantidad de correctas? el dato actual es " + jugador.respuestasCorrectas);
        if (confirmar) {
            respuestasCorrectas = prompt("Ingresar nueva cantidad de correctas: ");
            dataJson[ID - 1].respuestasCorrectas = respuestasCorrectas;
        }
        confirmar = false;
        confirmar = confirm("¿modificar tiempo? el dato actual es " + jugador.tiempo + "ms");
        if (confirmar) {
            minutos = parseInt(prompt("Ingresar minutos: "));
            segundos = parseFloat(prompt("Ingresar segundos: "));
            segundos = Number(segundos.toFixed(3));
            tiempo = minutos * 60000 + segundos * 1000;
            dataJson[ID - 1].tiempo = tiempo;
        }

        guardarDatos(dataJson);

        //Se agrega un pequeño retraso para asegurarnos de que se accedan a los datos ya modificados

        setTimeout(() => {
            cargarRegistros()
        }, 500);
    }
}

async function borrarDatos() {
    let confirmacion = false;
    confirmacion = confirm("Se borrarán todos los datos, estás seguro?");
    if (confirmacion) {

        dataJson = await apiPeticionGET();

        //Se borran todos los registros menos uno, al que se le asignan valores ficticios

        if (dataJson.length > 1) dataJson.splice(0, dataJson.length - 1);
        dataJson[0].nombre = "...";
        dataJson[0].respuestasCorrectas = 0;
        dataJson[0].tiempo = 0;

        guardarDatos(dataJson);

        //Se agrega un pequeño retraso para asegurarnos de que se accedan a los datos ya modificados

        setTimeout(() => {
            cargarRegistros()
        }, 500);
    }
}

async function actualizarRanking(jugador) {

    //Recupera los datos guardados en dataJson.json

    dataJson = await apiPeticionGET();

    //Si lo que existe es el registro vacío, se reemplazan los valores del mismo con los ingresados

    if ((dataJson.length == 1) && (dataJson[0].nombre === "...")) {
        dataJson[0].nombre = jugador.nombre;
        dataJson[0].respuestasCorrectas = jugador.respuestasCorrectas;
        dataJson[0].tiempo = jugador.tiempo;
    } else dataJson.push(jugador);

    guardarDatos(dataJson);

}

async function borrarRegistro() {
    let confirmar = false;
    let jugador = {};
    let nombre = "";
    let respuestasCorrectas = 0;
    let tiempo = 0;
    ID = prompt("Ingresar la posición del jugador: ");

    dataJson = await apiPeticionGET();

    dataJson[ID - 1];
    confirmar = confirm("¿eliminar datos de " + dataJson[ID - 1].nombre + " en posición " + dataJson[ID - 1].posicion + "?")
    if (confirmar) {
        if (dataJson.length == 1) {
            dataJson[0].nombre = "...";
            dataJson[0].respuestasCorrectas = 0;
            dataJson[0].tiempo = 0;
        } else dataJson.splice(ID - 1, 1);
    }

    guardarDatos(dataJson);

    //Se agrega un pequeño retraso para asegurarnos de que se accedan a los datos ya modificados

    setTimeout(() => {
        cargarRegistros()
    }, 500);
}