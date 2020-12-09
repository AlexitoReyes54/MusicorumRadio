

function search() {
  let keywords = document.getElementById("key").value
  console.log(keywords);
let root = document.getElementById('root');
root.innerHTML = '<br> <p href="#" class="back" onclick="location.reload();"> <i class="fa fa-arrow-left" aria-hidden="true"></i>Volver </p><br><br>\
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
  <tr>\
  </tr>\
</tbody>\
</table>';

  DZ.api('/search/track?q='+keywords, function(response){
    console.log(response.data[0]);
    //buildSongItem(response.data[0].id,1)

    for (var i = 0; i < 20; i++) {
      buildSongItem(response.data[i].id,i+1)
    }
  });
}
