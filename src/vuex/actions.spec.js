import { sinon, expect, resolvedStub, rejectedStub } from '../../test/utils/test-helpers';
import { retrieveSessionsAction } from './actions';
import { FETCH_SESSIONS, FETCH_SESSIONS_ERROR, FETCH_SESSIONS_SUCCESS } from './mutations';

describe('Session actions', () => {
  const A_SESSION = {};
  const A_SESSION_LIST = [A_SESSION];
  let retrieveSessions, sessionsApiStub;

  beforeEach(() => {
    sessionsApiStub = resolvedStub('retrieveSessions', A_SESSION_LIST);
    retrieveSessions = retrieveSessionsAction(sessionsApiStub);
  });

  describe('When retrieving sessions', () => {
    let commit;
    beforeEach(() => {
      commit = sinon.stub();
    });

    it('finishes with success', () => {
      retrieveSessions.run({ commit });

      expect(commit).calledWith(FETCH_SESSIONS);
      expect(commit).calledWith(FETCH_SESSIONS_SUCCESS, A_SESSION_LIST);
    });

    it('finishes with error', () => {
      const backendError = Error('Backend Error');
      sessionsApiStub = rejectedStub('retrieveSessions', backendError);

      retrieveSessions = retrieveSessionsAction(sessionsApiStub);

      retrieveSessions.run({ commit });

      expect(commit).calledWith(FETCH_SESSIONS);
      expect(commit).calledWith(FETCH_SESSIONS_ERROR, backendError);
    });
  });
});

