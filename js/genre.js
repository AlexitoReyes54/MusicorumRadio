
/* MAIN FUNTIONS */
function displayGenreBoxes() {
  let genres = [132,113,129,122,197,152]
  for (var i = 0; i < 6; i++) {
    buildGenreBox(genres[i])
  }
}


/* BUILD ARTIST BOX */
function buildGenreBox(number) {

let div = document.createElement("div");
div.classList.add("genre-box");
//div.style.backgroundImage = "url(https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg)"
//img.src = obj.picture;
let black1 =  document.createElement("div");
black1.classList.add("black1");

let h4 = document.createElement("h4");
h4.classList.add("artist-text");

//Append elements
div.appendChild(black1);
black1.appendChild(h4);

DZ.api('/genre/'+number, function(response){
  h4.innerText = response.name;
  console.log(response.picture_medium);
  div.style.backgroundImage = "url("+ response.picture_medium +")"
  if (response.picture_medium != undefined) {
    document.getElementById('box-space-genre').appendChild(div);
  }
});

}

//displayGenreBoxes()
