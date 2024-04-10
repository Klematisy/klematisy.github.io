
const comp = document.getElementById("compressor");
const cab = document.getElementById("cabble");

comp.onclick = function(){
    
    if (document.getElementById("compressor").style.borderColor == "rgb(32, 93, 197)") {
        document.getElementById("compressor").style.borderColor = "rgb(218, 218, 218)";
    } else {
        document.getElementById("compressor").style.borderColor = "rgb(32, 93, 197)";
    }
}

cab.onclick = function(){
    if (document.getElementById("cabble").style.borderColor == "rgb(32, 93, 197)") {
        document.getElementById("cabble").style.borderColor = "rgb(218, 218, 218)";
    } else {
        document.getElementById("cabble").style.borderColor = "rgb(32, 93, 197)";
    }
}