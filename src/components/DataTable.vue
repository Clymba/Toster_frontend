<template>
  <!-- The AG Grid component -->
  <ag-grid-vue
    :rowData="rowData"
    :columnDefs="colDefs"
    style="height: 500px"
    class="ag-theme-quartz"
  >
  </ag-grid-vue>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css"; 
import { AgGridVue } from "ag-grid-vue3"; 

export default {
  name: "DataTable",
  components: {
    AgGridVue, 
  },
  setup() {

    const rowData = ref([]);
    const colDefs = ref([
      { field: "level", headerName: "Level" },
      { field: "section", headerName: "Section" },
      { field: "order", headerName: "Order" },
      { field: "description", headerName: "Description" },
      { field: "choices", headerName: "Choices", cellRenderer: customSelectRenderer }
    ]);

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/levels'); 
        const levels = response.data;
        const rows = levels.flatMap(level =>
          level.sections.flatMap(section =>
            section.rows.map(row => ({
              level: level.level,
              section: section.header,
              order: section.order,
              description: row.description,
              choices: row.choices.join(', ')
            }))
          )
        );
        rowData.value = rows;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    onMounted(fetchData);

    return { rowData, colDefs };
  }
}

function customSelectRenderer(params) {
  const select = document.createElement('select');
  select.innerHTML = params.value.split(',').map(choice => `<option value="${choice}">${choice}</option>`).join('');
  select.value = params.value || '';
  select.addEventListener('change', (event) => {
    params.setValue(event.target.value);
  });
  return select;
}
</script>
