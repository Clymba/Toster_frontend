<template>
  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>Уровень TMMI</th>
          <th>Подраздел</th>
          <th>Описание</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, index) in data" :key="index">
          <tr v-if="item.level">
            <td>{{ item.level }}</td>
            <td colspan="2"></td> <!-- Для первого уровня нет подразделов -->
          </tr>
          <template v-for="(section, sectionIndex) in item.sections" :key="sectionIndex">
            <tr v-if="section.subheader">
              <td></td> <!-- Пустая ячейка для уровня -->
              <td>{{ section.subheader }}</td>
              <td colspan="2"></td> <!-- Для раздела нет описания -->
            </tr>
            <template v-for="(subsection, subSectionIndex) in section.subsections" :key="subSectionIndex">
              <tr>
                <td></td> <!-- Пустая ячейка для уровня -->
                <td></td> <!-- Пустая ячейка для подраздела -->
                <td><span>{{ subsection.subheader }}</span></td> <!-- Подзаголовок -->
                <td></td> <!-- Пустая ячейка для описания -->
              </tr>
              <!-- Добавляем строки в качестве подзаголовков -->
              <template v-for="(row, rowIndex) in subsection.rows" :key="'row_' + rowIndex">
                <tr>
                  <td><span>{{ row.description }}</span></td> <!-- Описание -->
                </tr>
              </template>
            </template>
          </template>
        </template>
      </tbody>
    </table>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        groups: [
          {
            name: "Group 1",
            subgroups: [
              {
                name: "Subgroup A",
                customers: [
                  { representative: "Representative A1", name: "Customer A1", country: "Country A1", editing: false },
                  { representative: "Representative A2", name: "Customer A2", country: "Country A2", editing: false }
                ]
              },
              {
                name: "Subgroup B",
                customers: [
                  { representative: "Representative B1", name: "Customer B1", country: "Country B1", editing: false }
                ]
              }
            ]
          },
          {
            name: "Group 1",
            subgroups: [
              {
                name: "Subgroup A",
                customers: [
                  { representative: "Representative A1", name: "Customer A1", country: "Country A1", editing: false },
                  { representative: "Representative A2", name: "Customer A2", country: "Country A2", editing: false }
                ]
              },
              {
                name: "Subgroup B",
                customers: [
                  { representative: "Representative B1", name: "Customer B1", country: "Country B1", editing: false }
                ]
              }
            ]
          },
        ]
      };
    },
    methods: {
      startEditing(event, customer) {
        customer.editing = true;
        this.$nextTick(() => {
          event.target.focus();
        });
      },
      endEditing(customer) {
        customer.editing = false;
      },
      saveChanges() {
        // Your saveChanges method logic here
      }
    }
  };
  </script>
<style>
.table-wrapper {
  overflow-x: auto;
  max-width: 100%;
}

table {
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

th, td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 12px;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.subheader, .subheader1 {
  background-color: #e0e0e0;
  font-weight: bold;
}

.subheader1 {
  background-color: #d3d3d3; /* Different color for subgroup header */
}
</style>