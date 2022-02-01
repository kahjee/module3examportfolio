
fetch("https://ghibliapi.herokuapp.com/films") 
.then (
    function(response) {
        if (response.status !== 200) {
            console.log(
                "Looks like there was a problem. Status Code: " + response.status
            );

            return;

        }

        getMovieData()
        
        function getMovieData() {
            response.json().then(function (data) {
            
                const movieData = data;
                displayPoster(movieData)
                // const poster = data[0].image;
                // // document.getElementById("studio-poster").src = poster;
                // document.getElementById("poster").innerHTML = 
                //     `<img src="${poster}" class="img-position" id="studio-poster" width="223" height="334">`;

            });
        }

        function displayPoster(post) {
            for (let i = 0; i < post.length; i++) {
                const make = document.createElement("img");
                make.src = post[i].image;
                make.className = "img-position";
                make.width = "223";
                make.height = "334";    
                document.querySelector("#flex-container").appendChild(make);
                
                
                
            }
        }

    }
)
.catch(function(err) {
    console.log(err+ "404");
});
