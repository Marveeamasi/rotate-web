var circle = document.getElementById("circle");
var leftBtn = document.getElementById("leftBtn");
var rightBtn = document.getElementById("rightBtn");

var rotateValue = circle.style.transform;
var rotateSum;

leftBtn.onclick = function(){
rotateSum = rotateValue + "rotate(-120deg)";
circle.style.transform = rotateSum;
rotateValue = rotateSum;
}

rightBtn.onclick = function(){
rotateSum = rotateValue + "rotate(120deg)";
circle.style.transform = rotateSum;
rotateValue = rotateSum;
}
