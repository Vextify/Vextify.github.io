const coin = document.querySelector("#coin");
const button = document.querySelector("#flip");
const status = document.querySelector("#status");

function deferFn(callback, ms) {
  setTimeout(callback, ms);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var x = document.getElementById("tails");
var z = document.getElementById("heads");

function flipCoin() {
  coin.setAttribute("class", "");
  const random = getRandomInt(5);
  const randomh = getRandomInt(2);
  const randomt = getRandomInt(2);
  if (random > 2) {
    string = "heads";
  } else {
    string = "tails";
  }

  if (randomh === 0) {
    x.style.backgroundImage = "url(images/fw.png)";
  }
  if (randomh === 1) {
    x.style.backgroundImage = "url(images/cw.png)";
  }
  if (randomt === 0) {
    z.style.backgroundImage = "url(images/hr.png)";
  }
  if (randomt === 1) {
    z.style.backgroundImage = "url(images/jv.png)";
  }

  const result = string;
  deferFn(function () {
    coin.setAttribute("class", "animate-" + result);
  }, 100);
}

button.addEventListener("click", flipCoin);