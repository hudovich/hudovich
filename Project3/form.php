<?php
$userId = '5151144363'; // Id телеграм аккаунта, куда отправлять сообщения
$token = '5451696031:AAGh6PAdFtthx2GOzbtekmuOONge2765JwY'; // Token бота, если что - он ненастоящий :)

$user_name = ' ('.$_POST["call_user"].')'; // Скобки для красоты, мне так удобнее
$user_first = $_POST["first_user"]; // Данные с поля "контакт пользователя"
$user_contact = $_POST["us_contact"]; // Данные с поля "контакт пользователя"
$user_email = $_POST["us_email"]; // Данные с поля "контакт пользователя"
$user_text = $_POST["mymes"]; // Текст сообщения

//if (!empty($user_contact) and !empty($user_text)) { // Если поля "контакт" и "текст" не пусты. Дополнительная проверка при обработке формы (если будут боты слать запросы)
	$msg = '*Заявка с сайта* '; // Делаем первую строку "жирной". Переводы строки для удобства в телеграме.
	$msg .= $user_contact." Имя: ".$user_name." Фамилия: ".$user_first." Емейл: ".$user_email; // Добавляем в текст поле "контакт" и имя
	$msg .= ' пишет: '.$user_text; // Добавляем текст сообщения. Перевод строки опять же для удобства


file_get_contents('https://api.telegram.org/bot'. $token .'/sendMessage?chat_id='. $userId .'&text=' . urlencode($msg) . '&parse_mode=markdown');  // Отправляем запрос. Разметка - markdown

	echo "
		<div class=\"form_ok_style\">
		<strong>Спасибо, мы получили Ваше сообщение.</strong>
		<a href=\"index.html\">ВЕРНУТСЯ НА СТРАНИЦУ</a>
		</div>
		<style>
			.safari{
				display: none;
			}

			.form_ok_style{
				display: flex;
				flex-direction:column;
				position: absolute;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 100%;
				left: 0px;
				top: 0px;
				right: 0px;
				background: #162834;
			}
			.form_ok_style strong{
				margin: 0px auto;
				color:#D77B37;
				font-size: 55px;
			}
			.form_ok_style a{
				color: #fff;
				padding:10px 25px;
				border-radius: 12px;
				 text-decoration: none;
				background:#D77B37;
			}
		</style>
	"; // Выводим сообщение что заявка ушла
//}
?>