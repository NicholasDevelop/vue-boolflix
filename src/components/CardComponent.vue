<template>
    <div class="card">
      <img :src="`https://image.tmdb.org/t/p/w342${element.poster_path}`" alt="">
      <h3>{{ element.title }}</h3>
      <p>{{ element.original_title }}  
        <img class="flag-icon" v-if="flags[ element.original_language ]" :src="flags[ element.original_language ]"/> 
        <span v-else>{{element.original_language}}</span>
      </p>
      <p>{{ element.vote_average }}</p>
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
  // methods: {
  //   stars: function (elemnt){
  //     return Math.ceil((element.vote_average / 2))
  //   }
  // }
}
</script>

<style lang="scss">
.card{

  p{

    .flag-icon{
      width: 20px;
    }
  }
}
</style>