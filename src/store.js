import Vue from 'vue'
import axios from 'axios'

const state = Vue.observable({
    search: '',
    movies: [],
    baseURI: 'https://api.themoviedb.org/3',
    flags: {
        it: require('./assets/img/it.png'),
        en: require('./assets/img/en.png')
    }
})

export default state

export function fetchData() {
    axios.get(`${ state.baseURI }/search/movie`,{
    params: {
      api_key: '967f948e33980faf259c08c6cf676913',
      query: state.search,
      language: 'it-IT',
    }
    })
    .then( res => {
        console.log( res.data )
        state.movies = res.data.results
    })
    .catch( error => {
        console.log( error.response )
    }),

    axios.get(`${ state.baseURI }/search/tv`,{
    params: {
        api_key: '967f948e33980faf259c08c6cf676913',
        query: state.search,
        language: 'it-IT'
    }
    })
    .then( res => {
    // console.log( res.data )
        state.movies.push(...res.data.results)
        this.search = ''
    })
    .catch( error => {
        console.log( error.response )
    })
}
