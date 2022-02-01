
fetch("https://ghibliapi.herokuapp.com/films") 
.then (function (response) {
    if (response.status !== 200) {
        console.log(
            "Looks like there was a problem. Status Code: " + response.status
        );
        return;
    }


    response.json().then(function (data) {
        const yearRelease = data[10].release_date;
        const time = data[10].running_time;
        const title = data[10].title
        const description = data[10].description;
        const director = data[10].director;
        const producer = data[10].producer;

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