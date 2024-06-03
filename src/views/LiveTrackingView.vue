<template>
  <div class="live-tracking">
    <!-- Row start -->
    <div class="row gutters">
      <div class="col-sm-9">
        <div class="card">
          <div class="card-header">
            <div class="card-title">Live Tracking</div>
          </div>
          <div class="card-body p-0">
            <div id="map" style="height: 25rem; width: 100%;"></div>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card">
          <div class="card-header">
            <div class="card-title">Detail Vehicles</div>
          </div>
          <div class="card-body">
            <div class="row gutters m-1">
              <div class="col-sm-3 p-0">
                <div class="bg-info text-sm-center">
                  <button class="btn btn-sm text-light">All</button>
                </div>
              </div>
              <div class="col-sm-3 p-0">
                <div class="bg-success text-sm-center">
                  <button class="btn btn-sm text-light">Driving</button>
                </div>
              </div>
              <div class="col-sm-3 p-0">
                <div class="bg-warning text-sm-center">
                  <button class="btn btn-sm text-light">Idling</button>
                </div>
              </div>
              <div class="col-sm-3 p-0">
                <div class="bg-danger text-sm-center">
                  <button class="btn btn-sm text-light">Parked</button>
                </div>
              </div>
            </div>
            <div class="customScroll5">
              <div class="products-sold-container">
                <div class="product">
                  <div class="product-details">
                    <img src="../components/img/mobiles/mob1.jpg" alt="Google Dashboard">
                    <div class="product-title">
                      <div class="title">A 6782 IB</div>
                      <div class="price">Vario 125</div>
                    </div>
                  </div>
                  <div class="product-sold">
                    <div class="sold text-success">Driving</div>
                    <div class="sold-title">Bike</div>
                  </div>
                </div>
                <div class="product">
                  <div class="product-details">
                    <img src="../components/img/mobiles/mob2.jpg" alt="Google Dashboard">
                    <div class="product-title">
                      <div class="title">A 1234 IE</div>
                      <div class="price">X-Ride</div>
                    </div>
                  </div>
                  <div class="product-sold">
                    <div class="sold text-danger">Parked</div>
                    <div class="sold-title">Bike</div>
                  </div>
                </div>
                <div class="product">
                  <div class="product-details">
                    <img src="../components/img/mobiles/mob3.jpg" alt="Google Dashboard">
                    <div class="product-title">
                      <div class="title">A 3649 IOP</div>
                      <div class="price">Avanza</div>
                    </div>
                  </div>
                  <div class="product-sold">
                    <div class="sold text-success">Driving</div>
                    <div class="sold-title">Car</div>
                  </div>
                </div>
                <div class="product">
                  <div class="product-details">
                    <img src="../components/img/mobiles/mob4.jpg" alt="Google Dashboard">
                    <div class="product-title">
                      <div class="title">A 7108 IKH</div>
                      <div class="price">Brio Cross</div>
                    </div>
                  </div>
                  <div class="product-sold">
                    <div class="sold text-warning">Idling</div>
                    <div class="sold-title">Car</div>
                  </div>
                </div>
                <div class="product">
                  <div class="product-details">
                    <img src="../components/img/mobiles/mob5.jpg" alt="Google Dashboard">
                    <div class="product-title">
                      <div class="title">A 1021 IPE</div>
                      <div class="price">Yaris</div>
                    </div>
                  </div>
                  <div class="product-sold">
                    <div class="sold text-danger">Parked</div>
                    <div class="sold-title">Car</div>
                  </div>
                </div>
                <div class="product">
                  <div class="product-details">
                    <img src="../components/img/mobiles/mob6.jpg" alt="Google Dashboard">
                    <div class="product-title">
                      <div class="title">A 2461 IHA</div>
                      <div class="price">Avanza</div>
                    </div>
                  </div>
                  <div class="product-sold">
                    <div class="sold text-danger">Parked</div>
                    <div class="sold-title">Car</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Row end -->
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import L from 'leaflet';

onMounted(() => {
  const map = L.map('map').setView([-6.232822521452914, 106.8212793832288], 14);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaXJmYW5wdWxlIiwiYSI6ImNqdnpxbHFvbzAzM3UzeWxrcWtkbTVhamIifQ.TJM77G3WOEIOIYzk_IiWKQ', {
    maxZoom: 18,
    minZoom: 3,
    id: 'mapbox/streets-v12',
    tileSize: 512,
    zoomOffset: -1
  }).addTo(map);

  const carIcon = L.icon({
    iconUrl: "../components/img/car.png",
    iconSize: [100, 100],
    iconAnchor: [16, 16],
    // popupAnchor: [popupX, popupY]
  });

  const marker = L.marker([-6.232822521452914, 106.8212793832288], { icon: carIcon }).addTo(map);
  marker.bindPopup("Hello, I'm here!");
});
</script>

