const jsonUrl = "json/aktiviteter.json";
const direct = "https://Laila72.github.io/Park_data/";
const grunnkart = "https://services.geodataonline.no/arcgis/rest/services/Geocache_WMAS_WGS84/GeocacheBasis/MapServer/tile/{z}/{y}/{x}";





const attribution_tag = '©️ Geodata AS, Kartverket, Geovekst og kommunene, OpenStreetMap';
const marker_blaa = "css/images/icon/marker-icon_blaa.png";
const testtekst = "Test variabler variant 3";

var blaatikon = L.icon({
	  iconUrl: `${direct}${marker_blaa}`,
	  iconSize: [25, 41],
	  shadowSize: [25, 41]});
