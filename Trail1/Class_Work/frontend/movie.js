const url = 'https://imdb236.p.rapidapi.com/imdb/top250-movies';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '6428ad850emsh3daade26df77600p10bfa6jsn03e07ea37917',
		'x-rapidapi-host': 'imdb236.p.rapidapi.com'
	}
};


async function getData() {
    try {
        const data = await fetch(url, options);
        const res = await data.json(); // Await the JSON response
        console.log(res);
        showData(res);
    } catch (error) {
        console.log('Error:', error);
    }
}

const container = document.getElementById('main_box2');

function showData(res) {
    document.getElementById('movie').style.display = "none";

    res.forEach((item) => {
        let box = document.createElement("div");
        box.className = "video";

        let poster = document.createElement("img");
        poster.src= item.primaryImage;

        let title1 = document.createElement("h2");
        title1.innerHTML = item.primaryTitle;

        // let iframe= document.createElement("iframe");
        // iframe.href = item.url;
        // iframe.height="300px"
        // iframe.width="300px"

        // Add clickable link to IMDB profile
        // let link = document.createElement("div");
        // link.src = item.primaryImage;
        // link.target = "_blank";
        // link.height="400px";
        // link.width="400px"
        
        // link.appendChild(poster);

        box.append(poster,title1);
        container.append(box);
        box.onclick=()=>{
                let obj ={
                    item
                }
      
                localStorage.setItem("videoData", JSON.stringify(obj));
      
                window.location.href = "movieVideo.html"
            }
    });
}


getData();