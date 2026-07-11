// Helper functions
function switchScene(sceneId) {
  if (!scenes[sceneId]) {
    console.error('switchScene: scene not found', sceneId);
    return;
  }
  scenes[sceneId].switchTo();
}

function createLinkHotspotElement(hotspot) {
  // Create wrapper div
  var wrapper = document.createElement("div");
  wrapper.classList.add("hotspot");
  wrapper.classList.add("link-hotspot");

  // Optional rotation styling
  var rotation = (typeof hotspot.rotation === 'number') ? hotspot.rotation : 0;
  var transform = "rotate(" + rotation + "rad)";
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

// Create scenes with error handling so we can see any problems in the console
APP_DATA.scenes.forEach(function(data) {
  try {
    var urlPrefix = "images/";

    var source = Marzipano.ImageUrlSource.fromString(
      urlPrefix + data.id + ".jpeg"
    );

    // Use a simple equirect geometry. If you prefer per-scene levels, we can use data.levels here.
    var geometry = new Marzipano.EquirectGeometry([{ width: 6000 }]);

    var view = new Marzipano.RectilinearView(data.initialViewParameters);

    var scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true
    });

    scenes[data.id] = scene;

    // Add link hotspots (guard against missing arrays)
    (data.linkHotspots || []).forEach(function(hotspot) {
      try {
        scene.hotspotContainer().createHotspot(
          createLinkHotspotElement(hotspot),
          { yaw: hotspot.yaw, pitch: hotspot.pitch }
        );
      } catch (e) {
        console.error('Error creating hotspot for scene', data.id, hotspot, e);
      }
    });
  } catch (e) {
    console.error('Error creating scene for', data.id, e);
  }
});

// Switch to a sensible scene only if it exists
if (scenes["ground-riihintupa-northeast"]) {
  scenes["ground-riihintupa-northeast"].switchTo();
} else {
  // Fallback: switch to the first available scene
  var keys = Object.keys(scenes);
  if (keys.length > 0) {
    console.warn('ground-riihintupa-northeast not found, switching to', keys[0]);
    scenes[keys[0]].switchTo();
  } else {
    console.error('No scenes were created. Check console for errors.');
    // Show a visible message on the page so it's clear something went wrong
    var el = document.createElement('div');
    el.style.position = 'absolute';
    el.style.left = '0';
    el.style.top = '0';
    el.style.right = '0';
    el.style.bottom = '0';
    el.style.display = 'flex';
    el.style.alignItems = 'center';
    el.style.justifyContent = 'center';
    el.style.background = '#000';
    el.style.color = '#fff';
    el.style.fontSize = '18px';
    el.innerText = 'Failed to create any scenes — check the developer console for details.';
    document.body.appendChild(el);
  }
}
