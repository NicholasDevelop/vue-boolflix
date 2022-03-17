<template>
  <div id="app">

    <Header/>

    <!-- <h2>Film</h2> -->
    <div class="film-container">
      <Card v-for="movie in movies" :key="movie.id" :element="movie" :flags="flags"/>
    </div>

    <!-- <h2>Series</h2>
    <div class="film-container">
      <Card v-for="serie in series" :key="serie.id" :element="serie" :flags="flags"/>
    </div> -->

  </div>
</template>

<script>
import Card from './components/CardComponent.vue'
import Header from './components/HeaderComponent.vue'
import state from './store.js'

export default {
  name: 'App',
  computed: {
    movies: function() {
      return state.movies
    },
    search: function() {
      return state.search
    },
    flags: function() {
      return state.flags
    }
  },
  components: {
    Header,
    Card,
  }
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    background-color: #0e0e0e;
    color: rgb(231, 231, 231);
  

  .film-container{
    background-color: #141414;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>
