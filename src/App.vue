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
    <div class="loading" :class="movies.lenght == 0 ? 'active' : ''">
      <div class="spinner"></div>
      <h2>Scrivi nella barra di ricerca il film o la serie tv che vuoi vedere</h2>
    </div>

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
    background-color: #141414;
    color: rgb(240, 238, 238);
    height: 100vh;
  

  .film-container{
    background-color: #141414;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px 5px;
    padding: 150px 20px 40px 20px;
  }

  .loading{
    height: calc(100vh - 320px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.active{
      display: none;
    }

    .spinner{
      width: 80px;
      aspect-ratio: 1;
      border: 4px solid #D81F26;
      filter: drop-shadow(0 0 7px #D81F26);
      border-radius: 50%;
      margin-bottom: 30px;
      animation: loading 1.5s linear infinite;
      border-top: none;
      border-left: none;
    }

    @keyframes loading{
      from {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    h2{
      font-size: 32px;
      text-shadow: 0 0 8px #D81F26;
    }
  }
}
</style>
