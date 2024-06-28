function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
const body = document.body;

function setCookie(name, value) {
    updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    document.cookie = updatedCookie;
  }

const truncateDecimal = (num, decimalPlaces) => {
    const factor = Math.pow(10, decimalPlaces);
    return Math.trunc(num * factor) / factor;
};

var cookie = String(getCookie("products"));

function myFun(i, model) {
    let result = (cookie.slice(0, i) + cookie.slice(i + model + 1, cookie.length))
    setCookie("products", result);
    location.reload();
}

function deleteAllCookies() {
    setCookie("products", '');
    location.reload();
}

let htmlString = `<div class="Span12" style="padding-left: 18%; padding-right: 18%"></div>`;
let last = body.innerHTML;
let s;
let price;
let fridgeName;
let textOfProduct = "";
let model;
let sum = 0;

for (let i = 0; i < cookie.length; i++) {
    if (cookie[i] == "_") {
        switch (cookie[i + 1]) {
            case "0": 
                model = 2;
                fridgeName = "Donbass X";
                switch(cookie[i + 2]) {
                    case "0":
                        s = "images/DonbassXFridge.png";
                        break;
                    case "1":
                        s = "images/DonbassXBlack.png";
                        break;
                    case "2":
                        s = "images/DonbassJetBlack.png";
                        break;
                    case "5":
                        s = "images/DonbassXFridgeRed.png"
                }
                price = 1999;
                sum+=price;
                break;
            case "1": 
                model = 6;
                fridgeName = "Donbass X Plus";
                s = "images/Холодильник31.png";
                price = 2499;
                if (cookie[i + 3] === "R") {
                    textOfProduct += "Улучшенные радиаторы<br>"
                    price+=200;
                }
                if (cookie[i + 4] === "C") {
                    textOfProduct += "Удлинённый кабель питания<br>"
                    price+=50;
                }
                if (cookie[i + 5] === "S") {
                    textOfProduct += "Две дополнительные полочки<br>"
                    price+=300;
                }
                if (cookie[i + 6] === "K") {
                    textOfProduct += "Дополнительная калибровка компресора<br>"
                    price+=500;
                }
                sum+=price;
                break;
            case "2": 
                model = 3;
                price = 799;
                fridgeName = "Donbass X mini";
                s = "images/Холодильник21.png";
                sum+=price;
                break;
            case "3": 
                model = 4;
                price = 1499;
                fridgeName = "Donbass SE 2";
                if (cookie[i + 3] === "K") {
                    textOfProduct += "Дополнительная калибровка компресора<br>";
                    price+=500;
                }
                if (cookie[i + 4] === "F") {
                    textOfProduct += "Полочки типа Fashion";
                    price+=800;
                }
                s = "images/DonbassSE.png";
                sum+=price;
                break;
            case "4": 
                model = 2;
                price = 800;
                fridgeName = "Donbass Air";
                switch (cookie[i + 2]) {
                    case "0":
                        s = "images/Air/air.png";
                        break;
                    case "1":
                        s = "images/Air/black.png";
                        break;
                    case "3":
                        s = "images/Air/pink.png";
                        break;
                    case "4":
                        s = "images/Air/golden.png";
                        break;
                    case "5":
                        s = "images/Air/PRed.png";
                        break;
                }
                sum+=price;
                break;
            case "5": 
                model = 2;
                price = 1000;
                fridgeName = "Donbass Air";
                switch (cookie[i + 2]) {
                    case "0":
                        s = "images/Air/air.png";
                        break;
                    case "1":
                        s = "images/Air/black.png";
                        break;
                    case "3":
                        s = "images/Air/pink.png";
                        break;
                    case "4":
                        s = "images/Air/golden.png";
                        break;
                    case "5":
                        s = "images/Air/PRed.png";
                        break;
                }
                sum+=price;
                break;
        }
        
        htmlString += 
        `<div class="Span12" style="padding-left: 18%; padding-right: 18%">
            <div class="main" style="padding: 3%">
                <div class="Span4">
                    <img style="width: 40%; padding-left: 40%" src=`+ s +`>
                </div>
                <div class="Span8 button-complectation" style="text-align: start">
                    <div>
                        <h3 style="font-size: 100%">` + fridgeName +`</h3>
                        <p style="font-size: 50%; color: rgb(92, 92, 92);">` + textOfProduct + `</p>
                    </div>
                    <div style="text-align: end">
                        <p style="font-size: 100%"><b>$` + price + `.00</b></p>
                        <p style="font-size: 50%">$` + truncateDecimal(price / 12, 2) + `/м.</p>
                        <a id="delete" href="javascript:myFun(`+ String(i) +`,`+ String(model) +`)" style="font-size: 60%; color: #205dc5">Удалить</a>
                    </div>
                </div>
            </div>
            <hr>
        </div>`;
        textOfProduct = "";
        price = 0;
    }

}
if (sum != 0) {
    htmlString += 
            `<div class="Span12" style="padding-left: 18%; padding-right: 18%; text-align: end">
                <div class="main" style="padding-left: 39%">
                    <div class="Span12 final-price" style="padding-bottom: 6%">
                        <div style="text-align: start; padding-right: 10%;">
                            <p style="font-size: 100%">Финальная цена:</p>
                            <p style="font-size: 50%">или DCard кредит:</p>
                            <a href="javascript:deleteAllCookies()" style="font-size: 50%; color: #205dc5">Очистить корзину</a> <!--Удаление cookie-->
                        </div>
                        <div style="text-align: end; padding-right: 20%">
                            <p style="font-size: 100%;"><b>$`+ sum +`.00</p>
                            <p style="font-size: 50%;">$`+ truncateDecimal(sum / 12, 2) +`/м.</b></p>
                            <button class="button button3">Заказать</button>
                        <div>
                    </div>
                </div>
            </div>`;
} else {
    htmlString += 
        `<div class="Span12" style="padding-left: 18%; padding-right: 18%; padding-bottom: 8%; text-align: start">
            <p style="font-size: 300%"><b>Ваша корзина пуста!</b></p>
        </div>`
}

body.innerHTML = last + htmlString;