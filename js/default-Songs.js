/*GLOBAL VARIABLE */
var songs = []


function displaySongs() {
  for (var i = 0; i < 6; i++) {
    buildSongItem(randomNumber7digit())
  }
}

/* NUMERIC OPERATIONS */
function randomNumber7digit() {
  let res = "31353";
  for (var i = 0; i < 2; i++) {
    let rnd = Math.floor(Math.random() * 10);
    res += rnd
  }
  return res;
}


function buildSongItem(number) {
  let div = document.createElement("div");
  div.classList.add("song-item");
  div.id = number

  let img = document.createElement("img");
  img.classList.add("song-img");
  img.alt = "albun"

  let divText = document.createElement("div");
  divText.classList.add("song-item-text");

  let h5 = document.createElement("h5");
  h5.classList.add("song-name");

  let p = document.createElement("p");
  p.classList.add("song-artist");

  div.appendChild(img);
  div.appendChild(divText);
  divText.appendChild(h5);
  divText.appendChild(p);


  DZ.api('/track/'+number, function(response){
  h5.innerText = response.title;
  p.innerText = response.artist.name;
  img.src = response.artist.picture_medium;

  if (response.title != undefined) {
    document.getElementById('song-list').appendChild(div);
  }

  });


}


//buildSongItem(randomNumber7digit())
displaySongs()
