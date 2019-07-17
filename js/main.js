var legendOpen = false;

// Baselayer - Ancient World Mapping Centre tiles

var mapboxTiles = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaXNhd255dSIsImEiOiJBWEh1dUZZIn0.SiiexWxHHESIegSmW8wedQ', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
maxZoom: 10,
id: 'isawnyu.map-knmctlkh',
accessToken: 'pk.eyJ1IjoiaXNhd255dSIsImEiOiJBWEh1dUZZIn0.SiiexWxHHESIegSmW8wedQ'
});

var map = L.map('map', {
	center: [35.5, 41],
	zoom: 7,
	layers: [mapboxTiles],
});

// Change layer function

function removeAllOverlays(label) {
		map.eachLayer(function(layer) {
			/*if (layer == marwanidLinesLayer || layer == mansurHarunLinesLayer || layer == alMamunLinesLayer || layer == samarraLinesLayer || layer == alMutadidLinesLayer) {
					map.removeLayer(layer);
				switch(label) {
		    case "<b>Marwānid period <br> (c.73-132/692-750)</b>":
					map.addLayer(marwanidLinesLayer);
		      break;
		    case "<b>al-Manṣūr-Hārūn al-Rashīd <br> (ca. 136-193/754-809)</b>":
					map.addLayer(mansurHarunLinesLayer);
		      break;
		    case "<b>al-Maʾmūn to al-Muʿtaṣim <br> (ca. 198-221/813-836)</b>":
					map.addLayer(alMamunLinesLayer);
		      break;
				case "<b>Sāmarrāʾ period <br> (ca. 221-279/836-892)</b>":
					map.addLayer(samarraLinesLayer);
		      break;
		    case "<b>al-Muʿtaḍid to al-Muqtadir <br> (ca. 279-320/892-932)</b>":
					map.addLayer(alMutadidLinesLayer);
		      break;
			  }
			} else*/ if (layer == marwanidLayer || layer == mansurHarunLayer || layer == alMamunLayer || layer == samarraLayer || layer == alMutadidLayer) {
					map.removeLayer(layer);
				switch(label) {
		    case "<b>Marwānid period <br> (c.73-132/692-750)</b>":
					map.addLayer(marwanidLayer);
		      break;
		    case "<b>al-Manṣūr-Hārūn al-Rashīd <br> (ca. 136-193/754-809)</b>":
					map.addLayer(mansurHarunLayer);
		      break;
		    case "<b>al-Maʾmūn to al-Muʿtaṣim <br> (ca. 198-221/813-836)</b>":
					map.addLayer(alMamunLayer);
		      break;
				case "<b>Sāmarrāʾ period <br> (ca. 221-279/836-892)</b>":
					map.addLayer(samarraLayer);
		      break;
		    case "<b>al-Muʿtaḍid to al-Muqtadir <br> (ca. 279-320/892-932)</b>":
					map.addLayer(alMutadidLayer);
		      break;
			  }
			} else if (layer == marwanidEdioLayer || layer == mansurHarunEdioLayer || layer == alMamunEdioLayer || layer == samarraEdioLayer || layer == alMutadidEdioLayer) {
				map.removeLayer(layer);
				switch(label) {
					case "<b>Marwānid period <br> (c.73-132/692-750)</b>":
						map.addLayer(marwanidEdioLayer);
						break;
					case "<b>al-Manṣūr-Hārūn al-Rashīd <br> (ca. 136-193/754-809)</b>":
						map.addLayer(mansurHarunEdioLayer);
						break;
					case "<b>al-Maʾmūn to al-Muʿtaṣim <br> (ca. 198-221/813-836)</b>":
						map.addLayer(alMamunEdioLayer);
						break;
					case "<b>Sāmarrāʾ period <br> (ca. 221-279/836-892)</b>":
						map.addLayer(samarraEdioLayer);
						break;
					case "<b>al-Muʿtaḍid to al-Muqtadir <br> (ca. 279-320/892-932)</b>":
						map.addLayer(alMutadidEdioLayer);
						break;
				}
			} else if (layer == marwanidEarchdioLayer || layer == mansurHarunEarchdioLayer || layer == alMamunEarchdioLayer || layer == samarraEarchdioLayer || layer == alMutadidEarchdioLayer) {
				map.removeLayer(layer);
				switch(label) {
					case "<b>Marwānid period <br> (c.73-132/692-750)</b>":
						map.addLayer(marwanidEarchdioLayer);
						break;
					case "<b>al-Manṣūr-Hārūn al-Rashīd <br> (ca. 136-193/754-809)</b>":
						map.addLayer(mansurHarunEarchdioLayer);
						break;
					case "<b>al-Maʾmūn to al-Muʿtaṣim <br> (ca. 198-221/813-836)</b>":
						map.addLayer(alMamunEarchdioLayer);
						break;
					case "<b>Sāmarrāʾ period <br> (ca. 221-279/836-892)</b>":
						map.addLayer(samarraEarchdioLayer);
						break;
					case "<b>al-Muʿtaḍid to al-Muqtadir <br> (ca. 279-320/892-932)</b>":
						map.addLayer(alMutadidEarchdioLayer);
						break;
				}
			} else if (layer == marwanidWdioLayer || layer == mansurHarunWdioLayer || layer == alMamunWdioLayer || layer == samarraWdioLayer || layer == alMutadidWdioLayer) {
				map.removeLayer(layer);
				switch(label) {
					case "<b>Marwānid period <br> (c.73-132/692-750)</b>":
						map.addLayer(marwanidWdioLayer);
						break;
					case "<b>al-Manṣūr-Hārūn al-Rashīd <br> (ca. 136-193/754-809)</b>":
						map.addLayer(mansurHarunWdioLayer);
						break;
					case "<b>al-Maʾmūn to al-Muʿtaṣim <br> (ca. 198-221/813-836)</b>":
						map.addLayer(alMamunWdioLayer);
						break;
					case "<b>Sāmarrāʾ period <br> (ca. 221-279/836-892)</b>":
						map.addLayer(samarraWdioLayer);
						break;
					case "<b>al-Muʿtaḍid to al-Muqtadir <br> (ca. 279-320/892-932)</b>":
						map.addLayer(alMutadidWdioLayer);
						break;
				}
			} else if (layer == marwanidWarchdioLayer || layer == mansurHarunWarchdioLayer || layer == alMamunWarchdioLayer || layer == samarraWarchdioLayer || layer == alMutadidWarchdioLayer) {
				map.removeLayer(layer);
				switch(label) {
					case "<b>Marwānid period <br> (c.73-132/692-750)</b>":
						map.addLayer(marwanidWarchdioLayer);
						break;
					case "<b>al-Manṣūr-Hārūn al-Rashīd <br> (ca. 136-193/754-809)</b>":
						map.addLayer(mansurHarunWarchdioLayer);
						break;
					case "<b>al-Maʾmūn to al-Muʿtaṣim <br> (ca. 198-221/813-836)</b>":
						map.addLayer(alMamunWarchdioLayer);
						break;
					case "<b>Sāmarrāʾ period <br> (ca. 221-279/836-892)</b>":
						map.addLayer(samarraWarchdioLayer);
						break;
					case "<b>al-Muʿtaḍid to al-Muqtadir <br> (ca. 279-320/892-932)</b>":
						map.addLayer(alMutadidWarchdioLayer);
						break;
				}
			} else if (layer == marwanidMintsLayer || layer == mansurHarunMintsLayer || layer == alMamunMintsLayer || layer == alMutadidMintsLayer) {
				map.removeLayer(layer);
				switch(label) {
					case "<b>Marwānid period <br> (c.73-132/692-750)</b>":
						map.addLayer(marwanidMintsLayer);
						break;
					case "<b>al-Manṣūr-Hārūn al-Rashīd <br> (ca. 136-193/754-809)</b>":
						map.addLayer(mansurHarunMintsLayer);
						break;
					case "<b>al-Maʾmūn to al-Muʿtaṣim <br> (ca. 198-221/813-836)</b>":
						map.addLayer(alMamunMintsLayer);
						break;
					case "<b>Sāmarrāʾ period <br> (ca. 221-279/836-892)</b>":
						map.addLayer(alMamunMintsLayer);
						break;
					case "<b>al-Muʿtaḍid to al-Muqtadir <br> (ca. 279-320/892-932)</b>":
						map.addLayer(alMutadidMintsLayer);
						break;
				}
			} else if (layer == marwanidCopperMintsLayer || layer == mansurHarunCopperMintsLayer || layer == alMamunCopperMintsLayer || layer == samarraCopperMintsLayer || layer == alMutadidCopperMintsLayer) {
				map.removeLayer(layer);
				switch(label) {
					case "<b>Marwānid period <br> (c.73-132/692-750)</b>":
						map.addLayer(marwanidCopperMintsLayer);
						break;
					case "<b>al-Manṣūr-Hārūn al-Rashīd <br> (ca. 136-193/754-809)</b>":
						map.addLayer(mansurHarunCopperMintsLayer);
						break;
					case "<b>al-Maʾmūn to al-Muʿtaṣim <br> (ca. 198-221/813-836)</b>":
						map.addLayer(alMamunCopperMintsLayer);
						break;
					case "<b>Sāmarrāʾ period <br> (ca. 221-279/836-892)</b>":
						map.addLayer(samarraCopperMintsLayer);
						break;
					case "<b>al-Muʿtaḍid to al-Muqtadir <br> (ca. 279-320/892-932)</b>":
						map.addLayer(alMutadidCopperMintsLayer);
						break;
				}
			}
	});
};

