const whiteAirButton1 = document.getElementById("whiteAir1");
const pinkAirButton1 = document.getElementById("pinkAir1");
const goldenAirButton1 = document.getElementById("goldenAir1");
const redAirButton1 = document.getElementById("redAir1");
const blackAirButton1 = document.getElementById("blackAir1");


whiteAirButton1.onclick = function(){
    document.getElementById("donbassAir1").src = "images/Air/air.png";
    document.getElementById("whiteAir1").style.borderColor = "#205dc5";

    document.getElementById("pinkAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("goldenAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("redAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("blackAir1").style.borderColor = "rgb(218, 218, 218)";
}

pinkAirButton1.onclick = function(){
    document.getElementById("donbassAir1").src = "images/Air/pink.png";
    document.getElementById("pinkAir1").style.borderColor = "#205dc5";

    document.getElementById("whiteAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("goldenAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("redAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("blackAir1").style.borderColor = "rgb(218, 218, 218)";
}

goldenAirButton1.onclick = function(){
    document.getElementById("donbassAir1").src = "images/Air/golden.png";
    document.getElementById("goldenAir1").style.borderColor = "#205dc5";

    document.getElementById("whiteAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("pinkAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("redAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("blackAir1").style.borderColor = "rgb(218, 218, 218)";
}

redAirButton1.onclick = function(){
    document.getElementById("donbassAir1").src = "images/Air/PRed.png";
    document.getElementById("redAir1").style.borderColor = "#205dc5";

    document.getElementById("whiteAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("pinkAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("goldenAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("blackAir1").style.borderColor = "rgb(218, 218, 218)";
}

blackAirButton1.onclick = function(){

    document.getElementById("donbassAir1").src = "images/Air/black.png";
    document.getElementById("blackAir1").style.borderColor = "#205dc5";

    document.getElementById("whiteAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("pinkAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("goldenAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("redAir1").style.borderColor = "rgb(218, 218, 218)";
}