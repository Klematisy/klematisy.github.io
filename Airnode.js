const whiteAirButton = document.getElementById("whiteAir1");
const pinkAirButton = document.getElementById("pinkAir1");
const goldenAirButton = document.getElementById("goldenAir1");
const redAirButton = document.getElementById("redAir1");
const blackAirButton = document.getElementById("blackAir1");


whiteAirButton.onclick = function(){
    document.getElementById("donbassAir1").src = "images/Air/air.png";
}

pinkAirButton.onclick = function(){
    document.getElementById("donbassAir1").src = "images/Air/pink.png";
}

goldenAirButton.onclick = function(){
    document.getElementById("donbassAir1").src = "images/Air/golden.png";
}

redAirButton.onclick = function(){
    document.getElementById("donbassAir1").src = "images/Air/PRed.png";
}

blackAirButton.onclick = function(){
    document.getElementById("donbassAir1").src = "images/Air/black.png";
}