function removeAllControls(label) {
	var allControls = [marwanidLinesControl, mansurHarunLinesControl, alMamunLinesControl, samarraLinesControl, alMutadidLinesControl];
	for (var i = 0; i < allControls.length; i++) {
		map.removeControl(allControls[i]);
	};
};

function changeMap(label) {
  switch(label) {
    case "<b>Marwānid period <br> (c.73-132/692-750)</b>":
			map.addLayer(backgroundSitesLayer);
			//map.addLayer(marwanidLinesLayer);
      map.addLayer(marwanidLayer);
			map.addControl(marwanidLinesControl);
      break;
    case "<b>al-Manṣūr-Hārūn al-Rashīd <br> (ca. 136-193/754-809)</b>":
			map.addLayer(backgroundSitesLayer);
			//map.addLayer(mansurHarunLinesLayer);
      map.addLayer(mansurHarunLayer);
			map.addControl(mansurHarunLinesControl);
      break;
    case "<b>al-Maʾmūn to al-Muʿtaṣim <br> (ca. 198-221/813-836)</b>":
			map.addLayer(backgroundSitesLayer);
			//map.addLayer(alMamunLinesLayer);
      map.addLayer(alMamunLayer);
			map.addControl(alMamunLinesControl);
      break;
		case "<b>Sāmarrāʾ period <br> (ca. 221-279/836-892)</b>":
			map.addLayer(backgroundSitesLayer);
			//map.addLayer(samarraLinesLayer);
      map.addLayer(samarraLayer);
			map.addControl(samarraLinesControl);
      break;
    case "<b>al-Muʿtaḍid to al-Muqtadir <br> (ca. 279-320/892-932)</b>":
			map.addLayer(backgroundSitesLayer);
			//map.addLayer(alMutadidLinesLayer);
      map.addLayer(alMutadidLayer);
			map.addControl(alMutadidLinesControl);
      break;
    default:
      map.addLayer(marwanidLayer);
  }
}

