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
let updatedCookie;

function white() {
    document.getElementById("donbassAir1").src = "images/Air/air.png";
    document.getElementById("whiteAir1").style.borderColor = "#205dc5";

    document.getElementById("pinkAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("goldenAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("redAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("blackAir1").style.borderColor = "rgb(218, 218, 218)";
}

function pink() {
    document.getElementById("donbassAir1").src = "images/Air/pink.png";
    document.getElementById("pinkAir1").style.borderColor = "#205dc5";

    document.getElementById("whiteAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("goldenAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("redAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("blackAir1").style.borderColor = "rgb(218, 218, 218)";
}

function gold() {
    document.getElementById("donbassAir1").src = "images/Air/golden.png";
    document.getElementById("goldenAir1").style.borderColor = "#205dc5";

    document.getElementById("whiteAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("pinkAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("redAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("blackAir1").style.borderColor = "rgb(218, 218, 218)";
}

function red() {
    document.getElementById("donbassAir1").src = "images/Air/PRed.png";
    document.getElementById("redAir1").style.borderColor = "#205dc5";

    document.getElementById("whiteAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("pinkAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("goldenAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("blackAir1").style.borderColor = "rgb(218, 218, 218)";
}

function black() {
    document.getElementById("donbassAir1").src = "images/Air/black.png";
    document.getElementById("blackAir1").style.borderColor = "#205dc5";

    document.getElementById("whiteAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("pinkAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("goldenAir1").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("redAir1").style.borderColor = "rgb(218, 218, 218)";
}

if (getCookie("Air1") == "whiteAir1") {
    white();
} else if (getCookie("Air1") == "pinkAir1") {
    pink();
} else if (getCookie("Air1") == "goldenAir1") {
    gold();
} else if (getCookie("Air1") == "redAir1") {
    red();
} else if (getCookie("Air1") == "blackAir1") {
    black();
}

whiteAirButton1.onclick = function(){
    white();
    setCookie("Air1", "whiteAir1");
}

pinkAirButton1.onclick = function(){
    setCookie("Air1", "pinkAir1");
    pink();
}

goldenAirButton1.onclick = function(){
    setCookie("Air1", "goldenAir1");
    gold();
}

redAirButton1.onclick = function(){
    setCookie("Air1", "redAir1");
    red();
}

blackAirButton1.onclick = function(){
    setCookie("Air1", "blackAir1");
    black();
}