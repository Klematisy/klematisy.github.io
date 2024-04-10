var whiteButton1 = document.getElementById("whiteAir1");
var pinkButton1 = document.getElementById("pinkAir1");
var goldenButton1 = document.getElementById("goldenAir1");
var redButton1 = document.getElementById("redAir1");
var blackButton1 = document.getElementById("blackAir1");


whiteButton1.onclick = function(){
    document.getElementById("whiteAir1").style.borderColor = "lightblue";
}

pinkButton1.onclick = function(){
    document.getElementById("donbassAir1").src = "images/Air/pink.png";
}

goldenButton1.onclick = function(){
    document.getElementById("donbassAir1").src = "images/Air/golden.png";
}

redButton1.onclick = function(){
    document.getElementById("donbassAir1").src = "images/Air/PRed.png";
}

blackButton1.onclick = function(){
    document.getElementById("donbassAir1").src = "images/Air/black.png";
}