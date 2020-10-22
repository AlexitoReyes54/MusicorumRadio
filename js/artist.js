/* INITIALIZE THE API */
DZ.init({
  appId  : '439622',
  channelUrl : 'http://127.0.0.1:3000/channel.html'
});

/* MAIN FUNTIONS */
function displayBoxes() {
  let rnd = randomNumber()
  for (var i = 0; i < 6; i++) {
    buildArtistBox(rnd++)
  }
}

/* NUMERIC OPERATIONS */
function randomNumber() {
  return Math.floor(Math.random() * 10)+12
}

function findNumberInArray(number, array) {
  var numberExist = false
  array.forEach((item, i) => {
    if (item == number) {
      numberExist = true
    }
  });
  return numberExist;
}

/* BUILD ARTIST BOX */
function buildArtistBox(number) {

let div = document.createElement("div");
div.classList.add("artist-box");

let img = document.createElement("img");
img.classList.add("artist-box-img");
//img.src = obj.picture;
img.alt = "Artist"

let h4 = document.createElement("h4");
//h4.innerText = obj.name;

//Append elements
div.appendChild(img);
div.appendChild(h4);

DZ.api('/artist/'+number, function(response){
  h4.innerText = response.name;
  img.src = response.picture_medium;
  if (response.name != undefined) {
    document.getElementById('box-space').appendChild(div);
  }
});

}

//displayBoxes()
