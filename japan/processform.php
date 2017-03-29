<?php

$name = strip_tags($_POST['name']);
$email = strip_tags($_POST['email']);
$msg = strip_tags($_POST['msg']);

$toaddress = "denis.postolenko@gmail.com";
$subject = 'Send';
$mailcontent = "<p><b>Name:</b> $name<br>
				<b>Email:</b> $email<br>
				<b>Message:</b> $msg<br>";
$from_name = "ArtRealty ";
$from_email = "test@d-webmaster.com.ua";

$headers = "MIME-Version: 1.0\r\n";
$headers.= "From: =?utf-8?B?".base64_encode($from_name)."?= <".$from_email.">\r\n";
$headers .= "Content-type: text/html; charset=\"utf-8\"";

mail( $toaddress, "=?utf-8?B?".base64_encode($subject)."?=", $mailcontent, $headers );

echo "<span>Your message was sent! We'll contact you soon.</span>";

?>