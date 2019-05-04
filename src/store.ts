import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
let apiHost = 'http://localhost:8000';

export default new Vuex.Store({
	state: {
		apiToken: {},
		accessToken: null,
		nickname: null,
		subject: null,
		difficult: null,
		topic: null
	},
	getters: {
		apiToken: state => {
			return state.apiToken;
		},
		subject: state => {
			return state.subject;
		},
		difficult: state => {
			return state.difficult;
		},
		topic: state => {
			return state.topic;
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
			state.nickname = null;
		},

		updateAccessToken: (state, accessToken) => {
      		state.accessToken = accessToken;
    	},

    	updateNickName: (state, nickname) => {
      		state.nickname = nickname;
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
			localStorage.setItem('nickname', resp.data.username);
			commit('updateAccessToken', resp.data.token);
			commit('updateNickName', resp.data.username);
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
      localStorage.removeItem('nickname');
      commit('logout');
    },

	fetchAccessToken({ commit }) {
      commit('updateAccessToken', localStorage.getItem('accessToken'));
      commit('updateNickName', localStorage.getItem('nickname'));
    },


	subject({commit}) {
		axios({
			method: 'get',
			url: `${apiHost}/subject_data/`,
		}).then((resp: any) => {
			commit('set', { type: 'subject', items: JSON.parse(resp.data) });
		}, () => {
			commit('set', { type: 'subject', items: null });
		});
	},


	difficult({commit}) {
		axios({
			method: 'get',
			url: `${apiHost}/difficult_data/`,
		}).then((resp: any) => {
			commit('set', { type: 'difficult', items: JSON.parse(resp.data) });
		}, () => {
			commit('set', { type: 'difficult', items: null });
		});
	},


	topic({commit}, data: any) {
		axios({
			method: 'get',
			url: `${apiHost}/topic_data/${data.subject}/${data.difficult}`,
		}).then((resp: any) => {
			commit('set', { type: 'topic', items: JSON.parse(resp.data) });
		}, () => {
			commit('set', { type: 'topic', items: null });
		});
	},

  },
});

//commit - вызов мутации
