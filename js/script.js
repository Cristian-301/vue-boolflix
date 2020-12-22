var app = new Vue(
  {
    el: "#root",
    data: {
      search: "",
      movies: [],
      series: [],

    },
    methods: {
      // funzione per ricerca film
      searchMovies: function() {
        var self = this;
        axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: "e08df24142fc22f5d0f9fe1a9fbef609",
            query: self.search,
            language: "it-IT"
          }
        })
        .then(function (response) {
          self.movies = response.data.results
          console.log("Movies: ", self.movies);
        })

      },
      // funzione per ricerca serie
      searchSeries: function () {
        var self = this;
        axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            api_key: "e99307154c6dfb0b4750f6603256716d",
            query: self.search,
            language: "it-IT"
          }
        })
        .then(function (response) {
          self.series = response.data.results
          console.log("Serie: ", self.series);
        })
        self.search = "";
      }

    }
  }
)
