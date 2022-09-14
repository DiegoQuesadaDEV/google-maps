let marker, map;

function initMap() {
    //console.log("Inicializando mapa")
    const posicion = { 
        lat: -25.363,
        lng: 131.044
    }

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion
    })

    marker = new google.maps.Marker({
        position: {
            lat: 40.7128,
            lng: -74.0060
        },
        map,
        tittle: "Mi Posicion"
    })

    marker1 = new google.maps.Marker({
        position: {
            lat: 40.7128,
            lng: -74.0060
        },
        map,
        tittle: "Lugar favorito 1: Nueva York"
    })
    marker2 = new google.maps.Marker({
        position: {
            lat: 35.6762,
            lng: 139.6503
        },
        map,
        tittle: "Lugar favorito 2: Tokio"
    })
    
    marker3 = new google.maps.Marker({
        position: {
            lat: 51.509865,
            lng: -0.118092
        },
        map,
        tittle: "Lugar favorito 3: London"
    })

    geoPosiciona()
}

function geoPosiciona() {
    if (navigator.geolocation) {
        const geoLoc = navigator.geolocation
        const options = {timeout: 60000}
        const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
    } else {
        alert("Tu navegador no admite geolocalizacion")
    }
}

function centraMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    console.log(nuevaPos)
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error) {
    console.log("Se ha producido un error")
    console.error(error)
}
