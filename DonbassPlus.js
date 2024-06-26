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

const rad = document.getElementById("radiator");
const cab = document.getElementById("cabble");
const shelf = document.getElementById("shelves");
const comp = document.getElementById("compressor");
const chosenButton = document.getElementById("chosen");
let pricePlus = + document.getElementById("pricePlus").textContent;

rad.onclick = function(){
    if (document.getElementById("radiator").style.borderColor == "rgb(32, 93, 197)") {
        document.getElementById("priceRadiator").textContent = " + $200.00";
        document.getElementById("radiator").style.borderColor = "rgb(218, 218, 218)";

        document.getElementById("pricePlus").textContent = String(pricePlus - 200);
        pricePlus = + document.getElementById("pricePlus").textContent;
    } else {
        document.getElementById("pricePlus").textContent = String(200 + pricePlus);
        
        pricePlus = + document.getElementById("pricePlus").textContent;

        document.getElementById("priceRadiator").textContent = " - $200.00";
        document.getElementById("radiator").style.borderColor = "rgb(32, 93, 197)";
    }  
    document.getElementById("creditPlus").textContent = String(truncateDecimal(pricePlus / 24, 2));
}

cab.onclick = function(){
    if (document.getElementById("cabble").style.borderColor == "rgb(32, 93, 197)") {
        document.getElementById("priceCabble").textContent = " + $50.00";
        document.getElementById("cabble").style.borderColor = "rgb(218, 218, 218)";

        document.getElementById("pricePlus").textContent = String(pricePlus - 50);
        pricePlus = + document.getElementById("pricePlus").textContent;
    } else {
        document.getElementById("pricePlus").textContent = String(50 + pricePlus);
        pricePlus = + document.getElementById("pricePlus").textContent;

        document.getElementById("priceCabble").textContent = " - $50.00";
        document.getElementById("cabble").style.borderColor = "rgb(32, 93, 197)";
    }
    document.getElementById("creditPlus").textContent = String(truncateDecimal(pricePlus / 24, 2));
}

shelf.onclick = function(){
    if (document.getElementById("shelves").style.borderColor == "rgb(32, 93, 197)") {
        document.getElementById("shelves").style.borderColor = "rgb(218, 218, 218)";
        document.getElementById("priceShelf").textContent = " + $300.00";

        document.getElementById("pricePlus").textContent = String(pricePlus - 300);
        pricePlus = + document.getElementById("pricePlus").textContent;
    } else {
        document.getElementById("pricePlus").textContent = String(300 + pricePlus);
        pricePlus = + document.getElementById("pricePlus").textContent;

        document.getElementById("shelves").style.borderColor = "rgb(32, 93, 197)";
        document.getElementById("priceShelf").textContent = " - $300.00";
    }
    document.getElementById("creditPlus").textContent = String(Math.floor(pricePlus / 24));
}

comp.onclick = function(){
    if (document.getElementById("compressor").style.borderColor == "rgb(32, 93, 197)") {
        document.getElementById("compressor").style.borderColor = "rgb(218, 218, 218)";
        document.getElementById("priceCompressor").textContent = " + $500.00";

        document.getElementById("pricePlus").textContent = String(pricePlus - 500);
        pricePlus = + document.getElementById("pricePlus").textContent;
    } else {
        document.getElementById("pricePlus").textContent = String(500 + pricePlus);
        pricePlus = + document.getElementById("pricePlus").textContent;

        document.getElementById("compressor").style.borderColor = "rgb(32, 93, 197)";
        document.getElementById("priceCompressor").textContent = " - $500.00";
    }
    document.getElementById("creditPlus").textContent = String(truncateDecimal(pricePlus / 24, 2));
}

chosenButton.onclick = function() {
    let barcode= "";
    barcode+="10";
    
    if (document.getElementById("radiator").style.borderColor == "rgb(32, 93, 197)") {
        barcode+="R";
    } else {
        barcode+="0";
    }
    if (document.getElementById("cabble").style.borderColor == "rgb(32, 93, 197)") {
        barcode+="C"
    } else {
        barcode+="0";
    }
    if (document.getElementById("shelves").style.borderColor == "rgb(32, 93, 197)") {
        barcode+="S"
    } else {
        barcode+="0";
    }
    if (document.getElementById("compressor").style.borderColor == "rgb(32, 93, 197)") {
        barcode+="K"
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

