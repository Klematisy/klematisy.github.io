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

function white1() {
    document.getElementById("donbassAir2").src = "images/Air/air.png";
    document.getElementById("whiteAir2").style.borderColor = "#205dc5";

    document.getElementById("pinkAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("goldenAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("redAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("blackAir2").style.borderColor = "rgb(218, 218, 218)";
}

function pink1() {
    document.getElementById("donbassAir2").src = "images/Air/pink.png";
    document.getElementById("pinkAir2").style.borderColor = "#205dc5";

    document.getElementById("whiteAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("goldenAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("redAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("blackAir2").style.borderColor = "rgb(218, 218, 218)";
}

function gold1() {
    document.getElementById("donbassAir2").src = "images/Air/golden.png";
    document.getElementById("goldenAir2").style.borderColor = "#205dc5";

    document.getElementById("whiteAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("pinkAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("redAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("blackAir2").style.borderColor = "rgb(218, 218, 218)";
}

function red1() {
    document.getElementById("donbassAir2").src = "images/Air/PRed.png";
    document.getElementById("redAir2").style.borderColor = "#205dc5";

    document.getElementById("whiteAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("pinkAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("goldenAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("blackAir2").style.borderColor = "rgb(218, 218, 218)";
}

function black1() {
    document.getElementById("donbassAir2").src = "images/Air/black.png";
    document.getElementById("blackAir2").style.borderColor = "#205dc5";

    document.getElementById("whiteAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("pinkAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("goldenAir2").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("redAir2").style.borderColor = "rgb(218, 218, 218)";
}

if (getCookie("Air2") == "whiteAir2") {
    white1();
} else if (getCookie("Air2") == "pinkAir2") {
    pink1();
} else if (getCookie("Air2") == "goldenAir2") {
    gold1();
} else if (getCookie("Air2") == "redAir2") {
    red1();
} else if (getCookie("Air2") == "blackAir2") {
    black1();
}

whiteAirButton2.onclick = function(){
    white1();
    setCookie("Air2", "whiteAir2");
}

pinkAirButton2.onclick = function(){
    setCookie("Air2", "pinkAir2");
    pink1();
}

goldenAirButton2.onclick = function(){
    setCookie("Air2", "goldenAir2");
    gold1();
}

redAirButton2.onclick = function(){
    setCookie("Air2", "redAir2");
    red1();
}

blackAirButton2.onclick = function(){
    setCookie("Air2", "blackAir2");
    black1();
}