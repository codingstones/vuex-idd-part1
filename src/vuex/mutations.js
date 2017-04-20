export const FETCH_SESSIONS = 'FETCH_SESSIONS';
export const FETCH_SESSIONS_SUCCESS = 'FETCH_SESSIONS_SUCCESS';
export const FETCH_SESSIONS_ERROR = 'FETCH_SESSIONS_ERROR';

export function fetchSessions(state) {
  state.loading = true;
  state.error = '';
  state.sessions = [];
}

export function fetchSessionsSuccess(state, sessions) {
  state.error = '';
  state.loading = false;
  state.sessions = sessions;
}

export function fetchSessionsError(state, error) {
  state.loading = false;
  state.error = error.toString();
}
