import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
let apiHost='http://localhost:8000';

export default new Vuex.Store({
  state: {
  	apiToken:{},
  },
  getters: {
  	apiToken: state =>{
  		return state.apiToken;
  	}
  },
  mutations: {
	set(state: any, {type, items}) {
		state[type] = items;
	},
  },

  actions: {
	auth({commit}, data: any) {
		data = `username=${data.username}&password=${data.password}`;
		axios({
			method: 'post',
			url: `${apiHost}/api-token-auth/`,
			data
		}).then((resp: any) => {
			commit('set', { type: 'apiToken', items: resp.data });
		}, () => {
			commit('set', { type: 'apiToken', items: {} });
		});
	},
  },
});
