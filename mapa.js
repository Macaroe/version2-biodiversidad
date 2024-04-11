var map = L.map('map').setView([4.578056, -74.214444], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var marker = L.marker([4.578056, -74.214444]).addTo(map); // Marcador inicial en el centro de Cundinamarca
  marker.bindPopup("Cundinamarca").openPopup();

  // Función para cambiar la ubicación del marcador cuando se selecciona un municipio
  document.getElementById('select-location').addEventListener('change', function() {
    var selectedLocation = this.value.split(',');
    var latitude = parseFloat(selectedLocation[0]);
    var longitude = parseFloat(selectedLocation[1]);

    map.setView([latitude, longitude], 12); // Cambiar la vista del mapa a la ubicación seleccionada
    marker.setLatLng([latitude, longitude]); // Mover el marcador a la ubicación seleccionada
  });

  document.getElementById('select-location').addEventListener('change',function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords,13);
  })