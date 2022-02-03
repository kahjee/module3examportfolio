const key ="api_key=998d4060106c046855c445392aef8990";
const url ="https://api.themoviedb.org/3";
const popular_movie = url + "/discover/movie?sort_by=popularity.desc&" + key;
const img_url = "https://image.tmdb.org/t/p/w500";
const searchmovie = url + '/search/movie?' + key;

const search = document.getElementById('search');
const form =  document.getElementById('searchform');


fetch(popular_movie) 
    .then (
        function(response) {
            if (response.status !== 200) {
                console.log(
                    "Looks like there was a problem. Status Code: " + response.status
                );

                return;

            }

            getMovies();

            function getMovies(){
                response.json().then(function (data) {
                    const movieData = data.results;
                    console.log(movieData);
                    showMovies(movieData);
                })

            }
            function showMovies(data) {
        
                data.forEach(function(movie) {
                    const {title, vote_average, poster_path, overview} = movie;
                    const movieDiv = document.createElement("div");
                    movieDiv.classList.add("movie");
                    movieDiv.innerHTML = `
                        <div class="movieimage">
                            <img src="${img_url+poster_path}" class="border-img" width="250" height="358">
                        
                            <div class="plot">
                                <div class="plottitle">PLOT</div>
                                <div class="plotactual">${overview}</div>
                            </div>
                        </div>

                        <div class="info">
                            <h3>${title}</h3>
                            <span class="green position">${vote_average}</span>
                        </div>
                    `;
                    document.querySelector("#card-container").appendChild(movieDiv);

                })
            }

        }
    )

    

    .catch(function(err) {
        console.log(err+ "404");
    });