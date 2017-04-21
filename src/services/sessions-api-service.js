const fakeSessions = [{
  id: 1,
  title: 'User story mapping',
  description: 'Bring your post-its',
  facilitator: 'Mike Smith',
  place: 'Parrot room',
  datetime: 'Today at 6 PM',
},
{
  id: 2,
  title: 'BDD',
  description: 'Beer Driven Development',
  facilitator: 'Jessica Oliver',
  place: 'Bar',
  datetime: 'Tomorrow at 12 AM',
}];

function retrieveSessions() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const probability = Math.random();
      if (probability < 0.6) resolve(fakeSessions);
      else reject('Connection problem');
    }, 1000);
  });
}

export default function buildSessionsApi() {
  return { retrieveSessions };
}