/* Popup content */

function zoomToFeature(e) {
  map.flyTo(e.latlng, 10, {
		duration: 0.5,
	});
};

var popupOptions = {
	className: 'custom',
	closeButton: false
}

function onEachFeature(feature, layer) {
	var popup = L.popup(popupOptions, layer).setContent('<h3>' + feature.properties.transliterated_name + '</h3><h3>' + feature.properties.Name + '</h3><h5><b> Kura:</b> ' + feature.properties.kura_name + '</h5>');
	layer.bindPopup(popup);
    layer.on({
        click: zoomToFeature,
    });
		layer.on('mouseover', function(event) {
			layer.openPopup();
		});
		layer.on('mouseout', function(event) {
			layer.closePopup();
		});
    setIconSize();
};

/* Add data */

var backgroundSitesStyle = {
	radius: 1,
	fillColor: "#777",
	color: "#777",
	weight: 4,
	opacity: 1,
}

var backgroundSitesLayer = L.geoJson(sites, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, backgroundSitesStyle)
  }
});

function setIconSize() {
  for (i = 0; i < marwanid.length; i++) {
    if (marwanid[i].properties.transliterated_name == "Ṭūr ʿAbdīn (Mountainous area)" || marwanid[i].properties.transliterated_name == "Shahrazūr (Plain)") {
        marwanid[i].properties.radius = 20;
    } else {
        marwanid[i].properties.radius = 12;
    }
  }
  for (i = 0; i < mansurHarun.length; i++) {
		if (mansurHarun[i].properties.transliterated_name == "Ṭūr ʿAbdīn (Mountainous area)" || mansurHarun[i].properties.transliterated_name == "Shahrazūr (Plain)") {
        mansurHarun[i].properties.radius = 20;
    } else {
        mansurHarun[i].properties.radius = 12;
    }
  }
  for (i = 0; i < alMamun.length; i++) {
		if (alMamun[i].properties.transliterated_name == "Ṭūr ʿAbdīn (Mountainous area)" || alMamun[i].properties.transliterated_name == "Shahrazūr (Plain)") {
        alMamun[i].properties.radius = 20;
    } else {
        alMamun[i].properties.radius = 12;
    }
  }
	for (i = 0; i < samarra.length; i++) {
		if (samarra[i].properties.transliterated_name == "Ṭūr ʿAbdīn (Mountainous area)" || samarra[i].properties.transliterated_name == "Shahrazūr (Plain)") {
        samarra[i].properties.radius = 20;
    } else {
        samarra[i].properties.radius = 12;
    }
  }
  for (i = 0; i < alMutadid.length; i++) {
		if (alMutadid[i].properties.transliterated_name == "Ṭūr ʿAbdīn (Mountainous area)" || alMutadid[i].properties.transliterated_name == "Shahrazūr (Plain)") {
        alMutadid[i].properties.radius = 20;
    } else {
        alMutadid[i].properties.radius = 12;
    }
  }
};


