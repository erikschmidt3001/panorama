const viewer = new Marzipano.Viewer(document.getElementById('pano'));

const source = Marzipano.ImageUrlSource.fromString("images/DJI_0001_D.JPG");
const geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);
const view = new Marzipano.RectilinearView();
const scene = viewer.createScene({ source, geometry, view });

scene.switchTo();