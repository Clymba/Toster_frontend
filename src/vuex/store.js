import { createApp } from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const app = createApp({}); // Создаем пустое приложение Vue

app.use(Vuex); // Используем Vuex в приложении Vue

const store = new Vuex.Store({
    state: {
        table: [],
        tmmi_meta: []
    },
    actions: {
        GET_TABLE_FROM_API({ commit }) {
            return axios('http://localhost:3000/levels', {
                method: 'GET'
            })
            .then((response) => {
                commit('SET_TABLE_TO_VUEX', response.data)
            })
        },
        GET_META_DATA_FROM_API({ commit }) {
            return axios('http://localhost:3000/tmmi_meta', {
                method: 'GET'
            })
            .then((response) => {
                commit('SET_META_DATA_TO_VUEX', response.data) 
            })
        }
    },
    mutations: {
        SET_TABLE_TO_VUEX: (state, table) => {
            state.table = table
        },
        SET_META_DATA_TO_VUEX: (state, tmmi_meta) => { 
            state.tmmi_meta = tmmi_meta 
        }
    },
    getters: {
        TABLE(state) {
            return state.table;
        },
        DATA(state) {
            return state.tmmi_meta;
        }
    }
})

app.use(store);

export default store;
