
const blackXButton = document.getElementById("blackX");
const spaceXButton = document.getElementById("spaceX");
const whiteXButton = document.getElementById("whiteX");

blackXButton.onclick = function(){
    document.getElementById("donbassX").src = "images/DonbassXBlack.png";
    document.getElementById("blackX").style.borderColor = "#205dc5";

    document.getElementById("spaceX").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("whiteX").style.borderColor = "rgb(218, 218, 218)";
}

spaceXButton.onclick = function(){
    document.getElementById("donbassX").src = "images/DonbassJetBlack.png";
    document.getElementById("spaceX").style.borderColor = "#205dc5";

    document.getElementById("whiteX").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("blackX").style.borderColor = "rgb(218, 218, 218)";
}

whiteXButton.onclick = function(){
    document.getElementById("donbassX").src = "images/DonbassXFridge.png";
    document.getElementById("whiteX").style.borderColor = "#205dc5";

    document.getElementById("spaceX").style.borderColor = "rgb(218, 218, 218)";
    document.getElementById("blackX").style.borderColor = "rgb(218, 218, 218)";
}