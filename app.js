// Full NEXRAD site list (from your paste.txt)
const NEXRAD_SITES = [
  {"id":"KABR","name":"Aberdeen, SD","lat":45.4558,"lon":-98.4131,"elevation":1302},
  {"id":"KENX","name":"Albany, NY","lat":42.5864,"lon":-74.0639,"elevation":1826},
  {"id":"KABX","name":"Albuquerque, NM","lat":35.1497,"lon":-106.8239,"elevation":5870},
  {"id":"KFDR","name":"Frederick, OK","lat":34.3622,"lon":-98.9764,"elevation":1267},
  {"id":"KAMA","name":"Amarillo, TX","lat":35.2333,"lon":-101.7089,"elevation":3587},
  {"id":"PAHG","name":"Anchorage, AK","lat":60.7259,"lon":-151.3511,"elevation":242},
  {"id":"PGUA","name":"Andersen AFB, GU","lat":13.4544,"lon":144.8081,"elevation":264},
  {"id":"KFFC","name":"Atlanta, GA","lat":33.3636,"lon":-84.5658,"elevation":858},
  {"id":"KEWX","name":"Austin/San Antonio, TX","lat":29.7039,"lon":-98.0281,"elevation":633},
  {"id":"KBBX","name":"Beale AFB, CA","lat":39.4961,"lon":-121.6317,"elevation":167},
  {"id":"PABC","name":"Bethel, AK","lat":60.7928,"lon":-161.8742,"elevation":193},
  {"id":"KBLX","name":"Billings, MT","lat":45.8538,"lon":-108.6061,"elevation":3598},
  {"id":"KBGM","name":"Binghamton, NY","lat":42.1997,"lon":-75.9847,"elevation":1606},
  {"id":"PACG","name":"Biorka Island, AK","lat":56.8528,"lon":-135.5292,"elevation":272},
  {"id":"KBMX","name":"Birmingham, AL","lat":33.1719,"lon":-86.7697,"elevation":645},
  {"id":"KBIS","name":"Bismarck, ND","lat":46.7708,"lon":-100.7608,"elevation":1658},
  {"id":"KFCX","name":"Blacksburg, VA","lat":37.0242,"lon":-80.2742,"elevation":2726},
  {"id":"KCBX","name":"Boise, ID","lat":43.4906,"lon":-116.2367,"elevation":3171},
  {"id":"KBOX","name":"Boston, MA","lat":41.9558,"lon":-71.1372,"elevation":232},
  {"id":"KBRO","name":"Brownsville, TX","lat":25.9153,"lon":-97.4197,"elevation":88},
  {"id":"KBUF","name":"Buffalo, NY","lat":42.9486,"lon":-78.7369,"elevation":693},
  {"id":"KCXX","name":"Burlington, VT","lat":44.5111,"lon":-73.1667,"elevation":317},
  {"id":"KFDX","name":"Cannon AFB, NM","lat":34.6344,"lon":-103.6186,"elevation":4650},
  {"id":"KCBW","name":"Caribou, ME","lat":46.0392,"lon":-67.8067,"elevation":746},
  {"id":"KICX","name":"Cedar City, UT","lat":37.5908,"lon":-112.8619,"elevation":10600},
  {"id":"KARX","name":"La Crosse, WI","lat":43.8222,"lon":-91.1919,"elevation":1357},
  {"id":"KGRK","name":"Central Texas/Ft Hood, TX","lat":30.7218,"lon":-97.3828,"elevation":603},
  {"id":"KCLX","name":"Charleston, SC","lat":32.6556,"lon":-81.0425,"elevation":49},
  {"id":"KRLX","name":"Charleston, WV","lat":38.3119,"lon":-81.7231,"elevation":1116},
  {"id":"KCHA","name":"Chattanooga, TN","lat":35.0331,"lon":-85.2003,"elevation":1860},
  {"id":"KCYS","name":"Cheyenne, WY","lat":41.1517,"lon":-104.8061,"elevation":6191},
  {"id":"KLOT","name":"Chicago, IL","lat":41.6044,"lon":-88.0847,"elevation":663},
  {"id":"KILN","name":"Cincinnati, OH","lat":39.4203,"lon":-83.8217,"elevation":1056},
  {"id":"KCLE","name":"Cleveland, OH","lat":41.4131,"lon":-81.8597,"elevation":763},
  {"id":"KCAE","name":"Columbia, SC","lat":33.9486,"lon":-81.1186,"elevation":231},
  {"id":"KGWX","name":"Columbus, MS","lat":33.8967,"lon":-88.3294,"elevation":463},
  {"id":"KCRP","name":"Corpus Christi, TX","lat":27.7842,"lon":-97.5117,"elevation":116},
  {"id":"KFWS","name":"Dallas/Ft Worth, TX","lat":32.5731,"lon":-97.3031,"elevation":683},
  {"id":"KFTG","name":"Denver, CO","lat":39.7867,"lon":-104.5458,"elevation":5497},
  {"id":"KDMX","name":"Des Moines, IA","lat":41.7311,"lon":-93.7231,"elevation":981},
  {"id":"KDTX","name":"Detroit, MI","lat":42.7,"lon":-83.4717,"elevation":1096},
  {"id":"KDDC","name":"Dodge City, KS","lat":37.7608,"lon":-99.9688,"elevation":2594},
  {"id":"KDOX","name":"Dover, DE","lat":38.8253,"lon":-75.4403,"elevation":49},
  {"id":"KDLH","name":"Duluth, MN","lat":46.8369,"lon":-92.2094,"elevation":1453},
  {"id":"KDYX","name":"Dyess AFB, TX","lat":32.5381,"lon":-99.2542,"elevation":1792},
  {"id":"KEAX","name":"Kansas City, MO","lat":38.8106,"lon":-94.2644,"elevation":1092},
  {"id":"KEVX","name":"Eglin AFB, FL","lat":30.5647,"lon":-85.9219,"elevation":221},
  {"id":"KEMX","name":"Tucson, AZ","lat":32.1114,"lon":-110.9381,"elevation":5318},
  {"id":"KENX","name":"Albany, NY","lat":42.5864,"lon":-74.0639,"elevation":1826},
  {"id":"KEPZ","name":"El Paso, TX","lat":31.8733,"lon":-106.6989,"elevation":4027},
  {"id":"KLRX","name":"Elko, NV","lat":40.7397,"lon":-115.7922,"elevation":6729},
  {"id":"KPOE","name":"Fort Polk, LA","lat":31.1556,"lon":-92.9742,"elevation":407},
  {"id":"KSRX","name":"Fort Smith, AR","lat":35.2894,"lon":-94.3611,"elevation":653},
  {"id":"KGRR","name":"Grand Rapids, MI","lat":42.8931,"lon":-85.5444,"elevation":797},
  {"id":"KJAX","name":"Jacksonville, FL","lat":30.4847,"lon":-81.7011,"elevation":33},
  {"id":"KDGX","name":"Jackson, MS","lat":32.3203,"lon":-89.9842,"elevation":322},
  {"id":"KJKL","name":"Jackson, KY","lat":37.5908,"lon":-83.3131,"elevation":1360},
  {"id":"KEAX","name":"Kansas City, MO","lat":38.8106,"lon":-94.2644,"elevation":1092},
  {"id":"KILX","name":"Lincoln, IL","lat":40.1503,"lon":-89.3383,"elevation":731},
  {"id":"KIND","name":"Indianapolis, IN","lat":39.7072,"lon":-86.2806,"elevation":797},
  {"id":"KGRK","name":"Fort Cavazos/Gray AAF, TX","lat":30.7218,"lon":-97.3828,"elevation":1020},
  {"id":"KINX","name":"Tulsa, OK","lat":36.1751,"lon":-95.5643,"elevation":679},
  {"id":"KJAN","name":"Jackson, MS","lat":32.3203,"lon":-89.9842,"elevation":322},
  {"id":"KJGX","name":"Robins AFB/Macon, GA","lat":32.675,"lon":-83.3519,"elevation":382},
  {"id":"KLBB","name":"Lubbock, TX","lat":33.6541,"lon":-101.8141,"elevation":3241},
  {"id":"KLCH","name":"Lake Charles, LA","lat":30.1258,"lon":-93.2156,"elevation":16},
  {"id":"KLSX","name":"St. Louis, MO","lat":38.6986,"lon":-90.6825,"elevation":601},
  {"id":"KLTX","name":"Wilmington, NC","lat":34.6883,"lon":-78.4883,"elevation":145},
  {"id":"KLVX","name":"Louisville, KY","lat":37.9828,"lon":-85.8581,"elevation":833},
  {"id":"KMAF","name":"Midland/Odessa, TX","lat":31.9434,"lon":-102.1894,"elevation":2871},
  {"id":"KMAX","name":"Medford, OR","lat":42.0811,"lon":-122.715,"elevation":750},
  {"id":"KMHX","name":"Morehead City, NC","lat":34.7756,"lon":-76.8767,"elevation":49},
  {"id":"KMKX","name":"Milwaukee, WI","lat":42.9683,"lon":-88.5506,"elevation":1022},
  {"id":"KMLB","name":"Melbourne, FL","lat":28.1139,"lon":-80.6547,"elevation":35},
  {"id":"KMPX","name":"Minneapolis, MN","lat":44.8486,"lon":-93.5664,"elevation":909},
  {"id":"KMQT","name":"Marquette, MI","lat":46.5314,"lon":-87.5481,"elevation":1407},
  {"id":"KMRX","name":"Knoxville/Morristown, TN","lat":36.1683,"lon":-83.4011,"elevation":1434},
  {"id":"KMSX","name":"Missoula, MT","lat":47.0417,"lon":-113.9861,"elevation":7935},
  {"id":"KMVX","name":"Grand Forks, ND","lat":47.5279,"lon":-97.3257,"elevation":1030},
  {"id":"KNQA","name":"Memphis, TN","lat":35.3447,"lon":-89.8706,"elevation":267},
  {"id":"KOAX","name":"Omaha, NE","lat":41.3206,"lon":-96.3661,"elevation":1262},
  {"id":"KOHX","name":"Nashville, TN","lat":36.2472,"lon":-86.5622,"elevation":676},
  {"id":"KOKX","name":"Upton, NY","lat":40.8653,"lon":-72.8647,"elevation":89},
  {"id":"KOTX","name":"Spokane, WA","lat":47.6803,"lon":-117.6267,"elevation":2384},
  {"id":"KPAH","name":"Paducah, KY","lat":37.0686,"lon":-88.7736,"elevation":410},
  {"id":"KPBZ","name":"Pittsburgh, PA","lat":40.5311,"lon":-80.2183,"elevation":1201},
  {"id":"KPDT","name":"Pendleton, OR","lat":45.6911,"lon":-118.8528,"elevation":1579},
  {"id":"KPOE","name":"Fort Polk, LA","lat":31.1556,"lon":-92.9742,"elevation":407},
  {"id":"KPUX","name":"Pueblo, CO","lat":38.4597,"lon":-104.1806,"elevation":4737},
  {"id":"KRAX","name":"Raleigh/Durham, NC","lat":35.6653,"lon":-78.4911,"elevation":435},
  {"id":"KRGX","name":"Reno, NV","lat":39.7547,"lon":-119.4606,"elevation":8240},
  {"id":"KRIW","name":"Riverton, WY","lat":43.0667,"lon":-108.4772,"elevation":5525},
  {"id":"KRLX","name":"Charleston, WV","lat":38.3119,"lon":-81.7231,"elevation":1116},
  {"id":"KRTX","name":"Portland, OR","lat":45.7156,"lon":-122.9644,"elevation":384},
  {"id":"KSFX","name":"Pocatello, ID","lat":42.4944,"lon":-112.2369,"elevation":7480},
  {"id":"KSGF","name":"Springfield, MO","lat":37.2356,"lon":-93.4006,"elevation":1378},
  {"id":"KSHV","name":"Shreveport, LA","lat":32.4497,"lon":-93.8417,"elevation":273},
  {"id":"KSIK","name":"Sikeston, MO","lat":36.7575,"lon":-89.1617,"elevation":312},
  {"id":"KSRX","name":"Fort Smith, AR","lat":35.2894,"lon":-94.3611,"elevation":653},
  {"id":"KTBW","name":"Tampa Bay, FL","lat":27.7053,"lon":-82.4017,"elevation":42},
  {"id":"KTLH","name":"Tallahassee, FL","lat":30.3967,"lon":-84.3286,"elevation":125},
  {"id":"KTLX","name":"Oklahoma City/Norman, OK","lat":35.3331,"lon":-97.2775,"elevation":1198},
  {"id":"KTWX","name":"Topeka, KS","lat":38.9969,"lon":-96.2326,"elevation":1146},
  {"id":"KTYX","name":"Montague/Ft Drum, NY","lat":43.7553,"lon":-75.6847,"elevation":1959},
  {"id":"KVAX","name":"Moody AFB, GA","lat":30.8906,"lon":-83.0022,"elevation":330},
  {"id":"KVNX","name":"Vance AFB/Enid, OK","lat":36.7406,"lon":-98.1279,"elevation":1189},
  {"id":"KVTX","name":"Los Angeles, CA","lat":34.4122,"lon":-119.1781,"elevation":2806},
  {"id":"KVWX","name":"Evansville, IN","lat":37.9342,"lon":-87.265,"elevation":459},
  {"id":"KYUX","name":"Yuma, AZ","lat":32.4958,"lon":-113.9025,"elevation":239}
];