/*var marwanidLinesLayer = L.geoJson(marwanidLines, {
  style: function (feature) {
		return {
			weight: feature.properties.radius,
			color: "black",
			opacity: 0.5,
		};
	}
});*/


var marwanidLayer = L.geoJson(marwanid, {
  onEachFeature: onEachFeature,
  pointToLayer: function(feature, latlng) {
      return L.shapeMarker (
          latlng,
          {
              radius: feature.properties.radius,
              color: "#fff",
              shape: "square",
              weight: 1,
              opacity: 1,
              fillColor: feature.properties.color,
              fillOpacity: 0.5
          }
      )
  }
});

/*var alMamunLinesLayer = L.geoJson(alMamunLines, {
  style: function (feature) {
		return {
			weight: feature.properties.radius,
			color: "black",
			opacity: 0.5,
		};
	}
});*/

var alMamunLayer = L.geoJson(alMamun, {
  onEachFeature: onEachFeature,
  pointToLayer: function(feature, latlng) {
      return L.shapeMarker (
          latlng,
          {
              radius: feature.properties.radius,
              color: "#fff",
              shape: "square",
              weight: 1,
              opacity: 1,
              fillColor: feature.properties.color,
              fillOpacity: 0.5
          }
      )
  }
});

/*var samarraLinesLayer = L.geoJson(samarraLines, {
  style: function (feature) {
		return {
			weight: feature.properties.radius,
			color: "black",
			opacity: 0.5,
		};
	}
});*/

