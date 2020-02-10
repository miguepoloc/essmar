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
            zoom: 16
        });

        /*************************
         * Create a point graphic
         *************************/

        // First create a point geometry (this is the location of the Titanic)
        $.get('/api/luminarias/', function (result) {
            console.log(result.results);
            lista_luminarias = result.results;
            for (let index = 0; index < lista_luminarias.length; index++) {
                if (lista_luminarias[index].latitud !== null) {
                    var point = {
                        type: "point", // autocasts as new Point()
                        longitude: parseFloat(lista_luminarias[index].longitud),
                        latitude: parseFloat(lista_luminarias[index].latitud)
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

                    // Se crean los atributos
                    var puntoAtributo = {
                        id: String(lista_luminarias[index].id),
                        nombre_ciudad: lista_luminarias[index].nombre_ciudad,
                        nombre_barrio: lista_luminarias[index].nombre_barrio,
                        codigo_actual: lista_luminarias[index].codigo_actual,
                        nombre_estructura: lista_luminarias[index].nombre_estructura,
                        potencia: String(lista_luminarias[index].potencia),
                        nombre_uso_alumbrado: lista_luminarias[index].nombre_uso_alumbrado,
                        x: lista_luminarias[index].x,
                        y: lista_luminarias[index].y,
                        latitud: lista_luminarias[index].latitud,
                        longitud: lista_luminarias[index].longitud,
                        nombre_tipo_fuente: lista_luminarias[index].nombre_tipo_fuente,
                        nombre_tipo_luminaria: lista_luminarias[index].nombre_tipo_luminaria,
                        fecha_inventario: lista_luminarias[index].fecha_inventario,
                    };

                    // Create a graphic and add the geometry and symbol to it
                    var pointGraphic = new Graphic({
                        geometry: point,
                        symbol: markerSymbol,
                        attributes: puntoAtributo,
                        popupTemplate: {
                            id: "{id}",
                            content: [{
                                type: "fields",
                                fieldInfos: [{
                                        fieldName: "id"
                                    },
                                    {
                                        fieldName: "nombre_ciudad"
                                    },
                                    {
                                        fieldName: "nombre_barrio"
                                    },
                                    {
                                        fieldName: "codigo_actual"
                                    },
                                    {
                                        fieldName: "nombre_estructura"
                                    },
                                    {
                                        fieldName: "potencia"
                                    },
                                    {
                                        fieldName: "nombre_uso_alumbrado"
                                    },
                                    {
                                        fieldName: "x"
                                    },
                                    {
                                        fieldName: "y"
                                    },
                                    {
                                        fieldName: "latitud"
                                    },
                                    {
                                        fieldName: "longitud"
                                    },
                                    {
                                        fieldName: "nombre_tipo_fuente"
                                    },
                                    {
                                        fieldName: "nombre_tipo_luminaria"
                                    },
                                    {
                                        fieldName: "fecha_inventario"
                                    }
                                ]
                            }]
                        }
                    });

                    // Add the graphics to the view's graphics layer
                    view.graphics.addMany([pointGraphic]);
                }
            }
        });

    }
);