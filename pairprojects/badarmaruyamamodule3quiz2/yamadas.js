
fetch("https://ghibliapi.herokuapp.com/films") 
.then (function (response) {
    if (response.status !== 200) {
        console.log(
            "Looks like there was a problem. Status Code: " + response.status
        );
        return;
    }


    response.json().then(function (data) {
        const yearRelease = data[9].release_date;
        const time = data[9].running_time;
        const title = data[9].title
        const description = data[9].description;
        const director = data[9].director;
        const producer = data[9].producer;

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