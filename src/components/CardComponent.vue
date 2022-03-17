<template>
    <div class="card">
      <img class="card-img" v-if="element.poster_path" :src="`https://image.tmdb.org/t/p/w342${element.poster_path}`" alt="">
      <img class="not-found" v-else src="../assets/img/not-found-image.jpg" alt="">

      <div class="card-description">        
        <h3>Title: {{ element.title || element.name}}</h3>
        <p>Original Title: {{ element.original_title || element.original_name}} </p>
        <p>Story: {{ element.overview }}</p>
        <p class="language">Language: 
          <img class="flag-icon"
          alt="United States"
          :src="`http://purecatamphetamine.github.io/country-flag-icons/3x2/${getFlag(element.original_language)}.svg`"/>
        </p>
        <p>Vote: {{ element.vote_average }}</p>
        <div class="star-wrapper">
          <p class=star-color v-for="(el, i) in 5" :key="i">
            <span v-if="i < stars(element)">&starf;</span>
            <span v-else>&star;</span>
          </p>
        </div>
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
    getFlag: function( unicode ) {
      if( unicode === 'en') {
        unicode ='gb'
      }
      return unicode.toUpperCase()
    },
    stars: function (el){
      return Math.ceil(el.vote_average / 2)
    }
  }
}
</script>

<style lang="scss">
.card{
  max-width: 342px;
  position: relative;

  &:hover .card-description{
    visibility: visible;
    z-index: 10;
  }

  &:hover .card-img, .not-found{
    transition: 1s;
    opacity: 0.5;
    transform: scale(1.2);
    z-index: 5;
  }

  .card-img, .not-found{
    position: relative;
    width: 342px;
    border-radius: 7px;
    aspect-ratio: 0.7;
    object-fit: cover;
    z-index: 1;
  }

  .card-description{
    max-height: 460px;
    position: absolute;
    top: 50%;
    padding: 40px 0;
    transform: translateY(-50%);
    visibility: hidden;
    overflow-y: scroll;
    
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
}
</style>