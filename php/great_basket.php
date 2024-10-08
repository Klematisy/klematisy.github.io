<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta charset="ASCII">
        <link rel="stylesheet" type="text/css" href="../file.css">
    </head>

    <body>
        <?php
            $mysql = new mysqli("localhost", "root", "", "site_history");
            $mysql->query("SET NAMES utf8");

            $sql = "SHOW TABLES LIKE 'users'";
            $result = $mysql->query($sql);

            $basket = $_COOKIE["products"];
            $email = $_COOKIE["email"];

            $mysql->query("UPDATE `users` SET `basket` = '$basket' WHERE `email` = '$email' ");

            setcookie("prod_res", $basket);

            $mysql->close();
        ?>

        <header class="header">
            <nav class="navbar">
            <a href="../html/index.html"><img class="logo" src="../images/CoalLogo.png"></a>
                <a href="../html/Donbass_X.html" style="padding: 4px;">DonBass</a>
                <a href="../html/Donbass_Air.html" style="padding: 4px;">DonBass Air</a>
                <a href="../html/catalog.html" style="padding: 4px;">Поддержка</a>
                <a href="../html/magazin.html" style="padding: 4px">Магазин</a>
                <a href="../html/director.html" style="padding: 4px">Директор</a>
                <a href="basket.php"><img class="logo" src="../images/корзина.png"></a>
                <a href="account.php"><img style="width: 3wh; height: 3vh;" src="../images/user-profile-black.png"></a>
            </nav>
            <nav class="navbar-under">
                <b>DonBass X</b>
            </nav>
        </header>
        <hr>

        <div class="main">
            <div class="Span12" style="padding: 1%; padding-left: 18%; padding-right: 18%; padding-bottom: 5%; font-size: 80%;">
                <h1>Ваш DonBass X был добавлен в корзину!</h1>
                <a href="basket.php" style="font-size: 80%; color: #205dc5">Перейти в корзину</a>
            </div>

            <div class="Span12" style="padding: 1%; padding-left: 14%; padding-right: 14%; padding-bottom: 5%; font-size: 80%;">
                <hr>
            </div>

            <div class="Span12" style="padding: 1%; padding-left: 18%; padding-right: 18%; padding-bottom: 5%; font-size: 80%;">
                <p style="text-align: center;">Также взгляните на другие продукты Coal</p>
            </div>

            <div class="Span12" style="padding-right: 15%; padding-left: 15%; padding-bottom: 5%">
                <div class="main">
                    <div class="Span4 product_field" style="font-size: 50%; padding: 5%; ">
                        <p style="text-align: center;"><img src="../images/Холодильник21.png" style="width: 50%;">
                            <br><br><b>DonBass X Mini</b><br><br>
                            
                        <hr>
                        <p class="info">
                            <b style="text-align: center;">Coal Trade In</b>
                            <br><br>Возьмите кредит на новый Donbass, когда обмениваете его на прошлую версию. 
                            Это даст вам скидку, в зависимости от сданной техники. Либо вы можете сами 
                            заняться переработкой устройств<br><br>
                        </p>
                        <div style="text-align: center;">
                            <a href="DonbassMini.html"><button class="button button4">Подробнее</button></a>
                        </div>
                    </div>

                    <div class="Span4 product_field" style="font-size: 50%; padding: 5%; ">
                        <p style="text-align: center; font-size: 100%; padding-bottom: 1.5%;"><img src="../images/Air/air.png" style="width: 54%;">
                            <br><br><b>DonBass Air</b><br><br>
                        </p>

                        <hr>

                        <p class="info">
                            
                            <b>Coal Trade In</b>
                            <br><br>Возьмите кредит на новый Donbass, когда обмениваете его на прошлую версию. 
                            Это даст вам скидку, в зависимости от сданной техники. Либо вы можете сами 
                            заняться переработкой устройств<br><br>
                        </p>    
                        <div style="text-align: center;">
                            <a href="DonbassAir2.html"><button class="button button4">Подробнее</button></a>
                        </div>
                    </div>

                    <div class="Span4 product_field" style="font-size: 50%; padding: 5%; ">
                        <p style="text-align: center; padding-bottom: 1%;"><img src="../images/DonbassSE.png" style="width: 37.5%;">
                            <br><br><b>Donbass SE 2</b><br><br>
                        </p>
                    
                        <hr>
                        <p class="info">
                            <b>Coal Trade In</b>
                            <br><br>Возьмите кредит на новый Donbass, когда обмениваете его на прошлую версию. 
                            Это даст вам скидку, в зависимости от сданной техники. Либо вы можете сами 
                            заняться переработкой устройств<br><br>
                        </p>
                        <div style="text-align: center;">
                            <a href="DonbassSE.html"><button class="button button4">Подробнее</button></a>
                        </div>
                    </div>
                </div>
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