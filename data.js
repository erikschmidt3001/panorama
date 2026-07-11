var APP_DATA = {
  "scenes": [
    {
      "id": "ground-riihintupa-northeast",
      "name": "Riihintupa - Ground - Northeast",
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
        "yaw": -10 * Math.PI/180,
        "pitch": 1 * Math.PI/180,
        "fov": 1.5708
      },
      "linkHotspots": [
        {
          "yaw": 0, 
          "pitch": -90 * Math.PI / 180,
          "rotation": 0,
          "target": "30m-riihintupa-northeast"
        },
        {
          "yaw": -50 * Math.PI / 180, 
          "pitch": -9 * Math.PI / 180,
          "rotation": 0,
          "target": "ground-riihintupa-southeast"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "ground-riihintupa-southeast",
      "name": "Riihintupa - Ground - Southeast",
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
        "yaw": 0.0,
        "pitch": 0.1,
        "fov": 1.5708
      },
      "linkHotspots": [
        {
          "yaw": 1.0, 
          "pitch": -0.5,
          "rotation": 0,
          "target": "ground-riihintupa-northeast"
        },
        {
          "yaw": 0.6, 
          "pitch": -1.1,
          "rotation": 0,
          "target": "30m-riihintupa-northeast"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30m-riihintupa-northeast",
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
        "yaw": -20 * Math.PI / 180,
        "pitch": 65 * Math.PI / 180,
        "fov": 1.5708
      },
      "linkHotspots": [
        {
          "yaw": -0.3, 
          "pitch": 1.2,
          "rotation": 0,
          "target": "ground-riihintupa-northeast"
        }
      ],
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