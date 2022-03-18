<template>
    <div class="card">
      <img class="card-img" v-if="element.poster_path" :src="`https://image.tmdb.org/t/p/w342${element.poster_path}`" alt="">
      <img class="not-found" v-else src="../assets/img/not-found-image.jpg" alt="">

      <div class="card-description">        
        <h3 class="card-title">{{ element.title || element.name}}</h3>
        <p class="card-original-title font-small"><span class="font-bold mr-s">Original Title:</span> {{ element.original_title || element.original_name}} </p>
        <p class="card-story font-small"><span class="font-bold mr-s">Overview:</span> {{ element.overview }}</p>
        <p class="language font-bold font-small"><span class="font-bold mr-s">Language:</span>
          <img class="flag-icon"
          alt="United States"
          :src="`http://purecatamphetamine.github.io/country-flag-icons/3x2/${getFlag(element.original_language)}.svg`"/>
        </p>
        <p class="vote font-bold"><span class="font-bold mr-s">Vote:</span> {{ element.vote_average }}</p>
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

  &:hover .card-img, &:hover .not-found{
    transition: 1s;
    opacity: 0.3;
    transform: scale(0.95);
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
    padding: 40px 25px;
    transform: translateY(-50%);
    visibility: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    row-gap: 8px;

    .card-title{
      margin-bottom: 5px;

      &::after{
        content: '';
        display: block;
        width: 60%;
        height: 2px;
        background-color: #D81F26;
        margin-top: 20px;
      }
    }
    
      .flag-icon{
        width: 20px;
    }
    
    .star-wrapper{
      font-size: 20px;
      display: flex;
      gap: 6px;
  
      .star-color{
        color: #D81F26;
      }
    }
  }
  .font-bold{
    font-weight: 700;
  }

  .font-small{
    font-size: 14px;
  }

  .mr-s{
    margin-right: 5px;
  }
}
</style>