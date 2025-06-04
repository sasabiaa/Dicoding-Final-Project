<template>
  <div id="app">
    <Sidebar />
    <Dashboard />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Dashboard from './components/Dashboard.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    Dashboard,
  },
};
</script>

<style scoped>
body {
  font-family: 'Poppins', sans-serif;
}
</style>