// --- Full NEXRAD site list (abbreviated for example) ---
const NEXRAD_SITES = [
  {"id":"KABR","name":"Aberdeen, SD","lat":45.4558,"lon":-98.4131,"elevation":1302},
  {"id":"KENX","name":"Albany, NY","lat":42.5864,"lon":-74.0639,"elevation":1826},
  // ... (add all remaining sites from your paste.txt here) ...
];

// Set initial map view to full USA
const map = L.map('map').setView([39.8283, -98.5795], 4); // Zoom 4 shows the whole US

// Optional: limit panning to US bounds
const usBounds = [
  [24.396308, -125.0], // Southwest corner (Key West, FL)
  [49.384358, -66.93457] // Northeast corner (Maine)
];
map.setMaxBounds(usBounds);

// Base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// --- RainViewer Radar Animation (with cross-fade and auto-refresh) ---
let radarLayers = [];
let radarTimestamps = [];
let currentFrame = 0;
let animationInterval = null;
let animationActive = true;
let radarFrameInterval = 400; // ms for smoother animation
let rainViewerRefreshInterval = null;

// Fetch available radar frames from RainViewer
function loadRainViewerFrames() {
  fetch('https://api.rainviewer.com/public/weather-maps.json')
    .then(resp => resp.json())
    .then(data => {
      radarTimestamps = data.radar.past.map(frame => frame.time);
      showRainViewerFrame(0, true);
      startRainViewerAnimation();
    });
}

