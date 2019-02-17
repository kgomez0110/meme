var z = 0;
var started = false;
var imgUrl = "";
var audioSelection = "";
var audioFile = new Audio();
//var bgUrl = "";
function drawImage(event) {
  if (started){
    var old_html = document.getElementById("screen").innerHTML;
    if (old_html.includes("Select audio")){
      old_html = "";
    }
    console.log(old_html);
    var x = event.clientX;
    var y = event.clientY;
    document.getElementById("screen").innerHTML = old_html + '\n <img src="' + imgUrl + '" style="position: absolute; left:' + x + 'px; top:' + y + 'px; z-index: ' + z + '; pointer-events: none; user-drag: none; user-select: none;">';
    z++;
    const newAudio = audioFile.cloneNode();
    newAudio.play();
    console.log(audioSelection);

  }
}

function start(){
  document.getElementById("screen").style.z_index = 0;
  document.getElementById("menu").style.z_index = -1;
  imgUrl = document.getElementById("myFile").value;
  audioSelection = document.getElementById("audioSelector").value;
  audioFile = new Audio("./assets/" + audioSelection);
  bgUrl = document.getElementById("myBackground").value;
  document.getElementById("menu").innerHTML = "";
  document.getElementById("menu").className = "";
  console.log(document.getElementById("page_body").style.background);
  document.getElementById("page_body").style.background = "url(" + bgUrl + ")";
  console.log(document.getElementById("page_body").style.background);
  started = true;
}
