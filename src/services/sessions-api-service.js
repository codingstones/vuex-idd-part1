const fakeSessions = [{
  title: 'User story mapping',
  description: 'Bring your post-its',
  facilitator: 'Mike Smith',
  place: 'Parrot room',
  datetime: 'Today at 6 PM',
},
{
  title: 'BDD',
  description: 'Beer Driven Development',
  facilitator: 'Jessica Oliver',
  place: 'Bar',
  datetime: 'Tomorrow at 12 AM',
}];

function retrieveSessions() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeSessions);
    }, 1000);
  });
}

export default function buildSessionsApi() {
  return { retrieveSessions };
}
