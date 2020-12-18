var app = new Vue(
  {
    el: "#root",
    data: {
      movies: [],
    },
    methods: {

    },
    mounted: function() {
      const self = this;

      axios
      .get("https://api.themoviedb.org/3/search/movie?api_key=e08df24142fc22f5d0f9fe1a9fbef609&query=old&language=it-IT")
      .then(function(response){
        self.movies = response.data.results;
      })
      console.log(self.movies);
    }
  }
);
