// Gumby is ready to go
Gumby.ready(function() {
	console.log('Gumby is ready to go...', Gumby.debug());

	// placeholder polyfil
	if(Gumby.isOldie || Gumby.$dom.find('html').hasClass('ie9')) {
		$('input, textarea').placeholder();
	}
});

// Oldie document loaded
Gumby.oldie(function() {
	console.log("This is an oldie browser...");
});

Gumby.touch(function() {
	console.log("This is a touch enabled device...");
});

// Document ready
$(function() {

//     function initialize() {
//     var latlng = new google.maps.LatLng(35.0085669,135.767277);
//     var myOptions = {
//         zoom: 14,
//         center: latlng,
//         mapTypeControlOptions: { mapTypeIds: ['flat', google.maps.MapTypeId.ROADMAP] }
//     };
//     var map = new google.maps.Map(document.getElementById('map'), myOptions);
//     
//     /* スタイル付き地図 */
//     var styleOptions = [
//         { 'stylers': [{ 'visibility': 'off' }] },
//         { 'featureType': 'road', 'stylers': [{ 'visibility': 'on' }, { 'color': '#ffffff' }] },
//         { 'featureType': 'road.arterial', 'stylers': [{ 'visibility': 'on' }, { 'color': '#fee379' }] },
//         { 'featureType': 'road.highway', 'stylers': [{ 'visibility': 'on' }, { 'color': '#fee379' }] },
//         { 'featureType': 'landscape', 'stylers': [{ 'visibility': 'on' }, { 'color': '#f3f4f4' }] },
//         { 'featureType': 'water', 'stylers': [{ 'visibility': 'on' }, { 'color': '#7fc8ed' }] },
//         { 'featureType': 'road', 'elementType': 'labels', 'stylers': [{ 'visibility': 'off' }] },
//         { 'featureType': 'poi.park', 'elementType': 'geometry.fill', 'stylers': [{ 'visibility': 'on' }, { 'color': '#83cead' }] },
//         { 'featureType': 'poi.business', 'elementType': 'geometry', 'stylers': [{ 'visibility': 'on' }] },
//         { 'elementType': 'labels', 'stylers': [{ 'visibility': 'off' }] },
//         { 'featureType': 'transit.line', 'elementType': 'geometry.fill', 'stylers': [{ 'visibility': 'on' }, { 'hue': '#e3b552' }] },
//         { 'featureType': 'transit.line', 'elementType': 'geometry.stroke', 'stylers': [{ 'visibility': 'on' }, { 'weight': 1.2 }, { 'color': '#9660ac' }, { 'lightness': 25 }] },
//         { 'featureType': 'landscape.man_made', 'elementType': 'geometry', 'stylers': [{ 'weight': 0.9 }, { 'visibility': 'off' }] }
//     ];
//     var styledMapOptions = { name: '地図' }
//     var flatType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
//     map.mapTypes.set('flat', flatType);
//     map.setMapTypeId('flat');
//     }
// 
//     google.maps.event.addDomListener(window, 'load', initialize);

    var map;
    var centerPosition = new google.maps.LatLng(35.008479, 135.766534);
    var viewCenter = new google.maps.LatLng(35.009321, 135.766534);
/*
    var style = [{
        "stylers": [{
            "visibility": "on"
        }]
    }, {
        "featureType": "road",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#ffffff"
        }]
    }, {
        "featureType": "road.arterial",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#fee379"
        }]
    }, {
        "featureType": "road.highway",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#fee379"
        }]
    }, {
        "featureType": "landscape",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#f3f4f4"
        }]
    }, {
        "featureType": "water",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#7fc8ed"
        }]
    }, {}, {
        "featureType": "road",
            "elementType": "labels",
            "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [{
            "visibility": "on"
        }, {
            "color": "#83cead"
        }]
    }, {
        "elementType": "labels",
            "stylers": [
                { "visibility": "simplified" },
            ]
    }, {
        "featureType": "transit.station.rail",
        "elementType": "labels.text",
        "stylers": [
        { "visibility": "on" }
        ]
    }, {
        "featureType": "landscape.man_made",
            "elementType": "geometry",
            "stylers": [{
            "weight": 0.9
        }, {
            "visibility": "off"
        }]
    }];
*/
    var style = [
        { 'stylers': [{ 'visibility': 'off' }] },
        { 'featureType': 'road', 'stylers': [{ 'visibility': 'on' }, { 'color': '#ffffff' }] },
        { 'featureType': 'road.arterial', 'stylers': [{ 'visibility': 'on' }, { 'color': '#fee379' }] },
        { 'featureType': 'road.highway', 'stylers': [{ 'visibility': 'on' }, { 'color': '#fee379' }] },
        { 'featureType': 'landscape', 'stylers': [{ 'visibility': 'on' }, { 'color': '#f3f4f4' }] },
        { 'featureType': 'water', 'stylers': [{ 'visibility': 'on' }, { 'color': '#7fc8ed' }] },
        { 'featureType': 'road', 'elementType': 'labels', 'stylers': [{ 'visibility': 'off' }] },
        { 'featureType': 'poi.park', 'elementType': 'geometry.fill', 'stylers': [{ 'visibility': 'on' }, { 'color': '#83cead' }] },
        { 'featureType': 'poi.business', 'elementType': 'geometry', 'stylers': [{ 'visibility': 'on' }] },
        { 'elementType': 'labels', 'stylers': [{ 'visibility': 'simplified' }] },
        { 'featureType': 'transit.line', 'elementType': 'geometry.fill', 'stylers': [{ 'visibility': 'on' }, { 'hue': '#e3b552' }] },
        { 'featureType': 'transit.line', 'elementType': 'geometry.stroke', 'stylers': [{ 'visibility': 'on' }, { 'weight': 1.2 }, { 'color': '#9660ac' }, { 'lightness': 25 }] },
        { 'featureType': 'landscape.man_made', 'elementType': 'geometry', 'stylers': [{ 'weight': 0.9 }, { 'visibility': '' }] },
        { 'featureType': 'transit.station.rail', 'elementType': 'labels.text',  'stylers': [{ 'visibility': 'on' }] }
    ];
/*
    var styles = [
        {
            stylers: [
                //{ hue: "#ffffff" },
                { saturation: -100 }
            ]
        },{
            featureType: "road",
            elementType: "geometry",
            stylers: [
                { lightness: 100 },
                { visibility: "simplified" }
            ]
        }, {
            "elementType": "labels",
                "stylers": [
                    { "visibility": "simplified" },
                ]
        }, {
            "featureType": "transit.station.rail",
            "elementType": "labels.text",
            "stylers": [
            { "visibility": "on" }
        ]
    }
    ];
*/
    var options = {
        zoom: 17,
        center: viewCenter,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    };
    map = new google.maps.Map($('#map')[0], options);
    map.setOptions({
        styles: style
    });
    var marker = new google.maps.Marker({
        position: centerPosition,
        map: map,
    });

    var contentStr = '<div><strong>同時代ギャラリー</strong><br><small><a href="https://goo.gl/maps/S0XRf" target="_blank">京都府京都市中京区三条通御幸町東入弁慶石町56 1928ビル 1F</a><D-1></small><div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentStr,
        position: centerPosition,
        pixelOffset: new google.maps.Size(0, 0)
    });
    infowindow.open(map,marker);
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });
});

