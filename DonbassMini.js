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
const cab = document.getElementById("cabble");
const chosenButton = document.getElementById("chosen");
let priceMini = + document.getElementById("priceMini").textContent;

cab.onclick = function(){
    if (document.getElementById("cabble").style.borderColor == "rgb(32, 93, 197)") {
        document.getElementById("cabble").style.borderColor = "rgb(218, 218, 218)";
        document.getElementById("cabblePrice").textContent = " + $50.00";

        document.getElementById("priceMini").textContent = String(priceMini - 50);
        priceMini = + document.getElementById("priceMini").textContent;
    } else {
        document.getElementById("priceMini").textContent = String(50 + priceMini);
        priceMini = + document.getElementById("priceMini").textContent;
        document.getElementById("cabblePrice").textContent = " - $50.00";

        document.getElementById("cabble").style.borderColor = "rgb(32, 93, 197)";
    }
    document.getElementById("creditMini").textContent = String(truncateDecimal(priceMini / 24, 2));
}

comp.onclick = function(){
    
    if (document.getElementById("compressor").style.borderColor == "rgb(32, 93, 197)") {
        document.getElementById("compressor").style.borderColor = "rgb(218, 218, 218)";
        document.getElementById("compressorPrice").textContent = " + $500.00";

        document.getElementById("priceMini").textContent = String(priceMini - 500);
        priceMini = + document.getElementById("priceMini").textContent;
    } else {
        document.getElementById("priceMini").textContent = String(500 + priceMini);
        priceMini = + document.getElementById("priceMini").textContent;
        document.getElementById("compressorPrice").textContent = " - $500.00";
    
        document.getElementById("compressor").style.borderColor = "rgb(32, 93, 197)";
    }
    document.getElementById("creditMini").textContent = String(truncateDecimal(priceMini / 24, 2));
}

chosenButton.onclick = function() {
    let barcode= "";
    barcode+="2";
    if (document.getElementById("cabble").style.borderColor == "rgb(32, 93, 197)") {
        barcode+="C";
    } else {
        barcode+="0";
    }
    if (document.getElementById("compressor").style.borderColor == "rgb(32, 93, 197)") {
        barcode+="K";
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