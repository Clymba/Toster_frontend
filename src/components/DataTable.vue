<template>
  <div>
    <select v-model="selectedSchemeId" @change="loadData">
      <option value="">Select Scheme</option>
      <option v-for="scheme in schemes" :key="scheme.id" :value="scheme.id">{{ scheme.name }}</option>
    </select>
    <br>
    <div v-if="selectedScheme">
      <h2>{{ selectedScheme.name }}</h2>
      <p>Description: {{ selectedScheme.description }}</p>
      <hr>
      <div v-for="(level, index) in selectedScheme.levels" :key="index">
        <h3>Level {{ level.level }}</h3>
        <div v-for="(section, sIndex) in level.sections" :key="sIndex">
          <h4>{{ section.header }}</h4>
          <table>
            <thead>
              <tr>
                <th>Order</th>
                <th>Description</th>
                <th>Choices</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, rIndex) in section.rows" :key="rIndex">
                <td>{{ row.order }}</td>
                <td>{{ row.description }}</td>
                <td>{{ row.choices.join(', ') }}</td>
              </tr>
            </tbody>
          </table>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  name: "DataViewer",
  setup() {
    const schemes = ref([]);
    const selectedSchemeId = ref('');
    const selectedScheme = ref(null);

    const fetchData = async (schemeId) => {
      try {
        const response = await axios.get(`http://localhost:3000/${schemeId}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
    };

    const loadData = async () => {
  try {
    if (selectedSchemeId.value) {
      console.log('Selected scheme ID:', selectedSchemeId.value); // Отладочное сообщение для проверки выбранной схемы
      const data = await fetchData(selectedSchemeId.value);
      console.log('Data for selected scheme:', data); // Отладочное сообщение для проверки данных выбранной схемы
      selectedScheme.value = data;
    } else {
      selectedScheme.value = null;
    }
  } catch (error) {
    console.error('Error loading data:', error);
  }
};


    const fetchSchemes = async () => {
  try {
    const response = await axios.get('http://localhost:3001/schemes');
    console.log('Response:', response); // Отладочное сообщение для проверки ответа от сервера
    schemes.value = response.data; // Изменено: response.data.schemes на response.data
    console.log('Schemes:', schemes.value); // Отладочное сообщение для проверки данных схем
  } catch (error) {
    console.error('Error fetching schemes:', error);
  }
};

    return { schemes, selectedSchemeId, selectedScheme, fetchData, loadData, fetchSchemes };
  },
  mounted() {
    this.fetchSchemes();
  }
};
</script>
