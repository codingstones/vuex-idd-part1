import { expect } from '../../test/utils/test-helpers';
import {
  fetchSessions, fetchSessionsError, fetchSessionsSuccess,
} from './mutations';

describe('Session mutations', () => {

  describe('When fetching sessions from server', () => {

    it('fetchSessions', () => {
      const state = {};
      fetchSessions(state);
      expect(state).eql({ loading: true, sessions: [], error: '' });
    });

    it('fetchSessionsSuccess', () => {
      const ANY_SESSION = {};
      const ANY_SESSION_LIST = [ANY_SESSION];
      const state = {};
      fetchSessionsSuccess(state, ANY_SESSION_LIST);
      expect(state).eql({ loading: false, sessions: ANY_SESSION_LIST, error: '' });
    });

    it('fetchSessionsError', () => {
      const state = {};
      fetchSessionsError(state, Error('any error'));
      expect(state).eql({ loading: false, error: 'Error: any error' });
    });
  });
});

