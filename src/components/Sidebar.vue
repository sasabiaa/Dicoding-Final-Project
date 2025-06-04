<template>
  <div class="sidebar">
    <div class="sidebar-header">
        <!-- Logo belum -->
      <img src="" alt="Logo"> 
    </div>
    <ul>
      <li><i class="fas fa-tachometer-alt"></i> Dashboard</li>
      <li><i class="fas fa-chart-line"></i> Analisis</li>
      <li><i class="fas fa-lightbulb"></i> Rekomendasi</li>
      <li><i class="fas fa-history"></i> History</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style scoped>

body{
    font-family: 'Poppins', sans-serif;
}
.sidebar {
  width: 250px;
  background-color: #0A6847;
  color: white;
  position: fixed; 
  top: 0;
  left: 0;
  bottom: 0;
  padding: 20px;
  z-index: 1000; 
}

.sidebar-header img {
  width: 100%;
  height: auto;
}

ul {
  font-size: 16px;
  list-style-type: none;
  padding: 0;
}

ul li {
  margin: 20px 0;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px;
  transition: background-color 0.3s ease, padding 0.3s ease; 
}

ul li i {
  margin-right: 10px;
}

ul li:hover {
  background-color: #7ABA78; 
  padding-left: 10px; 
  border-radius: 10px;
}

ul li:active {
  background-color: #6A9F6D; 
}
</style>
