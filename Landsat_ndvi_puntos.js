// Traigo los puntos importados del shapefile como tabla en assets y veo donde estan

var points = ee.FeatureCollection(table);

// Centrar zona de estudio al conjunto de puntos
Map.centerObject(points);
Map.addLayer(points)

// Entre fechas
var inicio = '2005-01-01'
var fin = '2011-08-31'

//Conjunto de imagenes

var L5 = 'LANDSAT/LT05/C01/T1_32DAY_NDVI'
// L5 buenas '1985-01-01'a, '2011-12-31'?

var dataset = ee.ImageCollection(L5)
                  .filterDate(inicio, fin);

var chart =  ui.Chart.image.seriesByRegion({
  imageCollection: dataset.select('NDVI'),
  regions: points,
  reducer: ee.Reducer.first(),
  scale: 30
});
print(chart, "L5 monthly TOA NDVI TimeSeries 2005-2011");

