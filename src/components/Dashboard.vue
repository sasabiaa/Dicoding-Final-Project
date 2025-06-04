<template>
  <div class="main-container">
    <Sidebar />
    <div class="content">
      <header>
        <div class="user-greeting">
          <h4>Hello, {{ userName }} 👋</h4>
          <p>Selamat datang di Dashboard, mari cek tanaman anda!</p>
        </div>
        <div class="status-info">
          <!-- Optional status info can be added here -->
        </div>
      </header>

      <!-- Data Lahan -->
      <div class="map-container">
        <img src="path-to-map-image" alt="Lahan P" class="map-img" />
      </div>

      <!-- Data Sensor and Disease Detection Containers -->
      <div class="data-container">
        <!-- Data Sensor -->
        <div class="data-sensor">
          <h3>Data Sensor</h3>
          <div class="sensor-items">
            <div class="sensor-item" v-for="(sensor, index) in sensors" :key="index">
              <div class="sensor-icon">
                <i :class="sensor.icon"></i>
              </div>
              <div class="sensor-info">
                <h4>{{ sensor.name }}</h4>
                <p>{{ sensor.value }}°C</p>
                <small>{{ sensor.timestamp }}</small>
              </div>
            </div>
          </div>
        </div>

        <!-- Disease Detection -->
        <div class="disease-detection">
          <h3>Deteksi Penyakit</h3>
          <div class="disease-item" v-for="(disease, index) in diseases" :key="index">
            <div class="disease-info">
              <i class="fas fa-leaf"></i>
              <p>{{ disease.name }} - <strong>{{ disease.diagnosis }}</strong></p>
            </div>
            <button class="view-details">→</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import io from 'socket.io-client';

export default {
  name: 'Dashboard',
  components: {
    Sidebar,
  },
  data() {
    return {
      userName: 'Salsabila Y',
      sensors: [
        {
          name: "Intensitas Cahaya",
          value: 'Loading...',
          icon: "fas fa-sun",
          timestamp: "Loading..."
        },
        {
          name: "Suhu",
          value: 'Loading...',
          icon: "fas fa-thermometer-half",
          timestamp: "Loading..."
        },
        {
          name: "Kelembapan Udara",
          value: 'Loading...',
          icon: "fas fa-cloud-sun",
          timestamp: "Loading..."
        },
        {
          name: "Kelembapan Tanah",
          value: 'Loading...',
          icon: "fas fa-water",
          timestamp: "Loading..."
        }
      ],
      diseases: [
        {
          name: "Cultivo 1",
          diagnosis: "Sehat"
        },
        {
          name: "Cultivo 2",
          diagnosis: "Tertular Penyakit"
        }
      ]
    };
  },
  created() {
    // Connect to the Socket.io server
    const socket = io(); // Connect to the backend server

    // Listen for real-time updates from the backend and update Vue's reactive data
    socket.on('SMART-FARM/hum', (data) => {
      this.sensors[0].value = data; // Update the value for Humidity sensor
      this.sensors[0].timestamp = new Date().toLocaleString(); // Set timestamp
    });

    socket.on('SMART-FARM/temp', (data) => {
      this.sensors[1].value = data; // Update the value for Temperature sensor
      this.sensors[1].timestamp = new Date().toLocaleString(); // Set timestamp
    });

    socket.on('SMART-FARM/kbtn', (data) => {
      this.sensors[2].value = data; // Update the value for Soil Moisture sensor
      this.sensors[2].timestamp = new Date().toLocaleString(); // Set timestamp
    });

    socket.on('SMART-FARM/chy', (data) => {
      this.sensors[3].value = data; // Update the value for Light Intensity sensor
      this.sensors[3].timestamp = new Date().toLocaleString(); // Set timestamp
    });
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  margin-left: 250px;
  padding: 20px;
}

.content {
  width: 100%;
  padding: 30px;
}

header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #7ABA78, #F3CA52);
  padding: 10px 20px;
  border-radius: 50px;
}

.user-greeting h4 {
  font-size: 18px;
  margin-left: 20px;
  line-height: 0;
}

.user-greeting p {
  font-size: 14px;
  margin-left: 20px;
  line-height: 0;
}

.status-info {
  font-size: 16px;
}

.map-container {
  width: 100%;
  margin: 20px 0;
}

.map-img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.data-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 30px;
  margin-left: 15px;
}

.data-sensor {
  width: 50%;
}

.disease-detection {
  width: 45%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.data-sensor h3,
.disease-detection h3 {
  font-size: 20px;
  margin-bottom: 15px;
}

.sensor-items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.sensor-item {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.sensor-icon {
  font-size: 40px;
  color: #ff6347;
  margin-bottom: 10px;
}

.sensor-info h4 {
  margin: 0;
  font-weight: bold;
}

.sensor-info p {
  font-size: 24px;
  color: #333;
}

.sensor-info small {
  font-size: 12px;
  color: #777;
}

.disease-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.disease-info {
  display: flex;
  align-items: center;
}

.disease-info i {
  font-size: 20px;
  color: #28a745;
  margin-right: 10px;
}

.view-details {
  background-color: #28a745;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.view-details:hover {
  background-color: #218838;
}
</style>
