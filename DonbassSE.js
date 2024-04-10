
const comp = document.getElementById("compressor");
const fash = document.getElementById("fashion");

comp.onclick = function(){
    if (document.getElementById("compressor").style.borderColor == "rgb(32, 93, 197)") {
        document.getElementById("compressor").style.borderColor = "rgb(218, 218, 218)";
    } else {
        document.getElementById("compressor").style.borderColor = "rgb(32, 93, 197)";
    }
}

fash.onclick = function(){
    if (document.getElementById("fashion").style.borderColor == "rgb(32, 93, 197)") {
        document.getElementById("fashion").style.borderColor = "rgb(218, 218, 218)";
    } else {
        document.getElementById("fashion").style.borderColor = "rgb(32, 93, 197)";
    }
}