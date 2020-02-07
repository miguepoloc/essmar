require([
        "esri/Map",
        "esri/views/MapView",
        "esri/Graphic"
    ],
    function (
        Map,
        MapView,
        Graphic
    ) {
        var map = new Map({
            basemap: "streets"
        });

        var view = new MapView({
            center: [-74.215530, 11.148882],
            container: "viewDiv",
            map: map,
            zoom: 17
        });

        /*************************
         * Create a point graphic
         *************************/

        // First create a point geometry (this is the location of the Titanic)
        for (let index = 0; index < 5; index++) {
            var point = {
                type: "point", // autocasts as new Point()
                longitude: -74.215530 + index/1000,
                latitude: 11.148882
            };
    
            // Create a symbol for drawing the point
            var markerSymbol = {
                type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
                color: [226, 119, 40],
                outline: {
                    // autocasts as new SimpleLineSymbol()
                    color: [255, 255, 255],
                    width: 1
                }
            };
    
            // Create a graphic and add the geometry and symbol to it
            var pointGraphic = new Graphic({
                geometry: point,
                symbol: markerSymbol
            });
    
            // Add the graphics to the view's graphics layer
            view.graphics.addMany([pointGraphic]);
        }
        
    }
);