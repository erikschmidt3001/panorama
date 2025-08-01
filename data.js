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
          "yaw": -44 * Math.PI / 180, 
          "pitch": 6 * Math.PI / 180,
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
          "yaw": 55 * Math.PI / 180, 
          "pitch": -25 * Math.PI / 180,
          "rotation": 0,
          "target": "ground-riihintupa-northeast"
        },
        {
          "yaw": 55 * Math.PI / 180, 
          "pitch": -60 * Math.PI / 180,
          "rotation": 0,
          "target": "30m-riihintupa-northeast"
        },
        {
          "yaw": 55 * Math.PI / 180, 
          "pitch": -80 * Math.PI / 180,
          "rotation": 0,
          "target": "80m-riihintupa-northeast"
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
          "yaw": 0 * Math.PI / 180, 
          "pitch": 90 * Math.PI / 180,
          "rotation": 0,
          "target": "ground-riihintupa-northeast"
        },
        {
          "yaw": 0 * Math.PI / 180, 
          "pitch": -90 * Math.PI / 180,
          "rotation": 0,
          "target": "80m-riihintupa-northeast"
        },
        {
          "yaw": -42 * Math.PI / 180, 
          "pitch": 54 * Math.PI / 180,
          "rotation": 0,
          "target": "ground-riihintupa-southeast"
        },
      ],
      "infoHotspots": []
    },
    {
      "id": "80m-riihintupa-northeast",
      "name": "Riihintupa - 80 meters - northeast",
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
          "yaw": 0 * Math.PI / 180, 
          "pitch": 90 * Math.PI / 180,
          "rotation": 0,
          "target": "30m-riihintupa-northeast"
        },
        {
          "yaw": -48 * Math.PI / 180, 
          "pitch": 53.5 * Math.PI / 180,
          "rotation": 0,
          "target": "ground-riihintupa-southeast"
        }],
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