var samarraLayer = L.geoJson(samarra, {
  onEachFeature: onEachFeature,
  pointToLayer: function(feature, latlng) {
      return L.shapeMarker (
          latlng,
          {
              radius: feature.properties.radius,
              color: "#fff",
              shape: "square",
              weight: 1,
              opacity: 1,
              fillColor: feature.properties.color,
              fillOpacity: 0.5
          }
      )
  }
});

/*var alMutadidLinesLayer = L.geoJson(alMutadidLines, {
  style: function (feature) {
		return {
			weight: feature.properties.radius,
			color: "black",
			opacity: 0.5,
		};
	}
});*/

var alMutadidLayer = L.geoJson(alMutadid, {
  onEachFeature: onEachFeature,
  pointToLayer: function(feature, latlng) {
      return L.shapeMarker (
          latlng,
          {
              radius: feature.properties.radius,
              color: "#fff",
              shape: "square",
              weight: 1,
              opacity: 1,
              fillColor: feature.properties.color,
              fillOpacity: 0.5
          }
      )
  }
});

/*var mansurHarunLinesLayer = L.geoJson(mansurHarunLines, {
  style: function (feature) {
		return {
			weight: feature.properties.radius,
			color: "black",
			opacity: 0.5,
		};
	}
});*/

var mansurHarunLayer = L.geoJson(mansurHarun, {
  onEachFeature: onEachFeature,
  pointToLayer: function(feature, latlng) {
      return L.shapeMarker (
          latlng,
          {
              radius: feature.properties.radius,
              color: "#fff",
              shape: "square",
              weight: 1,
              opacity: 1,
              fillColor: feature.properties.color,
              fillOpacity: 0.5
          }
      )
  }
});

/* Harbours

var harbourIcon = L.icon({
	iconUrl: './img/harbour.svg',
	iconSize: [20, 20],
	iconAnchor: [10, 0]
})

var marwanidHarboursLayer = L.geoJson(marwanidHarbours, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: harbourIcon }
      )
  }
});

var alMamunHarboursLayer = L.geoJson(alMamunHarbours, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: harbourIcon }
      )
  }
});

var alMutadidHarboursLayer = L.geoJson(alMutadidHarbours, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: harbourIcon }
      )
  }
});*/

// Eastern Diocese

var edioIcon = L.icon({
	iconUrl: './img/e_bish.svg',
	iconSize: [30, 30],
	iconAnchor: [2, 28]
});

var marwanidEdioLayer = L.geoJson(marwanidEdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: edioIcon }
      )
  }
});

var mansurHarunEdioLayer = L.geoJson(mansurHarunEdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: edioIcon }
      )
  }
});

var alMamunEdioLayer = L.geoJson(alMamunEdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: edioIcon }
      )
  }
});

var samarraEdioLayer = L.geoJson(samarraEdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: edioIcon }
      )
  }
});

var alMutadidEdioLayer = L.geoJson(alMutadidEdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: edioIcon }
      )
  }
});

// Eastern Archdiocese

var earchdioIcon = L.icon({
	iconUrl: './img/e_metBish.svg',
	iconSize: [30, 30],
	iconAnchor: [2, 28]
});

var marwanidEarchdioLayer = L.geoJson(marwanidEarchdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: earchdioIcon }
      )
  }
});

var mansurHarunEarchdioLayer = L.geoJson(mansurHarunEarchdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: earchdioIcon }
      )
  }
});

var alMamunEarchdioLayer = L.geoJson(alMamunEarchdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: earchdioIcon }
      )
  }
});

var samarraEarchdioLayer = L.geoJson(samarraEarchdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: earchdioIcon }
      )
  }
});

var alMutadidEarchdioLayer = L.geoJson(alMutadidEarchdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: earchdioIcon }
      )
  }
});

// Western Diocese

