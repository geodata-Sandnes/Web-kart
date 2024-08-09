

## [Leaflet](https://leafletjs.com/) baserte kart bygget på OpenStreetmap sin kartdata.


### Innholdet i kartene hentes fra ulike steder.

Punktene lagres i json filer under mappen json.


```
Kart  | Opphav av punkter
------------- | -------------
Parkeringsplasser  | https://parkreg-open.atlas.vegvesen.no/ws/no/vegvesen/veg/parkeringsomraade/parkeringsregisteret/v1/
Aktiviteter  | https://kart.sandnes.kommune.no/appgis/rest/services/POI/POI/FeatureServer/5/
Barnehager  | https://kart.sandnes.kommune.no/appgis/rest/services/POI/POI/FeatureServer/0/
```

### Oppdatering av Kart innhold:

Bør settes opp for automatisk vedlikehold. TODO

### Ikoner for markører ligger under css/images mappen.

Skal ikoner endres bør bildenavnet holdes likt. 

Markører ligger under /css/images/icon

ikoner ligger under css/images

Ikoner(aktivitetkart) ligger under /css/images/icon/aktiv


### Kartene anvender tillegsfunksjoner som:

Alle kart anvender clustering, det gjør kartene mer anvendelige der der er for mange punkter til å vise alle på en gang. 

Stil er endret fra standard (Kun farger), slike endringer gjøres i css/MarkerCluster.css

[Leaflet.MarkerCluster 0.1 Released - Leaflet - a JavaScript library for interactive maps (leafletjs.com)](https://leafletjs.com/2012/08/20/guest-post-markerclusterer-0-1-released.html)

For å lage bedre struktur på kontrollpanelet for punktlag. Anvendes på aktivitetskart, der det er for mange lag å vise på en gang. 

[jjimenezshaw/Leaflet.Control.Layers.Tree: a Tree Layers Control for Leaflet (github.com)](https://github.com/jjimenezshaw/Leaflet.Control.Layers.Tree)


### Maptiler

Maptiler burde undersøkes. Koster, men gratis til noe punkt.  For nå er aktivkart_sok brukt for testing. Kan gi finere resultater.
