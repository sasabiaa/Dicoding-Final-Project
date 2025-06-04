<template>
  <div class="disease-container">
    <h3>Deteksi Penyakit Tanaman</h3>
    <p>{{ diseaseStatus }}</p>
  </div>
</template>

<script>
export default {
  name: 'DiseaseDetection',
  data() {
    return {
      diseaseStatus: 'Tidak ada penyakit terdeteksi',
    };
  },
};
</script>

<style scoped>

</style>
