function thumbYT(){
    url = document.getElementById("inputUrl").value
    let ht = document.getElementById('inserted') 
    let toEdit = document.getElementById("maindiv")
    
    
    let videoId = ""
    if (url.includes('watch')){
        videoId = url.split("=")[1]
    }
    else{
        videoId = url.split("/")[3]
    }
    arr = [
            {"name" : "Maximum Quality" , "id": "maxres" , "id2": "maxres2"} , 
            {"name" : "High quality" , "id": "hq" , "id2": "hq2"} ,
            {"name" : "Standard Quality" , "id": "sd" , "id2": "sd2"} , 
            {"name" : "Low quality" , "id": "mq" , "id2": "mq2"}
        ]
    quality = ["maxresdefault.jpg" , "hqdefault.jpg", "sddefault.jpg" , "mqdefault.jpg"]

    for (let i = 0 ; i<4 ; i++){
        let imgUrl = "http://img.youtube.com/vi/" + videoId + "/" + quality[i];
        arr[i].url = imgUrl
    }
    let html = ""
    arr.forEach(element => {
        let x = element.name
        let e = document.getElementById(element.id)
        let img_id = element.id + "_img"
        let btn_id = element.id + "_btn"

        e.innerHTML = `<div class = "visible" id = ${element.id2}>
        <hr class="featurette-divider light">
        <button type="button" id = ${btn_id} onclick = "download(event)" class="btn btn-outline-secondary px-4">Download ${x}</button>
        <div class="overflow-hidden py-4">
            <div class="container px-5">
              <img src= ${element.url} id = ${img_id} class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy">
            </div>
          </div>
      </div>
      </div>
      `
    });
}

function download(e) {
    const img_id = e.target.id.split("_")[0] + "_img";
    const imgUrl = document.getElementById(img_id).src;
    const fileName = imgUrl.split("/").pop();
    
    var link = document.createElement("a");
    link.download = fileName;
    link.href = imgUrl;
    link.setAttribute("target", "_blank");
    link.click();
    link.remove();
  }

