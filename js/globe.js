
  // Gen random data
  const N = 20;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [['yellow', 'white', 'blue', 'green'][Math.round(Math.random() * 3)], ['yellow', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]]
  }));

  Globe()
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
    .arcsData(arcsData)
    .arcColor('color')
    .arcDashLength(() => Math.random())
    .arcDashGap(() => Math.random())
    .arcDashAnimateTime(() => Math.random() * 4000 + 500)
  (document.getElementById('globeViz'))
