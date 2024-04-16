const delButton = document.getElementById("");

export function myFun(cookie, i, model) {
    for (let j = i; j < i + model; j++) {
        cookie = cookie.replace(cookie[i + 1], "");
    }
    setCookie("product", cookie);
    window.alert("flkasjhdf");
}