// Show a radar frame, with cross-fade
function showRainViewerFrame(idx, immediate) {
  // Keep up to 2 layers for cross-fade
  if (radarLayers.length > 1) {
    map.removeLayer(radarLayers.shift());
  }
  currentFrame = idx;

  const ts = radarTimestamps[idx];
  const tileUrl = `https://tilecache.rainviewer.com/v2/radar/${ts}/256/{z}/{x}/{y}/2/1_1.png`;
  const newLayer = L.tileLayer(tileUrl, {
    opacity: immediate ? 0.7 : 0,
    zIndex: 300,
    attribution: 'Radar &copy; RainViewer'
  });
  newLayer.addTo(map);
  radarLayers.push(newLayer);

  // Cross-fade in
  if (!immediate && radarLayers.length === 2) {
    let op = 0;
    const fade = setInterval(() => {
      op += 0.1;
      if (op >= 0.7) {
        newLayer.setOpacity(0.7);
        radarLayers[0].setOpacity(0);
        clearInterval(fade);
        // Remove the old layer after fade
        setTimeout(() => {
          if (radarLayers.length > 1) {
            map.removeLayer(radarLayers.shift());
          }
        }, 100);
      } else {
        newLayer.setOpacity(op);
        radarLayers[0].setOpacity(0.7 - op);
      }
    }, 30);
  } else {
    newLayer.setOpacity(0.7);
    if (radarLayers.length > 1) radarLayers[0].setOpacity(0);
    setTimeout(() => {
      if (radarLayers.length > 1) {
        map.removeLayer(radarLayers.shift());
      }
    }, 100);
  }
}

