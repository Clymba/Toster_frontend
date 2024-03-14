<template>
  <div>
    <!-- Ваш основной контент -->
    <DataTable />
  </div>
</template>

<script>
import DataTable from '@/components/DataTable.vue'; // Импортируем компонент Table1

export default {
  name: 'App',
  components: {
    DataTable // Добавляем компонент Table1 в раздел components
  },
  // Другие определения компонента...
};
</script>
