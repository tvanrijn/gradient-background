var _ = require('lodash');

console.log(_);

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
	updateGradient(color1.value, color2.value);
}

function updateGradient( valueColor1, valueColor2) {
	body.style.background = 
	"linear-gradient(to right, " 
	+ valueColor1 
	+ ", " 
	+ valueColor2
	+ ")";

	css.textContent = body.style.background + ";";
}

function makeRandomColor() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 70%, 1)';
}

function setGradientRandom() {
	var newColor1 = makeRandomColor();
	var newColor2 = makeRandomColor();
	updateGradient(newColor1, newColor2);
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setGradientRandom);