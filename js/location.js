document.addEventListener("DOMContentLoaded", () => {
  if (!navigator.geolocation) {
    document.getElementById("city").innerText = "Location not supported";
    return;
  }

  navigator.geolocation.getCurrentPosition(success, error);
});

function success(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
    .then(res => res.json())
    .then(data => {
      const city =
        data.address.city ||
        data.address.town ||
        data.address.suburb ||
        "Your area";

      const state = data.address.state || "Nigeria";

      document.getElementById("city").innerText = city + ",";
      document.getElementById("state").innerText = state + ", Nigeria";
    });
}

function error() {
  document.getElementById("city").innerText = "Location blocked";
  document.getElementById("state").innerText = "";
}

