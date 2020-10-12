var mymap = L.map('mapid').setView([48.458352, -33.398438], 3);



// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
//             maxZoom: 20,
//             attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
//                 '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
//                 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//             id: 'mapbox/streets-v11',
//             tileSize: 512,
//             zoomOffset: -1
// }

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
    maxZoom: 16
}).addTo(mymap);

function onEachFeature(feature, layer) {
    var popupInfo = 'Country: ' + feature.properties.name + "<br>" + 'Population: ' + feature.properties.pop_est;
    layer.bindPopup(popupInfo);
}

/////////////////////////////////
// *** Add countries here *** //
////////////////////////////////
L.geoJSON(countries, {
    style: function(feature) {
        switch(feature.properties.name) {
            //Americas
            case 'Bahamas': return {color: "#ff0000"};
            case 'Chile' : return {color: "#ff0000"};
            case 'Mexico' : return {color: "#ff0000"};
            //Europe
            case 'Ireland': return {color: "#0000ff"};
            case 'Greece': return {color: "#0000ff"};
            case 'Portugal': return {color: "#0000ff"};

            default: return {color: "#D4D4D4"}
        }
    },
    onEachFeature: onEachFeature
}).addTo(mymap);


