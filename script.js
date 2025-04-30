const cities = [
    { name: "Chicago", lat: 41.8781, lng: -87.6298, tz: "America/Chicago" },
    { name: "New York", lat: 40.7128, lng: -74.006, tz: "America/New_York" },
    { name: "Los Angeles", lat: 34.0522, lng: -118.2437, tz: "America/Los_Angeles" },
    { name: "Miami", lat: 25.7617, lng: -80.1918, tz: "America/New_York" },
    { name: "Austin", lat: 30.2672, lng: -97.7431, tz: "America/Chicago" },
    { name: "Seattle", lat: 47.6062, lng: -122.3321, tz: "America/Los_Angeles" },
    { name: "Boston", lat: 42.3601, lng: -71.0589, tz: "America/New_York" },
    { name: "Phoenix", lat: 33.4484, lng: -112.074, tz: "America/Phoenix" },
    { name: "Atlanta", lat: 33.749, lng: -84.388, tz: "America/New_York" },
    { name: "Denver", lat: 39.7392, lng: -104.9903, tz: "America/Denver" },
];

const locationSelect = document.getElementById("locationSelect");
const locationBtn = document.getElementById("currentLocationBtn");
const coordsDisplay = document.getElementById("coordinates");

cities.forEach(city => {
    const option = document.createElement("option");
    option.value = `${city.lat},${city.lng}`;
    option.textContent = city.name;
    locationSelect.appendChild(option);
});

locationSelect.addEventListener("change", () => {
    const selectedCity = cities[locationSelect.selectedIndex];
    const { lat, lng, tz } = selectedCity;
    coordsDisplay.textContent = `Latitude: ${lat}, Longitude: ${lng}`;
    fetchSunData(lat, lng);
    document.getElementById("todayTimezone").textContent = tz;
    document.getElementById("tomorrowTimezone").textContent = tz;
});

locationBtn.addEventListener("click", () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported.");
      return;
    }