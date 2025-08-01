var viewer = new Marzipano.Viewer(document.getElementById('pano'));

var scenes = {};

APP_DATA.scenes.forEach(function(data) {
  var urlPrefix = "images/";

  var source = Marzipano.ImageUrlSource.fromString(
    urlPrefix + "DJI_0001_D.JPG"
  );

  var geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);

  var limiter = Marzipano.util.compose(
    Marzipano.RectilinearView.limit.traditional(data.faceSize, 100*Math.PI/180),
    Marzipano.RectilinearView.limit.yawPitch(120*Math.PI/180, 90*Math.PI/180)
  );

  var view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);

  var scene = viewer.createScene({
    source: source,
    geometry: geometry,
    view: view,
    pinFirstLevel: true
  });

  scenes[data.id] = scene;
});

scenes["scene1"].switchTo();