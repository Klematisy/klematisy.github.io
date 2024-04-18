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

const blackXButton = document.getElementById("blackX");
const spaceXButton = document.getElementById("spaceX");
const whiteXButton = document.getElementById("whiteX");
var color = "white";

whiteXButton.onclick = function(){
    document.getElementById("donbassX").src = "images/DonbassXFridge.png";
    document.getElementById("whiteX").style.borderColor = "#205dc5";
    color = "white";

    document.getElementById("spaceX").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("blackX").style.borderColor = "rgb(218, 218, 218)";
  }

blackXButton.onclick = function(){
    document.getElementById("donbassX").src = "images/DonbassXBlack.png";
    document.getElementById("blackX").style.borderColor = "#205dc5";
    color = "black";
    
    document.getElementById("spaceX").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("whiteX").style.borderColor = "rgb(218, 218, 218)";
  }

spaceXButton.onclick = function(){
    document.getElementById("donbassX").src = "images/DonbassJetBlack.png";
    document.getElementById("spaceX").style.borderColor = "#205dc5";
    color = "space";

    document.getElementById("whiteX").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("blackX").style.borderColor = "rgb(218, 218, 218)";
  }