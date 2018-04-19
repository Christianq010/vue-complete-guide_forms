import Vue from 'vue';
import Vuex from 'vuex';
import { STATUS_CODES } from 'http';

Vue.use(Vuex);

export const tore = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        }
    }
});