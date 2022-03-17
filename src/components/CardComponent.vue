<template>
    <div class="card">
      <img class="card-img" v-if="element.poster_path" :src="`https://image.tmdb.org/t/p/w342${element.poster_path}`" alt="">
      <img class="not-found" v-else src="../assets/img/not-found-image.jpg" alt="">
      <h3>Title: {{ element.title || element.name}}</h3>
      <p>Original Title: {{ element.original_title || element.original_name}} </p>
      <p class="language">Language: 
        <img class="flag-icon" v-if="flags[ element.original_language ]" :src="flags[ element.original_language ]"/> 
        <span v-else>{{element.original_language}}</span>
      </p>
      <p>Vote: {{ element.vote_average }}</p>
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
  computed: {
    title: function() {
      // if (this.element.name !== undefined){
      //   return this.element.name
      // }
      // return this.element.title
      return this.element.name || this.element.title
    },
    image: function() {
      return this.element.poster_path ? `https://image.tmdb.org/t/p/w342${this.element.poster_path}` :
      '../assets/img/not-found-image.jpg'
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
  max-width: 342px;

  .card-img{
    width: 342px;
    aspect-ratio: 0.8;
  }

  .not-found{
    width: 342px;
    aspect-ratio: 0.8;
    object-fit: cover;
  }

  .language{


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