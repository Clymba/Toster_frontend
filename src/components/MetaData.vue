<template>
  <div>
    <div class="string_meta">
      <h1>Toster</h1>
      <p>Шаблон оценки:</p>
      <p>Описание:</p>
      <p>Оценка:</p>
      <p>Применяемость:</p>
    </div>
    <div class="ranges">
      <form>
        <p>
          <label for="range">Оценка(0-100):</label> 
          <input type="range" step="5" min="0" max="100" value="0" id="price" name="price">
        </p>
        <p>
          <output for="price" id="priceOutput">10</output>
        </p>
          <p v-if="priceOutput >= 0 && priceOutput <= 15"> Не достигнуто <br> N </p>
          <p v-if="priceOutput >= 16 && priceOutput <= 50"> Частично достигнуто <br> P </p>
          <p v-if="priceOutput >= 51 && priceOutput <= 85"> В основном достигнуто <br> L </p>
          <p v-if="priceOutput >= 86 && priceOutput <= 100"> Полностью достигнуто <br> F </p>
        <p>
          <button type="submit">Отправить</button>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataTable',
  data() {
    return {
      priceOutput: 10
    };
  },
  mounted() {
    const priceInput = document.getElementById('price');
    const priceOutput = document.getElementById('priceOutput');
    const vm = this; // Сохраняем ссылку на экземпляр Vue.js

    priceInput.addEventListener('input', function() {
      priceOutput.textContent = priceInput.value;
      vm.priceOutput = parseInt(priceInput.value); // Обновляем значение priceOutput
    });
  }
};
</script>

<style>
.string_meta {
  background-color: #f0f0f000;
  border-radius: 5px;
}

.ranges {
  padding: 1.30em; /* 20px */
  border: 1px solid #ccc;
  border-radius: 5px;
}

label {
  font-weight: bold;
}

input[type="range"] {
  width: 100%;
}

button[type="submit"] {
  background-color: #4CAF50;
  color: white;
  padding: 0.625em 1.25em; /* 10px 20px */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
</style>
