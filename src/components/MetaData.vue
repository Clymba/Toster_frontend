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
  name: 'MetaData',
  props: {
    tmmi_meta: {
      type: Array,
      default: () => [],
    },
  },

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
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 2em;
}

.ranges {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 2em;
}

input[type="range"]::-webkit-slider-thumb {
  background-color: green !important;
}

label {
  font-weight: bold;
}

input[type="range"] {
  width: 100%;
}

output {
  display: block;
  font-weight: bold;
  margin-top: 10px;
}

p {
  margin: 10px;
}

button[type="submit"] {
  background-color: #4CAF50;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #4CAF50;
}

/* Адаптивные стили */
@media screen and (max-width: 768px) {
  .ranges {
    padding: 10px;
  }
}

@media screen and (max-width: 576px) {
  .string_meta,
  .ranges {
    padding: 10px;
    margin-bottom: 1em;
  }
  
  input[type="range"] {
    width: calc(100% - 40px);
  }
}
</style>
