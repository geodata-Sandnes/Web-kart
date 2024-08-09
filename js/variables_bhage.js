const jsonUrl = "https://geodata-Sandnes.github.io/Web-kart/json/bhg.json";
const direct = "https://geodata-Sandnes.github.io/Web-kart/";
const grunnkart = "https://services.geodataonline.no/arcgis/rest/services/Geocache_WMAS_WGS84/GeocacheBasis/MapServer/tile/{z}/{y}/{x}";
const marker_oransje = "css/images/icon/marker-icon_oransje.png";
const marker_blaa = "css/images/icon/marker-icon_blaa.png";
const marker_gron = "css/images/icon/marker-icon_gron.png";
const shadow = "css/images/marker-shadow.png";
const testtekst = "var test ok";

var blaatikon = L.icon({
    iconUrl: `${direct}${marker_blaa}`,
    shadowUrl: `${direct}${shadow}`,
    iconSize: [25, 41],
    shadowSize: [25, 41]
});

var gronikon = L.icon({
    iconUrl: `${direct}${marker_gron}`,
    shadowUrl: `${direct}${shadow}`,
    iconSize: [25, 41],
    shadowSize: [25, 41]
});

var oransjeikon = L.icon({
    iconUrl: `${direct}${marker_oransje}`,
    shadowUrl: `${direct}${shadow}`,
    iconSize: [25, 41],
    shadowSize: [25, 41]
});
