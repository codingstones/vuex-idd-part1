<template>
  <div>
    <div class="content-panel__header">
      <div class="title">
        <h3>SESSIONS</h3>
      </div>
    </div>

    <div class="content-panel__scroll" id="session-list-panel">
      <div class="session-list">
        <div class='session-list__item'
             v-for="(session, index) in sessions">
          <div class="list-col--title">
            <p><a @click="openSessionDetail(session.id)">{{session.title}}</a></p>
            <p class="related">{{session.description}}</p>
          </div>
          <div class="list-col--last-updated-on">
            <p>
              <span class="date" :title="session.datetime">{{session.datetime}}</span>
            </p>
          </div>
          <div class="list-col--person">
            {{ session.facilitator }}
          </div>
          <div class="list-col--place">
            {{ session.place }}
          </div>
        </div>

      </div>
    </div>

    <div class="content-panel__footer">
    </div>
  </div>

</template>

<script>

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

  export default {
    name: 'sessions',
    data() {
      return { sessions: fakeSessions };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
