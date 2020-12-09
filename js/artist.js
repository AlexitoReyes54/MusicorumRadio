/* INITIALIZE THE API */


function hello() {
  document.getElementById("web-body").classList.add("invisible")
  setTimeout(function () {

    document.getElementById("web-body").classList.remove("invisible")
    document.getElementById("web-body").classList.add("visible")
  }, 100);
}

document.getElementById("web-body").addEventListener("onload",hello());

   DZ.init({
     appId  : '450622',
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


   // Then, request the user to log in
   DZ.login(function(response) {
   	if (response.authResponse) {
   		console.log('Welcome!  Fetching your information.... ');
   		DZ.api('/user/me', function(response) {
   			console.log('Good to see you, ' + response.name + '.');
   		});
   	} else {
   		console.log('User cancelled login or did not fully authorize.');
   	}
   }, {perms: 'basic_access,email'});


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
  div.style.backgroundImage = "url("+ response.picture_medium +")"
  if (response.name != undefined) {
    document.getElementById('box-space').appendChild(div);
  }
});

}

displayBoxes()
