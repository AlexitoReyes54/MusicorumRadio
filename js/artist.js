/* INITIALIZE THE API */

   DZ.init({
     appId  : '439622',
     channelUrl : 'http://127.0.0.1:3000/channel.html',
     player: {
   			container: 'player',
         layout:'dark',
   			height : 90,
         format:'Classic',
         color:'eb9605',
   			onload : function(){console.log("player on");}
   		}
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
//div.style.backgroundImage = "url(https://cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg)"
//img.src = obj.picture;
let black =  document.createElement("div");
black.classList.add("black");

let h4 = document.createElement("h4");
h4.classList.add("artist-text");

//Append elements
div.appendChild(black);
black.appendChild(h4);

DZ.api('/artist/'+number, function(response){
  h4.innerText = response.name;
  console.log(response.name);
  div.style.backgroundImage = "url("+ response.picture_medium +")"
  if (response.name != undefined) {
    document.getElementById('box-space').appendChild(div);
  }
});

}

displayBoxes()