var wdioIcon = L.icon({
	iconUrl: './img/w_bish.svg',
	iconSize: [30, 30],
	iconAnchor: [28, 28],
});

var marwanidWdioLayer = L.geoJson(marwanidWdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: wdioIcon }
      )
  }
});

var mansurHarunWdioLayer = L.geoJson(mansurHarunWdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: wdioIcon }
      )
  }
});

var alMamunWdioLayer = L.geoJson(alMamunWdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: wdioIcon }
      )
  }
});

var samarraWdioLayer = L.geoJson(samarraWdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: wdioIcon }
      )
  }
});

var alMutadidWdioLayer = L.geoJson(alMutadidWdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: wdioIcon }
      )
  }
});

// Western Archdiocese

var warchdioIcon = L.icon({
	iconUrl: './img/w_metBish.svg',
	iconSize: [30, 30],
	iconAnchor: [28, 28]
});

var marwanidWarchdioLayer = L.geoJson(marwanidWarchdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: warchdioIcon }
      )
  }
});

var mansurHarunWarchdioLayer = L.geoJson(mansurHarunWarchdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: warchdioIcon }
      )
  }
});

var alMamunWarchdioLayer = L.geoJson(alMamunWarchdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: warchdioIcon }
      )
  }
});

var samarraWarchdioLayer = L.geoJson(samarraWarchdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: warchdioIcon }
      )
  }
});

var alMutadidWarchdioLayer = L.geoJson(alMutadidWarchdio, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: warchdioIcon }
      )
  }
});

// Precious metal mints

var mintStyle = {
	radius: 8,
	fillColor: "#000000",
	color: "#000",
	weight: 4,
	opacity: 1,
	fillOpacity: 0
}

var marwanidMintsLayer = L.geoJson(marwanidMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, mintStyle)
  }
});

var mansurHarunMintsLayer = L.geoJson(mansurHarunMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, mintStyle)
  }
});

var alMamunMintsLayer = L.geoJson(alMamunMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, mintStyle)
  }
});

var samarraMintsLayer = L.geoJson(samarraMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, mintStyle)
  }
});

var alMutadidMintsLayer = L.geoJson(alMutadidMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, mintStyle)
  }
});

// Copper mints

var copperMintStyle = {
	radius: 5,
	fillColor: "#000000",
	color: "#000",
	weight: 4,
	opacity: 0,
	fillOpacity: 1,
}

var marwanidCopperMintsLayer = L.geoJson(marwanidCopperMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, copperMintStyle)
  }
});

var mansurHarunCopperMintsLayer = L.geoJson(mansurHarunCopperMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, copperMintStyle)
  }
});

var alMamunCopperMintsLayer = L.geoJson(alMamunCopperMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, copperMintStyle)
  }
});

var samarraCopperMintsLayer = L.geoJson(samarraCopperMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, copperMintStyle)
  }
});

var alMutadidCopperMintsLayer = L.geoJson(alMutadidCopperMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, copperMintStyle)
  }
});

// Routes

var cornuRoutesLayer = L.geoJson(cornuRoutes, {
	style: function (feature) {
		return {
			weight: 2,
			color: "black",
			opacity: 0.5,
		};
	}
});

/* Timeline slider */

