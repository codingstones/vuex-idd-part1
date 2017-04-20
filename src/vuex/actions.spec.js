import { sinon, expect, resolvedStub, rejectedStub } from '../../test/utils/test-helpers';
import { RetrieveSessions } from './actions';
import { FETCH_SESSIONS, FETCH_SESSIONS_ERROR, FETCH_SESSIONS_SUCCESS } from './mutations';

describe('Session actions', () => {
  const A_SESSION = {};
  const A_SESSION_LIST = [A_SESSION];
  let retrieveSessions, sessionsApiStub;

  beforeEach(() => {
    sessionsApiStub = resolvedStub('retrieveSessions', A_SESSION_LIST);
    retrieveSessions = new RetrieveSessions(sessionsApiStub);
  });

  describe('When retrieving sessions', () => {
    let commit,
      state;
    beforeEach(() => {
      commit = sinon.stub();
      state = {};
    });

    it('finishes with success', () => {
      retrieveSessions.run({ commit, state });

      expect(commit).calledWith(FETCH_SESSIONS);
      expect(commit).calledWith(FETCH_SESSIONS_SUCCESS, A_SESSION_LIST);
    });

    it('finishes with error', () => {
      const backendError = Error('Backend Error');
      sessionsApiStub = rejectedStub('retrieveSessions', backendError);

      retrieveSessions = new RetrieveSessions(sessionsApiStub);

      retrieveSessions.run({ commit, state });

      expect(commit).calledWith(FETCH_SESSIONS);
      expect(commit).calledWith(FETCH_SESSIONS_ERROR, backendError);
    });
  });
});
