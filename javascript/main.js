const overlay = document.getElementById("body");
const overlay1 = document.getElementById("ear1");
const overlay2 = document.getElementById("ear2");
// const longhair = document.getElementById("backhair");
// const longhair1 = document.getElementById("fronthair");

var x = document.getElementsByClassName("skincolor");
for (var i = 0; i < x.length; i++) {
  x[i].onclick = changeSkin;
}

// var y = document.getElementsByClassName("haircolor");
// for (var i = 0; i < y.length; i++) {
//   x[i].onclick = hairColor;
// }

function changeSkin(e) {
  let hex = e.target.getAttribute("data-hex");
  overlay.style.fill = hex;
  overlay1.style.fill = hex;
  overlay2.style.fill = hex;
}

// function hairColor(f) {
//   let hex1 = f.target.getAttribute("data-hex")
//   longhair.style.fill = hex;
//   longhair1.style.fill = hex;
// }

