import buildSessionsApi from '../services/sessions-api-service';
import { FETCH_SESSIONS, FETCH_SESSIONS_ERROR, FETCH_SESSIONS_SUCCESS } from './mutations';

export class RetrieveSessions {
  constructor(sessionsApi) {
    this.sessionsApi = sessionsApi;
  }

  run = ({ commit }) => {
    commit(FETCH_SESSIONS);

    this.sessionsApi.retrieveSessions().then((sessions) => {
      commit(FETCH_SESSIONS_SUCCESS, sessions);
    }
    , (error) => {
      commit(FETCH_SESSIONS_ERROR, error);
    });
  };
}

export function buildRetrieveSessions() {
  return new RetrieveSessions(buildSessionsApi()).run;
}
