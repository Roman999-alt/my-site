<?php
if($_POST){
  $token = "8440870990:AAFc8eim67c5M7_jhFvDQAF0zmvygdc3GLc";
  $chat_id = "5058136349";

  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $service = $_POST['service'];
  $comment = $_POST['comment'];

  $text = "🔥 Новая заявка с сайта\n\n";
  $text .= "👤 Имя: $name\n";
  $text .= "📞 Телефон: $phone\n";
  $text .= "🐜 Проблема: $service\n";
  $text .= "📍 Адрес: $comment";

  $url = "https://api.telegram.org/bot$token/sendMessage";

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query(['chat_id'=>$chat_id,'text'=>$text]));
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  $result = curl_exec($ch);
  curl_close($ch);

  echo $result; // для отладки можно смотреть ответ Telegram
}
?>