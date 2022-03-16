<template>
    <header>
      <img src="../assets/img/Boolflix.svg" alt="">

      <div class="search-container">
        <input type="text" @keyup.enter="setSearch" v-model="search" placeholder="Inserisci il titolo del film o telefilm da cercare">
        <button @click="setSearch">Cerca</button>
      </div>
    </header>
</template>

<script>
import state from '../store.js'
import { fetchData } from '../store.js'

export default {
  data() {
    return {
      search: '',
    }
  },
  methods: {
      setSearch: function(){
          state.search = this.search

          fetchData()
      }
  }
}
</script>

<style lang="scss">
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;

    img{
        width: 200px;
    }

    .search-container{
        display: flex;
        align-items: center;
        gap: 15px;
    }
}
</style>