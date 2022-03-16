<template>
    <div class="card">
      <img :src="`https://image.tmdb.org/t/p/w342${element.poster_path}`" alt="">
      <h3>{{ element.title }}{{element.name}}</h3>
      <p>{{ element.original_title }} {{element.original_name}} 
        <img class="flag-icon" v-if="flags[ element.original_language ]" :src="flags[ element.original_language ]"/> 
        <span v-else>{{element.original_language}}</span>
      </p>
      <p>{{ element.vote_average }}</p>
      <div class="star-wrapper">
        <p class=star-color v-for="(el, i) in 5" :key="i">
          <span v-if="i < stars(element)">&starf;</span>
          <span v-else>&star;</span>
        </p>
      </div>
    </div>
</template>

<script>

export default {
  props: {
    element: {
      type: Object,
      required: true,
    },
    flags: {
      type: Object,
    }
  },
  methods: {
    stars: function (el){
      return Math.ceil(el.vote_average / 2)
    }
  }
}
</script>

<style lang="scss">
.card{

  p{

    .flag-icon{
      width: 20px;
    }
  }
  .star-wrapper{
    display: flex;
    gap: 6px;

    .star-color{
      color: rgb(231, 231, 47);
    }
  }
}
</style>