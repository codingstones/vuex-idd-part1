import Vue from 'vue';
import Vuex from 'vuex';

import { buildRetrieveSessions } from './actions';
import { fetchSessions, fetchSessionsError, fetchSessionsSuccess } from './mutations';

Vue.config.debug = true;
Vue.use(Vuex);

const initialState = {
  sessions: [],
  loading: false,
  error: '',
};

export const store = new Vuex.Store({
  state: initialState,
  mutations: {
    FETCH_SESSIONS: fetchSessions,
    FETCH_SESSIONS_SUCCESS: fetchSessionsSuccess,
    FETCH_SESSIONS_ERROR: fetchSessionsError,
  },
  actions: {
    retrieveSessions: buildRetrieveSessions(),
  },
  getters: {
    sessions: state => state.sessions,
    loading: state => state.loading,
    error: state => state.error,
  },
});

