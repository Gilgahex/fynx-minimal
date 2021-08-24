const options = {
    // Required: API key
    key: '7xmMWiNQAjjNFZhNPBjNoLyrqBpkJPnl', 

    // Put additional console output
    verbose: true,

    // Optional: Initial state of the map
    lat: 34.5,
    lon: -119,
    zoom: 5,
};

// Initialize Windy API
windyInit(options, windyAPI => {
    // windyAPI is ready, and contain 'map', 'store',
    // 'picker' and other usefull stuff

    const { map } = windyAPI;
    // .map is instance of Leaflet map

    L.popup()
        .setLatLng([34.5, -119])
        .setContent('Hello World')
        .openOn(map);
});
