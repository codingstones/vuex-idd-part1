<template>
  <div>
    <div class="content-panel__header">
      <div class="title">
        <h3>SESSIONS</h3>
      </div>
    </div>

    <div class="content-panel__scroll" id="session-list-panel">

      <h2 class="title error" v-if="loading">LOADING...</h2>

      <h2 class="error" v-if="error">SERVER ERROR: {{ error }}</h2>

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

  import * as Vuex from 'vuex';

  export default {
    name: 'sessions',
    methods: {
      ...Vuex.mapActions(['retrieveSessions']),
    },
    computed: {
      ...Vuex.mapGetters(['loading', 'sessions', 'error']),
    },
    created() {
      this.retrieveSessions();
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
