<?php
//mengeset error handler ke fungsi "error_handler"
set_error_handler('error_handler', E_ALL);
//ini fungsi error_handler nya
function error_handler($errNo, $errStr, $errFile, $errLine){
	//bersihkan semua output kalau ada
	if(ob_get_length()) ob_clean();
	//output kan pesan error 
	$error_message = 'ERRNO: '.$errNo.chr(10).'TEXT: '.$errStr.chr(10).'LOCATION: '.$errFile.', line '.$errLine;
	echo $error_message;
	//mencegah eksekusi script lebih lanjut
	exit;
}