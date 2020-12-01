function btnAnimation() {
  let btn = document.getElementById('radioBtn')
  btn.classList.add("animate__animated","animate__pulse");
}

function btnNoAnimation() {
  let btn = document.getElementById('radioBtn')
  btn.classList.remove("animate__animated","animate__pulse");
}

function showPlay(box) {
  box.classList.add("animate__animated","animate__bounce");
  let play = box.children[0]
  play.classList.remove("shadow")
  play.classList.add("shadowV")
}

function hidePlay(box) {
  box.classList.remove("animate__animated","animate__bounce");
let play = box.children[0]
play.classList.remove("shadowV")
play.classList.add("shadow")
}
