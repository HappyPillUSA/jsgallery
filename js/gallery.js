/* ===  gallery.js  06/01/2016  SeaWuf  === */

var origText = null; // global

function upDate(previewPic){
  var theImage = "url" + "(" + previewPic.src.toLowerCase() + ")";
  console.log("theImage: " + theImage);
  document.getElementById("image").style.backgroundImage = theImage;
  document.getElementById("image").style.backgroundColor = "#f33";

  origText = document.getElementById("image").innerHTML.trim();
  document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo(){
  document.getElementById("image").style.background = "#8e68ff none";
  document.getElementById("image").innerHTML = origText;
}
