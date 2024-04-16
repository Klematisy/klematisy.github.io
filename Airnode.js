function setCookie(name, value) {
    updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    document.cookie = updatedCookie;
  }

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

const whiteAirButton1 = document.getElementById("whiteAir1");
const pinkAirButton1 = document.getElementById("pinkAir1");
const goldenAirButton1 = document.getElementById("goldenAir1");
const redAirButton1 = document.getElementById("redAir1");
const blackAirButton1 = document.getElementById("blackAir1");
const chosenButton = document.getElementById("chosen");
let updatedCookie;
let color = "white";

function white() {
    document.getElementById("donbassAir1").src = "images/Air/air.png";
    document.getElementById("whiteAir1").style.borderColor = "#205dc5";
    color = "white";

    document.getElementById("pinkAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("goldenAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("redAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("blackAir1").style.borderColor = "rgb(218, 218, 218)";
}

function pink() {
    document.getElementById("donbassAir1").src = "images/Air/pink.png";
    document.getElementById("pinkAir1").style.borderColor = "#205dc5";
    color = "pink";

    document.getElementById("whiteAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("goldenAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("redAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("blackAir1").style.borderColor = "rgb(218, 218, 218)";
}

function gold() {
    document.getElementById("donbassAir1").src = "images/Air/golden.png";
    document.getElementById("goldenAir1").style.borderColor = "#205dc5";
    color = "gold";

    document.getElementById("whiteAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("pinkAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("redAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("blackAir1").style.borderColor = "rgb(218, 218, 218)";
}

function red() {
    document.getElementById("donbassAir1").src = "images/Air/PRed.png";
    document.getElementById("redAir1").style.borderColor = "#205dc5";
    color = "red";

    document.getElementById("whiteAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("pinkAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("goldenAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("blackAir1").style.borderColor = "rgb(218, 218, 218)";
}

function black() {
    document.getElementById("donbassAir1").src = "images/Air/black.png";
    document.getElementById("blackAir1").style.borderColor = "#205dc5";
    color = "black";

    document.getElementById("whiteAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("pinkAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("goldenAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("redAir1").style.borderColor = "rgb(218, 218, 218)";
}

whiteAirButton1.onclick = function(){
    white();
}

pinkAirButton1.onclick = function(){
    pink();
}

goldenAirButton1.onclick = function(){
    gold();
}

redAirButton1.onclick = function(){
    red();
}

blackAirButton1.onclick = function(){
    black();
}

chosenButton.onclick = function() {
    let barcode= "";
    barcode+="4";
    let result = "";
    switch (color) {
        case "white": barcode+="0";
        break;
        case "pink": barcode+="3";
        break;
        case "gold": barcode+="4";
        break;
        case "red": barcode+="5";
        break;
        case "black": barcode+="1";
        break;
    }
    if (getCookie("products") == null) {
        setCookie("products","");
    } else {
        result+=getCookie("products");
    }
    
    result+="_";
    result+=barcode;
    setCookie("products", result);
  }