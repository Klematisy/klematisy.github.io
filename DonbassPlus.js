
const rad = document.getElementById("radiator");
const cab = document.getElementById("cabble");
const shelf = document.getElementById("shelves");
const comp = document.getElementById("compressor");

rad.onclick = function(){
    
    if (document.getElementById("radiator").style.borderColor == "rgb(32, 93, 197)") {
        document.getElementById("radiator").style.borderColor = "rgb(218, 218, 218)";
    } else {
        document.getElementById("radiator").style.borderColor = "rgb(32, 93, 197)";
    }
}

cab.onclick = function(){
    if (document.getElementById("cabble").style.borderColor == "rgb(32, 93, 197)") {
        document.getElementById("cabble").style.borderColor = "rgb(218, 218, 218)";
    } else {
        document.getElementById("cabble").style.borderColor = "rgb(32, 93, 197)";
    }
}

shelf.onclick = function(){
    if (document.getElementById("shelves").style.borderColor == "rgb(32, 93, 197)") {
        document.getElementById("shelves").style.borderColor = "rgb(218, 218, 218)";
    } else {
        document.getElementById("shelves").style.borderColor = "rgb(32, 93, 197)";
    }
}

comp.onclick = function(){
    if (document.getElementById("compressor").style.borderColor == "rgb(32, 93, 197)") {
        document.getElementById("compressor").style.borderColor = "rgb(218, 218, 218)";
    } else {
        document.getElementById("compressor").style.borderColor = "rgb(32, 93, 197)";
    }
}
