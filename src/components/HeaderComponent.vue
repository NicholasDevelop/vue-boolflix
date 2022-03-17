<template>
    <header>
      <img src="../assets/img/Boolflix.svg" alt="">

      <div class="search-container">
        <input class="search-bar" type="text" @keyup.enter="setSearch" v-model="search" placeholder="Cosa vuoi vedere?">
        <button class="search-button" @click="setSearch">Search</button>
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
          this.search = ''
      }
  }
}
</script>

<style lang="scss">
header{
    background-color: #141414;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 58px;
    z-index: 9999999;

    img{
        width: 200px;
    }

    .search-container{
        display: flex;
        align-items: center;
        gap: 15px;

        .search-bar{
          background-color: rgba($color: #5247478f, $alpha: 0.3);
          border-radius: 8px;
          width: 300px;
          height: 24px;
          color: rgba(255, 255, 255, 0.7);
          padding: 3px 10px;
        }

        .search-button{
          background-color: #D81F26;
          border-radius: 10px;
          border: none;
          color: rgb(27, 26, 26);
          font-size: 14px;
          font-weight: 700;
          height: 24px;
          width: 70px;
        }

        &:hover .search-button{
          box-shadow: 0 0 14px #D81F26;
        }
    }
}
</style>