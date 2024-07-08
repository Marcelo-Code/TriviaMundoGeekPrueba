// Variables donde se guardan la url y la API key del repositorio

const apiUrl = 'https://api.jsonbin.io/v3/b/6689e713e41b4d34e40e282f';
const apiKey = '$2a$10$jiNd3MM5yhhZiecx/6l03OYLmvlEolp.3O7si9TGz7bDzOJFNncfS';
let dataJson = [];

//Funciones para las peticiones tipo GET y PUT para la API del repositorio

async function apiPeticionGET() {
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-Master-Key': apiKey,
                'Content-Type': 'application/json'
            },
        });
        if (!response.ok) {
            throw new Error('Error al obtener los datos');
        }
        const datos = await response.json();
        return datos.record;
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
}

async function apiPeticionPUT(dataJson) {
    try {
        const response = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'X-Master-Key': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataJson)
        });
        if (!response.ok) {
            throw new Error('Error al guardar los datos en JSONBin: ' + response.statusText);
        }
        const datos = await response.json();
        console.log('Datos guardados correctamente en JSONBin:', datos);
    } catch (error) {
        console.error('Error al guardar los datos:', error);
    }
}