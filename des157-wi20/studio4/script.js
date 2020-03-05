// This will let you use the .remove() function later on
if (!('remove' in Element.prototype)) {
Element.prototype.remove = function() {
    if (this.parentNode) {
        this.parentNode.removeChild(this);
    }
};
}

mapboxgl.accessToken = 'pk.eyJ1IjoidHhwaGFtOTgiLCJhIjoiY2s3Y3Zna2dsMWoxajNsbnU0NDlzMjBzcSJ9.njpTix3qDf5D3-e_LwJnzA';
/** 
 * Add the map to the page
 */
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/txpham98/ck7d25kgp0rtx1io9k9vpyris',
center: [-121.754567, 38.542787],
zoom: 14,
scrollZoom: false
});

var stores = {
"type": "FeatureCollection",
"features": [
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.757846,
        38.545968
        ]
    },
    "properties": {
        "address": "Activities and Recreation Center (ARC)",
        "floor": "1st, 2nd, & 3rd Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.759059,
        38.538024
        ]
    },
    "properties": {
        "address": "Aggie Surplus",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.759027,
        38.549702
        ]
    },
    "properties": {
        "address": "Alder Hall",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.749877,
        38.542835
        ]
    },
    "properties": {
        "address": "Art Building",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.753189,
        38.539185
        ]
    },
    "properties": {
        "address": "Bainer Hall",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.757789,
        38.547216
        ]
    },
    "properties": {
        "address": "Bixby Hall",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.758743,
        38.533904
        ]
    },
    "properties": {
        "address": "Campbell Hall",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.756402,
        38.545630
        ]
    },
    "properties": {
        "address": "Campo Hall",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.735003,
        38.541468
        ]
    },
    "properties": {
        "address": "Center for Neuroscience",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.749815,
        38.541388
        ]
    },
    "properties": {
        "address": "Chemistry Annex",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.750923,
        38.542802
        ]
    },
    "properties": {
        "address": "Chemistry Building",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.750009,
        38.545914
        ]
    },
    "properties": {
        "address": "Coffee House (COHO)",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.756285,
        38.535968
        ]
    },
    "properties": {
        "address": "Cottonwood Hall",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.763160,
        38.550319
        ]
    },
    "properties": {
        "address": "Cuarto Dining Commons",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.758767,
        38.542728
        ]
    },
    "properties": {
        "address": "Dairy Outdoor Recreation Complex",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.747367,
        38.545168
        ]
    },
    "properties": {
        "address": "Dutton Hall",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.763628,
        38.550433
        ]
    },
    "properties": {
        "address": "Emerson Hall",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.750475,
        38.541417
        ]
    },
    "properties": {
        "address": "Everson Hall",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.750767,
        38.538111
        ]
    },
    "properties": {
        "address": "Facilities Management",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.751273,
        38.545658
        ]
    },
    "properties": {
        "address": "Freeborn Hall",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.752206,
        38.538116
        ]
    },
    "properties": {
        "address": "Ghausi Hall",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.759148,
        38.546286
        ]
    },
    "properties": {
        "address": "Gilmore Hall",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.751419,
        38.546107
        ]
    },
    "properties": {
        "address": "Hart Hall",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.759523,
        38.539533
        ]
    },
    "properties": {
        "address": "Hawthorn Hall",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.747508,
        38.545498
        ]
    },
    "properties": {
        "address": "Hickey Gymnasium",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.751121,
        38.545553
        ]
    },
    "properties": {
        "address": "Hunt Hall",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.754350,
        38.544258
        ]
    },
    "properties": {
        "address": "Hutchison Hall",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.757021,
        38.538700
        ]
    },
    "properties": {
        "address": "Kearney Hall",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.756872,
        38.539280
        ]
    },
    "properties": {
        "address": "Kemper Hall",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.754410,
        38.538452
        ]
    },
    "properties": {
        "address": "Meyer Hall",
        "floor": "3rd Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.749450,
        38.543062
        ]
    },
    "properties": {
        "address": "Mrak Hall",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.750009,
        38.546988
        ]
    },
    "properties": {
        "address": "MU Games Area",
        "floor": "Ground Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.748626,
        38.544978
        ]
    },
    "properties": {
        "address": "Olson Hall",
        "floor": "1st & 2nd Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.759297,
        38.546502
        ]
    },
    "properties": {
        "address": "The Pavillion",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.750820,
        38.544486
        ]
    },
    "properties": {
        "address": "Rock Hall",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.763538,
        38.537126
        ]
    },
    "properties": {
        "address": "Schlam Hall",
        "floor": "Outdoor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.744666,
        38.545783
        ]
    },
    "properties": {
        "address": "School of Education",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.757433,
        38.551558
        ]
    },
    "properties": {
        "address": "Segundo Dining Commons",
        "floor": "Lobby",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.760798,
        38.549691
        ]
    },
    "properties": {
        "address": "Segundo Services Center",
        "floor": "1st, 2nd, & 3rd Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.753233,
        38.543377
        ]
    },
    "properties": {
        "address": "Silo",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.753460,
        38.549290
        ]
    },
    "properties": {
        "address": "Student Disability Center",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.751641,
        38.543383
        ]
    },
    "properties": {
        "address": "Student Community Center",
        "floor": "1st & 2nd Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.759116,
        38.548161
        ]
    },
    "properties": {
        "address": "Student Health and Wellness Center",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.756817,
        38.544831
        ]
    },
    "properties": {
        "address": "Student Housing",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.755650,
        38.542899
        ]
    },
    "properties": {
        "address": "Surge III",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.756180,
        38.541352
        ]
    },
    "properties": {
        "address": "Tercero Services Center",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.763681,
        38.550788
        ]
    },
    "properties": {
        "address": "Thoreau Hall",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.755752,
        38.550881
        ]
    },
    "properties": {
        "address": "UC Davis International Center",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.746721,
        38.539458
        ]
    },
    "properties": {
        "address": "UC Davis Welcome Center",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.750879,
        38.547109
        ]
    },
    "properties": {
        "address": "Veihmeyer Hall",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.748380,
        38.545220
        ]
    },
    "properties": {
        "address": "Voorhies Hall",
        "floor": "1st, 2nd, & 3rd Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.748566,
        38.537671
        ]
    },
    "properties": {
        "address": "Walter A. Buehler Alumni Center",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.752446,
        38.545751
        ]
    },
    "properties": {
        "address": "Wellman Hall",
        "floor": "Ground Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    },
    {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [
        -121.748068,
        38.545679
        ]
    },
    "properties": {
        "address": "Young Hall",
        "floor": "1st Floor",
        "city": "Davis",
        "country": "United States",
        "postalCode": "95616",
        "state": "CA"
    }
    }
]
};

