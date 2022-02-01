let apiKey= 'AIzaSyCHaVLjTjuRvKoJiHW5re3SO6IWR2_6IOM';
let vidhttp= 'https://www.googleapis.com/youtube/v3/playlistItems?';
let playlistId = 'PLycUf2zAuVF-WpxRGQjqUZVdoGoqrSXSk';

fetch(vidhttp + new URLSearchParams({
    key: apiKey,
    part: 'snippet',
    maxResults: 5,
    playlistId: playlistId
}))
    
    .then(function (response) {

        if (response.status !== 200) {
            console.log(
                "Looks like there was a problem. Status code: " + response.status
            );

            return;
        }
        
        loadVid();

        function loadVid() {
            response.json().then(function(data){
                // console.log(data);
                const id= data.items[0].snippet.resourceId.videoId;
                const id2= data.items[1].snippet.resourceId.videoId;
                const id3= data.items[2].snippet.resourceId.videoId;
                const id4= data.items[3].snippet.resourceId.videoId;
                mainVid(id);
                mainvid2(id2);
                mainvid3(id3);
                mainvid4(id4);
                
                
                
    
    
            });
        }

        function mainVid(id) {
            document.getElementById('video').innerHTML =
                `<iframe width="400" height="262" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        }

        function mainvid2(id2) {
            document.getElementById('video-1').innerHTML =
                `<iframe width="400" height="262" src="https://www.youtube.com/embed/${id2}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        }

        function mainvid3(id3) {
            document.getElementById('video-2').innerHTML =
                `<iframe width="400" height="262" src="https://www.youtube.com/embed/${id3}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        }
        function mainvid4(id4) {
            document.getElementById('video-3').innerHTML =
                `<iframe width="400" height="262" src="https://www.youtube.com/embed/${id4}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        }

       
    })

    .catch(function (err) {
        console.log(err + "404");
    })