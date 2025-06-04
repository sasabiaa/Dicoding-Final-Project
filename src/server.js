const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mqtt = require('mqtt');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Setup MQTT client
const mqttClient = mqtt.connect('mqtt://broker.hivemq.com');

// Subscribe to MQTT topics
const topics = ['SMART-FARM/hum', 'SMART-FARM/temp', 'SMART-FARM/kbtn', 'SMART-FARM/chy'];

mqttClient.on('connect', () => {
  console.log('Connected to MQTT Broker');
  // Subscribe to all sensor topics
  mqttClient.subscribe(topics, (err) => {
    if (err) {
      console.log('Error subscribing to topics', err);
    }
  });
});

// Handle incoming messages from MQTT
mqttClient.on('message', (topic, message) => {
  const data = message.toString();
  console.log(`Received data from topic ${topic}: ${data}`);

  // Emit data to frontend
  io.emit(topic, data);
});

// Serve static files (frontend)
app.use(express.static('public'));

// Set up the server to listen on port 3000
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
