<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta charset="ASCII">
        <link rel="stylesheet" type="text/css" href="file.css">
    </head>

    <body>

        <script>
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

            if (getCookie("inAccount") == "true") {
                window.location.href = 'account.php';
            }
        </script>

        <?php
            $mail = $_GET["email"];
            $uname = $_GET["username"];
            $pass = $_GET["password"];
            $re_pass = $_GET["password_retry"];
            $bus_prod = $_COOKIE['products'];

            $mysql = new mysqli("localhost", "root", "", "site_history");
            $mysql->query("SET NAMES utf8");

            $sql = "SHOW TABLES LIKE 'users'";
            $result = $mysql->query($sql);    
            
            // $_SESSION['name'] = "12";

            if ($result->num_rows > 0) {
                //echo "Таблица существует в базе данных.";
                if (($pass == $re_pass) && ($pass != "")) {
                    $mysql->query("INSERT INTO `users` (`name`, `email`, `password`, `basket`) VALUES('$uname', '$mail', '$pass', '$bus_prod')");
                    setcookie("inAccount", "true");
                    setcookie("email", $mail);
                    // echo "Таблица существует в базе данных.lkfdjlkfjasdklfjkladsjflkasdjf ";
                }
            } else {
                if ($mysql->connect_error) { 
                    echo "Error Number:".$mysql->connect_errno."<br>";
                    echo "Error:".$mysql->connect_error;
                } else {
                    // echo "Host info: ".$mysql->host_info;
                    $mysql->query("CREATE TABLE `users` (
                        id INT(11) NOT NULL AUTO_INCREMENT,
                        name VARCHAR(60) NOT NULL,
                        email VARCHAR(60) NOT NULL,
                        password VARCHAR(60) NOT NULL,
                        basket VARCHAR(60) NOT NULL,
                        PRIMARY KEY(id)
                    )");
                }
            }
            $mysql->close();

            $mail = NULL;
            $uname = NULL;
            $pass = NULL;
            $re_pass = NULL;
            $bus_prod = NULL;
        ?>

        <header class="header">
            <nav class="navbar">
                <a href="index.html"><img class="logo" src="images/CoalLogo.png"></a>
                <a href="Donbass_X.html" style="padding: 4px;">DonBass</a>
                <a href="Donbass_Air.html" style="padding: 4px;">DonBass Air</a>
                <a href="catalog.html" style="padding: 4px;">Поддержка</a>
                <a href="magazin.html" style="padding: 4px">Магазин</a>
                <a href="director.html" style="padding: 4px">Директор</a>
                <a href="basket.php"><img class="logo" src="images/корзина.png"></a>
                <a href="account.php"><img style="width: 3wh; height: 3vh;" src="images/user-profile-black.png"></a>
            </nav>
            <nav class="navbar-under" style="font-size: 60%;">
                <b>Зарегистрируйте аккаунт для быстрого пользования магазином.</b>
            </nav>
        </header>

        <div class="main" style="padding-top: 5%; padding-left: 30%; padding-right: 30%; padding-bottom: 26%">
            <div class="Span12" style="text-align: center;">
                <p style="font-size: 75%;">
                    Создайте аккаунт Coal Store
                </p>
                <form action="registration.php" method="get">
                    <div class="form__group field" style="left: 26%; padding-bottom: 5%;">
                        <input type="input" class="form__field" placeholder="Name" name="email" id='name1' required />
                        <label for="name" class="form__label">Ваша электронная почта</label>
                    </div>

                    <div class="form__group field" style="left: 26%; padding-bottom: 5%;">
                        <input type="text" class="form__field" placeholder="Name" name="username" id='name2' required />
                        <label for="name" class="form__label">Ваш ник</label>
                    </div>
                    
                    <div class="form__group field" style="left: 26%; padding-bottom: 5%;">
                        <input type="password" class="form__field" placeholder="Name" name="password" id='pass' required />
                        <label for="name" class="form__label">Придумайте пароль</label>
                    </div>

                    <div class="form__group field" style="left: 26%; padding-bottom: 5%;">
                        <input type="password" class="form__field" placeholder="Name" name="password_retry" id='pass_retry' required />
                        <label for="name" class="form__label">Повторите пароль</label>
                    </div>
                    <script src="registration.js"></script>
                    <button type="sumbit" class="button button3">Создать</button>
                    <!-- <input id="create" class="button button3" type="submit" value="Создать"> -->
                </form>
            </div>
        </div>

        <footer>
            <p> Стоимость обмена зависит от состояния, года выпуска и конфигурации вашего устройства, 
                на которое распространяется действие программы обмена. Не на все устройства можно получить кредит. 
                Вам должно быть не менее 18 лет, чтобы получить право на обмен в обмен на кредит или подарочную карту Coal. 
                Компенсационная стоимость может быть использована при покупке нового устройства, отвечающего требованиям, или добавлена к подарочной карте Coal. 
                Фактическая стоимость указана на основании получения устройства, соответствующего описанию, указанному при расчете. 
                Налог с продаж может быть начислен на полную стоимость покупки нового устройства. 
                Для обмена в магазине необходимо предъявить действительное удостоверение личности с фотографией (местное законодательство может требовать сохранения этой информации). 
                Предложение может быть доступно не во всех магазинах и может отличаться в зависимости от того, осуществляется ли обмен в магазине или через Интернет. 
                В некоторых магазинах могут быть установлены дополнительные требования. 
                Coal или его партнеры по обмену оставляют за собой право отказать в любой сделке по обмену или ограничить ее количество по любой причине. 
                Более подробную информацию о обмене и утилизации подходящих устройств можно получить у партнера Coal по обмену.
                Могут применяться ограничения.<br><br>
                Доступно в России на сайте coal.ru, в приложении Coal store и в магазинах Coal Store.
                Чтобы получить доступ и использовать все функции и продукты DCard, доступные только пользователям DCard, 
                вы должны добавить DCard в Wallet на сотовом телефоне. 
                Карта DCard подлежит одобрению при оформлении, доступна только для квалифицированных заявителей в 
                Российской Федерации и выпущена Центральным банком в Российской Федерации, филиалом в городе Воронеже.
                <br><br>Узнайте больше о том, как оцениваются заявки на DCard, на сайте support.coal.ru/kb/HT209218.
                Для DCloud+ требуется подписка.
                </p>
            <hr>
            <div class="end">
                <div><a href="magazin.html" style="color: black;">Магазин</a></div>
                <div><a href="catalog.html" style="color: black;">Товары</a></div>
                <div><a href="director.html" style="color: black;">Директор</a></div>
                <div><a href="human.html" style="color: black;">Пользовательское соглашение</a></div>
                <div><a href="" style="color: black;">Инструкции по эксплуатации</a></div>
                <div><a href="https://www.apple.com/" target="_blank" style="color: black;">Спонсор</a></div>
            </div>
            <hr>
            <p>Copyright © 2024 Coal Inc. Все права защищены.</p>
        </footer>
    </body>
</html>