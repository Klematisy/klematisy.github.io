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
const chosenButton = document.getElementById("chosen");

chosenButton.onclick = function() {
    let barcode= "";
    barcode+="05";
    let result = "";
    if (getCookie("products") == null) {
        setCookie("products","");
    } else {
        result+=getCookie("products");
    }
    result+="_";
    result+=barcode;
    setCookie("products", result);
  }