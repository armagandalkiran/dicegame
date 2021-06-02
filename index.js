var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

document.querySelector("img").setAttribute("src","images/dice"+randomNumber1+".png");
var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
document.querySelector("img.img2").setAttribute("src","images/dice"+randomNumber2+".png");
//document.querySelectorAll("img")[0...]

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "PLAYER 1 WINS";
}
else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "DRAW";
}
else {
  document.querySelector("h1").innerHTML = "PLAYER 2 WINS";
}
