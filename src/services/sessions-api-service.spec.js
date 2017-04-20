import { expect } from '../../test/utils/test-helpers';
import buildSessionsApi from './sessions-api-service';

describe('Sessions API client service', () => {
  let sessionsAPI;

  beforeEach(() => {
    sessionsAPI = buildSessionsApi();
  });

  it('retrieves all sessions', () => sessionsAPI.retrieveSessions().then((sessions) => {
    expect(sessions.length).eql(2);
  }));
});
