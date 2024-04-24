<template>
  <div>
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
              <template v-for="item3 in item2.subsections" :key="item3.subheader">
                <tr class="subheader1" @dblclick="editSubsection(item3)">
                  <td colspan="6">{{ item3.subheader }}</td>
                </tr>
                <template v-for="(row, index) in item3.rows" :key="row.description">
                  <tr>
                    <td>{{ row.description }}</td>
                    <td @dblclick="editRow(row, index, 1)">
                      <span v-if="!row.editing">{{ row.participants }}</span>
                      <input v-else type="text" v-model="row.participants" @blur="saveEdit(row, index, 1)">
                    </td>
                    <td @dblclick="editRow(row, index, 2)">
                      <span v-if="!row.editing">{{ row.status }}</span>
                      <input v-else type="text" v-model="row.status" @blur="saveEdit(row, index, 2)">
                    </td>
                    <td @dblclick="editRow(row, index, 3)">
                      <span v-if="!row.editing">{{ row.criteria }}</span>
                      <select v-else v-model="row.criteria" @blur="saveEdit(row, index, 3)">
                        <option value="0">0</option>
                        <option value="15">15</option>
                        <option value="50">50</option>
                        <option value="85">85</option>
                        <option value="100">100</option>
                      </select>
                    </td>
                    <td @dblclick="editRow(row, index, 4)">
                      <span v-if="!row.editing">{{ row.link }}</span>
                      <input v-else type="text" v-model="row.link" @blur="saveEdit(row, index, 4)">
                    </td>
                    <td @dblclick="editRow(row, index, 5)">
                      <span v-if="!row.editing">{{ row.comment }}</span>
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
    <!-- Кнопка отправки данных -->
    <button class="submit-button" @click="submitData">Отправить данные</button>
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
  methods: {
    editSection(section) {
      console.log("Editing section:", section);
    },
    editSubsection(subsection) {
      console.log("Editing subsection:", subsection);
    },
    editRow(row, index, columnIndex) {
      if (columnIndex !== 0) {
      // Устанавливаем флаг editing только для конкретной ячейки
      row.editing = true;
      console.log("Editing row:", row);
      }
    },
    saveEdit(row, index, columnIndex) {
      if (columnIndex !== 0) {
        row.editing = false;
        console.log("Saved edit:", row);
      }
    },
    submitData() {
      // Здесь вы можете добавить логику для отправки данных
      console.log("Данные отправлены!");
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
  padding: 1em; /* Адаптивные отступы внутри ячеек */
}

th {
  background-color: #6EDB88;
  font-weight: bold;
  color: #333;
  padding: 1.5em; /* Адаптивные отступы для заголовков */
}

.header {
  background-color: #B7F3D5;
  font-weight: bold;
  color: #333;
  padding: 1em; /* Адаптивные отступы для заголовков */
}

.subheader {
  background-color: #30ba8f; 
  padding: 0.75em; /* Адаптивные отступы для подзаголовков */
}

.subheader1 {
  background-color: #3FC380; 
  padding: 0.75em; /* Адаптивные отступы для подзаголовков */
}

tr:hover {
  background-color: #f5f5f5;
}

.submit-button {
  background-color: #4CAF50; /* Зеленый цвет фона */
  border: none; /* Убираем границу */
  color: white; /* Белый цвет текста */
  padding: 1em 2em; /* Адаптивные отступы внутри кнопки */
  text-align: center; /* Выравнивание текста по центру */
  text-decoration: none; /* Убираем подчеркивание */
  display: inline-block; /* Размещаем кнопку в ряду с другими элементами */
  font-size: 1em; /* Адаптивный размер текста */
  border-radius: 5px; /* Закругляем углы */
  cursor: pointer; /* Заменяем курсор на указатель при наведении */
  transition: background-color 0.3s ease; /* Плавное изменение цвета фона при наведении */
  margin-top: 2em;
}
</style>