/**
 * Assign a unique id to each store. You'll use this `id`
 * later to associate each point on the map with a listing
 * in the sidebar.
 */
stores.features.forEach(function(store, i){
store.properties.id = i;
});

/**
 * Wait until the map loads to make changes to the map.
 */
map.on('load', function (e) {
/** 
 * This is where your '.addLayer()' used to be, instead
 * add only the source without styling a layer
*/
map.addSource("places", {
    "type": "geojson",
    "data": stores
});

/**
 * Add all the things to the page:
 * - The location listings on the side of the page
 * - The markers onto the map
*/
buildLocationList(stores);
addMarkers();
});

/**
 * Add a marker to the map for every store listing.
 **/
function addMarkers() {
/* For each feature in the GeoJSON object above: */
stores.features.forEach(function(marker) {
    /* Create a div element for the marker. */
    var el = document.createElement('div');
    /* Assign a unique `id` to the marker. */
    el.id = "marker-" + marker.properties.id;
    /* Assign the `marker` class to each marker for styling. */
    el.className = 'marker';
    
    /**
     * Create a marker using the div element
     * defined above and add it to the map.
     **/
    new mapboxgl.Marker(el, { offset: [0, -23] })
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);

    /**
     * Listen to the element and when it is clicked, do three things:
     * 1. Fly to the point
     * 2. Close all other popups and display popup for clicked store
     * 3. Highlight listing in sidebar (and remove highlight for all other listings)
     **/
    el.addEventListener('click', function(e){
    /* Fly to the point */
    flyToStore(marker);
    /* Close all other popups and display popup for clicked store */
    createPopUp(marker);
    /* Highlight listing in sidebar */
    var activeItem = document.getElementsByClassName('active');
    e.stopPropagation();
    if (activeItem[0]) {
        activeItem[0].classList.remove('active');
    }
    var listing = document.getElementById('listing-' + marker.properties.id);
    listing.classList.add('active');
    });
});
}

/**
 * Add a listing for each store to the sidebar.
 **/
function buildLocationList(data) {
data.features.forEach(function(store, i){
    /**
     * Create a shortcut for `store.properties`,
     * which will be used several times below.
     **/
    var prop = store.properties;

    /* Add a new listing section to the sidebar. */
    var listings = document.getElementById('listings');
    var listing = listings.appendChild(document.createElement('div'));
    /* Assign a unique `id` to the listing. */
    listing.id = "listing-" + prop.id;
    /* Assign the `item` class to each listing for styling. */
    listing.className = 'item';

    /* Add the link to the individual listing created above. */
    var link = listing.appendChild(document.createElement('a'));
    link.href = '#';
    link.className = 'title';
    link.id = "link-" + prop.id;
    link.innerHTML = prop.address;

    /* Add details to the individual listing. */
    var details = listing.appendChild(document.createElement('div'));
    details.innerHTML = prop.floor;
    if (prop.phone) {
    details.innerHTML += ' · ' + prop.phoneFormatted;
    }

    /**
     * Listen to the element and when it is clicked, do four things:
     * 1. Update the `currentFeature` to the store associated with the clicked link
     * 2. Fly to the point
     * 3. Close all other popups and display popup for clicked store
     * 4. Highlight listing in sidebar (and remove highlight for all other listings)
     **/
    link.addEventListener('click', function(e){
    for (var i=0; i < data.features.length; i++) {
        if (this.id === "link-" + data.features[i].properties.id) {
        var clickedListing = data.features[i];
        flyToStore(clickedListing);
        createPopUp(clickedListing);
        }
    }
    var activeItem = document.getElementsByClassName('active');
    if (activeItem[0]) {
        activeItem[0].classList.remove('active');
    }
    this.parentNode.classList.add('active');
    });
});
}

/**
 * Use Mapbox GL JS's `flyTo` to move the camera smoothly
 * a given center point.
 **/
function flyToStore(currentFeature) {
map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 15
});
}

/**
 * Create a Mapbox GL JS `Popup`.
 **/
function createPopUp(currentFeature) {
var popUps = document.getElementsByClassName('mapboxgl-popup');
if (popUps[0]) popUps[0].remove();
var popup = new mapboxgl.Popup({closeOnClick: false})
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML('<h3>' + currentFeature.properties.address + '</h3>' +
    '<h4>' + currentFeature.properties.floor + '</h4>')
    .addTo(map);
}