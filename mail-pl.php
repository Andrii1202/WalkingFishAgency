<?php
$fio = $_POST['user_name'];
$email = $_POST['user_email'];	
$message = $_POST['user_text'];

$message = htmlspecialchars($message);
$message = urldecode($message);
$message = trim($message);

$to = "walkingfishagency@gmail.com";
$subject = "=?utf-8?B?". base64_encode("Заявка с сайта Walking Fish Agency"). "?=";
$header = "From: office@walkingfishagency.com\n";
$header  = "Content-type: text/html; charset=utf-8 \r\n";
$message = "Имя:\t".$fio."<br/>E-mail:\t".$email."<br/>".$message;

if($fio == NULL or $email == NULL or $message == NULL)
{
  echo 'Вы заполнили не все поля. Пожалуйста вернитесь назад и заполните форму еще раз.';
} else {
	if (mail($to, $subject, $message, $header))
	{     
 		echo "сообщение успешно отправлено"; 
		header('location: index-pl.html'); //добавить сюда всплывающее окно благодарности
	} else { 
		echo "при отправке сообщения возникла ошибка";
		//добавить сюда всплывающее окно ошибки отправки 
	}
}
?>
