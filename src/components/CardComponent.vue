<template>
    <div>
      <img src="" alt="">
      <h3>{{ element.title }}</h3>
      <p>{{ element.original_title }}  
        <img v-if="flags[ element.original_language ]" :src="flags[ element.original_language ]"/> 
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
  // computed: {
  //   stars: function (elemnt){
  //     return Match.floor((element.vote_average / 2))
  //   }
  // }
}
</script>

<style lang="scss">

</style>