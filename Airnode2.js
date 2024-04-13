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
let updatedCookie2;

function white() {
    document.getElementById("donbassAir2").src = "images/Air/air.png";
    document.getElementById("whiteAir2").style.borderColor = "#205dc5";

    document.getElementById("pinkAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("goldenAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("redAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("blackAir2").style.borderColor = "rgb(218, 218, 218)";
}

function pink() {
    document.getElementById("donbassAir2").src = "images/Air/pink.png";
    document.getElementById("pinkAir2").style.borderColor = "#205dc5";

    document.getElementById("whiteAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("goldenAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("redAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("blackAir2").style.borderColor = "rgb(218, 218, 218)";
}

function gold() {
    document.getElementById("donbassAir2").src = "images/Air/golden.png";
    document.getElementById("goldenAir2").style.borderColor = "#205dc5";

    document.getElementById("whiteAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("pinkAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("redAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("blackAir2").style.borderColor = "rgb(218, 218, 218)";
}

function red() {
    document.getElementById("donbassAir2").src = "images/Air/PRed.png";
    document.getElementById("redAir2").style.borderColor = "#205dc5";

    document.getElementById("whiteAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("pinkAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("goldenAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("blackAir2").style.borderColor = "rgb(218, 218, 218)";
}

function black() {
    document.getElementById("donbassAir2").src = "images/Air/black.png";
    document.getElementById("blackAir2").style.borderColor = "#205dc5";

    document.getElementById("whiteAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("pinkAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("goldenAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("redAir2").style.borderColor = "rgb(218, 218, 218)";
}

if (getCookie("Air2") == "whiteAir2") {
    white();
} else if (getCookie("Air2") == "pinkAir2") {
    pink();
} else if (getCookie("Air2") == "goldenAir2") {
    gold();
} else if (getCookie("Air2") == "redAir2") {
    red();
} else if (getCookie("Air2") == "blackAir2") {
    black();
}

whiteAirButton2.onclick = function(){
    white();
    setCookie("Air2", "whiteAir2");
}

pinkAirButton2.onclick = function(){
    setCookie("Air2", "pinkAir2");
    pink();
}

goldenAirButton2.onclick = function(){
    setCookie("Air2", "goldenAir2");
    gold();
}

redAirButton2.onclick = function(){
    setCookie("Air2", "redAir2");
    red();
}

blackAirButton2.onclick = function(){
    setCookie("Air2", "blackAir2");
    black();
}