L.control.timelineSlider({
                timelineItems: ["<b>Marwānid period <br> (c.73-132/692-750)</b>", "<b>al-Manṣūr-Hārūn al-Rashīd <br> (ca. 136-193/754-809)</b>", "<b>al-Maʾmūn to al-Muʿtaṣim <br> (ca. 198-221/813-836)</b>", "<b>Sāmarrāʾ period <br> (ca. 221-279/836-892)</b>", "<b>al-Muʿtaḍid to al-Muqtadir <br> (ca. 279-320/892-932)</b>"],
                backgroundColor: "#000",
                backgroundOpacity: 0,
                labelWidth: "195px",
                labelFontSize: "16px",
                inactiveColor: "#555",
                activeColor: "#581845",
                thumbHeight: "6px",
                changeMap: function({label, value, map}) { removeAllOverlays(label); removeAllControls(); changeMap(label); }
              })
            .addTo(map);

	// layer Control

	var options = {
		collapsed:false,
	}

	var marwanidOverlayMaps = {
		label: 'Legend',
		children: [
			{
				label: 'Connections',
				children: [
					{ label: " Routes", layer: cornuRoutesLayer },
					//{ label: " Devolvement of power", layer: marwanidLinesLayer }
				]
			},
			{
				label: 'Sites',
				children: [
					{ label: ' Eastern Syrian Diocese', layer: marwanidEdioLayer},
					{ label: ' Eastern Syrian Archdiocese', layer: marwanidEarchdioLayer },
					{ label: ' Western Syrian Diocese', layer: marwanidWdioLayer},
					{ label: ' Western Syrian Archdiocese', layer: marwanidWarchdioLayer },
					{ label: ' Precious metal mints', layer: marwanidMintsLayer },
					{ label: ' Copper mints', layer: marwanidCopperMintsLayer },
				]
			}
		]};

	var marwanidLinesControl = L.control.layers.tree(null, marwanidOverlayMaps, options);

	var mansurHarunOverlayMaps = {
		label: 'Legend',
		children: [
			{
				label: 'Connections',
				children: [
					{ label: " Routes", layer: cornuRoutesLayer },
					//{ label: " Devolvement of power", layer: mansurHarunLinesLayer }
				]
			},
			{
				label: 'Sites',
				children: [
					{ label: ' Eastern Syrian Diocese', layer: mansurHarunEdioLayer},
					{ label: ' Eastern Syrian Archdiocese', layer: mansurHarunEarchdioLayer },
					{ label: ' Western Syrian Diocese', layer: mansurHarunWdioLayer},
					{ label: ' Western Syrian Archdiocese', layer: mansurHarunWarchdioLayer },
					{ label: ' Precious metal mints', layer: mansurHarunMintsLayer },
					{ label: ' Copper mints', layer: mansurHarunCopperMintsLayer }
				]
			}
		]};

	var mansurHarunLinesControl = L.control.layers.tree(null, mansurHarunOverlayMaps, options);

	var alMamunOverlayMaps = {
		label: 'Legend',
		children: [
			{
				label: 'Connections',
				children: [
					{ label: " Routes", layer: cornuRoutesLayer },
					//{ label: " Devolvement of power", layer: alMamunLinesLayer }
				]
			},
			{
				label: 'Sites',
				children: [
					{ label: ' Eastern Syrian Diocese', layer: alMamunEdioLayer},
					{ label: ' Eastern Syrian Archdiocese', layer: alMamunEarchdioLayer },
					{ label: ' Western Syrian Diocese', layer: alMamunWdioLayer},
					{ label: ' Western Syrian Archdiocese', layer: alMamunWarchdioLayer },
					{ label: ' Precious metal mints', layer: alMamunMintsLayer },
					{ label: ' Copper mints', layer: alMamunCopperMintsLayer }
				]
			}
		]};

	var alMamunLinesControl = L.control.layers.tree(null, alMamunOverlayMaps, options);

	var samarraOverlayMaps = {
		label: 'Legend',
		children: [
			{
				label: 'Connections',
				children: [
					{ label: " Routes", layer: cornuRoutesLayer },
					//{ label: " Devolvement of power", layer: samarraLinesLayer }
				]
			},
			{
				label: 'Sites',
				children: [
					{ label: ' Eastern Syrian Diocese', layer: samarraEdioLayer},
					{ label: ' Eastern Syrian Archdiocese', layer: samarraEarchdioLayer },
					{ label: ' Western Syrian Diocese', layer: samarraWdioLayer},
					{ label: ' Western Syrian Archdiocese', layer: samarraWarchdioLayer },
					{ label: ' Precious metal mints', layer: samarraMintsLayer },
					{ label: ' Copper mints', layer: samarraCopperMintsLayer }
				]
			}
		]};

	var samarraLinesControl = L.control.layers.tree(null, samarraOverlayMaps, options);

	var alMutadidOverlayMaps = {
		label: 'Legend',
		children: [
			{
				label: 'Connections',
				children: [
					{ label: " Routes", layer: cornuRoutesLayer },
					//{ label: " Devolvement of power", layer: alMutadidLinesLayer }
				]
			},
			{
				label: 'Sites',
				children: [
					{ label: ' Eastern Syrian Diocese', layer: alMutadidEdioLayer},
					{ label: ' Eastern Syrian Archdiocese', layer: alMutadidEarchdioLayer },
					{ label: ' Western Syrian Diocese', layer: alMutadidWdioLayer},
					{ label: ' Western Syrian Archdiocese', layer: alMutadidWarchdioLayer },
					{ label: ' Precious metal mints', layer: alMutadidMintsLayer },
					{ label: ' Copper mints', layer: alMutadidCopperMintsLayer }
				]
			}
		]};

	var alMutadidLinesControl = L.control.layers.tree(null, alMutadidOverlayMaps, options);

	map.on("overlayadd", function (event) {
		var allOverlaysWithoutLines = [marwanidLayer, mansurHarunLayer, marwanidEdioLayer, marwanidEarchdioLayer, marwanidWdioLayer, marwanidWarchdioLayer, marwanidMintsLayer, marwanidCopperMintsLayer, mansurHarunEdioLayer, mansurHarunEarchdioLayer, mansurHarunWdioLayer, mansurHarunWarchdioLayer, mansurHarunMintsLayer, mansurHarunCopperMintsLayer, alMamunLayer, samarraLayer, alMamunEdioLayer, alMamunEarchdioLayer, alMamunWdioLayer, alMamunWarchdioLayer, alMamunMintsLayer, alMamunCopperMintsLayer, samarraEdioLayer, samarraEarchdioLayer, samarraWdioLayer, samarraWarchdioLayer, samarraMintsLayer, samarraCopperMintsLayer, alMutadidLayer, alMutadidEdioLayer, alMutadidEarchdioLayer, alMutadidWdioLayer, alMutadidWarchdioLayer, alMutadidMintsLayer, alMutadidCopperMintsLayer];
		for (var i = 0; i < allOverlaysWithoutLines.length; i++) {
			allOverlaysWithoutLines[i].bringToFront();
		};
	});

	map.addLayer(backgroundSitesLayer);
	//map.addLayer(marwanidLinesLayer);
	map.addLayer(marwanidLayer);
	map.addControl(marwanidLinesControl);

