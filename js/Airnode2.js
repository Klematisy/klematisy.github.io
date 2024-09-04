function setCookie(name, value) {
    updatedCookie2 = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    document.cookie = updatedCookie2;
  }

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

const whiteAirButton2 = document.getElementById("whiteAir2");
const pinkAirButton2 = document.getElementById("pinkAir2");
const goldenAirButton2 = document.getElementById("goldenAir2");
const redAirButton2 = document.getElementById("redAir2");
const blackAirButton2 = document.getElementById("blackAir2");
const chosenButton2 = document.getElementById("chosen");
let updatedCookie2;
let color2 = "white";

function white1() {
    color2 = "white"
    document.getElementById("donbassAir2").src = "../images/Air/air.png";
    document.getElementById("whiteAir2").style.borderColor = "#205dc5";

    document.getElementById("pinkAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("goldenAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("redAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("blackAir2").style.borderColor = "rgb(218, 218, 218)";
}

function pink1() {
    color2 = "pink";
    document.getElementById("donbassAir2").src = "../images/Air/pink.png";
    document.getElementById("pinkAir2").style.borderColor = "#205dc5";

    document.getElementById("whiteAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("goldenAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("redAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("blackAir2").style.borderColor = "rgb(218, 218, 218)";
}

function gold1() {
    color2 = "gold";
    document.getElementById("donbassAir2").src = "../images/Air/golden.png";
    document.getElementById("goldenAir2").style.borderColor = "#205dc5";

    document.getElementById("whiteAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("pinkAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("redAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("blackAir2").style.borderColor = "rgb(218, 218, 218)";
}

function red1() {
    color2 = "red";
    document.getElementById("donbassAir2").src = "../images/Air/PRed.png";
    document.getElementById("redAir2").style.borderColor = "#205dc5";

    document.getElementById("whiteAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("pinkAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("goldenAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("blackAir2").style.borderColor = "rgb(218, 218, 218)";
}

function black1() {
    color2 = "black";
    document.getElementById("donbassAir2").src = "../images/Air/black.png";
    document.getElementById("blackAir2").style.borderColor = "#205dc5";

    document.getElementById("whiteAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("pinkAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("goldenAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("redAir2").style.borderColor = "rgb(218, 218, 218)";
}

whiteAirButton2.onclick = function(){
    white1();
}

pinkAirButton2.onclick = function(){
    pink1();
}

goldenAirButton2.onclick = function(){
    gold1();
}

redAirButton2.onclick = function(){
    red1();
}

blackAirButton2.onclick = function(){
    black1();
}

chosenButton2.onclick = function() {
    let barcode= "";
    barcode+="5";
    let result = "";
    switch (color2) {
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
    location.reload();
  }