/*GLOBAL VARIABLE */
let index = 1;

function displaySongs() {
  let songs = tracks.topSongs;
  for (var i = 0; i < 6; i++) {
    buildSongItem(songs[i],i+1)

  }
}

function displaySongsDetail(array) {
  for (var i = 0; i < 6; i++) {
    buildSongItem(array[i],i+1)
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


function buildSongItem(number,index) {
  let tr = document.createElement("tr");
  tr.onclick = function() {hello(number)};

  let th = document.createElement("th");
  th.style.scope = "row"


  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");

  tr.appendChild(th);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);


  DZ.api('/track/'+number, function(response){
  td1.innerText = response.title;
  td2.innerText = response.artist.name;
  let duration = Math.floor(response.duration/60)
  td3.innerText = duration +":00";

  if (response.title != undefined) {
    th.innerText = index;
    document.getElementById('songs-list').appendChild(tr);
  }

  });


}

function hello(number) {
  //alert("ok ok")
  DZ.player.playTracks([number])
}

//hello("jj")
//buildSongItem(randomNumber7digit())
displaySongs()
