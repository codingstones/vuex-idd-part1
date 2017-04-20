import buildSessionsApi from '../services/sessions-api-service';
import { FETCH_SESSIONS, FETCH_SESSIONS_ERROR, FETCH_SESSIONS_SUCCESS } from './mutations';

export function retrieveSessionsAction(sessionsApi) {
  function run({ commit }) {
    commit(FETCH_SESSIONS);

    sessionsApi.retrieveSessions().then((sessions) => {
      commit(FETCH_SESSIONS_SUCCESS, sessions);
    }
    , (error) => {
      commit(FETCH_SESSIONS_ERROR, error);
    });
  }
  return { run };
}

export function buildRetrieveSessionsAction() {
  return retrieveSessionsAction(buildSessionsApi()).run;
}
