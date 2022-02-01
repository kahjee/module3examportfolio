
fetch("https://ghibliapi.herokuapp.com/films") 
    .then (function (response) {
        if (response.status !== 200) {
            console.log(
                "Looks like there was a problem. Status Code: " + response.status
            );
            return;
        }


        response.json().then(function (data) {
            const yearRelease = data[14].release_date;
            const time = data[14].running_time;
            const title = data[14].title
            const description = data[14].description;
            const director = data[14].director;
            const producer = data[14].producer;

            document.getElementById("year").innerHTML = yearRelease;
            document.getElementById("duration").innerHTML = time + "min";
            document.getElementById("title").innerHTML = title;
            document.getElementById("description").innerHTML = description;
            document.getElementById("director").innerHTML = "Director: " + director;
            document.getElementById("producer").innerHTML = "Producer: " + producer;
            
        });
    })
    .catch(function(err) {
        console.log(err+ "404");
    });