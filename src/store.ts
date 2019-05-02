import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
let apiHost = 'http://localhost:8000';

export default new Vuex.Store({
	state: {
		apiToken: {},
		accessToken: null,
	},
	getters: {
		apiToken: state => {
			return state.apiToken;
		},
	},
	mutations: {
		set(state: any, {type, items}) {
			state[type] = items;
		},

		logout(state:any) {
			if(!!state.apiToken){
				state.apiToken = {};
			}
			state.accessToken = null;
		},

		updateAccessToken: (state, accessToken) => {
      		state.accessToken = accessToken;
    	},
	},

  actions: {
	auth({commit}, data: any) {
		data = `username=${data.username}&password=${data.password}`;
		return axios({
			method: 'post',
			url: `${apiHost}/api-token-auth/`,
			data,
		}).then((resp: any) => {
			commit('set', { type: 'apiToken', items: resp.data });
			localStorage.setItem('accessToken', resp.data.token);
			commit('updateAccessToken', resp.data.token);
		}, (err:any) => {
			commit('set', { type: 'apiToken', items: {} });
		});
	},

	reg({commit}, data: any) {
		data = `username=${data.username}&email=${data.email}&password=${data.password}&password2=${data.password2}`;
		axios({
			method: 'post',
			url: `${apiHost}/accounts/signup/`,
			data,
		}).then((resp: any) => {
			commit('set', { type: 'apiToken', items: resp.data });
		}, () => {
			commit('set', { type: 'apiToken', items: {} });
		});
	},

	logout({ commit }) {
      localStorage.removeItem('accessToken');
      commit('logout');
    },

	fetchAccessToken({ commit }) {
      commit('updateAccessToken', localStorage.getItem('accessToken'));
    },

  },
});

//commit - вызов мутации
