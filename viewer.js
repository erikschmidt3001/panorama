var viewer = new Marzipano.Viewer(document.getElementById('pano'));

var scenes = {};

APP_DATA.scenes.forEach(function(data) {
  var urlPrefix = "images/";

  var source = Marzipano.ImageUrlSource.fromString(
    urlPrefix + data.id + ".JPG"
  );

  var geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);


var view = new Marzipano.RectilinearView(data.initialViewParameters);

  var scene = viewer.createScene({
    source: source,
    geometry: geometry,
    view: view,
    pinFirstLevel: true
  });

  scenes[data.id] = scene;
});

scenes["ground-riihintupa"].switchTo();