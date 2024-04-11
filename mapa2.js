var map = L.map('map2').setView([5.6308, -73.0689], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

var municipios = {
    "Tunja": [5.5351, -73.3639],
    "Duitama": [5.8260, -73.0351],
    "Sogamoso": [5.7184, -72.9335],
    "Paipa": [5.7742, -73.1168],
    "Chiquinquira": [5.6164, -73.8183],
    "Villa de Leyva": [5.6348, -73.5247],
    "Nobsa": [5.7728, -72.9438]
};

var select = L.control({position: 'topright'});

select.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'leaflet-bar');
    div.innerHTML = '<select id="municipios" onchange="changeLocation(this.value)">' +
        '<option value="" disabled selected>Seleccione un municipio</option>' +
        '<option value="Tunja">Tunja</option>' +
        '<option value="Duitama">Duitama</option>' +
        '<option value="Sogamoso">Sogamoso</option>' +
        '<option value="Paipa">Paipa</option>' +
        '<option value="Chiquinquira">Chiquinquira</option>' +
        '<option value="Villa de Leyva">Villa de Leyva</option>' +
        '<option value="Nobsa">Nobsa</option>' +
        '</select>';
    return div;
};

select.addTo(map);

function changeLocation(municipio) {
    if (municipio && municipios[municipio]) {
        map.setView(municipios[municipio], 12);
        map.flyTo(municipios[municipio], 12, {
            animate: true,
            duration: 1.5 // duración de la animación en segundos
        });
    }

     
    }