function startRainViewerAnimation() {
  if (animationInterval) clearInterval(animationInterval);
  animationInterval = setInterval(() => {
    currentFrame = (currentFrame + 1) % radarTimestamps.length;
    showRainViewerFrame(currentFrame, false);
  }, radarFrameInterval);
}

function stopRainViewerAnimation() {
  if (animationInterval) clearInterval(animationInterval);
}

// --- Animation toggle ---
document.getElementById('toggleAnimation').addEventListener('click', function() {
  animationActive = !animationActive;
  this.textContent = animationActive ? "Pause Animation" : "Resume Animation";
  if (animationActive) {
    startRainViewerAnimation();
  } else {
    stopRainViewerAnimation();
  }
});

// --- Periodically refresh RainViewer frames every 60 seconds ---
function scheduleRainViewerRefresh() {
  if (rainViewerRefreshInterval) clearInterval(rainViewerRefreshInterval);
  rainViewerRefreshInterval = setInterval(() => {
    fetch('https://api.rainviewer.com/public/weather-maps.json')
      .then(resp => resp.json())
      .then(data => {
        radarTimestamps = data.radar.past.map(frame => frame.time);
        currentFrame = 0;
        showRainViewerFrame(currentFrame, true);
      });
  }, 60000);
}

// --- Add NEXRAD site dots ---
NEXRAD_SITES.forEach(site => {
  const marker = L.circleMarker([site.lat, site.lon], {
    radius: 5,
    fillColor: '#21808d',
    color: '#fff',
    weight: 1,
    opacity: 1,
    fillOpacity: 0.85
  });
  marker.bindPopup(`<strong>${site.id}</strong><br>${site.name}<br>Elevation: ${site.elevation} ft`);
  marker.on('click', () => {
    document.getElementById('siteSelect').value = site.id;
    map.setView([site.lat, site.lon], 8);
  });
  marker.addTo(map);
});

