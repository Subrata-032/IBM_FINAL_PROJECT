let videoData = JSON.parse(localStorage.getItem("videoData"));
console.log(videoData);

let mainContainer = document.getElementById("videoContainer");
async function showVideo(data) {
    let iframe = document.createElement("iframe");
    console.log(data);
    iframe.src = data;
    iframe.width = "1500";
    iframe.height = "800";
    // iframe.frameBorder = "0";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    mainContainer.append(iframe);
}

showVideo(videoData);