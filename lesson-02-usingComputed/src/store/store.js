import Vue from 'vue';
import Vuex from 'vuex';

//Declare using vuex
Vue.use(Vuex);

// creating the central store
export const store = new Vuex.Store({
    state: {
        products: [
            {name: 'Banana Skin', price: 20},
            {name: 'Shiny Star', price: 40},
            {name: 'Green Shells', price: 60},
            {name: 'Red Shells', price: 80}
        ]
    }
})
