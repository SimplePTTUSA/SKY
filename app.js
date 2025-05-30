// List of NEXRAD sites (sample, expand as needed)
const NEXRAD_SITES = [
  { id: "KABR", name: "Aberdeen, SD", lat: 45.4558, lon: -98.4131 },
  { id: "KCLX", name: "Charleston, SC", lat: 32.6556, lon: -81.0425 },
  { id: "KCAE", name: "Columbia, SC", lat: 33.9486, lon: -81.1186 },
  { id: "KTLX", name: "Oklahoma City, OK", lat: 35.3331, lon: -97.2775 },
  // ... add all sites ...
];

const map = L.map('map').setView([39.8283, -98.5795], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add radar site dots
NEXRAD_SITES.forEach(site => {
  const marker = L.circleMarker([site.lat, site.lon], {
    radius: 5,
    fillColor: '#21808d',
    color: '#fff',
    weight: 1,
    opacity: 1,
    fillOpacity: 0.85
  });
  marker.bindPopup(`<strong>${site.id}</strong><br>${site.name}`);
  marker.on('click', () => {
    document.getElementById('siteSelect').value = site.id;
    loadRadarOverlay();
  });
  marker.addTo(map);
});

function populateSiteSelect() {
  const sel = document.getElementById('siteSelect');
  NEXRAD_SITES.forEach(site => {
    const opt = document.createElement('option');
    opt.value = site.id;
    opt.textContent = `${site.id} - ${site.name}`;
    sel.appendChild(opt);
  });
}

let radarOverlay = null;

async function loadRadarOverlay() {
  const siteId = document.getElementById('siteSelect').value;
  const product = document.getElementById('productSelect').value;
  if (!siteId) return;

  // Remove previous overlay
  if (radarOverlay) map.removeLayer(radarOverlay);

  // Find site info
  const site = NEXRAD_SITES.find(s => s.id === siteId);

  // Fetch latest Level III file from AWS S3
  // We'll use the latest file by listing the S3 directory (or you can hardcode for demo)
  // For demo, try latest hour's file (may need to adjust for actual file name)
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, '0');
  const day = String(now.getUTCDate()).padStart(2, '0');
  const hour = String(now.getUTCHours()).padStart(2, '0');
  // Example S3 path: https://noaa-nexrad-level3.s3.amazonaws.com/KTLX/N0Q/KTLX_N0Q_20240530_1900
  // For a real app, you should list the S3 bucket for the latest file
  const s3prefix = `https://noaa-nexrad-level3.s3.amazonaws.com/${siteId}/${product}/`;
  const s3file = `${siteId}_${product}_${year}${month}${day}_${hour}00`;
  const url = s3prefix + s3file;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      alert('No radar data available right now for this site/product.');
      return;
    }
    const buffer = await response.arrayBuffer();
    const decoded = window.nexradLevel3Data.parseLevel3(buffer);

    // Render to canvas
    const canvas = document.getElementById('radarCanvas');
    canvas.width = 600;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    window.nexradLevel3Plot.plotProduct(ctx, decoded, {
      product: product
    });

    // Calculate bounds (approx 230km range)
    const kmToDeg = 230 / 111.32;
    const bounds = [
      [site.lat - kmToDeg, site.lon - kmToDeg],
      [site.lat + kmToDeg, site.lon + kmToDeg]
    ];

    // Create Leaflet overlay from canvas
    radarOverlay = L.imageOverlay(canvas.toDataURL(), bounds, { opacity: 0.7, zIndex: 300 });
    radarOverlay.addTo(map);
    map.setView([site.lat, site.lon], 8);
  } catch (e) {
    alert('Error loading radar data.');
    console.error(e);
  }
}

// Populate drop-downs and set up event listeners
populateSiteSelect();
document.getElementById('loadRadar').onclick = loadRadarOverlay;

// Optionally load initial radar
document.getElementById('siteSelect').selectedIndex = 0;
loadRadarOverlay();
