// Full NEXRAD site list (sample; add more as needed)
const NEXRAD_SITES = [
  { id: "KABR", name: "Aberdeen, SD", lat: 45.4558, lon: -98.4131 },
  { id: "KCLX", name: "Charleston, SC", lat: 32.6556, lon: -81.0425 },
  { id: "KCAE", name: "Columbia, SC", lat: 33.9486, lon: -81.1186 },
  { id: "KTLX", name: "Oklahoma City, OK", lat: 35.3331, lon: -97.2775 },
  { id: "KFWS", name: "Dallas/Ft Worth, TX", lat: 32.5731, lon: -97.3031 },
  { id: "KGRR", name: "Grand Rapids, MI", lat: 42.8931, lon: -85.5444 },
  { id: "KHGX", name: "Houston/Galveston, TX", lat: 29.4719, lon: -95.0789 },
  // ...add all 160+ sites as desired...
];

const map = L.map('map').setView([39.8283, -98.5795], 5);

// Base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// NOAA NWS National Mosaic WMS (Base Reflectivity)
const radarWMS = L.tileLayer.wms('https://opengeo.ncep.noaa.gov/geoserver/conus/conus_bref_qcd/ows?', {
  layers: 'conus_bref_qcd',
  format: 'image/png',
  transparent: true,
  attribution: 'NOAA/NWS'
}).addTo(map);

// Add NEXRAD site dots
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
    map.setView([site.lat, site.lon], 8);
  });
  marker.addTo(map);
});

// Populate dropdown
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

// Zoom to site when button clicked
document.getElementById('zoomToSite').onclick = () => {
  const siteId = document.getElementById('siteSelect').value;
  const site = NEXRAD_SITES.find(s => s.id === siteId);
  if (site) {
    map.setView([site.lat, site.lon], 8);
  }
};

// Optionally, zoom to first site on load
document.getElementById('siteSelect').selectedIndex = 0;
const firstSite = NEXRAD_SITES[0];
if (firstSite) {
  map.setView([firstSite.lat, firstSite.lon], 8);
}
