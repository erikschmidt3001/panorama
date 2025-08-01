var APP_DATA = {
  "scenes": [
    {
      "id": "ground-riihintupa",
      "name": "Riihintupa - Ground level",
      "levels": [
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.3,
        "pitch": -0.3,
        "fov": 1.5708
      },
      "linkHotspots": [
        {
          "yaw": -0.0,
          "pitch": 0.0,
          "rotation": 0,
          "target": "30m-riihintupa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30m-riihintupa",
      "name": "Riihintupa - 30 meters",
      "levels": [
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.3,
        "pitch": -0.5,
        "fov": 1.5708
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Riihiniemi",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};