import { createApp } from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const app = createApp({}); // Создаем пустое приложение Vue

app.use(Vuex); // Используем Vuex в приложении Vue

const store = new Vuex.Store({
    state: {
        table: []
    },
    actions: {
        GET_TABLE_FROM_API({ commit }) {
            return axios.get('http://localhost:3000/levels')
                .then((response) => {
                    console.log(response.data); // Просматриваем данные в консоли
                    commit('SET_TABLE_TO_VUEX', response.data);
                })
                .catch((error) => {
                    console.error('Ошибка при получении данных:', error);
                });
        }
    },
    mutations: {
        SET_TABLE_TO_VUEX: (state, table) => {
            state.table = table
        }
    },
    getters: {
        TABLE(state) {
            return state.table;
        }
    }
})

app.use(store); // Используем ваше хранилище Vuex в приложении Vue

export default store;
