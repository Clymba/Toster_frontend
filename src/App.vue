<template>
  <div id="app">
    <!-- Навигационная панель -->
    <nav class="navigation">
      <ul>
        <li><router-link to="/table">Table</router-link></li>
        <li><router-link to="/report">ReportData</router-link></li>
      </ul>
    </nav>
    <!-- Компоненты -->
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters([
      'TABLE',
      'DATA'
    ])
  },
  methods: {
    ...mapActions([
      'GET_TABLE_FROM_API',
      'GET_META_DATA_FROM_API'
    ])
  },
  mounted() {
    this.GET_TABLE_FROM_API()
    this.GET_META_DATA_FROM_API()
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}

/* Стили для навигации */
.navigation {
  background-color: #333;
  padding: 10px 0;
}

.navigation ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

.navigation ul li {
  margin: 0 10px;
}

.navigation ul li a {
  color: white;
  text-decoration: none;
  font-size: 16px;
}
</style>