// Helper functions
function switchScene(sceneId) {
  scenes[sceneId].switchTo();
}

function createLinkHotspotElement(hotspot) {
  // Create wrapper div
  var wrapper = document.createElement("div");
  wrapper.classList.add("hotspot");
  wrapper.classList.add("link-hotspot");

  // Optional rotation styling
  var transform = "rotate(" + hotspot.rotation + "rad)";
  wrapper.style.transform = transform;

  // Create the actual icon
  var icon = document.createElement("img");
  icon.src = "images/hotspot.png";
  icon.classList.add("link-hotspot-icon");

  wrapper.appendChild(icon);

  // Handle click to switch scenes
  wrapper.addEventListener("click", function () {
    switchScene(hotspot.target);
  });

  return wrapper;
}


// Viewer, Scenes and Hotspots
var viewer = new Marzipano.Viewer(document.getElementById('pano'));

var scenes = {};

APP_DATA.scenes.forEach(function(data) {
  var urlPrefix = "images/";

  var source = Marzipano.ImageUrlSource.fromString(
    urlPrefix + data.id + ".JPG"
  );

  var geometry = new Marzipano.EquirectGeometry([{ width: 6000 }]);


var view = new Marzipano.RectilinearView(data.initialViewParameters);

  var scene = viewer.createScene({
    source: source,
    geometry: geometry,
    view: view,
    pinFirstLevel: true
  });

  scenes[data.id] = scene;
  
  // Add link hotspots
  data.linkHotspots.forEach(function(hotspot) {
    scene.hotspotContainer().createHotspot(
      createLinkHotspotElement(hotspot),
      { yaw: hotspot.yaw, pitch: hotspot.pitch }
    );
  })
});

scenes["ground-riihintupa-northeast"].switchTo();