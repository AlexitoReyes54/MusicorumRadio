
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
div.onclick = function() {showGenreMusic(number)};
//div.style.backgroundImage = "url(https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg)"

let black1 =  document.createElement("div");
black1.classList.add("black1");

let h4 = document.createElement("h4");
h4.classList.add("artist-text");

//Append elements
div.appendChild(black1);
black1.appendChild(h4);

DZ.api('/genre/'+number, function(response){
  h4.innerText = response.name;
  div.style.backgroundImage = "url("+ response.picture_medium +")"
  if (response.picture_medium != undefined) {
    document.getElementById('box-space-genre').appendChild(div);
  }
});

}

displayGenreBoxes()

function showGenreMusic(genre) {
  let root = document.getElementById('root');
  root.style.margin = "0px";

  DZ.api('/genre/'+genre, function(response){
    root.innerHTML = '  <div id="mainImg" class="main-image">\
        <p href="#" class="back" onclick="location.reload();"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Volver </p>\
        <div  class="black-main">\
          <h1 id="mainText" class="text-main">Pop Music</h1>\
        </div>\
      </div>\
    <table class="table table-hover table-dark table-detail">\
      <thead>\
    <tr>\
      <th scope="col">#</th>\
      <th scope="col">Song</th>\
      <th scope="col">Artist</th>\
      <th scope="col">Length</th>\
    </tr>\
  </thead>\
    <tbody id="songs-list">\
    </tbody>\
    </table>';

    let bigImage = document.getElementById('mainImg')
    let mainText = document.getElementById('mainText')
    let list = document.getElementById('songs-list')
    mainText.innerText = response.name;
    //bigImage.style.backgroundImage = "url("+ response.picture_medium +")"

    displaySongsDetailx(identifyGenre(response.name))
  });

}

//showGenreMusic()
//location.reload();
function identifyGenre(genre) {
if (genre == "Rock") {
  return tracks.genres.Rock;
}else if (genre == "Pop") {
  return tracks.genres.Pop;
}else if (genre == "Jazz") {
  return tracks.genres.Jazz;
}else if (genre == "Reggaetón") {
  return tracks.genres.Reggaetón;
}else if (genre == "Latino") {
  return tracks.genres.Latino;
}else if (genre == "Dance") {
  return tracks.genres.Dance;
}

}
