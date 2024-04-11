const truncateDecimal = (num, decimalPlaces) => {
    const factor = Math.pow(10, decimalPlaces);
    return Math.trunc(num * factor) / factor;
};

const comp = document.getElementById("compressor");
const cab = document.getElementById("cabble");
let priceMini = + document.getElementById("priceMini").textContent;

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