//Add console.log to verify that the code is working
console.log("working")

// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });

    // We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      accessToken: API_KEY
    });

    // Create a base layer that holds both maps.
    let baseMaps = {
      Street: light,
      Dark: dark
    };

    // Create the map object with center, zoom level and default layer.
    let map = L.map('mapid', {
      center: [44.0, -80.0],
      zoom: 2,
      layers: [light]
    });

    // Pass our map layers into our layer control and add the layer control to the map.
    L.control.layers(baseMaps).addTo(map)
  
    
    // Accessing the airport GeoJSON URL
    //let airportData = "https://raw.githubusercontent.com/Ashwani-hub/Mapping_Earthquakes/main/majorAirports.json"

    //Accessing the Toronto airline aoutes GeoJSON URL.
    let torontoData = ""
    // Grabbing our GeoJSON data.
    d3.json(airportData).then(function(data) {
      console.log(data);
      // Creating a GeoJSON layer with teh retrieved data.
      L.geoJSON(data)
      //.bindPopup("<h2>Airport code: " + airportData.faa "</h2>" + "<h3>Airport Name: " + airportData.name + "</h3>")
      .addTo(map);