// Menu

/* Open */
function openNav() {
document.getElementById("myNav").style.width = "20%";
}

/* Close */
function closeNav() {
document.getElementById("myNav").style.width = "0%";
closeMenuDivs();
}

/* Open Mental Maps div */
function openMMDiv() {
document.getElementsByClassName("admin-maps-menu")[0].style.width = "0vw";
document.getElementsByClassName("mental-maps-menu")[0].style.width = "auto";
}

function closeMMDiv() {
document.getElementsByClassName("mental-maps-menu")[0].style.width = "0vw";
}

/* Open Admin Maps div */
function openAMDiv() {
document.getElementsByClassName("mental-maps-menu")[0].style.width = "0vw";
document.getElementsByClassName("admin-maps-menu")[0].style.width = "auto";
}

function closeAMDiv() {
document.getElementsByClassName("admin-maps-menu")[0].style.width = "0vw";
}

/* Open Admin Maps div */
function closeMenuDivs() {
document.getElementsByClassName("mental-maps-menu")[0].style.width = "0vw";
document.getElementsByClassName("admin-maps-menu")[0].style.width = "0vw";
}

function toggleLegend() {

  if (legendOpen) {
    document.getElementById("legendClosed").style.display="block";
    document.getElementById("legendOpened").style.display="none";
    legendOpen = false;
  } else {
    document.getElementById("legendClosed").style.display="none";
    document.getElementById("legendOpened").style.display="block";
    legendOpen = true;
  }
}
