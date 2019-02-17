var z = 0;
function drawImage(event) {
  var old_html = document.getElementById("screen").innerHTML;
  if (old_html.includes("Select audio")){
    old_html = "";
  }
  console.log(old_html);
  var x = event.clientX;
  var y = event.clientY;
  console.log(x);
  console.log(y);
  document.getElementById("screen").innerHTML = old_html + '\n <img src="./red.jpg" style="position: absolute; left:' + x + 'px; top:' + y + 'px; z-index: ' + z + ';">'; 
  z++;
  console.log(z);
}