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

const truncateDecimal = (num, decimalPlaces) => {
    const factor = Math.pow(10, decimalPlaces);
    return Math.trunc(num * factor) / factor;
};

const comp = document.getElementById("compressor");
const fash = document.getElementById("fashion");
const chosenButton = document.getElementById("chosen");
let price = + document.getElementById("priceSE").textContent;

comp.onclick = function(){
    if (document.getElementById("compressor").style.borderColor == "rgb(32, 93, 197)") {
        document.getElementById("compressor").style.borderColor = "rgb(218, 218, 218)";
        document.getElementById("compressorPrice").textContent = " + $500.00";

        document.getElementById("priceSE").textContent = String(price - 500);
        price = + document.getElementById("priceSE").textContent;
    } else {
        document.getElementById("priceSE").textContent = String(500 + price);
        price = + document.getElementById("priceSE").textContent;

        document.getElementById("compressorPrice").textContent = " - $500.00";
        document.getElementById("compressor").style.borderColor = "rgb(32, 93, 197)";
    }
    document.getElementById("creditSE").textContent = String(truncateDecimal(price / 24, 2));
}

fash.onclick = function(){
    if (document.getElementById("fashion").style.borderColor == "rgb(32, 93, 197)") {
        document.getElementById("fashion").style.borderColor = "rgb(218, 218, 218)";
        document.getElementById("fashionPrice").textContent = " + $800.00";

        document.getElementById("priceSE").textContent = String(price - 800);
        price = + document.getElementById("priceSE").textContent;
    } else {
        document.getElementById("priceSE").textContent = String(800 + price);
        price = + document.getElementById("priceSE").textContent;

        document.getElementById("fashionPrice").textContent = " - $800.00";
        document.getElementById("fashion").style.borderColor = "rgb(32, 93, 197)";
    }
    document.getElementById("creditSE").textContent = String(truncateDecimal(price / 24, 2));
}

chosenButton.onclick = function() {
    let barcode= "";
    barcode+="30";
    if (document.getElementById("compressor").style.borderColor == "rgb(32, 93, 197)") {
        barcode+="K";
    } else {
        barcode+="0";
    }
    if (document.getElementById("fashion").style.borderColor == "rgb(32, 93, 197)") {
        barcode+="F";
    } else {
        barcode+="0";
    }
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