function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

function setCookie(name, value) {
    updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    document.cookie = updatedCookie;
  }
const body = document.body;
let a = document.getElementById("pass").value;
let b = document.getElementById("pass_retry").value;
let htmlString;

// window.location.href = 'index.html';
// window.alert(document.cookie);


const create = document.getElementById("create");

create.onclick = function() {
    alert("Пароли не совпадают!");
    if (a != b) {
        htmlString = `
            <p style="color: red">
                Пароли не совпадают!
                fkjsdkafjlkj
            </p>
        `;

        body.innerHTML += htmlString;
    }
}