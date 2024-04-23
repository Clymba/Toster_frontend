<template>
  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>Уровень TMMI</th>
          <th>Участники</th>
          <th>Статус</th>
          <th>Критерии</th>
          <th>Ссылка</th>
          <th>Комментарий</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in table" :key="item.level">
          <tr class="header">
            <td colspan="6">{{ item.level }}</td>
          </tr>
          <template v-for="item2 in item.sections" :key="item2.header">
            <tr class="subheader" @dblclick="editSection(item2)">
              <td colspan="6">{{ item2.header }}</td>
            </tr>
            <!-- Вложенный цикл для подразделов -->
            <template v-for="item3 in item2.subsections" :key="item3.subheader">
              <tr class="subheader1" @dblclick="editSubsection(item3)">
                <td colspan="6">{{ item3.subheader }}</td>
              </tr>
              <!-- Цикл для строк -->
              <template v-for="(row, index) in item3.rows" :key="row.description">
                <tr>
                  <td>{{ row.description }}</td>
                  <td @dblclick="editRow(row, index, 1)">
                    <span v-if="!row.editing || editedColumnIndex !== 1">{{ row.participants }}</span>
                    <input v-else type="text" v-model="row.participants" @blur="saveEdit(row, index, 1)">
                  </td>
                  <td @dblclick="editRow(row, index, 2)">
                    <span v-if="!row.editing || editedColumnIndex !== 2">{{ row.status }}</span>
                    <input v-else type="text" v-model="row.status" @blur="saveEdit(row, index, 2)">
                  </td>
                  <td @dblclick="editRow(row, index, 3)">
                    <span v-if="!row.editing || editedColumnIndex !== 3">{{ row.criteria }}</span>
                    <select v-else v-model="row.criteria" @blur="saveEdit(row, index, 3)">
                      <option value="0">0</option>
                      <option value="15">15</option>
                      <option value="50">50</option>
                      <option value="85">85</option>
                      <option value="100">100</option>
                    </select>
                  </td>
                  <td @dblclick="editRow(row, index, 4)">
                    <span v-if="!row.editing || editedColumnIndex !== 4">{{ row.link }}</span>
                    <input v-else type="text" v-model="row.link" @blur="saveEdit(row, index, 4)">
                  </td>
                  <td @dblclick="editRow(row, index, 5)">
                    <span v-if="!row.editing || editedColumnIndex !== 5">{{ row.comment }}</span>
                    <input v-else type="text" v-model="row.comment" @blur="saveEdit(row, index, 5)">
                  </td>
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
  name: "MainScheme",
  props: {
    table: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      editedColumnIndex: -1, // Индекс редактируемого столбца
    };
  },
  methods: {
    editSection(section) {
      console.log("Editing section:", section);
    },
    editSubsection(subsection) {
      console.log("Editing subsection:", subsection);
    },
    editRow(row, index, columnIndex) {
      // Проверяем, что columnIndex не равен 0 (первый столбец)
      if (columnIndex !== 0) {
        this.editedColumnIndex = columnIndex; // Устанавливаем индекс редактируемого столбца
        row.editing = true; // Устанавливаем флаг редактирования для строки
        console.log("Editing row:", row);
      }
    },
    saveEdit(row, index, columnIndex) {
      // Проверяем, что columnIndex не равен 0 (первый столбец)
      if (columnIndex !== 0) {
        this.editedColumnIndex = -1; // Сбрасываем индекс редактируемого столбца
        row.editing = false; // Сбрасываем флаг редактирования
        console.log("Saved edit:", row);
      }
    },
  },
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
  background-color: #63DB93;
  font-weight: bold;
}

.header, .subheader, .subheader1 {
  background-color: #8eebb4; /* Light green background color */
  font-weight: bold;
}

.subheader1 {
  background-color: #00B74A; /* Light gray background color */
}
</style>

  
  
  