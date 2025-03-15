// Función principal de búsqueda de destinos
function search() {
    const destination = document.getElementById('destination').value.trim();
    const travelDate = document.getElementById('travel-date').value;
    const resultsContainer = document.getElementById('results-container');

    // Validación de los campos de entrada
    if (!destination || !travelDate) {
        alert("Por favor, completa todos los campos.");

        if (!destination) {
            document.getElementById('destination').style.border = '2px solid red';
        } else {
            document.getElementById('destination').style.border = '';
        }

        if (!travelDate) {
            document.getElementById('travel-date').style.border = '2px solid red';
        } else {
            document.getElementById('travel-date').style.border = '';
        }

        return;
    }

    // Formatear la fecha para que sea más legible
    const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = new Date(travelDate).toLocaleDateString('es-ES', opcionesFecha);

    // Mostrar resultados simulados con un pequeño retraso
    resultsContainer.innerHTML = "<p>Cargando resultados...</p>";
    setTimeout(() => {
        resultsContainer.innerHTML = `
            <h3>Resultados de Destinos:</h3>
            <p>Destinos disponibles para <strong>${destination}</strong> el <strong>${fechaFormateada}</strong>:</p>
            <ul>
                <li>Destino A</li>
                <li>Destino B</li>
                <li>Destino C</li>
            </ul>`;
    }, 2000);
}

// Función para buscar hoteles
function searchHotels() {
    const location = document.getElementById('hotel-location').value.trim();

    if (!location) {
        alert("Por favor, ingresa una ubicación.");
        return;
    }

    const resultsContainer = document.getElementById('results-container');

    // Mostrar resultados simulados con un pequeño retraso
    resultsContainer.innerHTML += `
        <h3>Resultados de Hoteles:</h3>
        <p>Hoteles disponibles en <strong>${location}</strong>:</p>
        <ul>
            <li>Hotel A - $100 por noche</li>
            <li>Hotel B - $120 por noche</li>
            <li>Hotel C - $90 por noche</li>
        </ul>`;
}

// Función para mostrar notificaciones en tiempo real
function mostrarNotificacion(mensaje) {
    if (Notification.permission === "granted") {
        new Notification(mensaje);
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification(mensaje);
            }
        });
    }
}

// Control de notificaciones para evitar duplicados
let notificacionesActivas = false;
if (!notificacionesActivas) {
    notificacionesActivas = true;
    setInterval(() => mostrarNotificacion("🌟 ¡Oferta especial disponible!"), 10000);
    setInterval(() => mostrarNotificacion("📢 Actualización de disponibilidad"), 15000);
}