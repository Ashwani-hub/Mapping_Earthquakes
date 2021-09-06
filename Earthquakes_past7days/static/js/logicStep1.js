//Add console.log to verify that the code is working
console.log("working")

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });

    // We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      accessToken: API_KEY
    });

    // Create a base layer that holds both maps.
    let baseMaps = {
      "Street": streets,
      "Satellite Streets": satelliteStreets
    };

    // Create the map object with center, zoom level and default layer.
    let map = L.map('mapid', {
      center: [43.7, -79.3],
      zoom: 11,
      layers: [satelliteStreets]
    });

    // Pass our map layers into our layer control and add the layer control to the map.
    L.control.layers(baseMaps).addTo(map)
  
    
    // Accessing the airport GeoJSON URL
    //let airportData = "https://raw.githubusercontent.com/Ashwani-hub/Mapping_Earthquakes/main/majorAirports.json"

    //Accessing the Toronto airline aoutes GeoJSON URL.
    //let torontoData = "https://github.com/Ashwani-hub/Mapping_Earthquakes/blob/main/torontoRoutes.json"
    
    //Create function for line style
    function polystyle(Feature) {
        return {
        fillColor: 'yellow',
        weight: 1,
        opacity: 1,
        color: 'blue'
        }
    };
    
    // Accessing Toronto neighborhoods GeoJSON URL.
    let torontoHoods = "https://raw.githubusercontent.com/Ashwani-hub/Mapping_Earthquakes/main/torontoNeighborhoods.json"
    // Grabbing our GeoJSON data.
    d3.json(torontoHoods).then(function(data) {
      console.log(data);
// Adding notes
      //L.polyline(data, {
      //  color: "blue",
      //  weight: 4
      //}).addTo(map);
      // Creating a GeoJSON layer with the retrieved data.
      L.geoJSON(data, {style: polystyle}).addTo(map);
    });