// --- Populate dropdown ---
function populateSiteSelect() {
  const sel = document.getElementById('siteSelect');
  NEXRAD_SITES.forEach(site => {
    const opt = document.createElement('option');
    opt.value = site.id;
    opt.textContent = `${site.id} - ${site.name}`;
    sel.appendChild(opt);
  });
}
populateSiteSelect();

// --- Zoom to site from dropdown ---
document.getElementById('zoomToSite').onclick = () => {
  const siteId = document.getElementById('siteSelect').value;
  const site = NEXRAD_SITES.find(s => s.id === siteId);
  if (site) map.setView([site.lat, site.lon], 8);
};

// --- Weather Polygons (Tornado, Severe, SPC Discussion) ---
let warningLayers = [];
let warningFeatures = [];
async function loadPolygons() {
  // Remove old polygons
  warningLayers.forEach(layer => map.removeLayer(layer));
  warningLayers = [];
  warningFeatures = [];

  // NWS API for warnings
  const resp = await fetch('https://api.weather.gov/alerts/active?status=actual&message_type=alert&event=Tornado%20Warning,Severe%20Thunderstorm%20Warning');
  const data = await resp.json();
  data.features.forEach(feature => {
    if (!feature.geometry || !feature.geometry.coordinates) return;
    let polygons = [];
    if (feature.geometry.type === "Polygon") polygons = [feature.geometry.coordinates];
    if (feature.geometry.type === "MultiPolygon") polygons = feature.geometry.coordinates;
    polygons.forEach(polyCoords => {
      const latlngs = polyCoords.map(ring => ring.map(([lon, lat]) => [lat, lon]));
      let color = "#ffe600", fillColor = "#ffe600", typeClass = "severe";
      if (feature.properties.event === "Tornado Warning") {
        color = fillColor = "#dc2626";
        typeClass = "tornado";
      }
      const popup = `<b>${feature.properties.event}</b><br>
        <b>Issued:</b> ${new Date(feature.properties.sent).toLocaleString()}<br>
        <b>Expires:</b> ${new Date(feature.properties.expires).toLocaleString()}<br>
        <b>Area:</b> ${feature.properties.areaDesc}<br>
        <b>Description:</b> ${feature.properties.headline || ""}<br>
        <b>Instructions:</b> ${feature.properties.instruction || ""}`;
      const poly = L.polygon(latlngs, {
        fillColor, fillOpacity: 0.23, color, weight: 2
      }).bindPopup(popup).addTo(map);
      warningLayers.push(poly);
      warningFeatures.push({
        type: typeClass,
        title: feature.properties.event,
        area: feature.properties.areaDesc,
        time: new Date(feature.properties.sent).toLocaleTimeString(),
        popup,
        layer: poly
      });
    });
  });

  // SPC Discussions (pink)
  try {
    const spcResp = await fetch('https://www.spc.noaa.gov/products/md/active_md.json');
    if (spcResp.ok) {
      const spcData = await spcResp.json();
      (spcData.features || []).forEach(feature => {
        if (!feature.geometry || !feature.geometry.coordinates) return;
        let polygons = [];
        if (feature.geometry.type === "Polygon") polygons = [feature.geometry.coordinates];
        if (feature.geometry.type === "MultiPolygon") polygons = feature.geometry.coordinates;
        polygons.forEach(polyCoords => {
          const latlngs = polyCoords.map(ring => ring.map(([lon, lat]) => [lat, lon]));
          const popup = `<b>SPC Mesoscale Discussion</b><br>
            <b>ID:</b> ${feature.properties.mdnum}<br>
            <b>Issued:</b> ${feature.properties.issue}<br>
            <b>Expires:</b> ${feature.properties.expire}<br>
            <b>Summary:</b> ${feature.properties.summary || ""}`;
          const poly = L.polygon(latlngs, {
            fillColor: "#e75480", fillOpacity: 0.18, color: "#e75480", weight: 2
          }).bindPopup(popup).addTo(map);
          warningLayers.push(poly);
          warningFeatures.push({
            type: "spc",
            title: "SPC Mesoscale Discussion",
            area: feature.properties.mdnum,
            time: feature.properties.issue,
            popup,
            layer: poly
          });
        });
      });
    }
  } catch (e) {}

  updateWarningSidebar();
}
loadPolygons();
setInterval(loadPolygons, 60000); // Refresh polygons every minute

// --- Sidebar warning list ---
function updateWarningSidebar() {
  const list = document.getElementById('warningList');
  list.innerHTML = '';
  warningFeatures.forEach((feat, i) => {
    const li = document.createElement('li');
    li.className = feat.type;
    li.innerHTML = `<b>${feat.title}</b><br><small>${feat.area}</small><br><small>${feat.time}</small>`;
    li.onclick = () => {
      map.fitBounds(feat.layer.getBounds());
      feat.layer.openPopup();
    };
    list.appendChild(li);
  });
}

// --- Start RainViewer radar animation and schedule refresh ---
loadRainViewerFrames();
scheduleRainViewerRefresh();



// --- Start RainViewer radar animation and schedule refresh ---
loadRainViewerFrames();
scheduleRainViewerRefresh();
