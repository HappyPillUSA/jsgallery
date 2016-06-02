/* ===  gallery.js  06/02/2016  SeaWuf  === */

var origText = null; // global

function upDate(previewPic){
  document.getElementById("image").style.background = "#f33 url" + "(" + previewPic.src.trim() + ")";

  origText = document.getElementById("image").innerHTML.trim();
  document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo(){
  document.getElementById("image").style.background = "#8e68ff none";
  document.getElementById("image").innerHTML = origText;
}
