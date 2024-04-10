
const blackXButton = document.getElementById("blackX");
const spaceXButton = document.getElementById("spaceX");
const whiteXButton = document.getElementById("whiteX");

blackXButton.onclick = function(){
    document.getElementById("donbassX").src = "images/DonbassXBlack.png";
}

spaceXButton.onclick = function(){
    document.getElementById("donbassX").src = "images/DonbassJetBlack.png";
}

whiteXButton.onclick = function(){
    document.getElementById("donbassX").src = "images/DonbassXFridge.png";
}