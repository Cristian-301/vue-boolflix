var app = new Vue(
  {
    el: "#root",
    data: {
      search: "",
      movies: [],
    },
    methods: {
      searchMovie: function(){
        const self = this;

        axios
        .get("https://api.themoviedb.org/3/search/movie?api_key=e08df24142fc22f5d0f9fe1a9fbef609&query=mission&language=it-IT")
        .then(function(response){
          self.movies = response.data.results;
          // console.log(self.movies);
          self.movies.forEach(
            (element) => {
              // console.log(element.title);

              if (element.title.toLowerCase().includes(self.search)) {
                	element.video = true;
                } else {
                  element.video = false;
                }

              }
            );
            self.search = "";

        })

      },


    },

  }
);
