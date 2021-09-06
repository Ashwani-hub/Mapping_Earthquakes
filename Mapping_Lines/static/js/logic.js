//Add console.log to verify that the code is working
console.log("working")

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([30.6213, -92.3790], 4);

// Coordinates for each point to be used in the polyline
let line = [
    [37.6152, -122.3900],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    dashArray: '2,10',
    weight: 4,
    opacity: 0.5
    //dashOffset: '1'
}).addTo(map);

// Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Add circle marker to the map
//L.circle([34.0522, -118.2437], {
//    radius: 100
//}).addTo(map);

// Add Circle to the Map
//L.circleMarker([34.0522, -118.2437], {
  //  radius: 300,
    //color: "black",
    //fillColor: '#ffffa1'
//}).addTo(map);

// Creating multiple marker points
// An array containing each city's location, state, and population

// Array data moved to cities.js

// Get data from cities.js
//let cityData = cities;

  // Loop through the cities array and create one marker for each city
  //cities.forEach(function(city){
  //  cityData.forEach(function(city){
    //    console.log(city)
        //L.marker(city.location)
      //  L.circleMarker(city.location, {
        //    radius: city.population/200000,
          //  color: '#FFA500',
            //weight: 4
        //})
        //.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <h3>Population: " + city.population.toLocaleString() + "</h3>")
        //.addTo(map);
    //});

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });
    
    // Then we add our 'graymap' tile layer to the map.
    streets.addTo(map);